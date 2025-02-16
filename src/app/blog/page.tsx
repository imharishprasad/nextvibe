"use client";

import { useState, useEffect } from "react";
import BlogCard from "@/components/blog/BlogCard";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogPagination from "@/components/blog/BlogPagination";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  tags: string[];
  author: string;
  date: string;
  slug: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [noBlogs, setNoBlogs] = useState<boolean>(false);
  const blogsPerPage: number = 6;

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await fetch("/api/blogs", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: Blog[] = await res.json();

        if (data.length === 0) {
          setNoBlogs(true);
        } else {
          setBlogs(data);
          setNoBlogs(false);
        }

        setError(null);
      } catch (error) {
        setError("Failed to load blogs. Please try again later.");
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  const filteredBlogs: Blog[] = blogs.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.tags &&
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ))
  );

  const startIndex: number = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs: Blog[] = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="mt-[80px] md:mt-[100px] max-w-6xl mx-auto px-4 py-8 w-full">
        <div className="mb-6">
          <BlogSearch onSearch={(query: string) => setSearchQuery(query)} />
        </div>
        {loading ? (
          <div className="text-center text-gray-600 dark:text-gray-400 text-lg">
            Loading blogs...
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-10">
            <img
              src="/images/no-blogs-available.webp"
              alt="Error Loading"
              className="w-48 h-48 mb-4"
            />
            <p className="text-lg font-semibold text-red-600 dark:text-red-400">
              {error}
            </p>
          </div>
        ) : noBlogs ? (
          <div className="flex flex-col items-center justify-center py-10">
            <Image
              src="/images/no-blogs-available.webp"
              alt="No Blogs Available"
              width={192}
              height={192}
              className="mb-4"
            />
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              No blogs available at the moment. Check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {paginatedBlogs.length > 0 ? (
                paginatedBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    No blogs match your search.
                  </p>
                </div>
              )}
            </div>
            <div className="p-4 rounded-lg bg-gray-200 dark:bg-gray-800 shadow-md">
              <BlogSidebar latestBlogs={blogs.slice(0, 5)} />
            </div>
          </div>
        )}
        {filteredBlogs.length > blogsPerPage && (
          <div className="mt-8">
            <BlogPagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredBlogs.length / blogsPerPage)}
              onPageChange={(page: number) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
