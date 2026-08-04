import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import type { DoCard } from "@/data/team/types";

interface ProfileWhatIDoProps {
  items: DoCard[];
}

const ProfileWhatIDo = ({ items }: ProfileWhatIDoProps) => {
  return (
    <section className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">WHAT I DO</span>
          <h2>Where I Add the Most Value</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white border border-hairline rounded-block p-7 transition-shadow duration-300 hover:shadow-card"
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-ink/70">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileWhatIDo;
