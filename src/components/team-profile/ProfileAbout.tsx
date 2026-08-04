import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

interface ProfileAboutProps {
  heading: string;
  paragraphs: string[];
}

const ProfileAbout = ({ heading, paragraphs }: ProfileAboutProps) => {
  return (
    <section className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">
            ABOUT ME
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-8">
            {heading}
          </motion.h2>
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-lg text-ink/70 leading-relaxed">
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileAbout;
