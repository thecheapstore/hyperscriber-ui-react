import { motion } from "framer-motion";
import { Code2, Megaphone, Workflow, Palette, Sparkles, Brain, Gauge } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const disciplines = [
  { icon: Code2, label: "Development" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Workflow, label: "Automation" },
  { icon: Palette, label: "Design" },
  { icon: Sparkles, label: "Branding" },
  { icon: Brain, label: "AI" },
  { icon: Gauge, label: "Performance" },
];

const TeamPhilosophy = () => {
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
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">
            HOW WE WORK
          </span>
          <h2 className="mb-4">Different Specialists. One Mission.</h2>
          <p className="text-lg text-ink/70">
            Every project we take on combines expertise across Development, Marketing,
            Automation, Design, Branding, AI and Performance — one team, working toward the
            same outcome for your business.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {disciplines.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex flex-col items-center gap-3 bg-canvas border border-hairline rounded-block px-6 py-8 w-36 transition-shadow duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-surface-soft text-ink">
                <item.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold text-ink">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPhilosophy;
