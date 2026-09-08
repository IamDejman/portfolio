import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy policy for ayodejieluwande.vercel.app and the personal tools connected to it.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 px-5 pt-14 pb-10 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pt-24 md:pb-14">
          <h1 className="font-serif text-4xl leading-[1.06] tracking-[-0.018em] md:col-span-8 md:col-start-3 md:text-6xl">
            Privacy policy.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 pt-12 pb-16 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pt-18 md:pb-22">
        <div className="flex flex-col gap-5 text-[17px] leading-[1.75] text-ink-2 md:col-span-7 md:col-start-3">
          <p>
            This site is the personal portfolio of Ayodeji Eluwande. It is a
            static website. It does not have user accounts and does not ask you
            for personal information.
          </p>
          <p>
            <strong className="text-ink">Analytics.</strong> The site uses
            Vercel Analytics and Vercel Speed Insights, which record anonymous,
            aggregated page views and performance metrics. No cookies are set
            and no personal data is stored.
          </p>
          <p>
            <strong className="text-ink">Connected personal tools.</strong> This
            site is also the home page for private tools I run for my own use,
            including a job application tracker that reads my own Gmail inbox
            with read-only access. Those tools process only my own data. They do
            not collect, store, or share data from any other person, and they
            are not offered to the public.
          </p>
          <p>
            <strong className="text-ink">Contact.</strong> Questions about this
            policy can be sent to{" "}
            <a
              href="mailto:ayodejieluwande@gmail.com"
              className="underline underline-offset-2 hover:text-ink transition-colors"
            >
              ayodejieluwande@gmail.com
            </a>
            .
          </p>
          <p className="text-sm text-ink-3">Last updated 7 September 2026.</p>
        </div>
      </section>
    </div>
  );
}
