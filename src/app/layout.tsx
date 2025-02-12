"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

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
  const [showContent, setShowContent] = useState(pathname !== "/");

  useEffect(() => {
    if (pathname === "/") {
      setShowContent(false);
    } else {
      setShowContent(true);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {pathname === "/" && !showContent ? (
          <Loader
            onComplete={() => setShowContent(true)}
            text="NextVibe"
            duration={2500}
            bgColor="bg-black"
            textColor="text-green-400"
            effect="wave"
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
