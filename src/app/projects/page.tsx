"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { ProjectsPage } from "@/components/Projects";
import { Metadata } from "next";
import { NAME } from "../../../config";
import { useLanguage } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: `Projects | ${NAME}`,
  description: `${NAME} is a software engineer and bootcamp instructor.`,
};

export default function Projects() {
  const { t } = useLanguage();
  
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {t('projects_title')}
      </Heading>

      <ProjectsPage />
    </Container>
  );
}
