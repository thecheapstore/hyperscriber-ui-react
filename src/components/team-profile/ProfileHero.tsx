import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp, easeOut } from "@/lib/motion";
import type { FoundingTeamMember } from "@/data/team/types";
import CtaButton from "./CtaButton";

interface ProfileHeroProps {
  member: FoundingTeamMember;
}

const ProfileHero = ({ member }: ProfileHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pb-24 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, ease: easeOut }}
        className="absolute -top-20 -right-24 w-[460px] h-[460px] bg-block-lilac rounded-full mix-blend-multiply filter blur-[90px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: easeOut }}
        className="absolute -bottom-28 -left-16 w-[500px] h-[500px] bg-block-mint rounded-full mix-blend-multiply filter blur-[100px]"
      />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {member.roleLine && (
              <motion.span
                variants={fadeUp}
                className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-surface-soft text-ink border border-hairline"
              >
                {member.roleLine.toUpperCase()}
              </motion.span>
            )}

            <motion.h1 variants={fadeUp} className="mb-3">
              {member.name}
            </motion.h1>
            <motion.p variants={fadeUp} className={`text-xl text-ink/60 ${member.heroSupportingLine ? "mb-3" : "mb-8"}`}>
              {member.heroTagline ?? member.title}
            </motion.p>

            {member.heroSupportingLine && (
              <motion.p variants={fadeUp} className="text-sm font-medium text-ink/50 mb-8">
                {member.heroSupportingLine}
              </motion.p>
            )}

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
              {member.heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="font-mono text-[10px] uppercase tracking-[0.5px] px-2.5 py-1.5 rounded-pill bg-surface-soft text-ink/70 border border-hairline"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <CtaButton cta={member.primaryCta}>
                <Button className="rounded-pill px-6 py-5 group">
                  {member.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CtaButton>
              <CtaButton cta={member.secondaryCta}>
                <Button variant="outline" className="rounded-pill px-6 py-5">
                  {member.secondaryCta.label}
                </Button>
              </CtaButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-block overflow-hidden border border-hairline shadow-card">
              <img
                src={member.image}
                alt={member.heroImageAlt ?? member.name}
                loading="eager"
                // @ts-expect-error -- fetchpriority isn't in this React version's JSX types yet, but is a valid HTML attribute
                fetchpriority="high"
                decoding="async"
                className={`w-full h-full object-cover ${member.imagePosition ?? "object-top"}`}
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-block bg-block-lilac/60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
