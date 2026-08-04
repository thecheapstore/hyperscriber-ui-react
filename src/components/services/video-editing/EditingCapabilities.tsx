import { motion } from 'framer-motion';
import {
  Film,
  Scissors,
  Instagram,
  PlaySquare,
  Music2,
  Wand2,
  Captions,
  PenTool,
  Package,
  Mic,
  Rocket,
  Bot,
  Palette,
  AudioLines,
} from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const CAPABILITIES = [
  { label: 'Long-form Editing', icon: Film },
  { label: 'Short-form Editing', icon: Scissors },
  { label: 'Reels', icon: Instagram },
  { label: 'Shorts', icon: PlaySquare },
  { label: 'TikTok', icon: Music2 },
  { label: 'Motion Graphics', icon: Wand2 },
  { label: 'Subtitles', icon: Captions },
  { label: 'Brand Graphics', icon: PenTool },
  { label: 'Product Videos', icon: Package },
  { label: 'Talking Head Videos', icon: Mic },
  { label: 'Promotional Videos', icon: Rocket },
  { label: 'AI Video Editing', icon: Bot },
  { label: 'Color Grading', icon: Palette },
  { label: 'Audio Enhancement', icon: AudioLines },
];

const EditingCapabilities = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            EDITING CAPABILITIES
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">Everything We Edit, In-House</motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            One team covering the full range of formats and finishing work modern content needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4"
        >
          {CAPABILITIES.map((capability) => (
            <motion.div
              key={capability.label}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex flex-col items-center gap-3 bg-canvas border border-hairline rounded-block px-5 py-7 w-36 transition-shadow duration-300 hover:shadow-card"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-soft text-ink">
                <capability.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-ink text-center">{capability.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EditingCapabilities;
