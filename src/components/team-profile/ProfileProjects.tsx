import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { findProject } from "@/data/portfolio";
import { staggerContainer, fadeUp, viewportOnce, easeOut } from "@/lib/motion";
import type { FoundingTeamMember } from "@/data/team/types";
import CtaButton from "./CtaButton";

interface ProfileProjectsProps {
  member: FoundingTeamMember;
}

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
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex justify-center">
              <a href={member.portfolioUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-canvas text-ink hover:bg-surface-soft rounded-pill px-7 py-6 group">
                  Explore Portfolio
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const projects = (member.projects ?? [])
    .map((ref) => findProject(ref.serviceSlug, ref.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (projects.length === 0) return null;

  return (
    <section className="py-20 md:py-24 bg-canvas">
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={`${project.serviceSlug}-${project.slug}`} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileProjects;
