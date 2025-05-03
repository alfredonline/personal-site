"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { ProjectsPage } from "@/components/Projects";

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        What I&apos;ve been working on
      </Heading>

      <ProjectsPage />
    </Container>
  );
}
