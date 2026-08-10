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
        <title>Founding Team | Abhijeet Jain, Manasvi Pathak and Calibre Associates</title>
        <meta
          name="description"
          content="Meet the founding team behind Calibre Associates, including Abhijeet Jain and Manasvi Pathak, specialists in software engineering, digital marketing, AI automation, design and content, working directly with clients in India and the United States to help businesses grow."
        />
        <link
          rel="canonical"
          href="https://www.calibreassociates.com/our-team"
        />
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
