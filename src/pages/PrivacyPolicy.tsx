import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Calibre Associates | Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy outlining how Calibre Associates collects, uses, and protects personal information across its digital marketing, development, and automation services."
        />
        <link
          rel="canonical"
          href="https://calibreassociates.com/privacy-policy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <div className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p>
                Calibre Associates collects information that you voluntarily
                provide when you contact us, request a consultation, submit
                forms, or engage with our services. This may include your name,
                email address, phone number, company details, and project-related
                information. We may also collect limited technical data such as
                IP address, browser type, and usage behavior for analytics and
                security purposes.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use your information to deliver and improve our services,
                respond to inquiries, manage projects, provide support, send
                relevant communications, and enhance overall user experience.
                Information may also be used internally for analytics, marketing
                optimization, and business operations.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                3. Sharing of Information
              </h2>
              <p>
                We do not sell or rent your personal information. Data may be
                shared with trusted service providers, tools, or partners solely
                for operational purposes such as hosting, analytics, payment
                processing, or communication. All third parties are required to
                maintain confidentiality and data security.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                4. Your Choices and Rights
              </h2>
              <p>
                You have the right to access, update, or request deletion of your
                personal information. You may also opt out of non-essential
                communications at any time. To exercise these rights, please
                contact us using the details provided below.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                5. Cookies and Tracking Technologies
              </h2>
              <p>
                We may use cookies and similar technologies to analyze website
                traffic, improve functionality, and enhance user experience.
                You can control cookie preferences through your browser
                settings.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                6. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and
                organizational safeguards to protect your personal information
                from unauthorized access, misuse, or disclosure. While no system
                is completely secure, we continuously review and improve our
                security practices.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                7. Children’s Privacy
              </h2>
              <p>
                Our services are intended for businesses and professionals. We
                do not knowingly collect personal information from individuals
                under the age of 13.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p>
                Calibre Associates may update this Privacy Policy from time to
                time to reflect changes in practices or legal requirements.
                Updates will be posted on this page with a revised effective
                date.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how your
                data is handled, please contact us at
                <strong> info@calibreassociates.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default PrivacyPolicy;