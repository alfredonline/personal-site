import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { featuredProjects } from "@/constants/featuredProjects";

export const FeaturedProjects = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {featuredProjects.map((project) => (
        <FeaturedProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
