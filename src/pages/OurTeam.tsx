import { useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@/components/seo/Seo";

import TeamHero from "@/components/our-team/TeamHero";
import TeamMembers from "@/components/our-team/TeamMembers";
import TeamPhilosophy from "@/components/our-team/TeamPhilosophy";
import WhyChooseUs from "@/components/our-team/WhyChooseUs";
import TeamFinalCTA from "@/components/our-team/TeamFinalCTA";
import { pageTransition } from "@/lib/motion";
import { SITE_URL, absUrl, breadcrumbSchema } from "@/lib/seo";
import { foundingTeam } from "@/data/team/foundingTeam";
import { memberImageUrl, personId, profilePath, PROFILE_DATE_MODIFIED } from "@/lib/personSchema";

const PATH = "/our-team";
const PAGE_TITLE = "Our Team | Founders and Experts at Calibre Associates";
const PAGE_DESCRIPTION =
  "Meet Abhijeet Jain, Founder and CEO, Manasvi Pathak, Co Founder and Talent Manager, and the experts at Calibre Associates. Web, SEO, AI automation and creative.";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${absUrl(PATH)}#webpage`,
  url: absUrl(PATH),
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  dateModified: PROFILE_DATE_MODIFIED,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@type": "ItemList",
    name: "Calibre Associates founders and experts",
    numberOfItems: foundingTeam.length,
    itemListElement: foundingTeam.map((member, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absUrl(profilePath(member)),
      item: {
        "@type": "Person",
        "@id": personId(member),
        name: member.name,
        url: absUrl(profilePath(member)),
        jobTitle: member.jobTitle ?? member.roleLine ?? member.title,
        image: memberImageUrl(member),
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  },
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
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path={PATH}
        jsonLd={[
          collectionSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Team", path: PATH },
          ]),
        ]}
      />

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
