"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { ProjectsPage } from "@/components/Projects";
import { useLanguage } from "@/context/LanguageContext";

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
