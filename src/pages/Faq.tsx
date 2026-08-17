import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import FinalCTA from '@/components/services/sections/FinalCTA';
import { buildFaqSchema } from '@/lib/faqSchema';
import { pageTransition, fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://www.calibreassociates.com/favicons/android-chrome-512x512.png';

interface FaqCategory {
  eyebrow: string;
  title: string;
  description: string;
  className: string;
  faqs: FAQItem[];
}

const CATEGORIES: FaqCategory[] = [
  {
    eyebrow: 'WEBSITE DEVELOPMENT',
    title: 'Website Development & WordPress',
    description: 'Common questions about building, hosting, and outsourcing a website.',
    className: 'bg-canvas',
    faqs: [
      {
        question: 'Should I hire a freelance website developer or a web development agency?',
        answer:
          'A freelancer can work well for a single, well defined project, but availability and skill range vary widely from one freelancer to the next. An agency brings a full team, design, development, SEO, and support together, so your project does not stall if one person is unavailable, and you get a broader range of expertise covering everything a modern website needs.',
      },
      {
        question: 'What should I look for in a reliable web hosting service?',
        answer:
          'Look for consistent uptime, fast server response times, and support that actually responds quickly when something breaks. For most growing businesses, managed hosting built for your platform, WordPress specific hosting for a WordPress site, for example, performs better than generic shared hosting, since it is optimized for the software you are actually running.',
      },
      {
        question: 'How do I estimate the cost of a website development project?',
        answer:
          'Cost depends on scope, a template based brochure site costs far less than a custom built platform with unique functionality and integrations. The most accurate way to estimate cost is a discovery call where we walk through your pages, features, and goals, then provide a scope specific quote rather than a generic starting price that will not reflect your actual project.',
      },
      {
        question: 'How do I outsource WordPress development effectively?',
        answer:
          'Start with a clear scope of what you need built, custom theme, specific functionality, e-commerce, so the agency can quote and plan accurately. Ask how they handle security, updates, and backups after launch, since WordPress sites need ongoing maintenance, and confirm they build custom functionality rather than relying entirely on page builders and third party plugins that can slow the site down.',
      },
    ],
  },
  {
    eyebrow: 'SEO',
    title: 'Search Engine Optimization',
    description: 'Common questions about hiring an SEO expert and improving organic rankings.',
    className: 'bg-white',
    faqs: [
      {
        question: 'What qualifications should I look for in a professional SEO expert?',
        answer:
          'Look for demonstrated experience with real, verifiable results, not just certifications, since SEO changes constantly and hands on experience matters more than a course completion certificate. Ask about their approach to technical SEO, content, and local SEO specifically, and make sure their practices are white hat and guideline compliant, since shortcuts that work briefly often lead to penalties later.',
      },
      {
        question: 'Are there SEO experts who specialize in local business optimization?',
        answer:
          'Yes, local SEO is its own specialty, focused on Google Business Profile optimization, local map pack rankings, and location specific content, which is different from broader national SEO strategy. If your business depends on local customers, working with someone who specifically understands local search signals will typically outperform a generalist approach.',
      },
      {
        question: "How do I audit my website's search engine optimization?",
        answer:
          'Start with technical basics, page speed, mobile usability, and broken links, and whether pages are properly indexed, then move to content, are your pages actually answering what people search for, and are titles and meta descriptions optimized. A full audit also checks site structure and internal linking, since search engines need to be able to find and understand every important page.',
      },
      {
        question: 'What is the average cost of hiring an SEO expert for monthly consulting?',
        answer:
          'Pricing varies widely based on scope, competitiveness of your industry, and whether you need local, national, or e-commerce SEO. Rather than a flat number that will not fit most businesses, we scope monthly SEO retainers around your specific goals and current site condition, so you are paying for a plan built around your business, not a generic package.',
      },
    ],
  },
  {
    eyebrow: 'SOCIAL MEDIA & UGC',
    title: 'Social Media Marketing & UGC',
    description: 'Common questions about growing on social media and working with UGC content.',
    className: 'bg-canvas',
    faqs: [
      {
        question: 'How do I increase engagement on Instagram for a small business?',
        answer:
          'Post consistently rather than in bursts, audiences and the algorithm both reward a steady, predictable cadence. Mix content types, educational posts, behind the scenes moments, and UGC style content tend to outperform purely polished promotional posts, and responding to comments and messages quickly signals to the algorithm that your account is active and worth showing to more people.',
      },
      {
        question: 'What are the benefits of using automation in social media marketing?',
        answer:
          'Automation keeps your posting schedule consistent even when your team is busy, and it frees up time for the strategic work that actually needs a person, planning content, engaging with your audience, and analyzing what is working. Scheduling and reporting automation removes the manual busywork, it does not replace the creative decisions behind good content.',
      },
      {
        question: 'Which social media marketing platforms give the best ROI?',
        answer:
          'It depends entirely on where your specific audience spends time and what you are selling, Instagram and TikTok tend to perform well for visual, consumer facing brands, while LinkedIn typically performs better for B2B and professional services. Rather than assuming one platform is universally best, we look at your audience and goals first, then recommend where your budget and content effort will actually produce results.',
      },
      {
        question: 'What are effective strategies to encourage customers to create user generated content?',
        answer:
          'Make it easy and rewarding, a simple branded hashtag, a small incentive like a feature on your page or a discount, and clear examples of the kind of content you are looking for all lower the barrier for customers to participate. The businesses that generate the most UGC usually ask for it directly and consistently, rather than hoping customers post about them unprompted.',
      },
    ],
  },
  {
    eyebrow: 'MARKETING AGENCY',
    title: 'Working With a Marketing Agency',
    description: 'Common questions about choosing and working with a digital marketing partner.',
    className: 'bg-white',
    faqs: [
      {
        question: 'How do I evaluate the portfolio of a potential digital marketing partner?',
        answer:
          "Look past the visual polish and ask about outcomes, what results did this project actually produce, more traffic, more leads, higher rankings. Ask for examples relevant to your industry or business size, since a portfolio full of large enterprise brands does not always translate to strong results for a small or growing business.",
      },
      {
        question: 'What questions should I ask before hiring a content marketing provider?',
        answer:
          'Ask how they approach strategy before writing, content built around real keyword research and audience intent performs very differently from content written just to fill a calendar. Ask about their process for revisions and approval, and how they measure success, engagement, rankings, or leads, so you know upfront how results will actually be tracked.',
      },
      {
        question: 'What are the benefits of outsourcing marketing to an agency instead of hiring in house?',
        answer:
          "An agency gives you access to a full team, strategy, design, development, and advertising expertise, for a fraction of what it would cost to hire that same range of skills in house. It also means you are not dependent on a single employee's availability or skill set, and you get outside perspective from a team that works across multiple businesses and industries.",
      },
      {
        question: 'How much does a brand strategy agency usually charge?',
        answer:
          'Pricing depends heavily on scope, a focused brand refresh costs significantly less than a full strategy engagement covering positioning, messaging, and visual identity from scratch. We scope pricing based on what your brand actually needs rather than a one size fits all package, so smaller businesses are not paying for work built for an enterprise budget.',
      },
    ],
  },
  {
    eyebrow: 'ABOUT US',
    title: 'About Calibre Associates',
    description: 'Common questions people ask about who we are and how we work.',
    className: 'bg-canvas',
    faqs: [
      {
        question: 'Does Calibre Associates provide digital transformation solutions?',
        answer:
          'Yes, we help businesses modernize how they operate through custom websites, CRM systems, and AI automation that connect the tools you already use into one streamlined workflow. Rather than a single software rollout, we focus on the specific processes slowing your business down and build systems around fixing them.',
      },
      {
        question: 'How does Calibre Associates support startups and small businesses?',
        answer:
          'We work with startups and small businesses by building systems that scale with them, starting with what they need now, a website, basic automation, initial marketing, and expanding as the business grows, rather than requiring a large upfront investment in infrastructure they do not need yet.',
      },
      {
        question: 'What industries does Calibre Associates specialize in?',
        answer:
          'We have worked across landscaping, construction, roofing, medical, legal, restaurants, real estate, home services, and professional services, along with e-commerce and local businesses more broadly. Our approach adapts to what each industry and business actually needs rather than applying the same template everywhere.',
      },
      {
        question: 'What makes Calibre Associates different from other digital marketing agencies?',
        answer:
          'We combine software engineering, marketing, and AI automation under one team, so your website, SEO, advertising, and internal systems all work from the same strategy instead of being handled by disconnected vendors. We also work directly with clients from strategy through execution, rather than handing projects off to account managers who are not involved in the actual work.',
      },
    ],
  },
  {
    eyebrow: 'AI AUTOMATION & LEAD GEN',
    title: 'AI Automation & Lead Generation',
    description: 'Common questions about automating operations and paid advertising strategy.',
    className: 'bg-white',
    faqs: [
      {
        question: 'What is the difference between marketing automation and AI automation?',
        answer:
          'Marketing automation typically handles predictable, rule based tasks, sending a follow up email after a form fill, for example. AI automation goes further, using AI to make judgment calls, qualifying a lead based on what they actually said, answering questions naturally, or routing a request based on context, not just a fixed rule.',
      },
      {
        question: 'How do I know if my business is ready for AI automation?',
        answer:
          'If your team is spending significant time on repetitive tasks, following up with leads, answering the same questions, updating records manually, that is usually a sign automation would save real time. You do not need a large operation to benefit, even a single automated workflow around your most repetitive process can free up meaningful hours each week.',
      },
      {
        question: 'What is a good cost per lead for paid advertising campaigns?',
        answer:
          'A good cost per lead varies enormously by industry, location, and how competitive your keywords or audience are, so there is no universal benchmark that applies to every business. What matters more is your cost per lead relative to your customer value, a higher cost per lead can still be profitable if your average customer is worth significantly more.',
      },
      {
        question: 'How often should I update my lead generation and paid advertising strategy?',
        answer:
          'Campaigns should be reviewed weekly at minimum, checking performance and adjusting underperforming ads or audiences, with a deeper strategic review monthly to assess whether the overall approach is still working. Markets, competition, and ad platforms change constantly, a strategy that is not revisited regularly tends to lose efficiency over time.',
      },
    ],
  },
];

const ALL_FAQS: FAQItem[] = CATEGORIES.flatMap((category) => category.faqs);

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageUrl = `${SITE_URL}/faq`;
  const faqSchema = buildFaqSchema(ALL_FAQS);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: pageUrl },
    ],
  };

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Frequently Asked Questions | Calibre Associates</title>
        <meta
          name="description"
          content="Answers to common questions about website development, SEO, social media marketing, video editing, lead generation, paid advertising, and AI automation for businesses in India and the United States."
        />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href={OG_IMAGE} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Frequently Asked Questions | Calibre Associates" />
        <meta
          property="og:description"
          content="Answers to common questions about website development, SEO, social media marketing, video editing, lead generation, paid advertising, and AI automation."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Calibre Associates" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frequently Asked Questions | Calibre Associates" />
        <meta
          name="twitter:description"
          content="Answers to common questions about website development, SEO, social media marketing, video editing, lead generation, paid advertising, and AI automation."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-canvas">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
                FREQUENTLY ASKED QUESTIONS
              </motion.span>
              <motion.h1 variants={fadeUp} className="mb-6">
                Answers to the Questions We Hear Most
              </motion.h1>
              <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
                Straightforward answers about website development, SEO, social media marketing, video
                editing, lead generation, paid advertising, and AI automation, for businesses in India
                and the United States.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {CATEGORIES.map((category) => (
          <FAQSection
            key={category.title}
            faqs={category.faqs}
            eyebrow={category.eyebrow}
            title={category.title}
            description={category.description}
            className={category.className}
          />
        ))}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <FinalCTA
            headline="Still Have Questions?"
            description="Book a free consultation and we'll answer anything specific to your business and goals."
          />
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Faq;
