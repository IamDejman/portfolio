import ScrollReveal from "./ScrollReveal";

export default function PageHeader({
  label,
  heading,
  subtitle,
}: {
  label: string;
  heading: string;
  subtitle?: string;
}) {
  return (
    <ScrollReveal>
      <div className="pt-32 pb-16 border-b border-border">
        <p className="section-label mb-4">{label}</p>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
          {heading}
        </h1>
        {subtitle && (
          <p className="mt-4 text-muted text-base max-w-2xl">{subtitle}</p>
        )}
      </div>
    </ScrollReveal>
  );
}
