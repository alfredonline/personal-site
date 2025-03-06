"use client";
import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import { NAME } from "../../../config";
import { useLanguage } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: `Contact | ${NAME}`,
  description: `${NAME} is a software engineer and bootcamp instructor.`,
};

export default function ContactPage() {
  const { t } = useLanguage();
  
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2 mt-2">{t('contact_title')}</Heading>
      <Paragraph className="mb-10 max-w-xl">
        {t('contact_description')}
      </Paragraph>
      <Contact />
    </Container>
  );
}
