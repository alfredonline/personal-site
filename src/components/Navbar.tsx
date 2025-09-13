"use client";
import { navlinks } from "@/constants/navlinks";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAME } from "../../config";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navlinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Image
              className="h-8 w-8 rounded-full ring-2 ring-yellow-500 ring-offset-2 transition-transform hover:scale-105"
              src="/images/logos/logo.png"
              alt="Logo"
              width={32}
              height={32}
            />
            <span className="text-lg font-semibold text-gray-900">
              {NAME}WebDev
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navlinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={twMerge(
                  activeSection === item.href
                    ? "text-yellow-600 border-b-2 border-yellow-600"
                    : "text-gray-700 hover:text-yellow-600",
                  "px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent cursor-pointer"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.href + social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-600 transition-all duration-200 hover:scale-110 p-1"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <Badge
              text="Github"
              href="https://github.com/alfredonline"
              className="transition-transform hover:scale-105"
            />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-yellow-600 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-neutral-200"
          >
            <div className="px-4 py-4 space-y-4">
              <div className="space-y-2">
                {navlinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick();
                      // Small delay to ensure menu closes before scrolling
                      setTimeout(() => {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className={twMerge(
                      activeSection === item.href
                        ? "bg-yellow-50 text-yellow-600 border-l-4 border-yellow-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-yellow-600",
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.href + social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-yellow-600 transition-all duration-200 hover:scale-110 p-2"
                        aria-label={social.label}
                      >
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
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
    </nav>
  );
};
