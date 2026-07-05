import { NextResponse } from 'next/server';

/** Contact form API endpoint */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // In production, integrate with an email service (Resend, SendGrid, etc.)
    // For now, log the submission
    console.log('Contact form submission:', { name, email, subject, message });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
