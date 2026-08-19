import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { pageTransition } from '@/lib/motion';

const SITE_URL = 'https://calibreassociates.com';
const OG_IMAGE = 'https://calibreassociates.com/favicons/android-chrome-512x512.png';
const PAGE_TITLE = 'Calibre Associates | Privacy Policy';
const PAGE_DESCRIPTION =
  'Privacy policy outlining how Calibre Associates collects, uses, and protects personal information across its digital marketing, development, and automation services.';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${SITE_URL}/privacy-policy` },
  ],
};

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/privacy-policy`} />
        <link rel="icon" href={OG_IMAGE} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/privacy-policy`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Calibre Associates" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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