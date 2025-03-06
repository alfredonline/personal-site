"use client";
import React, { useState } from "react";
import { Heading } from "./Heading";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projectsConfig, getProject, ProjectSlug, ProjectCategory } from "@/constants/projectsConfig";

export const ProjectsPage = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('web');
  
  const projects = Object.keys(projectsConfig)
    .map((slug) => getProject(slug as ProjectSlug, language))
    .filter(project => project.category === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveCategory('web')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeCategory === 'web'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveCategory('rust')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeCategory === 'rust'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Rust Projects
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={project.slug ? `/projects/${project.slug}` : project.href}
              target={project.slug ? undefined : "_blank"}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            >
              <Image
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                className="rounded-md object-cover"
                width={200}
                height={200}
              />
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg"
                  >
                    {project.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {project.description}
                  </Paragraph>
                </div>
                <div className="flex flex-wrap gap-2 md:mb-1 mt-2">
                  {project.stack?.map((stack) => (
                    <span
                      key={stack}
                      className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
