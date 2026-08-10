import { motion } from "framer-motion";
import { Layers, MessageCircle, TrendingUp, Cpu, Bot, Handshake } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const reasons = [
  { icon: Layers, title: "Cross-Functional Expertise", description: "One team spanning development, marketing, automation and design, no handoffs between vendors." },
  { icon: MessageCircle, title: "Transparent Communication", description: "You work directly with the specialists on your project, with clear timelines and honest updates." },
  { icon: TrendingUp, title: "Performance-Driven Execution", description: "Every deliverable is judged by the business outcome it produces, not just how it looks." },
  { icon: Cpu, title: "Modern Technology Stack", description: "We build with current, well-supported tools chosen for speed, reliability and longevity." },
  { icon: Bot, title: "AI-First Workflows", description: "AI is built into how we research, build and automate, used to move faster, not to cut corners." },
  { icon: Handshake, title: "Long-Term Partnerships", description: "We aim to be an extension of your team, not a one-off vendor you never hear from again." },
];

const WhyChooseUs = () => {
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
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">
            WHY CLIENTS CHOOSE US
          </span>
          <h2 className="mb-4">A Founding Team, Not a Call Center.</h2>
          <p className="text-lg text-ink/70">
            The advantages of working directly with the people who founded and run Calibre Associates.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white border border-hairline rounded-block p-8 transition-shadow duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-surface-soft text-ink mb-6">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-ink/70">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
