"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogPagination from "@/components/blog/BlogPagination";

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  thumbnail: string;
  slug: string;
}

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage = 6;

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const startIndex = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <BlogSearch onSearch={(query : string) => setSearchQuery(query)} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {paginatedBlogs.length > 0 ? (
            paginatedBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">No blogs found.</p>
          )}
        </div>
        <BlogSidebar latestBlogs={blogs.slice(0, 5)} />
      </div>
      <BlogPagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredBlogs.length / blogsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}