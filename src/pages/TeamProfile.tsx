import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { pageTransition } from "@/lib/motion";
import { findTeamMember } from "@/data/team/foundingTeam";

import ProfileHero from "@/components/team-profile/ProfileHero";
import ProfileAbout from "@/components/team-profile/ProfileAbout";
import ProfileJourney from "@/components/team-profile/ProfileJourney";
import ProfileAchievements from "@/components/team-profile/ProfileAchievements";
import ProfileWhatIDo from "@/components/team-profile/ProfileWhatIDo";
import ProfileExperience from "@/components/team-profile/ProfileExperience";
import ProfileTechStack from "@/components/team-profile/ProfileTechStack";
import ProfileIndustries from "@/components/team-profile/ProfileIndustries";
import ProfileProjects from "@/components/team-profile/ProfileProjects";
import ProfilePhilosophy from "@/components/team-profile/ProfilePhilosophy";
import ProfileBeyond from "@/components/team-profile/ProfileBeyond";
import ProfileFunFacts from "@/components/team-profile/ProfileFunFacts";
import ProfileFinalCTA from "@/components/team-profile/ProfileFinalCTA";
import TalentNetworkSection from "@/components/team-profile/TalentNetworkSection";
import TalentWorkflowSection from "@/components/team-profile/TalentWorkflowSection";
import FAQSection from "@/components/services/sections/FAQSection";
import { buildFaqSchema } from "@/lib/faqSchema";
import { buildPersonSchema } from "@/lib/personSchema";

const SITE_URL = "https://calibreassociates.com";
const FAVICON = "https://calibreassociates.com/favicons/android-chrome-512x512.png";

const TeamProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? findTeamMember(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!member) {
    return <Navigate to="/our-team" replace />;
  }

  const faqSchema = member.faqs && member.faqs.length > 0 ? buildFaqSchema(member.faqs) : null;
  const personSchema = buildPersonSchema(member);
  const pageUrl = `${SITE_URL}/our-team/${member.slug}`;
  const pageTitle = member.metaTitle ?? `${member.name} | Founding Team | Calibre Associates`;
  const metaDescription = member.metaDescription ?? member.cardIntro;
  const profileImage = member.image.startsWith("http") ? member.image : `${SITE_URL}${member.image}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Our Team", item: `${SITE_URL}/our-team` },
      { "@type": "ListItem", position: 3, name: member.name, item: pageUrl },
    ],
  };

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href={FAVICON} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={profileImage} />
        <meta property="og:site_name" content="Calibre Associates" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={profileImage} />

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <ProfileHero member={member} />
        <ProfileAbout heading={member.aboutHeading} paragraphs={member.aboutParagraphs} />
        <ProfileJourney steps={member.journey} />

        {member.achievements && member.achievementsPosition === "after-journey" && (
          <ProfileAchievements heading={member.achievementsHeading ?? "Achievements"} items={member.achievements} />
        )}

        <ProfileWhatIDo items={member.whatIDo} />

        {member.experience && <ProfileExperience items={member.experience} />}

        {member.talentIntro && member.talentCategories && member.talentCategories.length > 0 && (
          <TalentNetworkSection intro={member.talentIntro} categories={member.talentCategories} />
        )}

        {member.talentWorkflow && member.talentWorkflow.length > 0 && (
          <TalentWorkflowSection steps={member.talentWorkflow} />
        )}

        <ProfileTechStack items={member.techStack} heading={member.techStackHeading} />

        {member.industries && <ProfileIndustries items={member.industries} />}

        <ProfileProjects member={member} />

        <ProfilePhilosophy heading={member.philosophyHeading} points={member.philosophyPoints} />
        <ProfileBeyond heading={member.beyondHeading} items={member.beyondItems} />

        {member.achievements && member.achievementsPosition === "after-beyond" && (
          <ProfileAchievements heading={member.achievementsHeading ?? "Achievements"} items={member.achievements} />
        )}

        <ProfileFunFacts facts={member.funFacts} />

        {member.faqs && member.faqs.length > 0 && (
          <FAQSection
            faqs={member.faqs}
            eyebrow="FAQS"
            title={`Questions About ${member.name}`}
          />
        )}

        <ProfileFinalCTA heading={member.finalCtaHeading} buttons={member.finalCtaButtons} />
      </main>

      <Footer />
    </motion.div>
  );
};

export default TeamProfilePage;
