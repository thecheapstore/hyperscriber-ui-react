import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import TeamHero from "@/components/our-team/TeamHero";
import TeamMembers from "@/components/our-team/TeamMembers";
import TeamPhilosophy from "@/components/our-team/TeamPhilosophy";
import WhyChooseUs from "@/components/our-team/WhyChooseUs";
import TeamFinalCTA from "@/components/our-team/TeamFinalCTA";
import { pageTransition } from "@/lib/motion";

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://www.calibreassociates.com/favicons/android-chrome-512x512.png';
const PAGE_TITLE = 'Founding Team | Abhijeet Jain, Manasvi Pathak and Calibre Associates';
const PAGE_DESCRIPTION =
  'Meet the founding team behind Calibre Associates, including Abhijeet Jain and Manasvi Pathak, specialists in software engineering, digital marketing, AI automation, design and content, working directly with clients in India and the United States to help businesses grow.';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Our Team', item: `${SITE_URL}/our-team` },
  ],
};

const OurTeamPage = () => {
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
        <link rel="canonical" href={`${SITE_URL}/our-team`} />
        <link rel="icon" href={OG_IMAGE} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/our-team`} />
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
        <TeamHero />
        <TeamMembers />
        <TeamPhilosophy />
        <WhyChooseUs />
        <TeamFinalCTA />
      </main>

      <Footer />
    </motion.div>
  );
};

export default OurTeamPage;
