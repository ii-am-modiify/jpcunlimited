import type { APIRoute } from 'astro';
import { siteConfig } from '../../config';

// Lazy load Resend to avoid module-level initialization issues
const getResend = async () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  // Dynamic import to avoid module-level initialization
  const { Resend } = await import('resend');
  return new Resend(apiKey);
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString();
    const message = formData.get('message')?.toString();

    // Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Get recipient email from config or environment
    const recipientEmail = siteConfig.contact.email || process.env.CONTACT_EMAIL;
    
    if (!recipientEmail) {
      console.error('CONTACT_EMAIL not configured');
      return new Response(
        JSON.stringify({ error: 'Contact email not configured. Please set CONTACT_EMAIL environment variable or add email to config.ts' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Email service not configured. Please set RESEND_API_KEY environment variable in Vercel project settings.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Initialize Resend client (lazy loaded)
    const resend = await getResend();

    // Create email content
    const subject = `New Contact Form Submission from ${name} - JPC Unlimited`;
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #D4AF37; color: #0A0A0A; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #D4AF37; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const textBody = `
New Contact Form Submission - JPC Unlimited

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'JPC Unlimited <onboarding@resend.dev>',
      to: recipientEmail,
      replyTo: email,
      subject,
      html: htmlBody,
      text: textBody,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.',
        messageId: data?.id 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred. Please try again later.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

