import abhijeetImg from '@/assets/team/abhijeet.jpeg';
import pawanImg from '@/assets/team/pawan.jpeg';
// manasvi-logo.webp (1080x1165, portrait, HD) is used for her profile hero, the display
// frame there is large enough that a lower-res source visibly softens/pixelates.
import manasviImg from '@/assets/portfolio/manasvi-logo.webp';
// manasvi-pathak.jpeg is used for the Founding Team grid card instead, its landscape
// aspect fits the card's 4:3 frame with much less cropping, and the card renders smaller.
import manasviListingImg from '@/assets/team/manasvi-pathak.jpeg';
import manasviPortfolioImg from '@/assets/portfolio/manasvi-thumbnail.webp';
import tejImg from '@/assets/team/tejpratap.jpeg';
import niroshImg from '@/assets/team/nirosh.jpg';
import jitpaulImg from '@/assets/team/jitpaul.jpg';
import { Briefcase, FileText, Search, ListChecks, Handshake, CalendarCheck, Rocket } from 'lucide-react';
import type { FoundingTeamMember, PressFeature, ProfileCredential } from './types';

const ABHIJEET_LINKEDIN = 'https://www.linkedin.com/in/abhijeetjain231/';
const ABHIJEET_INSTAGRAM = 'https://www.instagram.com/taggingmydad/';
const MANASVI_LINKEDIN = 'https://www.linkedin.com/in/manasvipathakofficial/';
const MANASVI_INSTAGRAM = 'https://www.instagram.com/maanasvie/';
const MANASVI_SITE = 'https://manasvipathak.netlify.app';

const PRESS_TITLE = 'Abhijeet Jain Builds Calibre Associates as an End to End Digital Growth Partner for Businesses';

/** Press release placements published 24 Sep 2026 (distributed releases, not independent editorial coverage). */
const ABHIJEET_PRESS: PressFeature[] = [
  {
    outlet: 'Dailyhunt',
    title: PRESS_TITLE,
    url: 'https://m.dailyhunt.in/news/india/english/r+news+india-epaper-dhfacc36dfce9c4bb68db0e89d033c921b/abhijeet+jain+builds+calibre+associates+as+an+endtoend+digital+growth+partner+for+businesses-newsid-dhfacc36dfce9c4bb68db0e89d033c921b_6c38e9a0b81111f1befd46f92410aa47?sm=Y',
    date: '24 Sep 2026',
    isoDate: '2026-09-24',
    note: 'Listed in the R News India e paper on Dailyhunt, the Indian news and content app.',
  },
  {
    outlet: 'WOW Entrepreneurs',
    title: PRESS_TITLE,
    url: 'https://wowentrepreneurs.com/abhijeet-jain-builds-calibre-associates-as-an-end-to-end-digital-growth-partner-for-businesses/',
    date: '24 Sep 2026',
    isoDate: '2026-09-24',
    note: 'Entrepreneur and business news site.',
  },
  {
    outlet: 'Deccan Business',
    title: PRESS_TITLE,
    url: 'https://deccanbusiness.com/abhijeet-jain-builds-calibre-associates-as-an-end-to-end-digital-growth-partner-for-businesses/',
    date: '24 Sep 2026',
    isoDate: '2026-09-24',
    note: 'Business news site covering Indian companies and entrepreneurship.',
  },
];

const ABHIJEET_CREDENTIALS: ProfileCredential[] = [
  { name: 'LinkedIn Advertising Fundamentals Certification', issuer: 'LinkedIn', date: 'Mar 2026' },
  { name: 'Data Science and Machine Learning Developer', issuer: 'Udemy', date: '2021' },
  { name: 'HTML and CSS Made Simple', issuer: 'Udemy', date: '2021' },
  { name: 'Complete Python Programming for Beginners', issuer: 'Udemy', date: '2022' },
  { name: 'Portfolio Website using HTML and CSS', issuer: 'DevTown', date: '2022' },
  { name: 'Note Taking App using JavaScript and ReactJS Bootcamp', issuer: 'Google Developers Group and Microsoft Imagine Cup', date: '2022' },
];


export const foundingTeam: FoundingTeamMember[] = [
  {
    slug: 'abhijeet-jain',
    name: 'Abhijeet Jain',
    roleLine: 'Founder and CEO, Calibre Associates',
    jobTitle: 'Founder and CEO',
    title: 'Full Stack Developer, AI Automation and Local SEO Consultant',
    heroTagline: 'Managing Director of 716 Lawn Care. Full stack developer and AI automation consultant in Lucknow, India.',
    heroSupportingLine: 'Web and app development, GoHighLevel CRM, AI automation, local SEO and lead generation systems',
    heroImageAlt:
      'Abhijeet Jain, Founder and CEO of Calibre Associates and Managing Director of 716 Lawn Care, Lucknow India',
    image: abhijeetImg,
    locality: 'Lucknow',
    region: 'Uttar Pradesh',
    country: 'IN',
    cardIntro:
      'Founder and CEO of Calibre Associates and Managing Director of 716 Lawn Care. A Lucknow based full stack developer building websites, CRM systems, AI automation and local SEO for growing businesses.',
    cardBadges: ['Full Stack Development', 'GoHighLevel and CRM', 'AI Automation'],
    heroBadges: [
      'Full Stack Developer',
      'Founder and CEO',
      'Managing Director, 716 Lawn Care',
      'GoHighLevel Expert',
      'AI Automation',
      'CRM Architecture',
      'Local SEO',
      'Lead Generation Systems',
      'Web and App Development',
      'DevOps Foundations',
      'Lucknow, India',
      'Serving India and the USA',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: ABHIJEET_LINKEDIN, external: true },
    secondaryCta: { label: 'Email', href: 'mailto:info@calibreassociates.com', external: true },
    sameAs: [ABHIJEET_LINKEDIN, ABHIJEET_INSTAGRAM],
    otherEmployers: [
      { name: '716 Lawn Care', url: 'https://716lawncare.com', locality: 'Buffalo', region: 'New York', country: 'US' },
    ],
    credentials: ABHIJEET_CREDENTIALS,
    pressFeatures: ABHIJEET_PRESS,
    aboutHeading: 'Systems, Not Effort, Decide How a Business Grows.',
    aboutParagraphs: [
      'I am Abhijeet Jain, Founder and CEO of Calibre Associates and a full stack developer based in Lucknow, India. I design websites, apps, CRM pipelines and AI automation for growing businesses in India and the United States, and I run a real company from the inside, which most consultants never do.',
      'That company is 716 Lawn Care in Buffalo, New York. I joined in February 2026 as its digital marketing and web development consultant and built its website, local SEO visibility, paid campaigns and lead generation systems through Calibre. In September 2026 I became Managing Director, taking ownership of operations, strategy, marketing, technology, sales, hiring, financial oversight and vendor management, reporting directly to the owner and leading the team and the field crews. I am not advising from the outside. I live inside the numbers my systems produce.',
      'My belief is simple: most growing companies are not limited by effort, they are limited by how their systems are designed. I keep finding the same gaps. Leads come in but are never tracked. Automation exists without structure. Data is collected and never used. Teams work across tools that do not talk to each other. So I connect the website, the app, the CRM (often GoHighLevel), the automation workflows, the analytics and the deployment layer into one operating backbone.',
      'Before founding Calibre in December 2025, I spent close to a year as Senior Developer at KD Marketing Group, managing GoHighLevel CRM workflows, building and deploying AI automation systems and customizing CRMs to lift client conversion and lead nurturing. Earlier years in sales at Block Buildtech and customer support at Indian Railways, both in Lucknow, keep my builds anchored to the customer side of the screen.',
      'The goal never changes: build systems that remove friction, improve visibility and make growth repeatable.',
    ],
    journey: [
      '2021 to 2022: Learning to code through Udemy, DevTown and Google Developers Group programmes',
      'Oct 2022 to Oct 2023: Commercial Control Operator, Indian Railways, Lucknow',
      'Nov 2023 to Dec 2024: Sales Executive, Block Buildtech, Lucknow',
      'Apr 2025 to Feb 2026: Senior Developer, KD Marketing Group',
      'Dec 2025: Founded Calibre Associates in Lucknow',
      'Feb 2026 to Aug 2026: Digital Marketing and Web Development Consultant, 716 Lawn Care',
      'Sep 2026: Managing Director, 716 Lawn Care',
    ],
    whatIDo: [
      {
        title: 'Full Stack Web and App Development',
        description:
          'Conversion focused websites, web apps and SaaS builds in React, Next.js, WordPress and Node.js, from design through deployment.',
      },
      {
        title: 'GoHighLevel and CRM Architecture',
        description:
          'Pipelines, workflows, follow ups and reporting built in GoHighLevel so every lead is tracked from first click to booked job.',
      },
      {
        title: 'AI Automation and Workflows',
        description:
          'AI assisted workflows with n8n, OpenAI and Claude that remove manual steps, answer enquiries faster and keep customers informed.',
      },
      {
        title: 'Local SEO and Lead Generation',
        description:
          'Service area pages, Google visibility and lead capture systems for local service businesses around Buffalo, Rochester and Syracuse.',
      },
      {
        title: 'DevOps and Deployment Reliability',
        description:
          'Hosting, Cloudflare and GitHub based deployment practices that keep websites and automations fast, stable and easy to maintain.',
      },
      {
        title: 'Operations and Business Leadership',
        description:
          'As Managing Director of 716 Lawn Care, I run strategy, hiring, sales, CRM and crew coordination for a working outdoor services company.',
      },
    ],
    techStack: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'Python', 'WordPress', 'PHP', 'Node.js',
      'GoHighLevel', 'n8n', 'Supabase', 'Firebase', 'OpenAI', 'Claude', 'Google Workspace',
      'Stripe', 'Cloudflare', 'Hostinger', 'GitHub', 'Google Analytics', 'Google Search Console',
      'Ahrefs', 'Meta Ads', 'Google Ads', 'LinkedIn Ads',
    ],
    projectsVariant: 'cards',
    projects: [
      { serviceSlug: 'website-development', slug: '716-lawn-care' },
      { serviceSlug: 'website-development', slug: 'kp-landscaping' },
      { serviceSlug: 'website-development', slug: 'tree-craft-tree-services' },
      { serviceSlug: 'website-development', slug: 'wny-tree-specialists' },
      { serviceSlug: 'website-development', slug: 'rr-landscaping' },
      { serviceSlug: 'website-development', slug: 'manasvi-pathak' },
    ],
    philosophyHeading: 'Systems Over Effort',
    philosophyPoints: [
      'Design the system before adding more effort',
      'Every lead tracked from first click to booked job',
      'Automation with structure, not automation for its own sake',
      'One operating backbone instead of disconnected tools',
      'Measurable growth that repeats month after month',
    ],
    beyondHeading: 'Beyond Development',
    beyondItems: [
      'Running Operations at 716 Lawn Care', 'CRM Pipeline Engineering', 'AI Assisted Workflows', 'Local SEO',
      'Lead Generation Systems', 'DevOps Foundations', 'Performance Marketing', 'Advertising',
    ],
    funFacts: [
      '☕ Coffee fuelled problem solver',
      '🌙 Most productive during late night coding sessions',
      '🤖 Always experimenting with AI',
      '🎓 Started with Udemy and DevTown courses in HTML, CSS and Python',
      '🌍 Works with clients in India and the USA',
      '🚀 Passionate about building systems that scale',
    ],
    finalCtaHeading: "Let's Build Something That Actually Grows Your Business.",
    finalCtaButtons: [
      { label: 'Connect on LinkedIn', href: ABHIJEET_LINKEDIN, external: true },
      { label: 'Book Free Consultation', href: '/contact' },
    ],
    achievements: [
      'Managing Director, 716 Lawn Care, September 2026',
      'Founded Calibre Associates, December 2025',
      'LinkedIn Advertising Fundamentals Certification, LinkedIn, March 2026',
      'Data Science and Machine Learning Developer, Udemy, 2021',
      'HTML and CSS Made Simple, Udemy, 2021',
      'Complete Python Programming for Beginners, Udemy, 2022',
      'Portfolio Website using HTML and CSS, DevTown, 2022',
      'Note Taking App using JavaScript and ReactJS Bootcamp, Google Developers Group and Microsoft Imagine Cup, 2022',
    ],
    achievementsHeading: 'Certifications and Milestones',
    achievementsPosition: 'after-beyond',
    experience: [
      {
        role: 'Managing Director',
        org: '716 Lawn Care',
        period: 'Sep 2026 to present',
        location: 'Buffalo, New York',
        detail:
          'Promoted from consultant to a company wide role with full operational and strategic ownership. Leads the team and field operations across marketing, technology, sales, finance, hiring, CRM systems and vendor and subcontractor coordination.',
      },
      {
        role: 'Digital Marketing and Web Development Consultant',
        org: '716 Lawn Care',
        period: 'Feb 2026 to Aug 2026',
        location: 'Remote, through Calibre Associates',
        detail:
          'Website development, organic lead generation, paid campaigns, high converting pages and local SEO visibility, built as scalable lead generation systems.',
      },
      {
        role: 'Founder and CEO',
        org: 'Calibre Associates',
        period: 'Dec 2025 to present',
        location: 'Lucknow, India',
        detail:
          'Founded a digital marketing, development and AI agency and leads the team delivering tailored marketing and technology solutions for clients in India and the United States.',
      },
      {
        role: 'Senior Developer',
        org: 'KD Marketing Group',
        period: 'Apr 2025 to Feb 2026',
        location: 'Buffalo, New York, remote',
        detail:
          'Managed and optimized GoHighLevel CRM workflows, built and deployed AI automation systems and customized CRMs to improve client conversion rates and lead nurturing.',
      },
      {
        role: 'Sales Executive',
        org: 'Block Buildtech',
        period: 'Nov 2023 to Dec 2024',
        location: 'Lucknow, India',
        detail: 'Created social media content, edited promotional videos and brochures, and handled follow ups and cold calls.',
      },
      {
        role: 'Commercial Control Operator and Customer Support',
        org: 'Indian Railways',
        period: 'Oct 2022 to Oct 2023',
        location: 'Lucknow, India',
        detail: 'Handled passenger complaints through the Rail Madad portal.',
      },
    ],
    relatedLinksHeading: 'Explore the Work Behind the Profile',
    relatedLinks: [
      {
        label: 'Website development services in India and the USA',
        href: '/services/website-development',
        description: 'Custom WordPress, React and Next.js websites built to rank and convert.',
      },
      {
        label: 'AI automation and GoHighLevel CRM solutions',
        href: '/services/ai-automation-solutions',
        description: 'Workflows, follow ups and AI assistants that remove manual work.',
      },
      {
        label: 'Local SEO and organic growth services',
        href: '/services/seo',
        description: 'Service area pages and search visibility for local businesses.',
      },
      {
        label: 'Lead generation and paid advertising',
        href: '/services/lead-generation-paid-advertising',
        description: 'Campaigns and funnels that bring in qualified leads.',
      },
      {
        label: '716 Lawn Care website and local SEO case study',
        href: '/services/website-development/projects/716-lawn-care',
        description: 'The Buffalo lawn care website Abhijeet Jain built before becoming its Managing Director.',
      },
      {
        label: 'Marketing for landscaping and lawn care companies',
        href: '/industries/landscaping-and-lawn-care-marketing',
        description: 'How Calibre Associates grows landscaping and lawn care businesses.',
      },
      {
        label: 'Marketing for tree service companies',
        href: '/industries/tree-service-marketing',
        description: 'Hub and spoke SEO and websites for tree service businesses.',
      },
      {
        label: 'Digital marketing agency in Lucknow, India',
        href: '/locations/lucknow-india',
        description: 'Where Abhijeet Jain founded Calibre Associates.',
      },
      {
        label: 'Local SEO and web development in Buffalo, New York',
        href: '/locations/buffalo-new-york',
        description: 'Work for Buffalo area service businesses.',
      },
      {
        label: 'All Calibre Associates case studies',
        href: '/portfolio',
        description: 'Browse websites, SEO and brand projects.',
      },
    ],
    knowsAbout: [
      'Full Stack Development', 'Web Development', 'App Development', 'SaaS Development', 'AI Automation',
      'Workflow Automation', 'GoHighLevel', 'CRM Architecture', 'Local SEO', 'Lead Generation',
      'Performance Marketing', 'DevOps', 'WordPress Development', 'React and Next.js',
    ],
    metaTitle: 'Abhijeet Jain, Founder and CEO | Calibre Associates, Lucknow',
    metaDescription:
      'Abhijeet Jain is Founder and CEO of Calibre Associates, Managing Director of 716 Lawn Care and a Lucknow full stack developer. GoHighLevel and AI automation.',
    faqs: [
      {
        question: 'Who is Abhijeet Jain?',
        answer:
          'Abhijeet Jain is the Founder and CEO of Calibre Associates, a digital marketing and technology agency he founded in Lucknow, India in December 2025. He is also Managing Director of 716 Lawn Care in Buffalo, New York, and a full stack developer who builds websites, apps, GoHighLevel CRM systems, AI automation and local SEO for businesses in India and the USA.',
      },
      {
        question: 'What does Abhijeet Jain do at 716 Lawn Care?',
        answer:
          'Abhijeet Jain is Managing Director of 716 Lawn Care in Buffalo, New York, a role he took in September 2026. He runs day to day operations, strategy, marketing and technology, and works across sales, hiring, financial oversight, CRM systems and coordination with crews and subcontractors. He first joined in February 2026 as its digital marketing and web development consultant.',
      },
      {
        question: 'Which companies has Abhijeet Jain founded?',
        answer:
          'Abhijeet Jain founded Calibre Associates in December 2025 in Lucknow, Uttar Pradesh. It is an end to end digital growth and technology agency covering websites, SEO, social media, lead generation, CRM implementation, AI automation and talent management for clients in India and the United States. He leads 716 Lawn Care as Managing Director but did not found it.',
      },
      {
        question: 'Is Abhijeet Jain a full stack developer in Lucknow?',
        answer:
          'Yes. Abhijeet Jain is based in Lucknow, Uttar Pradesh, and works as a full stack developer with React, Next.js, TypeScript, WordPress and Node.js. He also builds GoHighLevel CRM and AI automation systems, and works with clients in India and the United States, including local service businesses in Buffalo, Rochester and Syracuse, New York.',
      },
      {
        question: "What is Abhijeet Jain's experience with GoHighLevel and AI automation?",
        answer:
          'From April 2025 to February 2026, Abhijeet Jain was Senior Developer at KD Marketing Group, where he managed and optimized GoHighLevel CRM workflows, built and deployed AI automation systems and customized CRMs to improve client conversion rates and lead nurturing. GoHighLevel and automation are among his top skills, and he uses both at Calibre Associates today.',
      },
      {
        question: 'Does Abhijeet Jain offer local SEO and web development for Buffalo businesses?',
        answer:
          'Yes. Through Calibre Associates, Abhijeet Jain builds websites, local SEO and lead generation systems for Buffalo area service businesses, including 716 Lawn Care and KP Landscaping. You can book a free consultation, email info@calibreassociates.com, call +1 716 355 1231 in Buffalo or +91 9792848868 in India, or connect with him on LinkedIn.',
      },
    ],
  },
  {
    slug: 'pawan-sharma',
    name: 'Pawan Sharma',
    roleLine: 'Co Founder, Calibre Associates',
    title: 'Digital Marketing & AI Specialist',
    heroImageAlt: 'Pawan Sharma, Co Founder of Calibre Associates and digital marketing and AI automation specialist',
    image: pawanImg,
    cardIntro:
      'Co Founder combining digital marketing, automation and AI into growth systems that turn leads into predictable revenue.',
    cardBadges: ['Digital Marketing', 'AI Automation', 'Lead Generation'],
    heroBadges: [
      'Digital Marketing', 'AI Automation', 'Lead Generation', 'CRM Automation',
      'Workflow Automation', 'Business Growth', 'Sales Funnels', 'AI Integrations', 'Process Optimization',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/pawansharma-growth', external: true },
    secondaryCta: { label: 'See Recent Work', href: '#recent-work' },
    aboutHeading: 'Building Smarter Growth Systems.',
    aboutParagraphs: [
      'As Co Founder of Calibre Associates, I focus on combining digital marketing, automation and AI into systems that scale, not one off campaigns that stop producing the moment attention moves elsewhere.',
      'I care about practical strategy: the kind that turns leads into predictable growth using tools that keep working long after the initial setup, so clients get efficiency and sustainable growth instead of just more noise.',
    ],
    journey: [
      'Digital Marketing', 'Lead Generation', 'Marketing Automation', 'AI Workflows',
      'Business Systems', 'Co Founding Calibre Associates', 'Helping Businesses Scale',
    ],
    whatIDo: [
      { title: 'Digital Marketing', description: 'Running campaigns across Meta and Google built around measurable outcomes.' },
      { title: 'AI Automation', description: 'Deploying AI assistants and workflows that shorten response times and close more leads.' },
      { title: 'Lead Generation', description: 'Building funnels and systems that consistently bring in qualified leads.' },
      { title: 'CRM & Sales Automation', description: 'Automating follow up and pipeline management so no lead falls through.' },
      { title: 'Growth Strategy', description: 'Mapping the marketing and automation systems a business needs to scale.' },
    ],
    techStack: [
      'GoHighLevel', 'n8n', 'OpenAI', 'Claude', 'Gemini', 'Meta Business Suite', 'Google Ads',
      'Meta Ads', 'Google Analytics', 'Google Search Console', 'Zapier', 'Make', 'WhatsApp Business',
      'CRM Automation', 'Email Marketing', 'AI Assistants', 'Marketing Automation', 'Lead Generation Systems',
    ],
    projectsVariant: 'cards',
    projectGroups: [
      {
        label: 'Web Development',
        projects: [
          { serviceSlug: 'website-development', slug: 'meta-services-ny' },
          { serviceSlug: 'website-development', slug: 'meta-tree-services-ny' },
        ],
      },
      {
        label: 'Brand Identity',
        projects: [
          { serviceSlug: 'brand-identity-development', slug: 'plume' },
          { serviceSlug: 'brand-identity-development', slug: 'slick' },
          { serviceSlug: 'brand-identity-development', slug: 'volta' },
          { serviceSlug: 'brand-identity-development', slug: 'denim' },
        ],
      },
    ],
    philosophyHeading: 'My Approach',
    philosophyPoints: [
      'Strategy before execution',
      'Automation over repetition',
      'AI as an accelerator, not a replacement',
      'Long term growth over short term wins',
      'Relationships over transactions',
    ],
    beyondHeading: 'Beyond Marketing',
    beyondItems: ['AI', 'Workflow Automation', 'Business Systems', 'Lead Generation', 'Marketing Strategy', 'CRM Optimization', 'Process Improvement'],
    funFacts: [
      '🤖 Constantly exploring new AI tools',
      '📈 Passionate about business growth systems',
      '⚙️ Enjoy building automations that save hours of manual work',
      '💡 Always testing new marketing ideas',
      '🚀 Focused on helping businesses scale smarter',
    ],
    finalCtaHeading: 'Ready to Grow Smarter?',
    finalCtaButtons: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/pawansharma-growth', external: true },
      { label: 'Book Free Consultation', href: '/contact' },
    ],
    knowsAbout: [
      'Digital Marketing', 'AI Automation', 'Lead Generation', 'CRM Automation', 'Workflow Automation',
      'Sales Funnels', 'Marketing Automation', 'Growth Strategy',
    ],
    metaTitle: 'Pawan Sharma, Co Founder | Digital Marketing and AI | Calibre',
    metaDescription:
      'Pawan Sharma is Co Founder of Calibre Associates, a digital marketing and AI specialist building lead generation, CRM automation and growth systems.',
  },
  {
    slug: 'manasvi-pathak',
    name: 'Manasvi Pathak',
    roleLine: 'Co Founder and Talent Manager, Calibre Associates',
    jobTitle: 'Co Founder and Talent Manager',
    title: 'Actress, Fashion Model, UGC Creator and Talent Manager',
    heroTagline: 'Actress, fashion model and UGC creator in Agra, India',
    heroSupportingLine: 'Brand Representative • On Camera Talent • Talent Manager at Calibre Associates',
    heroImageAlt:
      'Manasvi Pathak, Agra based actress, fashion model, UGC creator and Co Founder of Calibre Associates',
    image: manasviImg,
    listingImage: manasviListingImg,
    locality: 'Agra',
    region: 'Uttar Pradesh',
    country: 'IN',
    cardIntro:
      'Agra based actress, fashion model and UGC creator, and Co Founder and Talent Manager at Calibre Associates, matching brands with the right on camera talent.',
    cardBadges: ['Actress', 'Fashion Model', 'UGC Creator', 'Talent Manager'],
    heroBadges: [
      'Actress in Agra', 'Fashion Model', 'UGC Creator', 'Brand Representative', 'On Camera Talent',
      'Commercial Acting', 'Runway and Editorial', 'Talent Manager', 'Creator Partnerships',
      'Beauty Creator', 'Fashion Creator', 'Lifestyle Creator',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: MANASVI_LINKEDIN, external: true },
    secondaryCta: { label: 'Email Manasvi', href: 'mailto:manasvipathak002@gmail.com', external: true },
    sameAs: [MANASVI_LINKEDIN, MANASVI_INSTAGRAM, MANASVI_SITE],
    aboutHeading: 'From Agra Runways to Brand Campaigns, Built on Authentic Stories.',
    aboutParagraphs: [
      'I am Manasvi Pathak, an actress, fashion model and UGC creator based in Agra, Uttar Pradesh, with more than five years in front of the camera. I work on commercial ad films, fashion editorials and runway, and creator content such as talking head videos, Reels and product videos for brands.',
      'My brand work includes collaborations with Bomsheep, Kapda Mandir, KD Marketing, Frankfinn Agra, VJ Jewellers, Woman Central, GMB Sweets, Creative Tigers, Priya Living and DoubleTree by Hilton Agra, along with a role in the film Tu Meri Main Tera and a runway appearance at Taj Mahotsav in Agra. A Kapda Mandir bridal fashion shoot and a VJ Jewellers jewellery campaign are written up as case studies on my portfolio site.',
      'Since January 2026 I have also been Co Founder and Talent Manager at Calibre Associates. I lead talent management and brand representation, contribute to creative direction, and coordinate creators, models, actors and on camera talent for brand campaigns, managing each creator partnership from outreach through execution.',
      'Years of being the talent taught me that fit matters more than follower count. A UGC creator is not the same as an influencer, and the right face for a campaign is the one whose audience, style and values already match the brand. That is the lens I bring when I brief, shortlist and manage talent.',
    ],
    journey: [
      'Early Passion for Performance',
      'Junior Pageant Title',
      'Took Modelling Seriously in Agra',
      'Fashion Editorials and Runway',
      'Brand Collaborations Across India',
      'Film Role, Tu Meri Main Tera',
      'Runway at Taj Mahotsav, Agra',
      'Oct 2025: Woman Central and Priya Living',
      'Jan 2026: Co Founder and Talent Manager, Calibre Associates',
    ],
    whatIDo: [
      { title: 'Commercial Acting for Ad Films', description: 'Bringing characters and brand narratives to life on camera for ad films and commercial campaigns.' },
      { title: 'Fashion Modelling', description: 'Runway, editorial and campaign modelling across fashion, beauty and jewellery brands from Agra.' },
      { title: 'UGC Creator Content', description: 'Talking head videos, Reels and product videos that feel native to social platforms and work in paid campaigns.' },
      { title: 'Brand Representative Work', description: 'Representing brands as the face of their campaigns, and helping other brands find the right person to do the same.' },
      { title: 'Talent Management', description: 'As Talent Manager at Calibre Associates, I find, brief and coordinate creators, models, actors and on camera talent for brand campaigns.' },
      { title: 'Creator Partnerships', description: 'Building relationships with creators across niches and managing each partnership from outreach through execution.' },
      { title: 'Creative Direction', description: 'Shaping the creative and on camera approach behind Calibre Associates campaigns.' },
      { title: 'Content Strategy', description: 'Bringing an on camera and creator perspective into the campaigns built for Calibre Associates clients.' },
      { title: 'Campaign Coordination', description: 'Keeping briefs, shoots, approvals and delivery on schedule so brands get content they can use.' },
    ],
    techStack: [],
    projectsVariant: 'portfolio',
    portfolioUrl: 'https://manasvipathak.netlify.app/',
    portfolioImage: manasviPortfolioImg,
    portfolioImageAlt:
      'Manasvi Pathak portfolio website homepage showing her actress, fashion model and UGC creator work from Agra',
    secondaryPortfolioCta: { label: 'Work With Manasvi', href: 'https://manasvipathak.netlify.app/contact', external: true },
    relatedLinksHeading: 'Work With Manasvi',
    relatedLinks: [
      {
        label: 'Actress in Agra',
        href: 'https://manasvipathak.netlify.app/actress-agra',
        description: 'Acting for ad films and commercial campaigns.',
        external: true,
      },
      {
        label: 'Fashion model in Agra',
        href: 'https://manasvipathak.netlify.app/fashion-model-agra',
        description: 'Runway, editorial and campaign modelling.',
        external: true,
      },
      {
        label: 'UGC creator in Agra',
        href: 'https://manasvipathak.netlify.app/ugc-creator-agra',
        description: 'Talking head videos, Reels and product videos for brands.',
        external: true,
      },
      {
        label: 'Talent management agency in Agra',
        href: 'https://manasvipathak.netlify.app/talent-management-agency-agra',
        description: 'How creators and on camera talent are matched to brands.',
        external: true,
      },
      {
        label: 'Brand ambassador in Agra',
        href: 'https://manasvipathak.netlify.app/brand-ambassador-agra',
        description: 'Brand representation and ambassador collaborations.',
        external: true,
      },
      {
        label: 'Kapda Mandir bridal fashion shoot case study',
        href: 'https://manasvipathak.netlify.app/work/kapda-mandir-bridal-fashion-shoot',
        description: 'Case study of the bridal fashion shoot for Kapda Mandir.',
        external: true,
      },
      {
        label: 'VJ Jewellers jewellery campaign case study',
        href: 'https://manasvipathak.netlify.app/work/vj-jewellers-jewellery-campaign',
        description: 'Case study of the jewellery campaign for VJ Jewellers.',
        external: true,
      },
      {
        label: 'Manasvi Pathak portfolio',
        href: 'https://manasvipathak.netlify.app/portfolio',
        description: 'Selected modelling, acting and creator work.',
        external: true,
      },
      {
        label: 'Social media marketing and creator campaigns',
        href: '/services/social-media-marketing',
        description: 'The Calibre Associates service that talent management supports.',
      },
      {
        label: 'How Calibre Associates built her portfolio website',
        href: '/services/website-development/projects/manasvi-pathak',
        description: 'The personal brand website case study.',
      },
      {
        label: 'Meet Abhijeet Jain, Founder and CEO',
        href: '/our-team/abhijeet-jain',
        description: 'Her Co Founder at Calibre Associates.',
      },
    ],
    philosophyHeading: 'Every Brand Has a Story.',
    philosophyPoints: [
      'Audiences connect with authenticity, not ads',
      'Great content is creativity, professionalism and emotional storytelling combined',
      'Representation means alignment, not just appearance',
      'Fit matters more than follower count',
      'Professional delivery paired with natural, authentic storytelling',
    ],
    beyondHeading: 'Beyond the Camera',
    beyondItems: [
      'Creative storytelling', 'Fashion', 'Beauty', 'Brand communication', 'Public speaking',
      'Digital content', 'Creative direction', 'Community initiatives through Kaushambi Foundation',
    ],
    funFacts: [
      '📷 Most comfortable in front of the camera',
      '🎬 Passionate about storytelling',
      '✨ Loves transforming creative ideas into visual experiences',
      '👗 Fashion and beauty enthusiast',
      '🌍 Open to collaborations across India and internationally',
    ],
    finalCtaHeading: "Let's Create Something Memorable.",
    finalCtaButtons: [
      { label: 'Connect on LinkedIn', href: MANASVI_LINKEDIN, external: true },
      { label: 'Email Manasvi', href: 'mailto:manasvipathak002@gmail.com', external: true },
      { label: 'Explore Portfolio', href: 'https://manasvipathak.netlify.app/', external: true },
    ],
    achievements: [
      'Junior Pageant Title',
      'Certificate of Excellence, World Designing Forum',
      'Featured Face, Eminent Icon Pageant Talent Hunt Reality Show',
      'Professional Brand Collaborations',
      'Film Appearance, "Tu Meri Main Tera"',
      'Runway Appearance, Taj Mahotsav, Agra',
      'Member, Kaushambi Foundation NGO',
    ],
    achievementsHeading: 'Featured Achievements',
    achievementsPosition: 'after-journey',
    experience: [
      {
        role: 'Co Founder and Talent Manager',
        org: 'Calibre Associates',
        period: 'Jan 2026 to present',
        location: 'Agra, India',
        detail:
          'Leads talent management and brand representation, contributes to creative direction and coordinates creators, models, actors and on camera talent for brand campaigns.',
      },
      {
        role: 'Brand Content Creator and On Camera Talent',
        org: 'Priya Living',
        period: 'Oct 2025 to present',
        location: 'Gurugram, India',
      },
      {
        role: 'Brand Face and On Camera Content',
        org: 'Woman Central',
        period: 'Oct 2025 to present',
        location: 'Agra, India',
      },
      { role: 'Marketing Head', org: 'Kaushambi Foundation' },
      { role: 'Professional Model', org: 'RS Modelling Agency, Creative Tigers' },
      { role: 'Creative Collaborator', org: 'US Based Marketing Company' },
      { role: 'Film', org: 'Tu Meri Main Tera' },
    ],
    industries: [
      'Beauty', 'Fashion', 'Lifestyle', 'Jewellery', 'Hospitality', 'Real Estate',
      'Commercial Advertising', 'Luxury Brands', 'Personal Branding', 'Digital Campaigns', 'Social Media', 'UGC Campaigns',
    ],
    talentIntro: {
      heading: 'The Right Talent For The Right Brand.',
      description:
        "I've spent my career as the talent. Now, through Calibre Associates, I also help brands find and work with the right creators and on camera talent for their campaigns. It's a growing, curated network rather than an open marketplace, every match is considered against the brand's niche, audience, content style and campaign goals.",
    },
    talentCategories: [
      { title: 'UGC Creators', description: 'Authentic, product focused content built for social and paid campaigns.' },
      { title: 'Models', description: 'Fashion, beauty, lifestyle and commercial campaign work.' },
      { title: 'Actors', description: 'Commercials, advertisements and scripted brand content.' },
      { title: 'Influencers', description: 'Campaigns built around genuine audience reach and community trust.' },
      { title: 'Content Creators', description: 'Platform native content for Instagram, YouTube, TikTok and beyond.' },
      { title: 'On Camera Talent', description: 'Talking head, educational, promotional and brand communication content.' },
    ],
    talentWorkflow: [
      { label: 'Brand Requirement', icon: Briefcase },
      { label: 'Campaign Brief', icon: FileText },
      { label: 'Talent Discovery', icon: Search },
      { label: 'Shortlisting', icon: ListChecks },
      { label: 'Talent Matching', icon: Handshake },
      { label: 'Campaign Coordination', icon: CalendarCheck },
      { label: 'Campaign Delivery', icon: Rocket },
    ],
    knowsAbout: [
      'Acting', 'Commercial Acting', 'Fashion Modelling', 'UGC Content Creation', 'Brand Representation',
      'Talent Management', 'Creator Partnerships', 'On Camera Talent', 'Content Strategy',
    ],
    metaTitle: 'Manasvi Pathak | Actress and UGC Creator in Agra | Calibre',
    metaDescription:
      'Manasvi Pathak is an Agra actress, fashion model and UGC creator, and Co Founder and Talent Manager at Calibre Associates. Brand collaborations and casting.',
    faqs: [
      {
        question: 'Who is Manasvi Pathak?',
        answer:
          'Manasvi Pathak is an Agra based actress, fashion model and UGC creator with more than five years in front of the camera. She is also Co Founder and Talent Manager at Calibre Associates, where she leads talent management and brand representation, and she works as a brand representative and on camera talent for brands across India.',
      },
      {
        question: 'Is Manasvi Pathak an actress in Agra?',
        answer:
          'Yes. Manasvi Pathak is an actress based in Agra, Uttar Pradesh. She works in commercial ad films, has a role in the film Tu Meri Main Tera, and has walked the runway at Taj Mahotsav in Agra. She is also a fashion model and UGC creator, open to collaborations across India.',
      },
      {
        question: 'Can I hire a UGC creator or fashion model in Agra through Manasvi Pathak?',
        answer:
          'Yes. Manasvi Pathak creates UGC content, including talking head videos, Reels and product videos, and works as a fashion model for runway, editorial and campaign shoots from Agra. Brands can reach her through her portfolio website or by email to discuss a collaboration.',
      },
      {
        question: 'Which brands has Manasvi Pathak worked with?',
        answer:
          'Manasvi Pathak has collaborated with Bomsheep, Kapda Mandir, KD Marketing, Frankfinn Agra, VJ Jewellers, Woman Central, GMB Sweets, Creative Tigers, Priya Living and DoubleTree by Hilton Agra. Case studies for a Kapda Mandir bridal fashion shoot and a VJ Jewellers jewellery campaign are on her portfolio site.',
      },
      {
        question: 'What does Manasvi Pathak do at Calibre Associates?',
        answer:
          'Manasvi Pathak is Co Founder and Talent Manager at Calibre Associates, a role she has held since January 2026. She leads talent management and brand representation, contributes to creative direction, and identifies and coordinates creators, models, actors and on camera talent for brand campaigns, managing each partnership from outreach through execution.',
      },
      {
        question: 'Does Calibre Associates provide creators and on camera talent for brand campaigns?',
        answer:
          'Yes, through a growing, curated talent capability led by Manasvi Pathak. Calibre Associates can match brands with UGC creators, models, actors, influencers and on camera talent based on niche, audience, content style and campaign goals, rather than operating as an open talent marketplace.',
      },
      {
        question: 'What is the difference between a UGC creator and an influencer?',
        answer:
          "A UGC creator makes content that a brand publishes on its own channels and ads, so the creator's face, voice and style matter more than audience size. An influencer publishes to their own followers. Manasvi Pathak, who works as both on camera talent and a talent manager, advises brands to choose talent for fit rather than follower count.",
      },
    ],
  },
  {
    slug: 'tej-pratap',
    name: 'Tej Pratap',
    roleLine: 'Manager, Calibre Associates',
    jobTitle: 'Performance Marketing Manager',
    title: 'Performance Marketing Manager & Trainer',
    heroImageAlt: 'Tej Pratap, Manager and performance marketing specialist at Calibre Associates',
    image: tejImg,
    cardIntro:
      'Performance marketer with more than five years turning Meta and Google Ads, SEO and WordPress into measurable business growth, including SEO for tree service companies.',
    cardBadges: ['Performance Marketing', 'Meta Ads', 'Google Ads'],
    heroBadges: [
      'Performance Marketing', 'Meta Ads', 'Google Ads', 'SEO', 'SEO for Tree Service Companies', 'WordPress',
      'Content Marketing', 'Lead Generation', 'Digital Strategy', 'Team Leadership', 'Campaign Optimization',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/tejpratap-kanwliya/', external: true },
    secondaryCta: { label: 'Book a Free Consultation', href: '/contact' },
    sameAs: ['https://www.linkedin.com/in/tejpratap-kanwliya/'],
    aboutHeading: 'Turning Marketing Into Measurable Business Growth.',
    aboutParagraphs: [
      "I've always been drawn to strategic digital marketing, not just running ads and hoping for the best. Over more than five years I've built experience across performance marketing, WordPress development, SEO, Meta Ads, Google Ads, content marketing and ecommerce.",
      'As Manager at Calibre Associates, I work closely with our team to make sure every campaign is tied to a real business outcome, not just impressions.',
      'Two recent projects show how I work. I served as Performance Manager on the Arborix Tree Services and Branch Experts Rochester websites, two tree service sites built on a hub and spoke SEO architecture with more than 60 location pages each. My side of the work was the internal linking between the hub and every town page, the schema markup, page speed and conversion tracking.',
      'That is the approach I bring to any local service company: structure the site so every location page earns its place in search, then measure what it produces.',
    ],
    journey: [
      'Digital Marketing', 'WordPress Development', 'SEO & Organic Growth', 'Performance Advertising',
      'Ecommerce Experience', 'Marketing Training', 'Manager, Calibre Associates',
      'Performance Manager, Arborix Tree Services and Branch Experts Rochester', 'Helping Businesses Scale',
    ],
    whatIDo: [
      { title: 'Performance Marketing', description: 'Running Meta and Google campaigns optimized for real conversions.' },
      { title: 'Search Engine Optimization', description: 'Improving organic visibility and rankings through structured SEO.' },
      { title: 'SEO for Tree Service Companies', description: 'Hub and spoke site structures, location pages, internal linking and schema for tree service websites.' },
      { title: 'Google & Meta Advertising', description: 'Managing paid campaigns across search, display and social.' },
      { title: 'WordPress Development', description: 'Building and optimizing WordPress sites for speed and conversion.' },
      { title: 'Content Marketing', description: 'Planning content that supports both SEO and paid performance.' },
    ],
    techStack: [
      'Meta Ads Manager', 'Google Ads', 'Google Analytics', 'Google Search Console', 'WordPress',
      'Elementor', 'Ahrefs', 'SEMrush', 'Google Tag Manager', 'Looker Studio', 'Meta Business Suite',
      'Canva', 'Content Marketing', 'Performance Analytics', 'Conversion Tracking', 'Campaign Optimization',
      'SEO Auditing', 'Local SEO',
    ],
    projectsVariant: 'cards',
    projects: [
      { serviceSlug: 'website-development', slug: 'arborix-tree-services' },
      { serviceSlug: 'website-development', slug: 'branch-experts-rochester' },
      { serviceSlug: 'website-development', slug: 'wny-tree-specialists' },
    ],
    relatedLinksHeading: 'Related Services and Case Studies',
    relatedLinks: [
      {
        label: 'Marketing for tree service companies',
        href: '/industries/tree-service-marketing',
        description: 'Hub and spoke SEO and lead generation for tree service businesses.',
      },
      {
        label: 'Arborix Tree Services website and SEO case study',
        href: '/services/website-development/projects/arborix-tree-services',
        description: 'A tree service website with more than 60 location pages.',
      },
      {
        label: 'Branch Experts Rochester website and SEO case study',
        href: '/services/website-development/projects/branch-experts-rochester',
        description: 'A Rochester tree service website built for local search.',
      },
      {
        label: 'SEO and organic growth services',
        href: '/services/seo',
        description: 'Technical SEO, local SEO and content planning.',
      },
      {
        label: 'Lead generation and paid advertising',
        href: '/services/lead-generation-paid-advertising',
        description: 'Meta Ads and Google Ads campaigns built for conversions.',
      },
    ],
    philosophyHeading: 'Every Campaign Should Have a Purpose.',
    philosophyPoints: [
      'Data driven decision making',
      'Continuous optimization',
      'Customer first marketing',
      'Long term brand growth',
      'Transparency and measurable results',
    ],
    beyondHeading: 'Beyond Marketing',
    beyondItems: ['Performance Marketing', 'SEO', 'Digital Strategy', 'Team Mentoring', 'Ecommerce', 'Website Optimization', 'Marketing Analytics', 'Business Growth'],
    funFacts: [
      '📈 Passionate about improving campaign performance',
      '🎯 Focused on measurable marketing results',
      '💻 Enjoys building and optimizing WordPress websites',
      '🧠 Believes continuous learning drives better marketing',
      '🚀 Helping businesses grow through strategy and execution',
    ],
    finalCtaHeading: 'Ready to Scale Your Marketing?',
    finalCtaButtons: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/tejpratap-kanwliya/', external: true },
      { label: 'Book Free Consultation', href: '/contact' },
    ],
    knowsAbout: [
      'Performance Marketing', 'Meta Ads', 'Google Ads', 'SEO', 'SEO for Tree Service Companies',
      'Local SEO', 'Hub and Spoke SEO Architecture', 'WordPress Development', 'Conversion Tracking',
      'Content Marketing',
    ],
    metaTitle: 'Tej Pratap | Performance Marketing Manager | Calibre',
    metaDescription:
      'Tej Pratap is a performance marketing manager at Calibre Associates with more than five years in Meta Ads, Google Ads and SEO for tree service companies.',
    faqs: [
      {
        question: 'Who is Tej Pratap?',
        answer:
          'Tej Pratap is a Manager and performance marketer at Calibre Associates with more than five years of experience in Meta Ads, Google Ads, SEO, WordPress development and content marketing. He also works as a trainer and ties every campaign to a measurable business outcome such as calls, leads or sales.',
      },
      {
        question: 'What does a performance marketing manager at Calibre Associates do?',
        answer:
          'A performance marketing manager at Calibre Associates plans and optimizes paid and organic campaigns around measurable results. Tej Pratap manages Meta Ads and Google Ads, SEO, conversion tracking and reporting, and works with the development team so websites load quickly and turn visitors into enquiries.',
      },
      {
        question: 'Does Tej Pratap do SEO for tree service companies?',
        answer:
          'Yes. Tej Pratap served as Performance Manager on the Arborix Tree Services and Branch Experts Rochester websites, each built with a hub and spoke SEO architecture and more than 60 location pages. His work covers internal linking, schema markup, page speed and tracking for tree service businesses.',
      },
      {
        question: 'What is hub and spoke SEO for a tree service website?',
        answer:
          'Hub and spoke SEO organizes a site around a main service hub that links to a dedicated page for each town or service area. For a tree service company, every location page links back to the hub and to related services, which helps search engines understand coverage and helps nearby customers find the right page.',
      },
      {
        question: 'Which websites has Tej Pratap worked on at Calibre Associates?',
        answer:
          'Tej Pratap has worked on tree service websites including Arborix Tree Services, Branch Experts Rochester and WNY Tree Specialists. Each case study is published on the Calibre Associates website, with details of the site structure, SEO approach and local service area targeting.',
      },
    ],
  },
  {
    slug: 'nirosh',
    name: 'Nirosh',
    title: 'Software Engineer & UI/UX Designer',
    heroImageAlt: 'Nirosh, software engineer and UI and UX designer at Calibre Associates',
    image: niroshImg,
    cardIntro:
      'Software engineer and UI/UX designer building clean, scalable web products and CRM systems from first principles.',
    cardBadges: ['Software Engineering', 'UI/UX Design', 'WordPress'],
    heroBadges: [
      'Software Engineering', 'UI/UX Design', 'WordPress', 'CRM Solutions', 'Frontend Development',
      'Product Design', 'Web Applications', 'User Experience', 'Responsive Design', 'Business Systems',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/niro-randimal/', external: true },
    secondaryCta: { label: 'Book a Free Consultation', href: '/contact' },
    sameAs: ['https://www.linkedin.com/in/niro-randimal/'],
    aboutHeading: 'Engineering Better Digital Experiences.',
    aboutParagraphs: [
      'I combine software engineering with UX design, because the best products come from understanding users before writing a single line of code.',
      'My experience spans software engineering, WordPress development, UI/UX design, CRM systems, business applications and responsive websites, always with the same starting point: what does the user actually need?',
    ],
    journey: [
      'Software Engineering', 'Frontend Development', 'UI/UX Design', 'WordPress Solutions',
      'CRM Systems', 'Business Applications', 'Calibre Associates', 'Building Better Digital Products',
    ],
    whatIDo: [
      { title: 'Software Engineering', description: 'Building reliable, maintainable web applications from the ground up.' },
      { title: 'UI/UX Design', description: 'Designing interfaces that are as functional as they are polished.' },
      { title: 'WordPress Development', description: 'Building custom WordPress solutions tailored to business needs.' },
      { title: 'CRM Solutions', description: 'Architecting CRM systems that keep business data organized and useful.' },
      { title: 'Product Development', description: 'Taking products from concept through to a shipped, working experience.' },
    ],
    techStack: [
      'WordPress', 'PHP', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3',
      'Tailwind CSS', 'Git', 'GitHub', 'Figma', 'Elementor', 'CRM Systems', 'Responsive Design',
      'REST APIs', 'Performance Optimization', 'UI Prototyping',
    ],
    projectsVariant: 'cards',
    projects: [
      { serviceSlug: 'website-development', slug: 'buffalo-tree-specialists' },
    ],
    philosophyHeading: 'Simplicity Creates Better Products.',
    philosophyPoints: [
      'User first thinking',
      'Clean architecture',
      'Maintainable code',
      'Performance matters',
      'Every interaction should have purpose',
    ],
    beyondHeading: 'Beyond Engineering',
    beyondItems: ['Software Architecture', 'UI/UX Design', 'Product Thinking', 'CRM Solutions', 'Business Systems', 'Responsive Development', 'Modern Web Technologies', 'Continuous Learning'],
    funFacts: [
      '💻 Passionate about building scalable software',
      '🎨 Enjoys blending design with engineering',
      '⚡ Always optimizing for performance',
      '🧩 Loves solving complex technical challenges',
      '🚀 Building digital products that people enjoy using',
    ],
    finalCtaHeading: "Let's Build Better Digital Products.",
    finalCtaButtons: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/niro-randimal/', external: true },
      { label: 'Book a Free Consultation', href: '/contact' },
    ],
    knowsAbout: [
      'Software Engineering', 'UI and UX Design', 'WordPress Development', 'CRM Systems',
      'Frontend Development', 'Responsive Web Design', 'Business Applications',
    ],
    metaTitle: 'Nirosh | Software Engineer and UI/UX Designer | Calibre',
    metaDescription:
      'Nirosh is a software engineer and UI/UX designer at Calibre Associates, building WordPress sites, CRM systems and responsive web applications for businesses.',
  },
  {
    slug: 'jitpaul',
    name: 'Jitpaul',
    title: 'UI/UX Designer & Graphic Designer',
    heroImageAlt: 'Jitpaul, UI and UX designer and graphic designer at Calibre Associates',
    image: jitpaulImg,
    imagePosition: 'object-[85%_20%]',
    cardIntro:
      'A growing UI/UX and graphic designer learning fast through real client projects, designathons and hands on craft.',
    cardBadges: ['UI/UX Design', 'Graphic Design', 'Branding'],
    heroBadges: [
      'UI/UX Design', 'Graphic Design', 'Interaction Design', 'UX Research', 'Branding',
      'Creative Design', 'Visual Identity', 'User Experience', 'Product Thinking', 'Design Systems',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/jitpaul-baishya-a05241381/', external: true },
    secondaryCta: { label: 'Book a Free Consultation', href: '/contact' },
    sameAs: ['https://www.linkedin.com/in/jitpaul-baishya-a05241381/'],
    aboutHeading: 'Designing With Curiosity, Growing With Every Project.',
    aboutParagraphs: [
      "I began with graphic design and evolved into UI/UX through continuous, hands on learning. Along the way I've worked across branding, graphic design, menu design, UI concepts, UX research, design systems, UX case studies and digital interfaces.",
      "I'm still learning, and I say that openly. Working on real client projects at Calibre Associates has accelerated my growth faster than anything else, and every project teaches me something I didn't know before.",
    ],
    journey: [
      'Graphic Design', 'Brand Identity', 'Visual Communication', 'UI Design', 'UX Research',
      'Real Client Projects', 'Calibre Associates', 'Continuous Learning',
    ],
    whatIDo: [
      { title: 'UI/UX Design', description: 'Designing interfaces that are intuitive, clean and purposeful.' },
      { title: 'Graphic Design', description: 'Creating visual assets, branding and design collateral.' },
      { title: 'Interaction Design', description: 'Shaping how users move through and experience a product.' },
      { title: 'UX Research', description: 'Learning how people actually use a product before designing solutions.' },
      { title: 'Creative Collaboration', description: 'Working closely with the team to bring shared creative visions to life.' },
    ],
    techStack: [
      'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'UI Design', 'UX Research',
      'Wireframing', 'Prototyping', 'Design Systems', 'Typography', 'Color Theory', 'Visual Identity',
      'Responsive Design', 'Branding', 'User Flows', 'Component Libraries', 'Interaction Design', 'Creative Thinking',
    ],
    projectsVariant: 'linkedin',
    philosophyHeading: 'Great Design Begins With Understanding People.',
    philosophyPoints: [
      'Learn continuously',
      'Design with empathy',
      'Simplicity creates clarity',
      'Research before assumptions',
      'Every project is an opportunity to grow',
    ],
    beyondHeading: 'Beyond Design',
    beyondItems: ['UI Design', 'UX Research', 'Branding', 'Visual Storytelling', 'Product Design', 'Design Systems', 'Creative Exploration', 'Continuous Learning'],
    funFacts: [
      '🎨 Constantly exploring new design ideas',
      '📚 Believes every project teaches something new',
      '🧠 Curious about how people interact with digital products',
      '✨ Passionate about creating meaningful user experiences',
      '🚀 Always learning, always improving',
    ],
    finalCtaHeading: 'Great Design Is Never Finished. It Evolves.',
    finalCtaButtons: [
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/jitpaul-baishya-a05241381/', external: true },
      { label: 'Book a Free Consultation', href: '/contact' },
    ],
    achievements: [
      'Interaction Designer',
      'UX Research Enthusiast',
      'Creative Designer',
      'Four Time Designathon Participant',
      'Two Time Hackathon Participant',
      'Continuous Learner',
      'Collaborative Team Player',
    ],
    achievementsHeading: 'Learning & Achievements',
    achievementsPosition: 'after-beyond',
    knowsAbout: [
      'UI and UX Design', 'Graphic Design', 'Branding', 'Interaction Design', 'UX Research',
      'Design Systems', 'Visual Identity',
    ],
    metaTitle: 'Jitpaul | UI/UX and Graphic Designer | Calibre Associates',
    metaDescription:
      'Jitpaul is a UI/UX and graphic designer at Calibre Associates, working on branding, interaction design and UX research through real client projects.',
  },
];

export const findTeamMember = (slug: string) => foundingTeam.find((m) => m.slug === slug);
