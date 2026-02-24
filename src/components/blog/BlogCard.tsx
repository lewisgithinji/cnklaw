import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import { FiUser, FiCalendar } from "react-icons/fi";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}` as Route} className="group h-full">
      <Card className="h-full border-none shadow-none bg-white rounded-none transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col group border-t-2 border-transparent hover:border-secondary">
        <div className="aspect-video bg-primary relative overflow-hidden">
          {post.image ? (
            <Image src={post.image || "/Hero/skyline-hero.jpg"} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl font-serif font-bold text-secondary/20 uppercase">{post.title[0]}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <CardHeader className="pt-8 pb-4">
          <div className="flex items-center gap-4 text-[10px] font-bold text-primary mb-4 uppercase tracking-[0.2em]">
            <span className="bg-primary/5 px-2 py-0.5 border border-primary/10">{post.category || "Insight"}</span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5"><FiCalendar className="text-secondary" /> {formatDate(post.date)}</span>
          </div>
          <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors italic leading-tight line-clamp-2">
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between">
          <CardDescription className="mb-8 text-gray-600 line-clamp-3 text-base leading-relaxed h-18 font-light italic">
            &quot;{post.excerpt}&quot;
          </CardDescription>

          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <FiUser className="text-secondary" /> {post.author}
            </span>
            <div className="text-primary font-bold uppercase text-[10px] tracking-widest group-hover:text-secondary transition-colors">
              Read More
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
