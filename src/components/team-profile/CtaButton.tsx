import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import type { CtaLink } from "@/data/team/types";

interface CtaButtonProps {
  cta: CtaLink;
  children: ReactElement;
  className?: string;
}

/** Wraps a Button in the right link element based on the CTA's destination, external URL/mailto vs internal route. */
const CtaButton = ({ cta, children, className }: CtaButtonProps) => {
  const isExternal = cta.external || cta.href.startsWith("http") || cta.href.startsWith("mailto:");

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
