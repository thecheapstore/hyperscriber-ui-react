import { motion } from "framer-motion";
import { CheckCircle, ArrowDown } from "lucide-react";

const TeamHero = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            OUR TEAM
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Meet the People Behind{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Calibre Associates
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            We are a multidisciplinary team of developers, designers, automation
            experts, and strategists building scalable digital systems that
            drive real business growth.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {[
              "Web & App Development",
              "UI/UX & Product Design",
              "Automation & CRM Systems",
              "Growth-Focused Execution",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
              >
                <CheckCircle size={18} className="text-blue-500" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="#team-members"
            className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition"
          >
            <span className="mb-2">Meet our team</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHero;