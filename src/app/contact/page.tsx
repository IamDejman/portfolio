import type { Metadata } from "next";
import { siteConfig, openTo } from "@/data/content";
import { ArrowRight } from "@/components/icons";
import CopyEmail from "@/components/CopyEmail";
import Split from "@/components/motion/Split";
import { enter } from "@/components/motion/order";
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
    track: "email",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.linkedin,
    track: "social",
  },
  {
    label: "GitHub",
    value: "Explore the repositories",
    href: siteConfig.github,
    track: "social",
  },
  {
    label: "X",
    value: "Follow the conversation",
    href: siteConfig.twitter,
    track: "social",
  },
  {
    label: "CV",
    value: "View or download the CV",
    href: "/cv",
    track: "cv",
  },
];
export default function ContactPage() {
  return (
    <div>
      <header className="contact-heading section-shell">
        <Split as="h1" enter>
          What should
          <br />
          we build <em>next?</em>
        </Split>
        <p data-enter style={enter(3)}>
          A role, a collaboration or a problem that needs a fresh pair of eyes.
          I’m open to a good conversation.
          <span className="contact-place">
            Based in Berlin, on {siteConfig.timezone}.
          </span>
        </p>
        <div className="contact-actions" data-enter style={enter(4)}>
          <a href={`mailto:${siteConfig.email}`} data-track="email">
            Send me an email
            <ArrowRight size={25} />
          </a>
          {siteConfig.booking && (
            <a
              href={siteConfig.booking}
              className="contact-booking"
              data-track="booking"
            >
              Book 20 minutes
              <ArrowRight size={21} />
            </a>
          )}
          <CopyEmail />
        </div>
      </header>
      <section className="contact-content section-shell">
        <div>
          <Split>Let’s connect.</Split>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              data-reveal="rise rule-bottom"
              data-track={l.track}
              data-track-label={l.label}
            >
              <span>{l.label}</span>
              <span>{l.value}</span>
              <ArrowRight size={19} />
            </a>
          ))}
        </div>
        <aside data-reveal="wipe">
          <h2>Open to</h2>
          <ul data-reveal="stagger">
            {openTo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {siteConfig.workAuthorization && (
            <p className="contact-authorization">
              {siteConfig.workAuthorization}
            </p>
          )}
        </aside>
      </section>
    </div>
  );
}
