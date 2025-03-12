"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaYoutube,
  FaPlay,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { videos } from "@/data/youtube";

export default function YouTube() {
  const [search, setSearch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const videosPerPage = 6;

  const filteredVideos = videos.filter(
    (video) =>
      video.title?.toLowerCase().includes(search.toLowerCase()) ||
      video.description?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const paginatedVideos = filteredVideos.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  const youtubeThumbnail = (youtubeId: string) =>
    `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div className="min-h-screen px-6 py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
      <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500 dark:text-gray-300" />
        </div>

        <Link href="https://www.youtube.com/@imharishprasad" target="_blank">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700"
          >
            <FaYoutube className="text-xl" /> Visit YouTube
          </motion.button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedVideos.map((video) => (
          <motion.div
            key={video.id}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-gray-900 dark:text-white"
          >
            <Image
              src={video.thumbnail || youtubeThumbnail(video.youtubeId)}
              alt={video.title || "Fetching title..."}
              width={500}
              height={280}
              className="rounded-lg"
            />
            <h3 className="mt-2 text-lg font-semibold">{video.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {expanded
                ? video.description
                : video.description?.slice(0, 100) +
                  (video.description?.length > 100 ? "..." : "")}
              {video.description && video.description.length > 100 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-red-600 ml-2 underline"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <Link
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-2 px-4 py-2 w-full text-white bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-md"
                >
                  <FaYoutube className="text-xl" /> Watch on YouTube
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedVideo(video.youtubeId)}
                className="flex items-center justify-center gap-2 px-4 py-2 w-full text-red-700 border border-red-700 rounded-lg shadow-md hover:bg-red-100 dark:hover:bg-gray-700"
              >
                <FaPlay className="text-xl" /> Open Video
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="p-3 text-white bg-red-600 rounded-full shadow-md disabled:opacity-50"
          >
            <FaArrowLeft />
          </button>
          <span className="px-4 py-2 text-lg">
            {currentPage} / {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="p-3 text-white bg-red-600 rounded-full shadow-md disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>
      )}

      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full shadow-md hover:bg-red-700"
              onClick={() => setSelectedVideo(null)}
            >
              <FaTimes size={20} />
            </button>

            <iframe
              className="w-full h-[400px] rounded-lg"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video"
              allowFullScreen
            ></iframe>

            <div className="p-4">
              <Link
                href={`https://www.youtube.com/watch?v=${selectedVideo}`}
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700"
                >
                  Open in YouTube
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
