import React from "react";
import { motion } from "framer-motion";
import { Search, Target, PenTool, BarChart3 } from "lucide-react";

const steps = [
  {
    title: "Discovery & Research",
    description:
      "We start by understanding your business goals, target audience, competitors, and growth opportunities to ensure every decision is data driven.",
    icon: <Search className="h-7 w-7 text-blue-600" />,
  },
  {
    title: "Strategy & Planning",
    description:
      "Based on insights, we define the right content, channels, messaging, and timelines aligned with your marketing and revenue objectives.",
    icon: <Target className="h-7 w-7 text-blue-600" />,
  },
  {
    title: "Execution & Delivery",
    description:
      "Our team executes with precision, delivering high quality content, campaigns, and systems while keeping communication clear and consistent.",
    icon: <PenTool className="h-7 w-7 text-blue-600" />,
  },
  {
    title: "Tracking & Optimization",
    description:
      "We monitor performance, analyze results, and continuously optimize to improve engagement, conversions, and long term growth.",
    icon: <BarChart3 className="h-7 w-7 text-blue-600" />,
  },
];

const ServiceProcess = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1.5 px-4 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
            OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Deliver Consistent Results
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured, transparent process designed to keep projects efficient,
            predictable, and focused on measurable business outcomes.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;