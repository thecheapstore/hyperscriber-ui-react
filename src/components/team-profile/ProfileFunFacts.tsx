import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

interface ProfileFunFactsProps {
  facts: string[];
}

const ProfileFunFacts = ({ facts }: ProfileFunFactsProps) => {
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
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">FUN FACTS</span>
          <h2>A Little Beyond the Résumé</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
        >
          {facts.map((fact, index) => (
            <motion.div key={fact} variants={fadeUp}>
              <motion.div
                animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
                transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-surface-soft border border-hairline rounded-block p-6 text-center h-full"
              >
                <p className="text-base font-medium text-ink">{fact}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileFunFacts;
