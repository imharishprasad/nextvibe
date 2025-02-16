import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export async function GET() {
  try {
    console.log("Checking blogs directory:", blogsDirectory);
    if (!fs.existsSync(blogsDirectory)) {
      throw new Error("Blogs directory does not exist");
    }

    const files = fs.readdirSync(blogsDirectory);
    console.log("Found blog files:", files);

    if (files.length === 0) {
      throw new Error("No blog files found");
    }

    const blogs = files.map((filename) => {
      const filePath = path.join(blogsDirectory, filename);
      console.log("Reading file:", filePath);
      
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        id: filename.replace(".md", ""),
        title: data.title || "Untitled Blog",
        description: data.description || "",
        thumbnail: data.thumbnail || "/images/default-blog-thumbnail.webp",
        tags: data.tags || [],
        author: data.author || "Unknown",
        date: data.date || "Unknown",
        slug: filename.replace(".md", ""),
      };
    });

    return NextResponse.json(blogs);
  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Error loading blogs:", error.message);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }

    console.error("Unknown error loading blogs:", error);
    return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
    );
}
}