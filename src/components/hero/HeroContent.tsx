
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/routerLink';

const HeroContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto text-center relative z-10"
    >
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="inline-block py-1.5 px-4 mb-5 sm:mb-6 font-mono uppercase text-caption tracking-[0.54px] rounded-pill bg-surface-soft text-ink border border-hairline"
      >
        Digital Marketing and Automation Experts
      </motion.span>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-6 py-2"
        style={{ fontSize: 'clamp(2.25rem, 1.4rem + 3.6vw, 4.5rem)' }}
      >
        Digital Marketing Agency in India and the USA <span className="text-ink font-bold">That Brings You More Customers</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-body-lg text-ink/70 mb-8 max-w-2xl mx-auto"
      >
        Calibre Associates is a digital marketing agency for small business and growing brands. We join website development, local SEO, social media marketing, paid advertising, video editing and AI automation into one connected system, so more of the people who find you become paying customers. <br/> From tree service and landscaping companies in Buffalo and Rochester to startups across India, our team in Lucknow and Buffalo builds fast, search ready websites and marketing you can measure.
      </motion.p>

      {/* Social proof element with improved spacing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mb-10 flex flex-wrap gap-3 justify-center"
      >
        <div className="flex items-center gap-2 bg-canvas px-4 py-2 rounded-pill border border-hairline">
          <CheckCircle size={18} className="text-ink" />
          <span className="text-sm font-medium">SEO and performance focused execution</span>
        </div>
        <div className="flex items-center gap-2 bg-canvas px-4 py-2 rounded-pill border border-hairline">
          <CheckCircle size={18} className="text-ink" />
          <span className="text-sm font-medium">Website development and web applications</span>
        </div>
        <div className="flex items-center gap-2 bg-canvas px-4 py-2 rounded-pill border border-hairline">
          <CheckCircle size={18} className="text-ink" />
          <span className="text-sm font-medium">AI automation and workflow efficiency</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto rounded-pill px-7 sm:px-9 py-6 sm:py-7 text-base sm:text-lg id-calendly-booking">
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 sm:h-6 w-5 sm:w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
        <Button
          variant="outline"
          className="w-full sm:w-auto rounded-pill px-7 sm:px-9 py-6 sm:py-7 text-base sm:text-lg"
          asChild
        >
          <Link to="/services">
            View Our Services
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
