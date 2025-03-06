"use client";
import { Container } from "@/components/Container";
import { SingleProject } from "@/components/Project";
import { redirect } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { getProject, ProjectSlug } from "@/constants/projectsConfig";

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { language } = useLanguage();
  const slug = params.slug as ProjectSlug;
  
  try {
    const project = getProject(slug, language);
    
    return (
      <Container>
        <SingleProject project={project} />
      </Container>
    );
  } catch {
    redirect("/projects");
  }
}