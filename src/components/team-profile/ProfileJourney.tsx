import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce, easeOut } from "@/lib/motion";

interface ProfileJourneyProps {
  steps: string[];
}

const ProfileJourney = ({ steps }: ProfileJourneyProps) => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">MY JOURNEY</span>
          <h2>From First Steps to Founding Team</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-hairline md:-translate-x-1/2" aria-hidden />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={`${index}-${step}`}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: easeOut }}
                  className={`relative flex items-center gap-6 pl-12 md:pl-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-canvas" />
                  </div>
                  <div className={`md:w-[calc(50%-2rem)] ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-block bg-surface-soft border border-hairline rounded-pill px-5 py-2.5">
                      <span className="font-mono text-caption text-ink/40 mr-2">{String(index + 1).padStart(2, "0")}</span>
                      <span className="font-medium text-ink">{step}</span>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" aria-hidden />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileJourney;
