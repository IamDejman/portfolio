import {
  cloneElement,
  Fragment,
  isValidElement,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from "react";

type Props = AnchorHTMLAttributes<HTMLElement> & {
  as?: "h1" | "h2" | "h3" | "a";
  /* On screen when the page opens: rise immediately instead of on scroll. */
  enter?: boolean;
  children: ReactNode;
};

/* Display type that rises word by word, each word clipped by its own mask
   (styles/motion.css). The words are hidden from assistive technology and
   the element is named with its plain text, so it reads as one phrase. */
export default function Split({ as: Tag = "h2", enter, children, ...props }: Props) {
  let index = 0;
  const words = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((part, i) =>
        part.trim() === "" ? (
          part
        ) : (
          <span key={i} className="word" aria-hidden="true">
            <span style={{ "--w": index++ } as CSSProperties}>{part}</span>
          </span>
        ),
      );
    }
    if (Array.isArray(node)) {
      return node.map((child, i) => <Fragment key={i}>{words(child)}</Fragment>);
    }
    if (isValidElement<{ children?: ReactNode }>(node) && node.props.children) {
      return cloneElement(node, undefined, words(node.props.children));
    }
    return node;
  };
  return (
    <Tag
      {...props}
      aria-label={text(children).replace(/\s+/g, " ").trim()}
      data-split={enter ? "enter" : undefined}
      data-reveal={enter ? undefined : "words"}
    >
      {words(children)}
    </Tag>
  );
}

function text(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(text).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return node.type === "br" ? " " : text(node.props.children);
  }
  return "";
}
