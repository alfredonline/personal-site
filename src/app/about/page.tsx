import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import { NAME } from "../../../config";
import About from "@/components/About";

export const metadata: Metadata = {
  title: `About | ${NAME}`,
  description: `${NAME} is a software engineer and bootcamp instructor.`,
};

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
