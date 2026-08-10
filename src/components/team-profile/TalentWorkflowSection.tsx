import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce, easeOut } from "@/lib/motion";
import type { TalentWorkflowStep } from "@/data/team/types";
import WorkflowChain from "@/components/services/shared/WorkflowChain";

interface TalentWorkflowSectionProps {
  steps: TalentWorkflowStep[];
}

const TalentWorkflowSection = ({ steps }: TalentWorkflowSectionProps) => {
  return (
    <section className="relative py-20 md:py-24 bg-block-navy overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={viewportOnce}
        transition={{ duration: 1.5, ease: easeOut }}
        className="absolute -top-24 -right-16 w-[420px] h-[420px] bg-white/5 rounded-full blur-[100px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={viewportOnce}
        transition={{ duration: 1.5, delay: 0.3, ease: easeOut }}
        className="absolute -bottom-28 -left-20 w-[480px] h-[480px] bg-white/5 rounded-full blur-[110px]"
      />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block py-1.5 px-4 mb-5 font-mono uppercase text-caption tracking-[0.6px] rounded-pill bg-white/10 text-inverse-ink">
            HOW IT WORKS
          </span>
          <h2 className="text-inverse-ink">How Talent Management Works</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <WorkflowChain steps={steps} tone="dark" />
        </motion.div>
      </div>
    </section>
  );
};

export default TalentWorkflowSection;
