import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: "Resend API Key is missing in .env.local" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    try {
        const { name, email, subject, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'AMS Portfolio <onboarding@resend.dev>',
            to: ['aispeaksfinance@gmail.com'],
            subject: `New Contact Form Submission: ${subject}`,
            html: `
        <h2>New Message from AMS Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
