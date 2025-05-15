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
        <span className="font-normal text-yellow-500">👋</span> My name is{" "}
        {NAME}
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack software engineer who enjoys{" "}
        <Highlight>building useful</Highlight> products in the education sector
        for language learners and educators. I also enjoy building AI tools that
        help people improve their productivity and efficiency.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have 3 years of commercial experience working as a{" "}
        <Highlight>full-stack engineer</Highlight> and bootcamp instructor. I
        have extensive experience working with Next.js, React, Node.js/Express,
        MongoDB, PostgreSQL, Nest.js, TypeScript, Docker, and Git as well as
        testing tools like Jest and Cypress. I typically use tools like Prisma
        or Drizzle, Shadcn, TailwindCSS to build most of my projects. I am
        currently learning Rust, Java with Spring Boot and developing my
        knowledge of cloud technologies.
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
