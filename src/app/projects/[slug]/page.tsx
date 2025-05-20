"use client";;
import { use } from "react";
import { Container } from "@/components/Container";
import { SingleProject } from "@/components/Project";
import { redirect } from "next/navigation";
import { getProject, ProjectSlug } from "@/constants/projectsConfig";

export default function SingleProjectPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = use(props.params);
  const slug = params.slug as ProjectSlug;

  try {
    const project = getProject(slug);
    
    return (
      <Container>
        <SingleProject project={project} isGridMode={false}/>
      </Container>
    );
  } catch {
    redirect("/projects");
  }
}