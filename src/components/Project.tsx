"use client";
import { Project } from "@/types/projects";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const SingleProject = ({ project }: { project: Project }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    project.thumbnail
  );

  // Render the content paragraphs
  const renderContent = () => {
    if (!project.content) return null;
    
    // If content is an object with paragraph1 and paragraph2
    if (typeof project.content === 'object' && 'paragraph1' in project.content) {
      const content = project.content as { paragraph1: string; paragraph2: string };
      return (
        <>
          <Paragraph className="mt-4">{content.paragraph1}</Paragraph>
          {content.paragraph2 && (
            <Paragraph className="mt-4">{content.paragraph2}</Paragraph>
          )}
        </>
      );
    }
    
    // If content is a string or ReactNode
    return project.content;
  };

  return (
    <div className="py-10">
      <motion.div
        initial={{
          opacity: 0,     
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={project.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt={`${project.title} screenshot`}
          height={1000}
          width={1000}
          className="rounded-md object-contain"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>
      
      {project.images.length > 0 && (
        <div className="flex flex-row justify-center my-8 flex-wrap">
          {project.images.map((image, idx) => (
            <button
              onClick={() => setActiveImage(image)}
              key={`image-thumbnail-${idx}`}
            >
              <Image
                src={image}
                alt={`${project.title} thumbnail ${idx + 1}`}
                height={1000}
                width={1000}
                className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-4 border rounded-lg border-neutral-100"
              />
            </button>
          ))}
        </div>
      )}
      
      <div>
        <Heading className="font-black mb-2 pb-1">{project.title}</Heading>
        <div className="flex flex-wrap gap-2 md:mb-1 mt-2 md:mt-0">
          {project.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      <div>
        <Paragraph className="max-w-xl mt-4">{project.description}</Paragraph>
      </div>

      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600 mt-4">
        {renderContent()}
      </div>

      {project.metrics && (
        <div className="mt-8 space-y-6">
          <Heading as="h3" className="font-black text-lg">Impact</Heading>
          <div className="grid grid-cols-1 gap-4">
            {project.metrics.impact && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Impact</h4>
                <p className="text-lg text-gray-700">{project.metrics.impact}</p>
              </div>
            )}
          </div>
        </div>
      )}


      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-6 origin-left"
      >
        View live site
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </a>
    </div>
  );
};
