import Image from "next/image";

/* `travel` carries the logo between a project card and its case study during
   page transitions. The case study logo ("to") is always named and loads
   eagerly, so it is ready to take over mid-flight; a card logo ("from") is
   named only when its card is clicked (see MotionRoot), so the logo travels
   from the card the visitor chose and from nowhere else. */
export default function ProjectLogo({ project, dark = true, travel }: { project: "skilladder" | "orderflow"; dark?: boolean; travel?: "from" | "to" }) {
  const skilladder = project === "skilladder";
  return <Image className={`project-logo project-logo-${project}`} src={skilladder ? `/brands/skilladder-${dark ? "dark" : "light"}.png` : `/brands/orderflow-${dark ? "dark" : "light"}.svg`} alt={skilladder ? "Skilladder" : "Orderflow"} width={skilladder ? 1234 : 378} height={skilladder ? 241 : 60} data-travel={travel === "from" ? project : undefined} style={travel === "to" ? { viewTransitionName: `brand-${project}` } : undefined} preload={travel === "to"} />;
}
