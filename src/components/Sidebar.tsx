"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";
import { NAME } from "../../config";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // Set initial state based on screen size
  useEffect(() => {
    setOpen(!isMobile());
  }, []);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setOpen(!isMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          className="fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-neutral-200 shadow-lg lg:relative lg:translate-x-0"
        >
          <div className="flex h-full flex-col">
            <div className="flex h-20 shrink-0 items-center border-b border-neutral-200 px-6">
              <div className="flex items-center gap-3">
                <Image
                  className="h-10 w-10 rounded-full ring-2 ring-yellow-500 ring-offset-2"
                  src="/images/logos/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-lg font-semibold text-gray-900">{NAME}</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <nav className="flex flex-col h-full">
                <ul role="list" className="flex flex-col gap-y-6">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navlinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={twMerge(
                              pathname === item.href
                                ? "bg-black text-white"
                                : "text-gray-700 hover:text-white hover:bg-black",
                              "group flex gap-x-3 rounded-lg p-2.5 text-sm leading-6 font-medium transition-colors duration-200"
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
            <div className="shrink-0 border-t border-neutral-200 px-6 py-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <Heading className="text-sm font-medium leading-6 text-gray-900">
                    Socials
                  </Heading>
                  <div className="flex gap-3">
                    {socials.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-yellow-600 transition-colors duration-200"
                      >
                        <span className="sr-only">{social.label}</span>
                        <social.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
                <Badge
                  text={"Github"}
                  href="https://github.com/alfredonline"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 rounded-lg bg-white p-2 text-gray-400 shadow-md hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <IconLayoutSidebarRightCollapse className="h-6 w-6" aria-hidden="true" />
      </button>
    </AnimatePresence>
  );
};
