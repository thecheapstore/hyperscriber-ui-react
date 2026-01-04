import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamHero from "@/components/our-team/TeamHero";
import OurTeam from "@/components/our-team/OurTeam";
import TeamValues from "@/components/our-team/TeamValues";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const OurTeamPage = () => {
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
        <title>Our Team | Calibre Associates</title>
        <meta
          name="description"
          content="Meet the team behind Calibre Associates. A group of experienced developers, designers, automation specialists, and strategists building high performance websites, web applications, and digital systems."
        />
        <link
          rel="canonical"
          href="https://www.calibreassociates.com/our-team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <TeamHero />
        <OurTeam />
        <TeamValues />
        <CTASection />
      </main>

      <Footer />
    </motion.div>
  );
};

export default OurTeamPage;