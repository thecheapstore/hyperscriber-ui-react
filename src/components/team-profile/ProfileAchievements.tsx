import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

interface ProfileAchievementsProps {
  heading: string;
  items: string[];
}

const ProfileAchievements = ({ heading, items }: ProfileAchievementsProps) => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">MILESTONES</span>
          <h2>{heading}</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {items.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex items-start gap-3 bg-canvas border border-hairline rounded-block p-6 transition-shadow duration-300 hover:shadow-card"
            >
              <Award className="h-5 w-5 text-ink shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-ink/80">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileAchievements;
