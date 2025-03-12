"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Loader from "@/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const isPageReload = navigationEntries.length > 0 && navigationEntries[0].type === "reload";

    if (pathname === "/" && isPageReload) {
      setShowLoader(true);
      setTimeout(() => setShowLoader(false), 2500);
    } else {
      setShowLoader(false);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {showLoader ? (
          <Loader
            onComplete={() => setShowLoader(false)}
            text="NextVibe"
            duration={1500}
            bgColor="bg-black"
            textColor="text-green-400"
            effect="bubble"
          />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}

        <ScrollToTopButton />
      </body>
    </html>
  );
}