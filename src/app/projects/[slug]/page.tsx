import { Container } from "@/components/Container";
import { SingleProject } from "@/components/Project";
import { projects } from "@/constants/projects";
import { Project } from "@/types/projects";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { NAME } from "../../../../config";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const project = projects.find((p: Project) => p.slug === slug) as Project | undefined;
  if (project) {
    return {
      title: project.title,
      description: project.description,
    };
  } else {
    return {
      title: `Projects | ${NAME}`,
      description: `${NAME} is a software engineer and bootcamp instructor.`,
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProject project={project} />
    </Container>
  );
}
