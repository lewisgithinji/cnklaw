import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost } from "@/types";

const contentDirectory = path.join(process.cwd(), "content/blog");

export function getAllBlogPosts(): BlogPost[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    const posts = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(contentDirectory, file);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);
        const stats = readingTime(content);

        return {
          slug: file.replace(".mdx", ""),
          title: data.title,
          excerpt: data.excerpt,
          content,
          date: data.date instanceof Date ? data.date.toISOString() : String(data.date),
          author: data.author,
          category: data.category,
          readingTime: stats.text,
          image: data.image,
        } as BlogPost;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (error) {
    // If content directory doesn't exist yet, return empty array
    return [];
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      date: data.date instanceof Date ? data.date.toISOString() : String(data.date),
      author: data.author,
      category: data.category,
      readingTime: stats.text,
      image: data.image,
    };
  } catch (error) {
    return null;
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}
