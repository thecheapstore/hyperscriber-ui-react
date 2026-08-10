import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import type { TalentCategory, TalentIntro } from "@/data/team/types";

interface TalentNetworkSectionProps {
  intro: TalentIntro;
  categories: TalentCategory[];
}

const TalentNetworkSection = ({ intro, categories }: TalentNetworkSectionProps) => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">
            TALENT MANAGEMENT
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-5">
            {intro.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-ink/70 leading-relaxed">
            {intro.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-canvas border border-hairline rounded-block p-7 transition-shadow duration-300 hover:shadow-card"
            >
              <h3 className="text-lg font-bold mb-2">{category.title}</h3>
              <p className="text-sm text-ink/70">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center text-sm text-ink/60 mt-10"
        >
          This capability works alongside Calibre Associates'{" "}
          <Link to="/services/social-media-marketing" className="font-semibold text-ink underline underline-offset-2 hover:no-underline">
            social media marketing and content services
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
};

export default TalentNetworkSection;
