
import React from 'react';
import FAQAccordion from './sections/FAQAccordion';
import { defaultFaqs } from './data/faqs';

const ServiceFAQ = () => {
  return <FAQAccordion faqs={defaultFaqs} anchorId="FAQ" />;
};

export default ServiceFAQ;
