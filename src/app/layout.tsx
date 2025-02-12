"use client";

import { Geist, Geist_Mono } from "next/font/google";
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader
          onComplete={() => {}}
          text="NextVibe"
          duration={2500}
          bgColor="bg-black"
          textColor="text-green-400"
          effect="wave"
        />
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
