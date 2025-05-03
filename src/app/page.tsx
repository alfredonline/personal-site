"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { ProjectsPage } from "@/components/Projects";
import { NAME } from "../../config";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">
        <span className="font-normal text-yellow-500">👋</span> My name is {NAME}
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack software engineer who enjoys{" "}
        <Highlight>building useful</Highlight> products in the education sector as well as micro SaaS solutions for creators.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have 3 years of commercial experience working as a{" "}
        <Highlight>full-stack engineer</Highlight> and bootcamp instructor. I have extensive experience working with Next.js, React, Node.js/Express, MongoDB, PostgreSQL, TypeScript, Git, and Rust.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Here are some products I&apos;ve built recently.
      </Heading>
      <ProjectsPage />
    </Container>
  );
}
