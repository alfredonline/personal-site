import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import { NAME } from "../../../config";

export const metadata: Metadata = {
  title: `Contact | ${NAME}`,
  description: `${NAME} is a software engineer and bootcamp instructor.`,
};

export default function ContactPage() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2 mt-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill out this contact form. I will get back
        to you as soon as possible. Do not hesitate to reach out!
      </Paragraph>
      <Contact />
    </Container>
  );
}
