"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { ProjectsPage } from "@/components/Projects";

export default function Projects() {
  return (
    <Container>
      <Heading className="mb-4 flex items-center gap-2">
        <span className="text-4xl text-primary">⚡</span>
        <span className="font-black"> What I&apos;ve been working on</span>
      </Heading>

      <ProjectsPage />
    </Container>
  );
}
