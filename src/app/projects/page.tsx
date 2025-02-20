import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { ProjectsPage } from "@/components/Projects";
import { Metadata } from "next";
import Image from "next/image";
import { NAME } from "../../../config";

export const metadata: Metadata = {
  title: `Projects | ${NAME}`,
  description: `${NAME} is a software engineer and bootcamp instructor.`,
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>

      <ProjectsPage />
    </Container>
  );
}
