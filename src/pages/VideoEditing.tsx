import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Sparkles, Users, BookOpen, Presentation, TrendingUp, Target, Lightbulb, Zap, Wand2, Layers, ShieldCheck, Bot, PlayCircle } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
import { services } from '@/components/services/data/services';
import { pageTransition, staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

import WhyChooseUs, { type Reason } from '@/components/services/sections/WhyChooseUs';
import StatsSection from '@/components/services/sections/StatsSection';
import ProcessTimeline, { type TimelineStep } from '@/components/services/sections/ProcessTimeline';
import FinalCTA from '@/components/services/sections/FinalCTA';

import VideoEditingHero from '@/components/services/video-editing/VideoEditingHero';
import VideoEditingPricing from '@/components/services/video-editing/VideoEditingPricing';
import PortfolioCategoryTabs from '@/components/services/video-editing/PortfolioCategoryTabs';
import IndustriesWeEditFor from '@/components/services/video-editing/IndustriesWeEditFor';
import EditingCapabilities from '@/components/services/video-editing/EditingCapabilities';
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import ServiceAnswerBlock from '@/components/services/sections/ServiceAnswerBlock';
import ServiceContentSection, { ExternalInlineLink, InlineLink } from '@/components/services/sections/ServiceContentSection';
import ServiceResourceLinks from '@/components/services/sections/ServiceResourceLinks';
import { buildServiceJsonLd, getServiceSeo } from '@/components/services/lib/serviceSchema';

const whyEditingMattersReasons: Reason[] = [
  { icon: <Eye className="h-6 w-6" />, title: 'Better Watch Time', description: 'Pacing and cuts built to hold attention instead of losing viewers in the first three seconds.' },
  { icon: <Sparkles className="h-6 w-6" />, title: 'Stronger Brand Identity', description: 'Consistent visual style, motion and titling that make your content instantly recognizable.' },
  { icon: <Users className="h-6 w-6" />, title: 'Higher Engagement', description: 'Editing decisions driven by what actually keeps audiences watching, liking and sharing.' },
  { icon: <BookOpen className="h-6 w-6" />, title: 'Better Storytelling', description: 'Every edit is structured around a narrative arc, not just a sequence of clips.' },
  { icon: <Presentation className="h-6 w-6" />, title: 'Professional Presentation', description: 'Clean, polished delivery that reflects the quality of your brand or business.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Improved Conversions', description: 'Content edited with the end action in mind, not just views, but results.' },
];

const whyChooseCalibreReasons: Reason[] = [
  { icon: <Target className="h-6 w-6" />, title: 'Platform first Editing', description: 'Every edit is formatted and paced for where it will actually be watched.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Conversion focused Videos', description: 'Editing decisions tied to real business outcomes, not just aesthetics.' },
  { icon: <Lightbulb className="h-6 w-6" />, title: 'Creative Storytelling', description: 'Raw footage shaped into a narrative that holds attention start to finish.' },
  { icon: <Zap className="h-6 w-6" />, title: 'Fast Delivery', description: 'Structured workflows that keep projects moving without compromising quality.' },
  { icon: <Wand2 className="h-6 w-6" />, title: 'Premium Motion Graphics', description: 'On brand titling, transitions and animated elements built in house.' },
  { icon: <Layers className="h-6 w-6" />, title: 'Scalable Production', description: 'From a single reel to a full content pipeline, our workflow scales with you.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Built for Brands', description: 'Consistent visual identity carried across every piece of content we deliver.' },
  { icon: <Bot className="h-6 w-6" />, title: 'Modern AI assisted Workflow', description: 'AI tools used to speed up production, never as a replacement for craft.' },
];

const creativeWorkflow: TimelineStep[] = [
  { title: 'Concept', description: 'Defining the idea, angle and objective behind the content before a single clip is touched.' },
  { title: 'Script', description: 'Structuring the narrative or talking points so the edit has a clear throughline.' },
  { title: 'Editing', description: 'Cutting, pacing and assembling footage into a polished, story driven sequence.' },
  { title: 'Motion Graphics', description: 'Adding titling, transitions and animated brand elements where they earn their place.' },
  { title: 'Review', description: 'Feedback rounds to refine pacing, messaging and visual polish before delivery.' },
  { title: 'Final Delivery', description: 'Formatted, captioned and exported for every platform it needs to live on.' },
];

const VIDEO_EDITING_FAQS: FAQItem[] = [
  {
    question: 'What should I look for when choosing a video editing service for my business?',
    answer:
      'Look at their portfolio across the specific platform you care about, an editor skilled at cinematic YouTube videos is not automatically good at fast paced Reels or TikTok content, since each platform rewards different pacing and structure. Ask about turnaround time, revision rounds, and whether they handle motion graphics and captions in house. And prioritize editors who ask about your business goals, not just your footage, since the best edits are built around what you actually want the video to achieve.',
  },
  {
    question: 'How do I optimize video for social media platforms?',
    answer:
      'Edit for each platform rather than reusing one cut everywhere, vertical framing and fast pacing for Reels and TikTok, horizontal and slightly slower pacing for YouTube. Add captions by default, since most social video is watched with sound off, and hook viewers in the first two to three seconds or they will scroll past. Keep file formats and lengths matched to what each platform actually favors in its algorithm.',
  },
  {
    question: 'Do you offer quick turnaround video editing services?',
    answer:
      'Yes, our workflow is built around structured, repeatable steps, concept, script, editing, motion graphics, and review, so projects move quickly without cutting corners on quality. Turnaround time depends on project complexity and revision rounds, but we scope timelines clearly upfront so you know exactly when to expect delivery.',
  },
  {
    question: 'What is the difference between a freelance video editor and a video editing service?',
    answer:
      'A freelance editor is often a strong option for a single project, but availability, consistency, and range of skills can vary widely from one freelancer to the next. A video editing service brings a structured process, backup coverage if someone is out, and a team that covers editing, motion graphics, and platform strategy together, which matters more once you need a steady stream of content rather than a one off video.',
  },
  {
    question: 'How much does professional video editing cost?',
    answer:
      'Cost depends on video length, complexity, and how much motion graphics or animation work is involved, a simple social clip costs far less than a fully animated brand video. Rather than a flat number that will not apply to most projects, we scope pricing based on your specific content needs and volume, monthly retainers make sense for brands publishing regularly, while project based pricing suits one off videos.',
  },
  {
    question: 'Do you edit Reels, YouTube Shorts and TikTok videos?',
    answer:
      'Yes. We edit short form vertical video for Reels, YouTube Shorts and TikTok, and long form horizontal video for YouTube. Each edit is paced, framed and captioned for the platform it will be watched on, so you do not have to rework one cut for every channel.',
  },
  {
    question: 'Do you add captions and subtitles to videos?',
    answer:
      'Yes. Captions and subtitles are part of our editing capabilities, and we add them by default on social video because most people watch with the sound off. We style them to match your brand so they look designed, not bolted on.',
  },
  {
    question: 'Can you edit AI generated videos?',
    answer:
      'Yes. We edit AI assisted and AI generated footage into a polished, human feeling finish, with the same pacing, sound design and motion graphics we use on filmed content. AI video editing is listed among our capabilities alongside traditional editing.',
  },
  {
    question: 'What kinds of videos do you edit for businesses?',
    answer:
      'Promotional videos, product videos, talking head videos, short ad creatives and long form YouTube content. We edit for a range of industries, so the style fits the audience, whether that is a home service company, a fashion label or a creator.',
  },
];

const VideoEditing = () => {
  const service = services.find((s) => s.slug === 'video-editing')!;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo {...getServiceSeo(service)} jsonLd={buildServiceJsonLd(service, VIDEO_EDITING_FAQS)} />

      <Navbar />

      <main className="mt-16">
        <VideoEditingHero />

        <ServiceAnswerBlock heading={service.answerHeading!} answer={service.answer!} />

        <ServiceContentSection
          eyebrow="WHAT WE EDIT"
          title="Video Editing for Reels, YouTube Videos and Ads"
          intro="Three formats, three different editing rhythms. We match the cut to where your video will be watched."
          cards={[
            {
              heading: 'Reels and short form video editing',
              body: (
                <>
                  Vertical edits with a hook in the first seconds, captions and platform native pacing. Pair them with our{' '}
                  <InlineLink to="/services/social-media-marketing">social media marketing and UGC content</InlineLink> to keep
                  your feed active.
                </>
              ),
            },
            {
              heading: 'YouTube video editing',
              body: (
                <>
                  Long form edits paced to hold watch time, with titling, color correction and audio cleanup. For platform
                  guidance, see{' '}
                  <ExternalInlineLink href="https://support.google.com/youtube">YouTube Help</ExternalInlineLink>.
                </>
              ),
            },
            {
              heading: 'Video editing for ads',
              body: (
                <>
                  Ad creatives cut for Meta and Google placements, with a clear offer and call to action. They feed our{' '}
                  <InlineLink to="/services/lead-generation-paid-advertising">lead generation and paid advertising</InlineLink> work,
                  and the{' '}
                  <ExternalInlineLink href="https://www.facebook.com/business/help">Meta Business Help Center</ExternalInlineLink> covers
                  placement requirements.
                </>
              ),
            },
          ]}
        />

        <WhyChooseUs
          reasons={whyEditingMattersReasons}
          eyebrow="WHY IT MATTERS"
          title="Why Professional Editing Matters"
          description="Editing is one of the biggest factors influencing audience retention, brand perception and conversions."
        />

        <StatsSection stats={service.stats} />

        <VideoEditingPricing />

        <section id="portfolio" className="py-20 md:py-24 bg-surface-soft">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
                OUR WORK
              </motion.span>
              <motion.h2 variants={fadeUp} className="mb-4">Featured Editing Work</motion.h2>
              <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
                A curated selection of projects created across multiple industries, platforms and content styles.
              </motion.p>
            </motion.div>

            <PortfolioCategoryTabs />
          </div>
        </section>

        <ProcessTimeline
          process={creativeWorkflow}
          eyebrow="CREATIVE WORKFLOW"
          title="How We Bring Every Edit to Life"
          description="A structured, six stage process from first concept to final delivery."
        />

        <IndustriesWeEditFor />

        <EditingCapabilities />

        <ServiceContentSection
          tone="canvas"
          eyebrow="WHO WE EDIT FOR"
          title="Video Editing Services for Brands, Creators and Local Businesses"
          intro="The same editing craft, tuned for different audiences and goals."
          cards={[
            {
              heading: 'Brands and campaigns',
              body: (
                <>
                  Campaign video that matches a brand system. See how short form reels sit inside a full identity in the{' '}
                  <InlineLink to="/services/brand-identity-development/projects/slick">Slick brand identity and full funnel campaign</InlineLink>.
                </>
              ),
            },
            {
              heading: 'Creators and on camera talent',
              body: (
                <>
                  Talking head and UGC style edits for creators. <InlineLink to="/our-team/manasvi-pathak">Manasvi Pathak</InlineLink>,
                  our Co Founder and Talent Manager, coordinates creators and on camera talent for brand campaigns.
                </>
              ),
            },
            {
              heading: 'Local service businesses',
              body: (
                <>
                  Short videos that show real work help tree service and landscaping companies build trust. Read our{' '}
                  <InlineLink to="/industries/tree-service-marketing">tree service marketing guide</InlineLink> for the wider
                  plan.
                </>
              ),
            },
          ]}
        />

        <ServiceResourceLinks
          service={service}
          intro="See the campaign work our editing supports and explore the services that go with it."
          caseStudies={[
            { label: 'Slick brand identity and full funnel campaign', to: '/services/brand-identity-development/projects/slick', description: 'Identity, photography and a vertical video reel.' },
            { label: 'The Denim Co-Ord AI fashion campaign', to: '/services/brand-identity-development/projects/denim', description: 'A campaign sequence cut into a ready to post reel.' },
            { label: 'All Calibre Associates projects', to: '/portfolio', description: 'Browse every website, SEO and brand project.' },
          ]}
          moreLinks={[
            { label: 'Meet Manasvi Pathak, Co Founder and Talent Manager', to: '/our-team/manasvi-pathak' },
            { label: 'Start a video editing project', to: '/contact' },
          ]}
          external={[
            { label: 'YouTube Help', href: 'https://support.google.com/youtube', description: 'Official guidance on uploads, Shorts and channel features.' },
            { label: 'Meta Business Help Center', href: 'https://www.facebook.com/business/help', description: 'Official guidance on ad creative and placements.' },
          ]}
        />

        <FAQSection
          faqs={VIDEO_EDITING_FAQS}
          eyebrow="VIDEO EDITING FAQS"
          title="Your Video Editing Questions, Answered"
          description="Common questions brands ask about hiring a video editing service."
        />

        <WhyChooseUs
          reasons={whyChooseCalibreReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Choose Calibre Associates"
          description="An editing team built around platform performance, brand consistency and speed."
        />

        <FinalCTA
          headline="Ready to Turn Raw Footage Into High Performing Content?"
          description="Whether you're a creator, startup, agency or established brand, we create videos that engage audiences, strengthen your brand and drive meaningful business results."
          primaryLabel="Book Free Consultation"
          secondaryLabel="Start Your Project"
          secondaryHref="/contact"
          secondaryIcon={<PlayCircle className="mr-2 h-4 w-4" />}
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default VideoEditing;
