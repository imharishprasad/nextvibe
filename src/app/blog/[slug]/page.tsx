import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaRegFileAlt,
} from "react-icons/fa";
import CopyButton from "@/components/CopyButton";
import LikeButton from "@/components/LikeButton";

async function getBlogData(slug: string) {
  const filePath = path.join(process.cwd(), "content/blogs", `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title || "Untitled",
    description: data.description || "",
    author: data.author || "Unknown",
    date: data.date || new Date().toISOString(),
    tags: data.tags || [],
    thumbnail: data.thumbnail || "/images/default-thumbnail.webp",
    content,
  };
}

async function getRelatedBlogs(currentSlug: string) {
  const blogsDir = path.join(process.cwd(), "content/blogs");
  const files = fs.readdirSync(blogsDir);

  const relatedBlogs = files
    .filter(
      (file) => file.endsWith(".md") && file.replace(".md", "") !== currentSlug
    )
    .map((file) => {
      const fileContents = fs.readFileSync(path.join(blogsDir, file), "utf-8");
      const { data } = matter(fileContents);
      return {
        slug: file.replace(".md", ""),
        title: data.title || "Untitled",
        description: data.description || "",
        thumbnail: data.thumbnail || "/images/default-thumbnail.webp",
      };
    });

  return relatedBlogs.slice(0, 3);
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogData(params.slug);
  const relatedBlogs = await getRelatedBlogs(params.slug);

  if (!blog) {
    return <h1 className="text-center text-2xl mt-10">Blog Not Found</h1>;
  }

  const shareUrl = encodeURIComponent(
    `https://imharishprasad.com/blog/${params.slug}`
  );

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-8 mt-4 md:mt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold">{blog.title}</h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            By {blog.author} • {new Date(blog.date).toDateString()}
          </p>

          <div className="flex space-x-4 mt-4 items-center">
            <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              Share:
            </span>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebook className="text-[#1877F2] text-2xl" />{" "}
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaTwitter className="text-[#1DA1F2] text-2xl" />{" "}
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin className="text-[#0A66C2] text-2xl" />{" "}
            </a>
            <CopyButton url={shareUrl} />
          </div>

          <div className="mt-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <h2 className="text-xl font-semibold text-green-500">
              Table of Contents
            </h2>
            <Markdown
              className="prose dark:prose-invert"
              remarkPlugins={[remarkToc]}
            >
              {blog.content}
            </Markdown>
          </div>

          <div className="mt-6">
            <Markdown
              className="prose dark:prose-invert text-gray-900 dark:text-gray-100"
              remarkPlugins={[remarkGfm]}
            >
              {blog.content}
            </Markdown>
            <LikeButton />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          {relatedBlogs.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-green-500">
                <FaRegFileAlt /> Related Blogs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {relatedBlogs.map((related) => (
                  <a
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <div className="w-full h-40 overflow-hidden rounded-lg">
                      <img
                        src={related.thumbnail}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mt-3 text-gray-900 dark:text-gray-100">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">
                      {related.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
