import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/lib/motion";

const TeamFinalCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: easeOut }}
          viewport={{ once: true }}
          className="bg-block-navy rounded-block overflow-hidden relative"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -right-10 w-64 h-64 bg-white/5 rounded-full blur-[70px]"
          />
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-20 -left-10 w-72 h-72 bg-white/5 rounded-full blur-[80px]"
          />

          <div className="relative z-10 p-8 sm:p-10 md:p-14 lg:p-16 text-center">
            <span className="inline-block py-1 px-3 mb-5 font-mono uppercase text-caption tracking-[0.60px] rounded-pill bg-white/10 text-inverse-ink">
              WORK WITH US
            </span>
            <h2 className="text-inverse-ink max-w-3xl mx-auto mb-6">
              Let's Build Something Exceptional Together.
            </h2>
            <p className="text-inverse-ink/80 text-body-lg mb-10 max-w-2xl mx-auto">
              Whether you're launching something new, scaling what already works, or modernizing
              an outdated system — our founding team is ready to help you build it right.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer">
                <Button className="bg-canvas text-ink hover:bg-surface-soft rounded-pill px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base group transition-all duration-300 id-calendly-booking">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-inverse-ink hover:bg-white/10 rounded-pill px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamFinalCTA;
