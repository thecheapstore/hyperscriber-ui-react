import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { viewportOnce } from '@/lib/motion';
import type { Faq } from '../data/faqs';

interface FAQAccordionProps {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
  description?: string;
  anchorId?: string;
}

const FAQAccordion = ({
  faqs,
  title = 'Frequently Asked Questions',
  eyebrow = 'FAQ',
  description = 'Get answers to common questions about our services, process, and how we can help your company grow with them.',
  anchorId = 'faq',
}: FAQAccordionProps) => {
  return (
    <section className="py-20 md:py-24 bg-block-lime">
      <div id={anchorId} className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
            {eyebrow}
          </span>
          <h2 className="mb-4">{title}</h2>
          <p className="text-lg text-ink/70">{description}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                viewport={viewportOnce}
              >
                <AccordionItem value={`item-${index}`} className="border border-hairline rounded-lg bg-canvas">
                  <AccordionTrigger className="px-6 text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-ink/70">
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

export default FAQAccordion;
