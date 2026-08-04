import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

interface ProfilePhilosophyProps {
  heading: string;
  points: string[];
}

const ProfilePhilosophy = ({ heading, points }: ProfilePhilosophyProps) => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">
            PHILOSOPHY
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-10">
            {heading}
          </motion.h2>

          <div className="space-y-4">
            {points.map((point) => (
              <motion.div
                key={point}
                variants={fadeUp}
                className="flex items-center gap-3 bg-surface-soft border border-hairline rounded-lg px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 text-ink shrink-0" />
                <span className="font-medium text-ink">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfilePhilosophy;
