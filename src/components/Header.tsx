"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 py-4">
        <h1 className="text-base md:text-xl font-bold tracking-tight font-mono">
          <Link href="/" className="group inline-flex items-center gap-1">
            <span className="text-slate-500 dark:text-slate-400 group-hover:text-green-400 transition-colors duration-200">
              &lt;
            </span>

            <span className="relative overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 animate-typing-cursor">
              imharishprasad
              <span className="absolute right-0 top-0 h-full w-[1px] bg-cyan-400 animate-pulse" />
            </span>

            <span className="text-slate-500 dark:text-slate-400 group-hover:text-cyan-400 transition-colors duration-200">
              /&gt;
            </span>
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Navigation />
          <div className="relative group">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
              hover:ring-2 hover:ring-green-500 transition flex items-center justify-center w-12 h-12"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 118.646 3.646a7 7 0 1011.708 11.708z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.364 5.364l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707-.707M12 5a7 7 0 110 14 7 7 0 010-14z"
                  />
                </svg>
              )}
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div
                className="px-3 py-1 rounded-md shadow-lg whitespace-nowrap text-sm
              bg-gray-900 text-white dark:bg-white dark:text-gray-900 border border-gray-700 dark:border-gray-300"
              >
                {theme === "light"
                  ? "Switch to Dark Mode"
                  : "Switch to Light Mode"}
              </div>
              <div className="w-3 h-3 bg-gray-900 dark:bg-white border border-gray-700 dark:border-gray-300 rotate-45 mt-1 mx-auto"></div>
            </div>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
          hover:ring-2 hover:ring-green-500 transition w-12 h-12 flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="w-full max-w-lg bg-gray-100 dark:bg-gray-900 rounded-t-lg shadow-lg p-6 relative"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>

              <button
                onClick={toggleMenu}
                className="absolute top-3 right-3 p-3 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                hover:ring-2 hover:ring-green-500 transition w-10 h-10 flex items-center justify-center"
                aria-label="Close Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <Navigation isMobile />

              {/* Mobile Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="mt-6 p-3 flex items-center justify-center space-x-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                hover:ring-2 hover:ring-green-500 transition w-full"
              >
                {theme === "light" ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 118.646 3.646a7 7 0 1011.708 11.708z"
                      />
                    </svg>
                    <span className="font-medium">Dark Mode</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.364 5.364l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707-.707M12 5a7 7 0 110 14 7 7 0 010-14z"
                      />
                    </svg>
                    <span className="font-medium">Light Mode</span>
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
