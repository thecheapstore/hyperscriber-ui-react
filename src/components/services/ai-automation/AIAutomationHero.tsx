import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { staggerContainer, fadeUp, easeOut } from '@/lib/motion';
import AutomationHeroDiagram from './AutomationHeroDiagram';

const AIAutomationHero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pb-32 bg-ink overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-accent-magenta/30 blur-[130px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.28 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-block-lilac/30 blur-[140px]"
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center lg:text-left">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 py-1.5 px-4 mb-6 font-mono uppercase text-caption tracking-[0.6px] rounded-pill bg-white/10 text-inverse-ink border border-white/10"
            >
              <Sparkles className="h-3.5 w-3.5" />
              AI Automation &amp; Solutions
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-inverse-ink mb-6 text-[clamp(2rem,1.2rem+3.4vw,3.75rem)] leading-[1.08]">
              Automate Everything.
              <br />
              <span className="text-accent-magenta">Scale Without Hiring.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-inverse-ink/70 mb-10 max-w-xl mx-auto lg:mx-0">
              Custom AI and automation systems that connect your CRM, phones, calendars and tools
              into one workflow — so your business runs itself in the background.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto rounded-pill px-8 py-6 text-base group bg-white text-ink hover:bg-white/90 id-calendly-booking">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button variant="outline" className="w-full sm:w-auto rounded-pill px-8 py-6 text-base border-white/25 bg-transparent text-inverse-ink hover:bg-white/10" asChild>
                <a href="#why-highlevel-n8n">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  See Automation Demo
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          >
            <AutomationHeroDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationHero;
