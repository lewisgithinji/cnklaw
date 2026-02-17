import { ReactNode } from "react";

interface BlogContentProps {
  children: ReactNode;
}

export function BlogContent({ children }: BlogContentProps) {
  const classes = `
    prose prose-lg max-w-none 
    font-serif text-gray-800 antialiased selection:bg-secondary/30
    prose-p:first-of-type:first-letter:text-7xl 
    prose-p:first-of-type:first-letter:font-serif 
    prose-p:first-of-type:first-letter:font-bold 
    prose-p:first-of-type:first-letter:mr-3 
    prose-p:first-of-type:first-letter:float-left 
    prose-p:first-of-type:first-letter:text-primary 
    prose-p:first-of-type:first-letter:leading-none 
    prose-p:first-of-type:first-letter:mt-1 
    prose-headings:text-primary prose-headings:font-serif prose-headings:font-bold prose-headings:italic 
    prose-h1:text-5xl prose-h1:mb-8 prose-h1:leading-tight 
    prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-4 
    prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-10 
    prose-p:mb-8 prose-p:leading-[1.8] prose-p:text-lg 
    prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:text-secondary transition-colors 
    prose-strong:text-foreground prose-strong:font-bold 
    prose-ul:my-8 prose-ul:list-disc prose-ul:pl-8 
    prose-ol:my-8 prose-ol:list-decimal prose-ol:pl-8 
    prose-li:mb-4 prose-li:pl-2 
    prose-blockquote:border-l-0 prose-blockquote:pl-0 prose-blockquote:my-16 prose-blockquote:relative 
    prose-blockquote:text-3xl prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-primary/80 
    prose-blockquote:before:content-["\\201C"] prose-blockquote:before:absolute prose-blockquote:before:-top-8 prose-blockquote:before:-left-8 
    prose-blockquote:before:text-8xl prose-blockquote:before:text-secondary/20 prose-blockquote:before:font-serif 
    prose-hr:my-16 prose-hr:border-gray-100 
    prose-img:rounded-none prose-img:shadow-2xl prose-img:my-12 
    prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded-sm prose-code:text-sm prose-code:font-mono prose-code:text-primary 
    prose-pre:bg-primary prose-pre:text-white prose-pre:p-8 prose-pre:rounded-none prose-pre:overflow-x-auto
  `;

  return (
    <div className={classes.trim()}>
      {children}
    </div>
  );
}
