"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Loader from "@/components/Loader";
import Script from "next/script";

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
    const navigationEntries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];
    const isPageReload =
      navigationEntries.length > 0 && navigationEntries[0].type === "reload";

    if (pathname === "/" && isPageReload) {
      setShowLoader(true);
      setTimeout(() => setShowLoader(false), 2500);
    } else {
      setShowLoader(false);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>NextVibe - Harish Prasad</title>
        <meta
          name="description"
          content="NextVibe - Portfolio of Harish Prasad, a Software Developer specializing in modern web development."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="NextVibe - Harish Prasad" />
        <meta
          property="og:description"
          content="NextVibe - Portfolio of Harish Prasad, showcasing projects, blogs, and YouTube content."
        />
        <meta property="og:url" content="https://www.imharishprasad.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="NextVibe - Harish Prasad" />
        <meta
          name="twitter:description"
          content="NextVibe - Portfolio of Harish Prasad, a Software Developer."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="Harish Prasad, NextVibe, Software Developer, Portfolio, imharishprasad, Web Development, Full Stack Developer, Tech, Unity"
        />

       {/* SEO Schema Markup */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harish Prasad",
              url: "https://www.imharishprasad.com",
              sameAs: [
                "https://www.instagram.com/imharishprasad",
                "https://www.facebook.com/imharishprasad",
                "https://t.me/imharishprasad",
                "https://www.youtube.com/@imharishprasad",
                "https://www.imharishprasad.com",
              ],
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Light & Wonder",
                name: "NextVibe",
              },
            }),
          }}
        />
      </head>
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
