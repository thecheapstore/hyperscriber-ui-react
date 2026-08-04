import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/lib/motion";
import type { CtaLink } from "@/data/team/types";
import CtaButton from "./CtaButton";

interface ProfileFinalCTAProps {
  heading: string;
  buttons: CtaLink[];
}

const ProfileFinalCTA = ({ heading, buttons }: ProfileFinalCTAProps) => {
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
            <h2 className="text-inverse-ink max-w-3xl mx-auto mb-10">{heading}</h2>

            <div className="flex flex-wrap gap-4 justify-center">
              {buttons.map((cta, index) => (
                <CtaButton key={cta.label} cta={cta}>
                  {index === 0 ? (
                    <Button className="bg-canvas text-ink hover:bg-surface-soft rounded-pill px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base group transition-all duration-300">
                      {cta.label}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="border-white/30 bg-transparent text-inverse-ink hover:bg-white/10 rounded-pill px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base"
                    >
                      {cta.label}
                    </Button>
                  )}
                </CtaButton>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileFinalCTA;
