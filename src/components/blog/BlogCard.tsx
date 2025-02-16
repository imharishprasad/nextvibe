import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    author: string;
    date: string;
    slug: string;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`} className="block">
      <div
        className="border rounded-lg p-4 hover:shadow-lg transition duration-300 cursor-pointer flex flex-col md:flex-row items-center md:items-start gap-4 
      hover:bg-gray-200 dark:hover:bg-gray-800 group"
      >
        <div className="w-full md:w-[280px] flex-shrink-0">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            width={280}
            height={170}
            className="w-full h-[170px] object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-300"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold group-hover:text-green-600 transition-colors duration-300">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-500">
            By {blog.author} • {new Date(blog.date).toDateString()}
          </p>
          <p className="text-gray-400 mt-2 line-clamp-2">{blog.description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-600 text-white px-3 py-1 text-sm rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <span
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md transition 
            duration-300 group-hover:bg-green-700"
            >
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
