import type { Metadata } from "next";
import { siteConfig, openTo } from "@/data/content";
import { ArrowRight } from "@/components/icons";
import CopyEmail from "@/components/CopyEmail";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Ayodeji Eluwande about product roles, AI workflows and building useful software.",
};
const links = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.linkedin,
  },
  {
    label: "GitHub",
    value: "Explore the repositories",
    href: siteConfig.github,
  },
  { label: "X", value: "Follow the conversation", href: siteConfig.twitter },
  {
    label: "CV",
    value: "View or download the CV",
    href: "/cv",
  },
];
export default function ContactPage() {
  return (
    <div>
      <header className="contact-heading section-shell">
        <h1>
          What should
          <br />
          we build <em>next?</em>
        </h1>
        <p>
          A role, a collaboration or a problem that needs a fresh pair of eyes.
          I’m open to a good conversation.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${siteConfig.email}`}>
            Send me an email
            <ArrowRight size={25} />
          </a>
          <CopyEmail />
        </div>
      </header>
      <section className="contact-content section-shell">
        <div>
          <h2>Let’s connect.</h2>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span>{l.label}</span>
              <span>{l.value}</span>
              <ArrowRight size={19} />
            </a>
          ))}
        </div>
        <aside>
          <h2>Open to</h2>
          <ul>
            {openTo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}
