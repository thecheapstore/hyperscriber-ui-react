
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto text-center relative z-10"
    >
      <motion.span 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="inline-block py-1.5 px-4 mb-5 sm:mb-6 text-sm font-bold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm"
      >
        Digital Marketing and Automation Experts
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 backdrop-blur-sm rounded-lg py-2"
      >
        Your <span className="text-5xl sm:text-6xl lg:text-7xl text-gradient bg-gradient-to-r from-blue-600 to-purple-600"> Modern Business</span>
        <br/>
        Deserves Smarter Digital Growth
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto backdrop-blur-sm bg-white/30 rounded-lg p-3"
      >
        We build high performance websites, SEO driven marketing systems, automation workflows, AI powered solutions, and content strategies designed to increase visibility, engagement, and revenue. <br/> Calibre Associates helps businesses scale through data driven digital strategy, conversion focused design, intelligent automation, and measurable marketing execution across web, search, and paid channels.
      </motion.p>
      
      {/* Social proof element with improved spacing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mb-10 flex flex-wrap gap-3 justify-center"
      >
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
          <CheckCircle size={18} className="text-blue-500" />
          <span className="text-sm font-medium">SEO and performance focused execution</span>
        </div>
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
          <CheckCircle size={18} className="text-blue-500" />
          <span className="text-sm font-medium">High performance websites and web applications</span>
        </div>
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
          <CheckCircle size={18} className="text-blue-500" />
          <span className="text-sm font-medium">Automation and AI driven efficiency</span>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto rounded-full px-7 sm:px-9 py-6 sm:py-7 shadow-lg hover:shadow-xl transition-all text-base sm:text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 relative overflow-hidden group id-calendly-booking">
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 sm:h-6 w-5 sm:w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto rounded-full px-7 sm:px-9 py-6 sm:py-7 border-2 text-base sm:text-lg hover:bg-blue-50/50 bg-white/80 backdrop-blur-sm"
          asChild
        >
          <Link to="/services">
            View Services
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
