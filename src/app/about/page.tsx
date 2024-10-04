import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import { NAME } from "../../../config";

import { motion } from "framer-motion";
import About from "@/components/About";

export const metadata: Metadata = {
  title: `About | ${NAME}`,
  description: `${NAME} is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.`,
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
