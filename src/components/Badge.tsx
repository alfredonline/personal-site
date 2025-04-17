import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Badge = ({
  text,
  href,
  className,
  ...props
}: {
  text: string;
  href: string;
  props?: React.ComponentProps<typeof Link>;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-xs shadow-zinc-900/50 transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900",
        className
      )}
      {...props}
      target="__blank"
    >
      <span className="flex items-center gap-2">
        {text}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
        >
          <motion.path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>
      </span>
    </Link>
  );
};
