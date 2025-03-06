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
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

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

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {open && isMobile() && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed lg:sticky top-0 left-0 h-screen z-50 flex flex-col"
          >
            <div className="px-6 py-10 bg-neutral-100 w-[14rem] h-full flex flex-col justify-between">
              <div className="flex-1 overflow-auto">
                <SidebarHeader />
                <Navigation setOpen={setOpen} />
                <div className="mt-4">
                  <LanguageSwitcher />
                </div>
              </div>
              <div className="space-y-2">
                <Badge 
                  href="https://www.youtube.com/@AlfieWebDev?sub_confirmation=1" 
                  text="YouTube Channel" 
                  className="bg-red-500 w-full"
                />
                <Badge 
                  href="https://github.com/alfredonline" 
                  text="GitHub Profile" 
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Toggle button */}
      <button
        className="fixed lg:hidden bottom-4 right-4 h-10 w-10 bg-white border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50 shadow-lg"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse 
          className={twMerge(
            "h-5 w-5 text-secondary transition-transform duration-200",
            open && "rotate-180"
          )} 
        />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{t(link.label.toLowerCase())}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        {t('socials')}
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          target="__blank"
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex space-x-2">
      <Image
        src="https://res.cloudinary.com/damqrrryq/image/upload/v1727277655/Screenshot_2024-09-13_141434-removebg-preview_lrwtuu.png"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">{NAME}</p>
        <p className="font-light text-secondary">{t('developer')}</p>
      </div>
    </div>
  );
};
