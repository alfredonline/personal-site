"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import { NAME } from "../../../config";
import About from "@/components/About";
import { useLanguage } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: `About | ${NAME}`,
  description: `${NAME} is a software engineer and bootcamp instructor.`,
};

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <Container>
      <Heading className="font-black">
        <span className="text-yellow-500 font-normal">💬</span> {t('about_me')}
      </Heading>
      <About />
    </Container>
  );
}
