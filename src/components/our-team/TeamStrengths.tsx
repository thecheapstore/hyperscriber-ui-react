
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, TrendingUp, Award, Clock, BarChart2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Code } from "lucide-react";

const benefits = [
  {
    title: "Experienced Development Team",
    description: "Our team consists of skilled web and app developers with real world experience building fast, secure, and scalable digital products.",
    icon: <Code />
  },
  {
    title: "Design First Approach",
    description: "We combine clean UI UX design with usability principles to ensure every product looks professional and converts users effectively.",
    icon: <Layout />
  },
  {
    title: "Automation & Integrations",
    description: "From CRM automation to API integrations, our team builds systems that eliminate manual work and improve operational efficiency.",
    icon: <Zap />
  },
  {
    title: "Performance Focused Builds",
    description: "Every website and web application is optimized for speed, SEO readiness, and long term scalability.",
    icon: <TrendingUp />
  },
  {
    title: "Clear Communication",
    description: "We believe in transparency, regular updates, and collaborative execution throughout the project lifecycle.",
    icon: <MessageSquare />
  },
  {
    title: "Long Term Partnership",
    description: "We work as an extension of your business, not just a vendor delivering one off projects.",
    icon: <Handshake />
  }
];

const PricingBenefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits of HyperScriber
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge AI technology with human creativity to deliver exceptional content that drives real business results.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="hover-scale"
            >
              <Card className="h-full border-0 shadow-md rounded-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-blue-50">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingBenefits;
