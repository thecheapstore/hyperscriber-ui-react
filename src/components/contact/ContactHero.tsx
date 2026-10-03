
import { motion } from 'framer-motion';
import { CheckCircle, ArrowDown } from 'lucide-react';
import { Link } from '@/lib/routerLink';

const ContactHero = () => {
    return (
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <span className="inline-block py-1.5 px-4 text-xs font-semibold tracking-wider rounded-full bg-surface-soft text-ink border border-hairline">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="mb-6">
              Contact Calibre Associates for a <span className="text-ink font-bold">Free Digital Marketing Consultation</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
              Talk to our digital marketing agency in India and the USA about website development, SEO, paid advertising or AI automation for your small business. Tell us where you are today and we will recommend what to fix first.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle size={18} className="text-ink" />
                <span className="text-sm font-medium">Fast Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle size={18} className="text-ink" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle size={18} className="text-ink" />
                <span className="text-sm font-medium">Customized Solutions</span>
              </div>
            </motion.div>
            <p className="text-ink/70 max-w-2xl mx-auto">
              Not sure where to start? Explore our{' '}
              <Link to="/services/website-development" className="text-ink underline underline-offset-4 hover:opacity-70">
                website development
              </Link>
              ,{' '}
              <Link to="/services/seo" className="text-ink underline underline-offset-4 hover:opacity-70">
                local SEO
              </Link>{' '}
              and{' '}
              <Link to="/services/ai-automation-solutions" className="text-ink underline underline-offset-4 hover:opacity-70">
                AI automation
              </Link>{' '}
              services, read our{' '}
              <Link to="/faq" className="text-ink underline underline-offset-4 hover:opacity-70">
                digital marketing FAQs
              </Link>{' '}
              or browse our{' '}
              <Link to="/portfolio" className="text-ink underline underline-offset-4 hover:opacity-70">
                case studies
              </Link>
              .
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <a 
              href="#contact-form" 
              className="flex flex-col items-center text-ink/70 hover:text-ink transition-colors"
            >
              <span className="mb-2 font-medium">Contact Us</span>
              <ArrowDown className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>
    );
  };

export default ContactHero;
