import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { FIRM_INFO } from "@/lib/constants";
import { BlogContent } from "@/components/sections/BlogContent";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog & Legal Insights",
  description: `Stay informed with legal insights, news, and updates from ${FIRM_INFO.name}. Expert analysis on current legal topics.`,
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  // Map posts to serialized structure if needed, but here simple types are fine
  const serializedPosts = posts.map(p => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: formatDate(p.date),
    author: p.author,
    category: p.category,
    image: p.image
  }));

  return <BlogContent posts={serializedPosts} />;
}
