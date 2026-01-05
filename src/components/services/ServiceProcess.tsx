
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Business Alignment',
    description:
      'We start by understanding your business model, growth goals, target audience, and current digital presence to define a clear execution roadmap.',
    details: [
      'Business goals and revenue model analysis',
      'Ideal customer and buyer journey mapping',
      'Competitor and market research',
      'Audit of existing marketing, content, and systems',
      'Clear service and growth alignment strategy'
    ]
  },
  {
    number: '02',
    title: 'Strategy, Systems & Architecture',
    description:
      'Based on insights, we design a scalable strategy that combines marketing, content, development, and automation to support long-term growth.',
    details: [
      'Lead generation and paid advertising strategy',
      'SEO and social media growth planning',
      'Website, app, or software architecture planning',
      'Automation and AI workflow mapping',
      'Content and UX strategy definition'
    ]
  },
  {
    number: '03',
    title: 'Execution & Implementation',
    description:
      'Our team executes across development, marketing, content, and automation with a focus on performance, conversions, and scalability.',
    details: [
      'Website, app, or software development',
      'SEO, paid ads, and social media execution',
      'Content creation including video-first marketing',
      'UI UX design and optimization',
      'Automation and AI system implementation'
    ]
  },
  {
    number: '04',
    title: 'Optimization, Reporting & Scale',
    description:
      'We track performance, refine strategies, and continuously optimize systems to improve ROI, efficiency, and business growth.',
    details: [
      'Performance tracking and analytics',
      'Conversion rate and funnel optimization',
      'SEO, ads, and content performance reporting',
      'Automation efficiency improvements',
      'Ongoing optimization and scaling support'
    ]
  }
];

const ServiceProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="process" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Build, Optimize, and Scale Growth
          </h2>
          <p className="text-lg text-muted-foreground">
            Strategy First. Execution Always.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`flex flex-col md:flex-row gap-8 mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/3">
                <div className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="text-5xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="bg-white p-6 rounded-xl shadow-md h-full">
                  <h4 className="text-xl font-semibold mb-4">What's included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;
