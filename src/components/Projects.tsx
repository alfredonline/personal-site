"use client";
import { useState } from "react";
import { SingleProject } from "./Project";
import {
  projectsConfig,
  getProject,
  ProjectSlug,
} from "@/constants/projectsConfig";
import { List, Grid, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const ProjectsPage = () => {
  const projects = Object.keys(projectsConfig)
    .map((slug) => getProject(slug as ProjectSlug))
    .sort((a, b) => {
      if (a.category === "web" && b.category === "rust") return -1;
      if (a.category === "rust" && b.category === "web") return 1;
      return 0;
    });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleToggle = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggle}
            disabled={isTransitioning}
            className={twMerge(
              "group relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              viewMode === 'grid'
                ? "bg-gray-900 text-white hover:bg-gray-800" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              isTransitioning && "opacity-50 cursor-not-allowed"
            )}
            aria-label={viewMode === 'grid' ? "Switch to list view" : "Switch to grid view"}
          >
            <span className="flex items-center gap-2">
              {isTransitioning ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : viewMode === 'grid' ? (
                <>
                  <List className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>List View</span>
                </>
              ) : (
                <>
                  <Grid className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>Grid View</span>
                </>
              )}
            </span>
          </button>
          <span className="text-sm text-gray-500">
            {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>
      </div>

      <motion.div
        layout
        className={twMerge(
          "grid gap-8",
          viewMode === 'grid'
            ? "grid-cols-1 md:grid-cols-2" 
            : "grid-cols-1",
          isTransitioning && "pointer-events-none"
        )}
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            layout
            transition={{
              layout: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
          >
            <SingleProject project={project} isGridMode={viewMode === 'grid'} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
