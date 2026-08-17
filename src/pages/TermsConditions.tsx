import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { pageTransition } from '@/lib/motion';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://www.calibreassociates.com/favicons/android-chrome-512x512.png';
const PAGE_TITLE = 'Calibre Associates | Terms & Conditions';
const PAGE_DESCRIPTION =
  'Terms and conditions governing the use of Calibre Associates’ website, services, and digital solutions.';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Terms & Conditions', item: `${SITE_URL}/terms-conditions` },
  ],
};

const TermsConditions = () => {
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
        <link rel="canonical" href={`${SITE_URL}/terms-conditions`} />
        <link rel="icon" href={OG_IMAGE} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/terms-conditions`} />
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
            <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                1. Introduction
              </h2>
              <p>
                These Terms and Conditions ("Terms") govern your access to and
                use of the Calibre Associates website and services. By accessing
                our website or engaging with our services, you agree to comply
                with and be bound by these Terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                2. Use of Services
              </h2>
              <p>
                Calibre Associates provides digital services including lead
                generation, marketing, development, automation, and consulting
                for business and professional use only. You agree to use our
                services in a lawful manner and not for any prohibited or
                unauthorized activities.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                3. Privacy Policy
              </h2>
              <p>
                Your use of our services is also governed by our Privacy Policy,
                which explains how we collect, use, and protect your
                information. By using our services, you consent to the data
                practices described in that policy.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                4. Intellectual Property
              </h2>
              <p>
                All content, materials, designs, code, processes, and
                intellectual property on this website or created as part of our
                services remain the property of Calibre Associates unless
                otherwise agreed in writing. Unauthorized use, reproduction, or
                distribution is strictly prohibited.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                5. Service Deliverables & Revisions
              </h2>
              <p>
                Service scope, deliverables, timelines, and revision limits are
                defined in individual agreements or proposals. Any work outside
                the agreed scope may require additional approval and fees.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                6. Disclaimers
              </h2>
              <p>
                All services are provided on an "as is" and "as available"
                basis. While we strive for high-quality outcomes, Calibre
                Associates does not guarantee specific business results,
                rankings, revenue growth, or performance outcomes unless
                explicitly stated in a written agreement.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Calibre Associates shall
                not be liable for any indirect, incidental, consequential, or
                special damages arising from the use of our services, even if
                advised of the possibility of such damages.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                8. Modifications to Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms at any time.
                Changes will be effective upon posting on this page. Continued
                use of our services after updates constitutes acceptance of the
                revised Terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                9. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and interpreted in accordance
                with applicable laws, without regard to conflict of law
                principles.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                10. Contact Information
              </h2>
              <p>
                If you have any questions regarding these Terms and Conditions,
                please contact us at
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

export default TermsConditions;