import { Metadata } from "next";
import Introduce from "@/components/Introduce";
import AboutMe from "@/components/AboutMe";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "NextVibe - Harish Prasad",
  description:
    "NextVibe is the personal portfolio website of Harish Prasad, a software developer showcasing projects, blogs, and YouTube content.",
  themeColor: "#1a202c",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
  openGraph: {
    title: "NextVibe - Harish Prasad",
    description:
      "Discover the portfolio, blogs, and projects of Harish Prasad, a software developer passionate about coding.",
    url: "https://www.imharishprasad.com",
    siteName: "NextVibe",
    images: [
      {
        url: "https://www.imharishprasad.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NextVibe - Harish Prasad Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextVibe - Harish Prasad",
    description:
      "Explore the portfolio and blog of Harish Prasad, a software developer.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <main>
        <section id="home">
          <Introduce />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
