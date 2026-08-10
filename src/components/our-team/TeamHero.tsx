import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer, easeOut } from "@/lib/motion";

const TeamHero = () => {
  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, ease: easeOut }}
        className="absolute -top-24 -left-24 w-[480px] h-[480px] bg-block-lilac rounded-full mix-blend-multiply filter blur-[90px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 0.4, ease: easeOut }}
        className="absolute -bottom-32 -right-16 w-[560px] h-[560px] bg-block-mint rounded-full mix-blend-multiply filter blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[15%] w-24 h-24 bg-block-coral/40 rounded-full blur-[40px]"
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-surface-soft text-ink border border-hairline"
          >
            FOUNDING TEAM
          </motion.span>

          <motion.h1 variants={fadeUp} className="mb-6">
            Built by Specialists.
            <br />
            <span className="text-ink font-bold">Driven by Results.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Meet the specialists behind Calibre Associates. A multidisciplinary founding team
            combining software engineering, marketing, automation, design and content to help
            businesses grow through modern digital solutions.
          </motion.p>

          <motion.p variants={fadeUp} className="text-base text-ink/60 max-w-2xl mx-auto">
            When you work with us, you work directly with the people building your project,
            not layers of account managers.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#team-members"
            className="flex flex-col items-center text-ink/70 hover:text-ink transition"
          >
            <span className="mb-2 text-sm">Meet the founding team</span>
            <ArrowDown className="animate-bounce" size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHero;
