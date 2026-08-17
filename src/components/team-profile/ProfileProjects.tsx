import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { findProject } from "@/data/portfolio";
import { staggerContainer, fadeUp, viewportOnce, easeOut } from "@/lib/motion";
import type { FoundingTeamMember, TeamProjectRef } from "@/data/team/types";
import CtaButton from "./CtaButton";

interface ProfileProjectsProps {
  member: FoundingTeamMember;
}

const resolveProjects = (refs: TeamProjectRef[]) =>
  refs
    .map((ref) => findProject(ref.serviceSlug, ref.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

const ProjectCardGrid = ({ projects }: { projects: ReturnType<typeof resolveProjects> }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={staggerContainer}
    className="flex flex-wrap justify-center gap-8"
  >
    {projects.map((project) => (
      <div
        key={`${project.serviceSlug}-${project.slug}`}
        className="flex-none w-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.334rem)]"
      >
        <ProjectCard project={project} />
      </div>
    ))}
  </motion.div>
);

const ProfileProjects = ({ member }: ProfileProjectsProps) => {
  if (member.projectsVariant === "linkedin") {
    return (
      <section className="py-20 md:py-24 bg-canvas">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="max-w-2xl mx-auto text-center bg-white border border-hairline rounded-block p-10 md:p-14"
          >
            <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">SELECTED WORK</span>
            <h2 className="mb-4">Design Work in Progress</h2>
            <p className="text-ink/70 mb-8">
              A growing body of design contributions across branding, UI/UX and product work.
              Explore the full journey on LinkedIn.
            </p>
            <CtaButton cta={member.primaryCta}>
              <Button className="rounded-pill px-6 sm:px-7 py-5 sm:py-6 h-auto text-sm sm:text-base whitespace-normal max-w-full group">
                <Linkedin className="mr-2 h-4 w-4 flex-shrink-0" />
                Explore My Journey on LinkedIn
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
              </Button>
            </CtaButton>
          </motion.div>
        </div>
      </section>
    );
  }

  if (member.projectsVariant === "portfolio" && member.portfolioUrl) {
    return (
      <section className="py-20 md:py-24 bg-canvas overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">FEATURED PORTFOLIO</span>
            <h2>A Closer Look at My Work</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: easeOut }}
            whileHover={{ scale: 1.01 }}
            className="relative max-w-4xl mx-auto rounded-block overflow-hidden border border-hairline shadow-card group"
          >
            {member.portfolioImage && (
              <img
                src={member.portfolioImage}
                alt={`${member.name} portfolio preview`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-wrap gap-3 justify-center">
              <a href={member.portfolioUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-canvas text-ink hover:bg-surface-soft rounded-pill px-7 py-6 group">
                  Explore Portfolio
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              {member.secondaryPortfolioCta && (
                <CtaButton cta={member.secondaryPortfolioCta}>
                  <Button variant="outline" className="border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 rounded-pill px-7 py-6">
                    {member.secondaryPortfolioCta.label}
                  </Button>
                </CtaButton>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const groups = member.projectGroups && member.projectGroups.length > 1 ? member.projectGroups : null;

  if (groups) {
    return <TabbedProjects groups={groups} />;
  }

  const projects = resolveProjects(member.projects ?? []);

  if (projects.length === 0) return null;

  return (
    <section id="recent-work" className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">SELECTED PROJECTS</span>
          <h2>Recent Work</h2>
        </motion.div>

        <ProjectCardGrid projects={projects} />
      </div>
    </section>
  );
};

interface TabbedProjectsProps {
  groups: NonNullable<FoundingTeamMember["projectGroups"]>;
}

/** Tabbed project switcher used when a member has work across more than one category, e.g. web development and brand identity. */
const TabbedProjects = ({ groups }: TabbedProjectsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = groups[activeIndex];
  const projects = resolveProjects(activeGroup.projects);

  return (
    <section id="recent-work" className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">SELECTED PROJECTS</span>
          <h2>Recent Work</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {groups.map((group, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={group.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-pill px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isActive ? "bg-ink text-inverse-ink" : "bg-surface-soft text-ink/70 hover:text-ink"
                )}
              >
                {group.label}
              </button>
            );
          })}
        </div>

        {projects.length > 0 ? (
          <ProjectCardGrid key={activeGroup.label} projects={projects} />
        ) : (
          <p className="text-center text-ink/60">Case studies for this category are on the way.</p>
        )}
      </div>
    </section>
  );
};

export default ProfileProjects;
