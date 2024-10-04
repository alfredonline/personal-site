import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const msg = {
      to: process.env.MY_EMAIL!, // Change to your recipient
      from: process.env.MY_EMAIL!, // Change to your verified sendeFr
      subject: "I am interested in your services",
      text: "I am interested in your services",
      html: `<strong>Name: ${name}</strong> <br/> <strong>Email: ${email}</strong> <br/> <strong>Message: ${message}</strong>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
