import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@/components/icons";
import Split from "@/components/motion/Split";
import { enter } from "@/components/motion/order";
import { siteConfig } from "@/data/content";
import { noteDate, notes, readingMinutes } from "@/data/notes";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  return note
    ? {
        title: note.title,
        description: note.summary,
        openGraph: {
          type: "article",
          title: note.title,
          description: note.summary,
          publishedTime: note.published,
        },
      }
    : {};
}
export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const index = notes.findIndex((n) => n.slug === slug);
  if (index === -1) notFound();
  const note = notes[index];
  const next = notes[(index + 1) % notes.length];
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.summary,
    datePublished: note.published,
    author: { "@type": "Person", name: siteConfig.fullName, url: siteConfig.url },
    url: `${siteConfig.url}/notes/${note.slug}`,
  };
  return (
    <article className="note">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <div className="reading-progress" aria-hidden="true" />
      <div className="case-back section-shell">
        <Link href="/notes" data-enter style={enter(0)}>
          <ArrowRight size={16} />
          All notes
        </Link>
      </div>
      <header className="case-heading section-shell">
        <Split as="h1" enter>
          {note.title}
        </Split>
        <p className="note-summary" data-enter style={enter(4)}>
          {note.summary}
        </p>
        <p className="note-meta" data-enter style={enter(5)}>
          <time dateTime={note.published}>{noteDate(note)}</time>
          <span>{readingMinutes(note)} min read</span>
          <Link href={note.related.href}>
            {note.related.label}
            <ArrowRight size={15} />
          </Link>
        </p>
      </header>
      <div className="note-body section-shell">
        <div className="case-prose">
          {note.sections.map((section, i) => (
            <section key={section.heading ?? i} data-reveal="rise">
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
      <section className="case-next section-shell">
        <div data-reveal="rise">
          <p>Keep reading</p>
          <Link href={`/notes/${next.slug}`}>
            {next.title}
            <ArrowRight size={35} />
          </Link>
        </div>
        <p className="case-contact" data-reveal="rise">
          <Link href={note.related.href}>
            {note.related.label}
            <ArrowRight size={17} />
          </Link>
        </p>
      </section>
    </article>
  );
}
