
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import emailjs from '@emailjs/browser';
import ContactHero from '@/components/contact/ContactHero';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { pageTransition } from '@/lib/motion';

const Contact = () => {

  React.useEffect(() => {
    emailjs.init('4COZc8xvshn3d5SLB');
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Helmet>
  <meta charSet="utf-8" />
  <title>Contact Calibre Associates | Digital Marketing, Development & AI Solutions</title>
  <meta
    name="description"
    content="Contact Calibre Associates to discuss website development, web and app solutions, SEO, paid advertising, automation, and AI-powered growth systems. Let’s build scalable digital solutions for your business."
  />
  <link rel="canonical" href="https://www.calibreassociates.com/contact" />
  <link rel="icon" href="https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png" />
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
