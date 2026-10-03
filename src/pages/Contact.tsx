
import React from 'react';
import Seo from '@/components/seo/Seo';
import { SITE_URL, absUrl, breadcrumbSchema } from '@/lib/seo';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import emailjs from '@emailjs/browser';
import ContactHero from '@/components/contact/ContactHero';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { pageTransition } from '@/lib/motion';

const PAGE_TITLE = 'Contact Calibre Associates | Free Digital Marketing Consultation';
const PAGE_DESCRIPTION =
  'Contact Calibre Associates, a digital marketing agency in India and the USA, for a free consultation on website development, SEO, paid ads and AI automation.';

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${absUrl('/contact')}#webpage`,
  url: absUrl('/contact'),
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  inLanguage: 'en',
  mainEntity: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Calibre Associates',
    url: absUrl('/'),
    email: 'info@calibreassociates.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+17163551231',
        contactType: 'sales',
        areaServed: 'US',
        email: 'info@calibreassociates.com',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+919792848868',
        contactType: 'sales',
        areaServed: 'IN',
        email: 'info@calibreassociates.com',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  },
};

const Contact = () => {

  React.useEffect(() => {
    emailjs.init('4COZc8xvshn3d5SLB');
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/contact"
        jsonLd={[
          contactPageSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen mt-16">
        <ContactHero />
        
        
        <section id="contact-form" className="py-24 bg-block-lime">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <ContactForm />
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        
        
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Contact;
