"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Navigation({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) return;
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setIsShowcaseOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobile]);

  return (
    <nav
      className={`relative ${
        isMobile ? "flex flex-col space-y-6" : "flex space-x-6"
      }`}
    >
      <div
        className="relative dropdown"
        onMouseEnter={() => !isMobile && setIsShowcaseOpen(true)}
        onMouseLeave={() => !isMobile && setIsShowcaseOpen(false)}
      >
        <button
          onClick={() => isMobile && setIsShowcaseOpen(!isShowcaseOpen)}
          className="flex items-center space-x-1 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 transition"
        >
          <span>Portfolio</span>
          <FaChevronDown
            className={`w-4 h-4 mt-1 transition-transform ${
              isShowcaseOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden z-50 transition-all duration-300 ease-in-out ${
            isShowcaseOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {["About Me", "Timeline", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {item}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Resume
          </a>
        </div>
      </div>
      <Link
        href="/blog"
        className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 transition"
      >
        Blog
      </Link>

      <Link
        href="https://www.youtube.com/@imharishprasad"
        target="_blank"
        className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 transition"
      >
        YouTube
      </Link>
    </nav>
  );
}
