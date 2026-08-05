import { motion } from 'framer-motion';
import { staggerContainerFast, fadeUp, viewportOnce } from '@/lib/motion';

interface PlatformsGridProps {
  platforms: string[];
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: 'light' | 'dark';
}

const PlatformsGrid = ({
  platforms,
  eyebrow = 'INTEGRATIONS',
  title = 'Platforms We Use',
  description = 'Best-in-class tools, connected into one system.',
  tone = 'light',
}: PlatformsGridProps) => {
  const isDark = tone === 'dark';

  return (
    <section className={`py-20 md:py-24 ${isDark ? 'bg-ink' : 'bg-canvas'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span
            className={`eyebrow inline-block py-1 px-3 mb-5 rounded-pill ${
              isDark ? 'bg-white/10 text-inverse-ink' : 'bg-surface-soft'
            }`}
          >
            {eyebrow}
          </span>
          <h2 className={`mb-4 ${isDark ? 'text-inverse-ink' : ''}`}>{title}</h2>
          <p className={`text-body-lg ${isDark ? 'text-inverse-ink/70' : 'text-ink/70'}`}>{description}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerFast}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {platforms.map((platform) => (
            <motion.span
              key={platform}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className={`px-4 py-2.5 rounded-pill border text-sm font-medium transition-shadow duration-200 hover:shadow-card ${
                isDark
                  ? 'bg-white/[0.05] border-white/10 text-inverse-ink/85'
                  : 'bg-white border-hairline text-ink/80'
              }`}
            >
              {platform}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformsGrid;
