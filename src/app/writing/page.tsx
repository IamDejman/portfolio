import type { Metadata } from "next";
import { blogPosts } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thinking out loud — articles on product, fintech, and building.",
};

export default function WritingPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 pb-20">
      <PageHeader label="Writing" heading="Thinking out loud." />

      <div className="mt-12">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 100}>
            <article className="py-10 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="font-serif text-xl md:text-2xl">
                      {post.title}
                    </h2>
                    <span className="text-xs text-muted px-2.5 py-1 rounded-full border border-border">
                      {post.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-light leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-medium text-muted italic">
                  {post.status}
                </span>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={350}>
        <p className="mt-12 text-sm text-muted italic">
          More writing coming soon. Want to be notified? Drop me a line on the{" "}
          <a href="/contact" className="underline underline-offset-3 hover:text-text transition-colors">
            contact page
          </a>
          .
        </p>
      </ScrollReveal>
    </div>
  );
}
