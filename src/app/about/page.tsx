"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <Container>
      <Heading className="font-black">
        <span className="text-yellow-500 font-normal">💬</span> About Me
      </Heading>
      <About />
    </Container>
  );
}
