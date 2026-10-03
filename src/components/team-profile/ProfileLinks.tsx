import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/routerLink";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import type { RelatedLink } from "@/data/team/types";

interface ProfileLinksProps {
  heading: string;
  links: RelatedLink[];
}

const cardClass =
  "group flex flex-col h-full bg-canvas border border-hairline rounded-block p-6 transition-shadow duration-300 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/** Crawlable related pages with descriptive anchor text: internal service, case study and location pages, plus owned external profile pages. */
const ProfileLinks = ({ heading, links }: ProfileLinksProps) => {
  if (links.length === 0) return null;

  return (
    <section id="related" aria-labelledby="profile-related-heading" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">EXPLORE MORE</span>
          <h2 id="profile-related-heading">{heading}</h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto list-none p-0"
        >
          {links.map((link) => {
            const body = (
              <>
                <span className="text-base font-bold text-ink mb-2">{link.label}</span>
                <span className="text-sm text-ink/70 mb-5 flex-grow">{link.description}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  {link.external ? "Visit page" : "View page"}
                  {link.external ? (
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  ) : (
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  )}
                </span>
              </>
            );
            return (
              <motion.li key={link.href} variants={fadeUp} className="h-full">
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    {body}
                  </a>
                ) : (
                  <Link to={link.href} onClick={() => window.scrollTo(0, 0)} className={cardClass}>
                    {body}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default ProfileLinks;
