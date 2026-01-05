import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import TeamHero from "@/components/our-team/TeamHero";
import TeamStrengths from "@/components/our-team/TeamStrengths";
import TeamMembers from "@/components/our-team/TeamMembers";
import TeamValues from "@/components/our-team/TeamValues";
import CTASection from "@/components/CTASection";

const OurTeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      <Helmet>
        <title>Our Team | Calibre Associates</title>
        <meta
          name="description"
          content="Meet the people behind Calibre Associates — a team of developers, designers, automation experts, and strategists building high-performance digital products."
        />
        <link
          rel="canonical"
          href="https://www.calibreassociates.com/our-team"
        />
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <TeamHero />
        <TeamStrengths />
        <TeamMembers />
        <TeamValues />
        <CTASection />
      </main>

      <Footer />
    </motion.div>
  );
};

export default OurTeamPage;