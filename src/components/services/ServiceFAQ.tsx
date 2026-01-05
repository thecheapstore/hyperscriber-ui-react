
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you maintain our brand voice across marketing, content, and development?",
    answer: "We begin with a deep discovery process to understand your brand positioning, target audience, tone, and business goals. This includes reviewing existing content, design assets, and customer touchpoints. Our AI tools are guided by this framework, and every deliverable is reviewed by experienced strategists, designers, or developers to ensure consistency, clarity, and brand alignment across all channels."
  },
  {
    question: "What is your typical turnaround time for services?",
    answer: "Timelines vary depending on the service scope. Lead generation campaigns and paid ads are usually launched within 7 to 10 business days. SEO and social media strategies typically require 2 to 3 weeks for setup. Website, application, or software development timelines depend on project complexity and are clearly defined before execution begins."
  },
  {
    question: "How do you measure performance and results?",
    answer: "We track performance using clear, business-focused metrics. This includes lead volume, cost per lead, conversion rates, SEO rankings, website performance, engagement metrics, and automation efficiency. You receive transparent reports and insights that show what is working, what needs improvement, and how each service contributes to revenue growth."
  },
  {
    question: "Do you offer revisions or ongoing optimization?",
    answer: "Yes. Our process is collaborative and iterative. We include revision cycles to refine messaging, design, or functionality based on feedback. For ongoing services like SEO, paid advertising, social media management, and automation, continuous optimization is built into our workflow to improve results over time."
  },
  {
    question: "How do you understand our industry and business before starting?",
    answer: "We conduct detailed research into your industry, competitors, target customers, and existing systems. This includes keyword research, market analysis, user behavior insights, and technical audits when required. This research-driven approach allows us to create strategies, content, and systems that are relevant, scalable, and aligned with real business needs."
  }
];

const ServiceFAQ = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our services, process, and how we can help your company grow with them.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg bg-white shadow-sm">
                  <AccordionTrigger className="px-6 text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
