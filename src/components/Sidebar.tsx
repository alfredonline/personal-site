"use client";
import { navlinks } from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { isMobile } from "@/lib/utils";
import { NAME } from "../../config";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Set initial state based on screen size
  useEffect(() => {
    setOpen(!isMobile());
  }, []);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setOpen(!isMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when clicking on a link on mobile
  const handleLinkClick = () => {
    if (isMobile()) {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      <AnimatePresence>
        {open && isMobile() && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={twMerge(
              "fixed top-0 left-0 z-50 h-full",
              "lg:relative lg:translate-x-0 lg:top-2 lg:h-[600px]",
              "w-80 lg:w-72", // Wider on mobile for better touch targets
              "bg-white border-r border-neutral-200",
              "lg:rounded-md lg:rounded-tl-xl",
              "border border-transparent lg:border-neutral-200",
              "shadow-xl lg:shadow-none" // Add shadow on mobile
            )}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex h-20 shrink-0 items-center justify-between border-b border-neutral-200 px-6">
                <div className="flex items-center gap-3">
                  <Image
                    className="h-10 w-10 rounded-full ring-2 ring-yellow-500 ring-offset-2 transition-transform hover:scale-105"
                    src="/images/logos/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                  <span className="text-lg font-semibold text-gray-900">
                    {NAME}
                  </span>
                </div>
                {/* Close button for mobile */}
                <button
                  onClick={() => setOpen(false)}
                  className="lg:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close sidebar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="flex flex-col h-full">
                  <ul role="list" className="flex flex-col gap-y-6">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navlinks.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={handleLinkClick}
                              className={twMerge(
                                pathname === item.href
                                  ? "bg-black text-white"
                                  : "text-gray-700 hover:text-white hover:bg-black",
                                "group flex gap-x-3 rounded-lg p-3 lg:p-2.5 text-sm leading-6 font-medium transition-all duration-200",
                                "touch-manipulation" // Better touch handling
                              )}
                            >
                              <item.icon
                                className={twMerge(
                                  pathname === item.href
                                    ? "text-white"
                                    : "text-gray-400 group-hover:text-white",
                                  "h-6 w-6 shrink-0 transition-colors duration-200"
                                )}
                                aria-hidden="true"
                              />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Footer */}
              <div className="shrink-0 border-t border-neutral-200 px-6 py-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <Heading className="text-sm font-medium leading-6 text-gray-900">
                      Socials
                    </Heading>
                    <div className="flex gap-4">
                      {socials.map((social) => (
                        <a
                          key={social.href + social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-yellow-600 transition-all duration-200 hover:scale-110 p-2 -m-2" // Better touch target
                          aria-label={social.label}
                        >
                          <social.icon className="h-6 w-6" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <Badge
                    text="Github"
                    href="https://github.com/alfredonline"
                    className="transition-transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(!open)}
        className={twMerge(
          "fixed top-4 z-50 rounded-lg bg-white p-2 text-gray-400 shadow-md",
          "hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200",
          "lg:hidden",
          open ? "right-4" : "right-4" // Keep consistent positioning
        )}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    </>
  );
};
