import type { Metadata } from "next";
import Link from "next/link";

export const runtime = "edge";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { BlogContent } from "@/components/blog/BlogContent";
import { formatDate } from "@/lib/utils";
import { FiClock, FiUser, FiTag, FiArrowLeft } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { marked } from "marked";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const recentPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  // Categories with counts
  const categories = Array.from(new Set(allPosts.map(p => p.category))).map(cat => ({
    name: cat,
    count: allPosts.filter(p => p.category === cat).length
  }));

  const htmlContent = await marked.parse(post.content);

  return (
    <>
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop')] opacity-10 grayscale" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href={"/blog" as Route}>
              <Button variant="ghost" size="sm" className="mb-8 text-secondary hover:text-white hover:bg-white/10 px-0">
                <FiArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-6 flex items-center gap-3">
              <span className="px-3 py-1 bg-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20 backdrop-blur-sm">
                {post.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 italic leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-8 text-sm text-gray-400 font-medium italic">
              <span className="flex items-center gap-2">
                <FiUser className="w-4 h-4 text-secondary" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <FiClock className="w-4 h-4 text-secondary" />
                {formatDate(post.date)}
              </span>
              {post.readingTime && (
                <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 not-italic">
                  {post.readingTime}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <BlogContent>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
              </BlogContent>

              {/* Related Posts Bottom section */}
              {relatedPosts.length > 0 && (
                <div className="mt-20 pt-16 border-t">
                  <h3 className="text-3xl font-serif font-bold italic mb-10">Related Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedPosts.map(related => (
                      <Link key={related.slug} href={`/blog/${related.slug}` as Route} className="group block h-full">
                        <div className="relative h-48 overflow-hidden mb-6">
                          <img src={related.image} alt={related.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h4 className="text-xl font-serif font-bold italic group-hover:text-primary transition-colors mb-4 leading-tight">{related.title}</h4>
                        <p className="text-gray-500 text-sm line-clamp-2 italic">"{related.excerpt}"</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-16">
              {/* Recent Posts Sidebar Widget */}
              <div className="bg-gray-50 p-10 border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 border-b pb-4">Recent Insights</h3>
                <div className="space-y-10">
                  {recentPosts.map(recent => (
                    <Link key={recent.slug} href={`/blog/${recent.slug}` as Route} className="group block">
                      <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-widest">{formatDate(recent.date)}</p>
                      <h4 className="text-lg font-serif font-bold italic text-gray-900 group-hover:text-primary transition-colors leading-tight">{recent.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="p-10 border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 border-b pb-4">Specializations</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map(cat => (
                    <span key={cat.name} className="px-4 py-2 bg-gray-50 text-[10px] font-bold text-gray-600 uppercase tracking-widest border border-gray-200">
                      {cat.name} ({cat.count})
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultant Card */}
              <div className="bg-secondary p-10 text-black">
                <h3 className="text-2xl font-serif font-bold mb-6 italic">Require Strategic Counsel?</h3>
                <p className="text-sm font-medium mb-8 leading-relaxed italic">
                  Discuss this analysis with our partners to understand how it impacts your specific legal landscape.
                </p>
                <Link href={"/contact" as Route}>
                  <Button className="w-full bg-primary text-white hover:bg-black rounded-none h-14 font-bold border-none">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
