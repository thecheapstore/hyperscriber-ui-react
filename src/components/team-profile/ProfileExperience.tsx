import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import type { ExperienceItem } from "@/data/team/types";

interface ProfileExperienceProps {
  items: ExperienceItem[];
}

const ProfileExperience = ({ items }: ProfileExperienceProps) => {
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
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">EXPERIENCE</span>
          <h2>Where I've Worked</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-2xl mx-auto space-y-4"
        >
          {items.map((item) => (
            <motion.div
              key={`${item.role}-${item.org}`}
              variants={fadeUp}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 bg-white border border-hairline rounded-lg px-6 py-5"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-surface-soft shrink-0">
                <Briefcase className="h-5 w-5 text-ink" />
              </div>
              <div>
                <p className="font-bold text-ink">{item.role}</p>
                <p className="text-sm text-ink/60">{item.org}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileExperience;
