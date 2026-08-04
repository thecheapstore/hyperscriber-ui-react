import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Shirt,
  Sun,
  Gem,
  Hotel,
  Building2,
  Megaphone,
  Crown,
  UserCircle2,
  Rocket,
  Share2,
  Video,
} from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce, easeOut } from "@/lib/motion";

interface ProfileIndustriesProps {
  items: string[];
}

const ICONS: Record<string, LucideIcon> = {
  Beauty: Sparkles,
  Fashion: Shirt,
  Lifestyle: Sun,
  Jewellery: Gem,
  Hospitality: Hotel,
  "Real Estate": Building2,
  "Commercial Advertising": Megaphone,
  "Luxury Brands": Crown,
  "Personal Branding": UserCircle2,
  "Digital Campaigns": Rocket,
  "Social Media": Share2,
  "UGC Campaigns": Video,
};

const ProfileIndustries = ({ items }: ProfileIndustriesProps) => {
  return (
    <section className="relative py-20 md:py-24 bg-block-navy overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={viewportOnce}
        transition={{ duration: 1.5, ease: easeOut }}
        className="absolute -top-24 -right-16 w-[420px] h-[420px] bg-white/5 rounded-full blur-[100px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={viewportOnce}
        transition={{ duration: 1.5, delay: 0.3, ease: easeOut }}
        className="absolute -bottom-28 -left-20 w-[480px] h-[480px] bg-white/5 rounded-full blur-[110px]"
      />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block py-1.5 px-4 mb-5 font-mono uppercase text-caption tracking-[0.6px] rounded-pill bg-white/10 text-inverse-ink">
            INDUSTRIES
          </span>
          <h2 className="text-inverse-ink">Where I've Created Impact</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-4xl mx-auto"
        >
          {items.map((item) => {
            const Icon = ICONS[item] ?? Sparkles;
            return (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center gap-4 text-center bg-white/[0.04] border border-white/10 rounded-block px-5 py-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/25 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-inverse-ink transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-inverse-ink/90">{item}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileIndustries;
