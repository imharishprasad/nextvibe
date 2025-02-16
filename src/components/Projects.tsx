"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern portfolio built with Next.js & Tailwind CSS. It features a fully responsive design, animations, and optimized performance.",
    image: "/images/default-project-thumbnail.png",
    github: "https://github.com/imharishprasad/nextvibe",
    live: "https://",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "Placeholder 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dui ac odio hendrerit convallis.",
    image: "/images/default-project-thumbnail.png",
    github: "https://github.com/imharishprasad/nextvibe",
    live: "https://",
    tech: ["Python", "Tkinter"],
  },
  {
    id: 3,
    title: "Placeholder 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros eget velit tincidunt pretium.",
    image: "/images/default-project-thumbnail.png",
    live: "https://",
    tech: ["C#", "WPF", ".NET"],
  },
  {
    id: 4,
    title: "Placeholder 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros eget velit tincidunt pretium.",
    image: "/images/default-project-thumbnail.png",
    github: "https://github.com/imharishprasad/nextvibe",
    live: "https://",
    tech: ["CPP", "CrowLib", "MVC"],
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev < projects.length - visibleCards ? prev + 1 : 0
    );
  }, [visibleCards]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : projects.length - visibleCards
    );
  }, [visibleCards]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center bg-gray-100 dark:bg-gray-900 py-16"
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
        <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </h2>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-4">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2"
            >
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                  priority
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                    {expanded === index || project.description.length <= 100
                      ? project.description
                      : `${project.description.substring(0, 100)}... `}
                    {project.description.length > 100 && (
                      <button
                        className="text-green-400 hover:underline ml-1"
                        onClick={() =>
                          setExpanded(expanded === index ? null : index)
                        }
                      >
                        {expanded === index ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-500 hover:text-white transition"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      <FaExternalLinkAlt />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-green-600/50 text-white rounded-full hover:bg-green-700 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-green-600/50 text-white rounded-full hover:bg-green-700 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
