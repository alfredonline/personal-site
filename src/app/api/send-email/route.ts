import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { headers } from "next/headers";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let RateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(
    parseInt(process.env.LIMIT_PER_HOUR!),
    "1h"
  ),
  analytics: true,
});

export async function POST(request: Request) {
  const identifier =
    headers().get("x-forwarded-for") ||
    headers().get("x-real-ip") ||
    headers().get("cf-connecting-ip") ||
    headers().get("client-ip") ||
    "unknown";
  const { success } = await RateLimit.limit(identifier);
  if (!success) {
    return NextResponse.json({ message: "Too many requests" }, { status: 429 });
  }

  try {
    const { name, email, message } = await request.json();

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const msg = {
      to: process.env.MY_EMAIL!,
      from: process.env.MY_EMAIL!,
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
