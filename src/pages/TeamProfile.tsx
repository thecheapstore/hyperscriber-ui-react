import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

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

const TeamProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? findTeamMember(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!member) {
    return <Navigate to="/our-team" replace />;
  }

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Helmet>
        <title>{member.name} | Founding Team | Calibre Associates</title>
        <meta name="description" content={member.cardIntro} />
        <link rel="canonical" href={`https://www.calibreassociates.com/our-team/${member.slug}`} />
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

        <ProfileTechStack items={member.techStack} heading={member.techStackHeading} />

        {member.industries && <ProfileIndustries items={member.industries} />}

        <ProfileProjects member={member} />

        <ProfilePhilosophy heading={member.philosophyHeading} points={member.philosophyPoints} />
        <ProfileBeyond heading={member.beyondHeading} items={member.beyondItems} />

        {member.achievements && member.achievementsPosition === "after-beyond" && (
          <ProfileAchievements heading={member.achievementsHeading ?? "Achievements"} items={member.achievements} />
        )}

        <ProfileFunFacts facts={member.funFacts} />
        <ProfileFinalCTA heading={member.finalCtaHeading} buttons={member.finalCtaButtons} />
      </main>

      <Footer />
    </motion.div>
  );
};

export default TeamProfilePage;
