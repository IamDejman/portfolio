import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Ayodeji Eluwande, Home"
      className="font-serif text-3xl leading-none text-text select-none"
    >
      <span aria-hidden="true">
        A<span className="-ml-[0.14em]">E</span>
      </span>
    </Link>
  );
}
