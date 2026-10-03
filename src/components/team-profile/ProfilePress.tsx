import { motion } from "framer-motion";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import type { PressFeature } from "@/data/team/types";

interface ProfilePressProps {
  features: PressFeature[];
  heading?: string;
  memberName: string;
}

/**
 * Press release features and news mentions. These are distributed placements, so the section says so
 * plainly, and every outlink carries sponsored and nofollow so no editorial endorsement is implied to search engines.
 */
const ProfilePress = ({ features, heading = "In the News", memberName }: ProfilePressProps) => {
  if (features.length === 0) return null;

  return (
    <section id="press" aria-labelledby="profile-press-heading" className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">PRESS FEATURES</span>
          <h2 id="profile-press-heading" className="mb-4">
            {heading}
          </h2>
          <p className="text-sm text-ink/60">
            Press release features published by news and business sites, {features[0].date}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature) => (
            <motion.article key={feature.url} variants={fadeUp} whileHover={{ y: -6 }} className="h-full">
              <a
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                aria-label={`${feature.outlet}: ${feature.title}, opens in a new tab`}
                className="group flex flex-col h-full bg-white border border-hairline rounded-block p-7 transition-shadow duration-300 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-ink">
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-surface-soft shrink-0">
                      <Newspaper className="h-4 w-4 text-ink" aria-hidden />
                    </span>
                    {feature.outlet}
                  </span>
                  <time
                    dateTime={feature.isoDate}
                    className="font-mono text-[10px] uppercase tracking-[0.5px] px-2.5 py-1 rounded-pill bg-surface-soft text-ink/70 border border-hairline whitespace-nowrap"
                  >
                    {feature.date}
                  </time>
                </div>

                <h3 className="text-base font-bold leading-snug mb-3">{feature.title}</h3>
                {feature.note && <p className="text-sm text-ink/70 mb-6 flex-grow">{feature.note}</p>}

                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  Read the feature on {feature.outlet}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </a>
            </motion.article>
          ))}
        </motion.div>

        <p className="sr-only">Press features about {memberName}.</p>
      </div>
    </section>
  );
};

export default ProfilePress;
