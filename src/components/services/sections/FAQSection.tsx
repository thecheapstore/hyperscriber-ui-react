import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

const FAQSection = ({
  faqs,
  eyebrow = 'FAQS',
  title = 'Frequently Asked Questions',
  description,
  className = 'bg-canvas',
}: FAQSectionProps) => {
  return (
    <section className={`py-20 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            {eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">{title}</motion.h2>
          {description && (
            <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
              {description}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl mx-auto bg-white border border-hairline rounded-block px-6 md:px-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border-hairline last:border-b-0">
                <AccordionTrigger className="text-left text-base md:text-lg font-bold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ink/70 text-body-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
