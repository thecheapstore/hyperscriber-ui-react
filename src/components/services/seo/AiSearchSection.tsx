import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const PLATFORMS = ['Google AI Overviews', 'ChatGPT', 'Gemini', 'Claude', 'Perplexity'];

const FOCUS_AREAS = [
  'Entity Optimization',
  'Semantic Search',
  'Topical Authority',
  'Structured Data',
  'Helpful Content',
  'E-E-A-T Principles',
];

const AiSearchSection = () => (
  <section className="py-20 md:py-24 bg-block-mint">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto"
      >
        <div>
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas/60">
            AI SEARCH OPTIMIZATION
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-5">
            Built for Search, Not Just Google
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg mb-8">
            Search is no longer just a results page. We optimize content so it performs across traditional search
            engines and the growing set of AI-powered search experiences people use to find local businesses today,
            without exaggerated claims or guarantees about how any individual platform ranks content.
          </motion.p>

          <motion.div variants={fadeUp}>
            <span className="font-mono text-caption uppercase tracking-[0.6px] text-ink/50 block mb-4">Where We Optimize For</span>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center gap-1.5 rounded-pill bg-canvas/70 border border-ink/10 px-3.5 py-1.5 text-sm font-medium text-ink"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {platform}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="bg-canvas rounded-block p-8 md:p-10 shadow-card">
          <span className="font-mono text-caption uppercase tracking-[0.6px] text-ink/40 block mb-5">What We Focus On</span>
          <ul className="space-y-4">
            {FOCUS_AREAS.map((area) => (
              <li key={area} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-ink flex-shrink-0 mt-0.5" />
                <span className="text-ink/80">{area}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AiSearchSection;
