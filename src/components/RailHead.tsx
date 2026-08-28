/* The margin rail: index number, short rule, mono label. Sits in cols 1-2 of
   the 12-column grid on desktop; stacks above the heading on mobile. */
export default function RailHead({
  index,
  label,
  top = false,
}: {
  index: string;
  label: string;
  top?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2.5 md:col-span-2 ${top ? "md:pt-[18px]" : ""}`}
    >
      <span className="idx">{index}</span>
      <div className="h-px w-7 bg-line-2" />
      <span className="label">{label}</span>
    </div>
  );
}
