import Image from "next/image";

export default function ProjectLogo({ project, dark = true }: { project: "skilladder" | "orderflow"; dark?: boolean }) {
  const skilladder = project === "skilladder";
  return <Image className={`project-logo project-logo-${project}`} src={skilladder ? `/brands/skilladder-${dark ? "dark" : "light"}.png` : `/brands/orderflow-${dark ? "dark" : "light"}.svg`} alt={skilladder ? "Skilladder" : "Orderflow"} width={skilladder ? 1234 : 378} height={skilladder ? 241 : 60} />;
}
