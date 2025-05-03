"use client";
import { Container } from "@/components/Container";
import { SingleProject } from "@/components/Project";
import { redirect } from "next/navigation";
import { getProject, ProjectSlug } from "@/constants/projectsConfig";

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug as ProjectSlug;
  
  try {
    const project = getProject(slug);
    
    return (
      <Container>
        <SingleProject project={project} />
      </Container>
    );
  } catch {
    redirect("/projects");
  }
}