import { Metadata } from "next";
import Introduce from "@/components/Introduce";
import AboutMe from "@/components/AboutMe";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "NextVibe",
  description: "NextVibe is a modern portfolio website.",
  themeColor: "#1a202c",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
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
      </main>
    </>
  );
}
