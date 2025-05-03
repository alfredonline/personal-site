"use client";
import { SingleProject } from "./Project";
import { projectsConfig, getProject, ProjectSlug } from "@/constants/projectsConfig";

export const ProjectsPage = () => {
  const projects = Object.keys(projectsConfig)
    .map((slug) => getProject(slug as ProjectSlug))
    .sort((a, b) => {
      if (a.category === 'web' && b.category === 'rust') return -1;
      if (a.category === 'rust' && b.category === 'web') return 1;
      return 0;
    });

  return (
    <div className="grid gap-8">
      {projects.map((project) => (
        <SingleProject key={project.slug} project={project} />
      ))}
    </div>
  );
};
