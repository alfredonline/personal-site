import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { NAME } from "../../config";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${NAME} - Software engineer`,
  description: `${NAME} is a software engineer and amateur YouTuber focused on building language learning tools.`
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased min-h-screen bg-gray-100"
        )}
      >
        <Sidebar />
        <div className="flex-1 lg:pl-2 lg:pt-2">
          <div className="bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200">
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
