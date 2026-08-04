import { motion } from "framer-motion";
import { staggerContainerFast, fadeUp, viewportOnce } from "@/lib/motion";

interface ProfileBeyondProps {
  heading: string;
  items: string[];
}

const ProfileBeyond = ({ heading, items }: ProfileBeyondProps) => {
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
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">INTERESTS</span>
          <h2>{heading}</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerFast}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {items.map((item) => (
            <motion.span
              key={item}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="px-5 py-3 rounded-pill bg-white border border-hairline text-sm font-medium text-ink/80 transition-shadow duration-200 hover:shadow-card"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileBeyond;
