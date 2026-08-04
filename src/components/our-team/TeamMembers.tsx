import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { foundingTeam } from "@/data/team/foundingTeam";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const TeamMembers = () => {
  return (
    <section id="team-members" className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">
            THE FOUNDING TEAM
          </span>
          <h2 className="mb-4">Six Specialists. One Mission.</h2>
          <p className="text-lg text-ink/70">
            Every founding member brings a distinct craft to the table — together they cover
            everything a modern business needs to grow online.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {foundingTeam.map((member) => (
            <motion.div key={member.slug} variants={fadeUp} className="group h-full">
              <Link
                to={`/our-team/${member.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="flex flex-col h-full bg-white/70 backdrop-blur-sm border border-hairline rounded-block overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1.5 hover:border-ink/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover ${member.imagePosition ?? "object-top"} transition-transform duration-700 ease-out group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-ink/60 mb-3">{member.title}</p>
                  <p className="text-sm text-ink/70 mb-5 flex-grow">{member.cardIntro}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.cardBadges.map((badge) => (
                      <span
                        key={badge}
                        className="font-mono text-[10px] uppercase tracking-[0.5px] px-2.5 py-1 rounded-pill bg-surface-soft text-ink/70 border border-hairline"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    View Profile
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMembers;
