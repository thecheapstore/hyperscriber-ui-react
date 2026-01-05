import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
            OUR SERVICES
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Scalable Digital Services Built for Growth
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            We help businesses attract the right audience, convert leads efficiently,
            and scale operations through strategy driven marketing, automation, and development.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Lead Generation & Growth Marketing",
              "Automation & CRM Systems",
              "Web & App Development",
              "SEO & Performance Optimization",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
              >
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;