"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { ProjectsPage } from "@/components/Projects";
import { NAME } from "../../config";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <Container>
      <Heading className="font-black">
        <span className="font-normal text-yellow-500">👋</span>{t('greeting')} {NAME}
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        {t('intro')}{" "}
        <Highlight>{t('building_useful')}</Highlight> {t('products_description')}
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        {t('experience')}{" "}
        <Highlight>{t('full_stack_engineer')}</Highlight> {t('and_instructor')}
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        {t('recent_projects')}
      </Heading>
      <ProjectsPage />
    </Container>
  );
}
