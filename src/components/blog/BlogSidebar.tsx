import Link from "next/link";
import { Blog } from "@/types/Types";

interface BlogSidebarProps {
  latestBlogs: Blog[];
}

export default function BlogSidebar({ latestBlogs }: BlogSidebarProps) {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
      <h3 className="text-lg font-semibold">Latest Blogs</h3>
      <ul className="mt-2 space-y-2">
        {latestBlogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`} className="text-green-500">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}