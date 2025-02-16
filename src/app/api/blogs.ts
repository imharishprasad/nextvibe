import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const blogDir = path.join(process.cwd(), "content/blogs");
  const files = fs.readdirSync(blogDir);

  const blogs = files.map((file) => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return { ...data, slug: file.replace(".md", "") };
  });

  return Response.json(blogs);
}