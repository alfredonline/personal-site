"use client";
import { Project } from "@/types/projects";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { motion } from "motion/react";
import Link from "next/link";

export const SingleProject = ({
  project,
  isGridMode,
}: {
  project: Project;
  isGridMode: boolean;
}) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    project.thumbnail
  );

  // Render the content paragraphs
  const renderContent = () => {
    if (!project.content) return null;

    // If content is an object with paragraph1 and paragraph2
    if (
      typeof project.content === "object" &&
      "paragraph1" in project.content
    ) {
      const content = project.content as {
        paragraph1?: string;
      };
      return (
        <>
          {content.paragraph1 && (
            <Paragraph className="mt-4 text-gray-600">{content.paragraph1}</Paragraph>
          )}
        </>
      );
    }

    // If content is a string or ReactNode
    return project.content;
  };

  if (isGridMode) {
    return (
      <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video">
          <Image
            src={activeImage}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <Heading className="font-black mb-3 text-xl">{project.title}</Heading>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack?.slice(0, 3).map((stack: string, idx: number) => (
              <span
                key={stack + idx}
                className="text-xs bg-gray-50 px-2 py-1 rounded-sm text-gray-600"
              >
                {stack}
              </span>
            ))}
            {project.stack && project.stack.length > 3 && (
              <span className="text-xs bg-gray-50 px-2 py-1 rounded-sm text-gray-600">
                +{project.stack.length - 3} more
              </span>
            )}
          </div>

          <Paragraph className="text-sm text-gray-600 line-clamp-3 mb-4">
            {project.description}
          </Paragraph>

          {project.metrics?.impact && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 line-clamp-2">
                {project.metrics.impact}
              </p>
            </div>
          )}

          <div className="flex flex-row gap-2 mt-auto">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 origin-left"
            >
              Full details
            </Link>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition border border-gray-200 bg-transparent text-gray-500 hover:bg-gray-50 sm:backdrop-blur-sm group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 text-sm font-medium px-4 py-2 origin-left"
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
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
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
        <Heading className="font-black mb-3 text-2xl">{project.title}</Heading>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack?.map((stack: string, idx: number) => (
            <span
              key={stack + idx}
              className="text-xs bg-gray-50 px-2 py-1 rounded-sm text-gray-600"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      <div>
        <Paragraph className="text-gray-600 mt-4 max-w-3xl">{project.description}</Paragraph>
      </div>

      <div className="prose prose-sm md:prose-base max-w-none text-gray-600 mt-6">
        {renderContent()}
      </div>

      {project.metrics && (
        <div className="mt-8 space-y-6">
          <Heading as="h3" className="font-black text-lg">
            Impact
          </Heading>
          <div className="grid grid-cols-1 gap-4">
            {project.metrics.impact && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                <p className="text-gray-700">
                  {project.metrics.impact}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-8 origin-left"
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
