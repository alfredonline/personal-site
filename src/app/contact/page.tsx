import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import { NAME } from "../../../config";

export const metadata: Metadata = {
  title: `Contact | ${NAME}`,
  description:
    `${NAME} is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.`,
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2 mt-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back
        to you.
      </Paragraph>
      <Contact />
    </Container>
  );
}
