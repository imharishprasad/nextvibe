import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function BlogSidebar({ latestBlogs } : any) {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
      <h3 className="text-lg font-semibold">Latest Blogs</h3>
      <ul className="mt-2 space-y-2">
        {latestBlogs.map((blog: { slug: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`} className="text-green-500">{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}