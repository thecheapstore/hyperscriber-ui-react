
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import emailjs from '@emailjs/browser';
import ContactHero from '@/components/contact/ContactHero';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { pageTransition } from '@/lib/motion';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://www.calibreassociates.com/favicons/android-chrome-512x512.png';
const PAGE_TITLE = 'Contact Calibre Associates | Digital Marketing, Development & AI Solutions';
const PAGE_DESCRIPTION =
  'Contact Calibre Associates, a digital marketing agency serving businesses in India and the United States, to discuss website development, SEO, paid advertising, social media marketing, video editing, and AI automation for small businesses. Let’s build a scalable growth system for your business.';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: PAGE_TITLE,
  url: `${SITE_URL}/contact`,
};

const Contact = () => {

  React.useEffect(() => {
    emailjs.init('4COZc8xvshn3d5SLB');
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Helmet>
  <meta charSet="utf-8" />
  <title>{PAGE_TITLE}</title>
  <meta name="description" content={PAGE_DESCRIPTION} />
  <link rel="canonical" href={`${SITE_URL}/contact`} />
  <link rel="icon" href={OG_IMAGE} />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={PAGE_TITLE} />
  <meta property="og:description" content={PAGE_DESCRIPTION} />
  <meta property="og:url" content={`${SITE_URL}/contact`} />
  <meta property="og:image" content={OG_IMAGE} />
  <meta property="og:site_name" content="Calibre Associates" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={PAGE_TITLE} />
  <meta name="twitter:description" content={PAGE_DESCRIPTION} />
  <meta name="twitter:image" content={OG_IMAGE} />

  <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
  <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
</Helmet>
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
