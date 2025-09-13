import Image from "next/image";
import { FeaturedProject } from "@/constants/featuredProjects";
import { ExternalLink } from "lucide-react";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
}

export const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'development':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'planned':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'language-learning':
        return '🌍';
      case 'ai-tools':
        return '🤖';
      default:
        return '💻';
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-200">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
            {project.status === 'live' ? 'Live' : project.status === 'development' ? 'In Development' : 'Planned'}
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <span className="text-xl">{getCategoryIcon(project.category)}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-center">
                <span className="w-1 h-1 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-xs text-gray-500">
                +{project.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        <div className="flex justify-center">
          {project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              View Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
