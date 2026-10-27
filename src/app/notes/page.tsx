import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import Split from "@/components/motion/Split";
import { enter } from "@/components/motion/order";
import { noteDate, notes, readingMinutes } from "@/data/notes";
export const metadata: Metadata = {
  title: "Notes",
  description:
    "Short technical notes from building AI products, payment systems and assessment platforms.",
};
export default function NotesPage() {
  return (
    <div>
      <header className="route-heading section-shell">
        <Split as="h1" enter>
          Notes from
          <br />
          <em>the build.</em>
        </Split>
        <p data-enter style={enter(3)}>
          Short write-ups of decisions from real projects, and the reasoning
          behind them.
        </p>
      </header>
      <section className="notes-list section-shell" aria-label="All notes">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            data-reveal="rise rule"
          >
            <h2>{note.title}</h2>
            <p>{note.summary}</p>
            <span>
              {noteDate(note)} · {readingMinutes(note)} min read
            </span>
            <ArrowRight size={20} />
          </Link>
        ))}
      </section>
    </div>
  );
}
