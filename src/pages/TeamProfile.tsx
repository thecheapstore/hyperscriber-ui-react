import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { pageTransition } from "@/lib/motion";
import { findTeamMember } from "@/data/team/foundingTeam";

import ProfileHero from "@/components/team-profile/ProfileHero";
import ProfileAbout from "@/components/team-profile/ProfileAbout";
import ProfileJourney from "@/components/team-profile/ProfileJourney";
import ProfilePress from "@/components/team-profile/ProfilePress";
import ProfileLinks from "@/components/team-profile/ProfileLinks";
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
import {
  buildProfilePageSchema,
  buildProfileBreadcrumb,
  memberImageAlt,
  memberImageUrl,
  profilePath,
  PROFILE_DATE_MODIFIED,
} from "@/lib/personSchema";
import Seo from "@/components/seo/Seo";

const TeamProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? findTeamMember(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!member) {
    return <Navigate to="/our-team" replace />;
  }

  const pageTitle = member.metaTitle ?? `${member.name} | Founding Team | Calibre Associates`;
  const metaDescription = member.metaDescription ?? member.cardIntro;
  const path = profilePath(member);

  const jsonLd: object[] = [
    buildProfilePageSchema(member, pageTitle, metaDescription),
    buildProfileBreadcrumb(member),
  ];
  if (member.faqs && member.faqs.length > 0) jsonLd.push(buildFaqSchema(member.faqs));

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo
        type="profile"
        title={pageTitle}
        description={metaDescription}
        path={path}
        image={memberImageUrl(member)}
        imageAlt={memberImageAlt(member)}
        modifiedTime={PROFILE_DATE_MODIFIED}
        jsonLd={jsonLd}
      />

      <Navbar />

      <main className="mt-16">
        <ProfileHero member={member} />
        <ProfileAbout heading={member.aboutHeading} paragraphs={member.aboutParagraphs} />
        <ProfileJourney steps={member.journey} />

        {member.pressFeatures && member.pressFeatures.length > 0 && (
          <ProfilePress features={member.pressFeatures} memberName={member.name} />
        )}

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

        {member.relatedLinks && member.relatedLinks.length > 0 && (
          <ProfileLinks heading={member.relatedLinksHeading ?? "Explore More"} links={member.relatedLinks} />
        )}

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
