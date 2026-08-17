import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import type { CtaLink } from "@/data/team/types";

interface CtaButtonProps {
  cta: CtaLink;
  children: ReactElement;
  className?: string;
}

/** Wraps a Button in the right link element based on the CTA's destination: in-page anchor, external URL/mailto, or internal route. */
const CtaButton = ({ cta, children, className }: CtaButtonProps) => {
  const isExternal = cta.external || cta.href.startsWith("http") || cta.href.startsWith("mailto:");

  if (cta.href.startsWith("#")) {
    return (
      <a
        href={cta.href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(cta.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        {children}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a href={cta.href} target={cta.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={cta.href} onClick={() => window.scrollTo(0, 0)} className={className}>
      {children}
    </Link>
  );
};

export default CtaButton;
