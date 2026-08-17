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
import type { FoundingTeamMember } from './types';

const ABHIJEET_LINKEDIN = 'https://www.linkedin.com/in/abhijeetjain231/';

export const foundingTeam: FoundingTeamMember[] = [
  {
    slug: 'abhijeet-jain',
    name: 'Abhijeet Jain',
    roleLine: 'Founder & CEO, Calibre Associates',
    title: 'Full Stack Web Developer & Workflow Specialist',
    heroImageAlt: 'Abhijeet Jain, Founder and CEO of Calibre Associates, full stack web developer and AI automation specialist',
    image: abhijeetImg,
    cardIntro:
      'Founder of Calibre Associates, building full stack products, automation and AI-driven workflows that turn websites into growth systems.',
    cardBadges: ['Full Stack Development', 'AI Automation', 'CRM Systems'],
    heroBadges: [
      'Full Stack Development',
      'AI Automation',
      'Workflow Automation',
      'WordPress',
      'React & Next.js',
      'SEO',
      'CRM Systems',
      'Business Growth',
      'Local SEO',
      'Lead Generation',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: ABHIJEET_LINKEDIN, external: true },
    secondaryCta: { label: 'Email', href: 'mailto:info@calibreassociates.com', external: true },
    aboutHeading: 'Building Businesses, Not Just Websites.',
    aboutParagraphs: [
      "I started Calibre Associates around a simple idea: businesses don't need another vendor selling isolated services, they need a partner who can combine software engineering, automation, marketing and AI into one growth-focused system.",
      "My work sits at the intersection of code and strategy. I build the scalable systems, websites, CRMs, automations, that produce measurable results, and I stay close to clients from strategy through execution instead of handing work off and disappearing.",
      "Every project I take on is judged the same way: does it move the business forward, not just does it look good.",
    ],
    journey: [
      'Curiosity for Technology',
      'Web Development',
      'Marketing & SEO',
      'Workflow Automation',
      'AI Solutions',
      'Building Calibre Associates',
      'Helping Businesses Scale',
    ],
    whatIDo: [
      { title: 'Full Stack Development', description: 'Designing and building fast, scalable websites and web applications end to end.' },
      { title: 'AI Automation', description: 'Building AI-powered workflows that remove manual work and speed up operations.' },
      { title: 'SEO & Organic Growth', description: 'Structuring sites and content so they rank, convert, and compound over time.' },
      { title: 'CRM & Workflow Systems', description: 'Connecting tools and data into CRM systems that keep businesses organized as they grow.' },
      { title: 'Business Strategy', description: 'Advising on the systems and priorities that turn a website into a growth engine.' },
    ],
    techStack: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'WordPress', 'PHP', 'Node.js',
      'GoHighLevel', 'n8n', 'Supabase', 'Firebase', 'OpenAI', 'Claude', 'Google Workspace',
      'Stripe', 'Cloudflare', 'Hostinger', 'GitHub', 'Google Analytics', 'Google Search Console',
      'Ahrefs', 'Meta Ads', 'Google Ads',
    ],
    projectsVariant: 'cards',
    projects: [
      { serviceSlug: 'website-development', slug: '716-lawn-care' },
      { serviceSlug: 'website-development', slug: 'rr-landscaping' },
      { serviceSlug: 'website-development', slug: 'kp-landscaping' },
      { serviceSlug: 'website-development', slug: 'manasvi-pathak' },
      { serviceSlug: 'website-development', slug: 'buffalo-deck-builders' },
    ],
    philosophyHeading: 'My Approach',
    philosophyPoints: [
      'Simplicity over complexity',
      'Performance over trends',
      'Automation over manual processes',
      'Long-term partnerships over quick wins',
      'Measurable results over vanity metrics',
    ],
    beyondHeading: 'Beyond Development',
    beyondItems: ['Automation', 'AI', 'Business Systems', 'SEO', 'User Experience', 'Conversion Optimization', 'Scalable Processes'],
    funFacts: [
      '☕ Coffee-fueled problem solver',
      '🌙 Most productive during late-night coding sessions',
      '🚀 Passionate about building systems that scale',
      '🤖 Always experimenting with AI',
      '🌍 Working with businesses across multiple industries',
    ],
    finalCtaHeading: "Let's Build Something That Actually Grows Your Business.",
    finalCtaButtons: [
      { label: 'Connect on LinkedIn', href: ABHIJEET_LINKEDIN, external: true },
      { label: 'Book Free Consultation', href: '/contact' },
    ],
    knowsAbout: [
      'Full Stack Development', 'AI Automation', 'Workflow Automation', 'SEO',
      'CRM Systems', 'WordPress Development', 'React and Next.js',
    ],
    metaTitle: 'Abhijeet Jain | Founder & CEO, Full Stack Developer | Calibre Associates',
    metaDescription:
      'Abhijeet Jain is Founder and CEO of Calibre Associates, a full stack developer building websites, CRM systems and AI automation for businesses in India and the United States.',
    faqs: [
      {
        question: 'Who is Abhijeet Jain and what industries is he associated with?',
        answer:
          'Abhijeet Jain is the Founder and CEO of Calibre Associates, a full stack web developer and workflow specialist who builds websites, web applications, CRM systems, and AI automation for businesses. He works across industries including local services, e-commerce, professional services, and small business growth, combining software engineering with SEO and marketing strategy.',
      },
      {
        question: 'What companies has Abhijeet Jain founded?',
        answer:
          'Abhijeet Jain founded Calibre Associates, a digital marketing agency that combines full stack development, SEO, automation, and AI into growth systems for businesses in India and the United States.',
      },
      {
        question: "Where can I find Abhijeet Jain's professional profile online?",
        answer:
          "You can find Abhijeet Jain's professional profile on LinkedIn, where he shares his work in full stack development, automation, and digital growth strategy, or on his Calibre Associates founding team profile.",
      },
      {
        question: 'What services does Abhijeet Jain offer through Calibre Associates?',
        answer:
          'Through Calibre Associates, Abhijeet Jain offers full stack website and web application development, SEO and organic growth strategy, CRM and workflow automation, and AI powered business systems, working directly with clients from strategy through execution.',
      },
      {
        question: 'How can I contact Abhijeet Jain for business inquiries?',
        answer:
          'You can reach Abhijeet Jain through his LinkedIn profile or by emailing info@calibreassociates.com, or by booking a free consultation through the Calibre Associates contact page.',
      },
      {
        question: 'What are some notable projects Abhijeet Jain has developed?',
        answer:
          "Abhijeet Jain has built full stack websites and web applications for businesses including 716 Lawn Care, RR Landscaping, and KP Landscaping, along with Manasvi Pathak's personal brand portfolio. His project work spans custom WordPress development, React and Next.js applications, and CRM integrated business systems.",
      },
      {
        question: 'What technology platforms does Abhijeet Jain specialize in?',
        answer:
          'Abhijeet Jain works primarily with React, Next.js, TypeScript, and WordPress for development, GoHighLevel and n8n for automation and CRM systems, and OpenAI and Claude for AI powered workflows. He also works across Google Workspace, Stripe, Cloudflare, and standard SEO and analytics tooling like Google Search Console and Ahrefs.',
      },
    ],
  },
  {
    slug: 'pawan-sharma',
    name: 'Pawan Sharma',
    roleLine: 'Co-Founder, Calibre Associates',
    title: 'Digital Marketing & AI Specialist',
    image: pawanImg,
    cardIntro:
      'Co-Founder combining digital marketing, automation and AI into growth systems that turn leads into predictable revenue.',
    cardBadges: ['Digital Marketing', 'AI Automation', 'Lead Generation'],
    heroBadges: [
      'Digital Marketing', 'AI Automation', 'Lead Generation', 'CRM Automation',
      'Workflow Automation', 'Business Growth', 'Sales Funnels', 'AI Integrations', 'Process Optimization',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/pawansharma-growth', external: true },
    secondaryCta: { label: 'See Recent Work', href: '#recent-work' },
    aboutHeading: 'Building Smarter Growth Systems.',
    aboutParagraphs: [
      "As Co-Founder of Calibre Associates, I focus on combining digital marketing, automation and AI into systems that scale, not one-off campaigns that stop producing the moment attention moves elsewhere.",
      "I care about practical strategy: the kind that turns leads into predictable growth using tools that keep working long after the initial setup, so clients get efficiency and sustainable growth instead of just more noise.",
    ],
    journey: [
      'Digital Marketing', 'Lead Generation', 'Marketing Automation', 'AI Workflows',
      'Business Systems', 'Co-Founding Calibre Associates', 'Helping Businesses Scale',
    ],
    whatIDo: [
      { title: 'Digital Marketing', description: 'Running campaigns across Meta and Google built around measurable outcomes.' },
      { title: 'AI Automation', description: 'Deploying AI assistants and workflows that shorten response times and close more leads.' },
      { title: 'Lead Generation', description: 'Building funnels and systems that consistently bring in qualified leads.' },
      { title: 'CRM & Sales Automation', description: 'Automating follow-up and pipeline management so no lead falls through.' },
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
      'Long-term growth over short-term wins',
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
  },
  {
    slug: 'manasvi-pathak',
    name: 'Manasvi Pathak',
    roleLine: 'Co-Founder, Calibre Associates',
    title: 'Actor • Model • Content Creator',
    heroTagline: 'Actor, Model & Content Creator',
    heroSupportingLine: 'Talent Manager • Brand Representative • On Camera Talent',
    heroImageAlt: 'Manasvi Pathak, actor, model, content creator and talent manager at Calibre Associates',
    image: manasviImg,
    listingImage: manasviListingImg,
    cardIntro:
      'Co-Founder and on camera talent crafting cinematic, authentic brand stories, who now also helps brands find the right creators to tell theirs.',
    cardBadges: ['Actor', 'Fashion Model', 'UGC Creator', 'Talent Manager'],
    heroBadges: [
      'Actor', 'Fashion Model', 'UGC Creator', 'Brand Representative', 'Beauty Creator',
      'Fashion Creator', 'Lifestyle Creator', 'Commercial Model', 'On Camera Talent', 'Creative Storytelling',
      'Talent Manager', 'Creator Partnerships',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/manasvipathakofficial/', external: true },
    secondaryCta: { label: 'Email Manasvi', href: 'mailto:manasvipathak002@gmail.com', external: true },
    aboutHeading: 'Crafting Authentic Stories Through a Cinematic Lens.',
    aboutParagraphs: [
      "I've been in front of a camera since childhood, what started as a passion for performance evolved into a career built on storytelling. Acting and modelling taught me that every campaign should feel authentic, not promotional.",
      "My work spans fashion editorials, premium brand campaigns, commercial ads, digital content and creative collaborations across beauty, lifestyle and luxury brands.",
      'My vision is simple: to tell stories with honesty, creativity and lasting impact.',
      "That experience now shapes a second part of my work. Through Calibre Associates, I help brands find and coordinate the right creators and on camera talent for their campaigns, models, actors, UGC creators or content creators, matched to what the brand actually needs. Having spent most of my career in front of the camera gives me a practical understanding of what makes a campaign feel authentic instead of staged, and that's what I now bring to talent management and brand representation.",
    ],
    journey: [
      'Early Passion for Performance', 'Junior Pageant Winner', 'Fashion Editorials', 'Commercial Campaigns',
      'Acting Projects', 'Brand Collaborations', 'Content Creation', 'Co-Founder, Calibre Associates',
      'Talent Management & Brand Representation',
    ],
    whatIDo: [
      { title: 'Acting', description: 'Bringing characters and brand narratives to life on camera.' },
      { title: 'Fashion Modelling', description: 'Editorial and commercial modelling across fashion and beauty brands.' },
      { title: 'UGC Content Creation', description: 'Producing authentic, native-feeling content for digital campaigns.' },
      { title: 'Brand Representation', description: 'Representing brands as the face of their campaigns, and helping other brands find the right person to do the same.' },
      { title: 'Commercial Campaigns', description: 'Delivering polished, on-brief work for advertising and commercial clients.' },
      { title: 'Creative Direction', description: 'Shaping the creative and on camera approach behind Calibre Associates campaigns.' },
      { title: 'Talent Management', description: 'Identifying, coordinating and managing creators and on camera talent for brand campaigns.' },
      { title: 'Creator Partnerships', description: 'Building relationships with creators across niches and connecting them with relevant brand opportunities.' },
      { title: 'Content Strategy', description: 'Bringing an on camera and creator perspective into the campaigns built for Calibre Associates clients.' },
    ],
    techStack: [],
    projectsVariant: 'portfolio',
    portfolioUrl: 'https://manasvipathak.netlify.app/',
    portfolioImage: manasviPortfolioImg,
    secondaryPortfolioCta: { label: 'Work With Manasvi', href: '/contact' },
    philosophyHeading: 'Every Brand Has a Story.',
    philosophyPoints: [
      'Audiences connect with authenticity, not ads',
      'Great content is creativity, professionalism and emotional storytelling combined',
      'Representation means alignment, not just appearance',
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
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/manasvipathakofficial/', external: true },
      { label: 'Email Manasvi', href: 'mailto:manasvipathak002@gmail.com', external: true },
      { label: 'Explore Portfolio', href: 'https://manasvipathak.netlify.app/', external: true },
    ],
    achievements: [
      'Junior Pageant Title',
      'Certificate of Excellence, World Designing Forum',
      'Featured Face, Eminent Icon Pageant Talent Hunt Reality Show',
      'Professional Brand Collaborations',
      'Film Appearance, "Tu Meri Main Tera"',
      'Member, Kaushambi Foundation NGO',
    ],
    achievementsHeading: 'Featured Achievements',
    achievementsPosition: 'after-journey',
    experience: [
      { role: 'Brand Face', org: 'Woman Central' },
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
      'Acting', 'Fashion Modelling', 'UGC Content Creation', 'Brand Representation',
      'Talent Management', 'Creator Partnerships', 'Content Strategy',
    ],
    metaTitle: 'Manasvi Pathak | Actor, Model & Talent Manager | Calibre Associates',
    metaDescription:
      'Manasvi Pathak is Co-Founder of Calibre Associates, an actor, model and content creator who also leads talent management and brand representation for creator campaigns.',
    faqs: [
      {
        question: 'What does Manasvi Pathak do at Calibre Associates?',
        answer:
          'Manasvi Pathak is a Co-Founder of Calibre Associates who contributes to the creative side of the agency. She works as an actor, model and content creator, and also leads talent management and brand representation, helping identify, coordinate and manage creators and on camera talent for client campaigns.',
      },
      {
        question: 'Who is Manasvi Pathak and what is her professional background?',
        answer:
          'Manasvi Pathak is a Co-Founder of Calibre Associates, an actor, fashion model and content creator with a career built on storytelling since childhood. Her background spans fashion editorials, commercial campaigns, acting projects and brand collaborations across beauty, lifestyle and luxury brands, experience she now also brings to talent management and brand representation.',
      },
      {
        question: 'Does Calibre Associates provide creators for brand campaigns?',
        answer:
          'Yes, through a growing, curated talent and creator management capability led by Manasvi Pathak. Calibre Associates can help brands identify and coordinate suitable creators and on camera talent for a campaign, rather than operating as an open talent marketplace.',
      },
      {
        question: 'What type of talent can brands work with through Calibre Associates?',
        answer:
          'Brands can be matched with UGC creators, models, actors, influencers, content creators and on camera talent, depending on the campaign. The right fit depends on niche, audience, content style and what the brand is trying to communicate.',
      },
      {
        question: 'Can brands request creators from a specific niche or platform?',
        answer:
          "Yes, talent is matched to a brand's specific requirements, including niche, audience, content style, location, platform and campaign objectives, rather than a generic one size fits all approach.",
      },
      {
        question: 'Does Manasvi Pathak personally participate in brand campaigns?',
        answer:
          "Yes. In addition to her talent management and brand representation work, Manasvi continues to work as an actor, model and on camera talent herself where it's the right fit for the campaign.",
      },
      {
        question: 'Can businesses hire Manasvi Pathak as a model or content creator?',
        answer:
          'Yes, brands and businesses can reach out to discuss modelling, acting or content creation collaborations directly, either by email or through Calibre Associates.',
      },
      {
        question: 'Can Calibre Associates help with a complete creator campaign, not just talent?',
        answer:
          "Depending on the campaign, yes. Calibre Associates can support talent selection, coordination and creative direction alongside the agency's broader social media marketing and content services, so a campaign isn't limited to sourcing talent alone.",
      },
      {
        question: 'What brands have Manasvi Pathak collaborated with for influencer marketing?',
        answer:
          'Manasvi Pathak has collaborated with fashion, beauty, and lifestyle brands as a brand representative and on camera talent, along with commercial advertising clients and organizations including Woman Central and the Kaushambi Foundation. Full details of her brand work and experience are on this profile.',
      },
      {
        question: "Where can I find Manasvi Pathak's official social media and professional profiles?",
        answer:
          'You can find Manasvi Pathak on LinkedIn, where she shares her acting, modelling, and content creation work, and on her portfolio site, which showcases her fashion editorials, campaigns, and creative collaborations.',
      },
    ],
  },
  {
    slug: 'tej-pratap',
    name: 'Tej Pratap',
    roleLine: 'Manager, Calibre Associates',
    title: 'Performance Marketer & Trainer',
    image: tejImg,
    cardIntro:
      'Performance marketer with 5+ years turning Meta and Google Ads, SEO and WordPress into measurable business growth.',
    cardBadges: ['Performance Marketing', 'Meta Ads', 'Google Ads'],
    heroBadges: [
      'Performance Marketing', 'Meta Ads', 'Google Ads', 'SEO', 'WordPress', 'Content Marketing',
      'Lead Generation', 'Digital Strategy', 'Team Leadership', 'Campaign Optimization',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/tejpratap-kanwliya/', external: true },
    secondaryCta: { label: 'Book a Free Consultation', href: '/contact' },
    aboutHeading: 'Turning Marketing Into Measurable Business Growth.',
    aboutParagraphs: [
      "I've always been drawn to strategic digital marketing, not just running ads and hoping for the best. Over more than five years I've built experience across Performance Marketing, WordPress Development, SEO, Meta Ads, Google Ads, Content Marketing and E-commerce.",
      "As Manager at Calibre Associates, I work closely with our team to make sure every campaign is tied to a real business outcome, not just impressions.",
    ],
    journey: [
      'Digital Marketing', 'WordPress Development', 'SEO & Organic Growth', 'Performance Advertising',
      'E-commerce Experience', 'Marketing Training', 'Manager, Calibre Associates', 'Helping Businesses Scale',
    ],
    whatIDo: [
      { title: 'Performance Marketing', description: 'Running Meta and Google campaigns optimized for real conversions.' },
      { title: 'Search Engine Optimization', description: 'Improving organic visibility and rankings through structured SEO.' },
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
      { serviceSlug: 'website-development', slug: 'wny-tree-specialists' },
    ],
    philosophyHeading: 'Every Campaign Should Have a Purpose.',
    philosophyPoints: [
      'Data-driven decision making',
      'Continuous optimization',
      'Customer-first marketing',
      'Long-term brand growth',
      'Transparency and measurable results',
    ],
    beyondHeading: 'Beyond Marketing',
    beyondItems: ['Performance Marketing', 'SEO', 'Digital Strategy', 'Team Mentoring', 'E-commerce', 'Website Optimization', 'Marketing Analytics', 'Business Growth'],
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
  },
  {
    slug: 'nirosh',
    name: 'Nirosh',
    title: 'Software Engineer & UI/UX Designer',
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
    aboutHeading: 'Engineering Better Digital Experiences.',
    aboutParagraphs: [
      "I combine software engineering with UX design, because the best products come from understanding users before writing a single line of code.",
      "My experience spans Software Engineering, WordPress Development, UI/UX Design, CRM Systems, Business Applications and Responsive Websites, always with the same starting point: what does the user actually need?",
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
      'User-first thinking',
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
  },
  {
    slug: 'jitpaul',
    name: 'Jitpaul',
    title: 'UI/UX Designer & Graphic Designer',
    image: jitpaulImg,
    imagePosition: 'object-[85%_20%]',
    cardIntro:
      'A growing UI/UX and graphic designer learning fast through real client projects, design-a-thons and hands-on craft.',
    cardBadges: ['UI/UX Design', 'Graphic Design', 'Branding'],
    heroBadges: [
      'UI/UX Design', 'Graphic Design', 'Interaction Design', 'UX Research', 'Branding',
      'Creative Design', 'Visual Identity', 'User Experience', 'Product Thinking', 'Design Systems',
    ],
    primaryCta: { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/jitpaul-baishya-a05241381/', external: true },
    secondaryCta: { label: 'Book a Free Consultation', href: '/contact' },
    aboutHeading: 'Designing With Curiosity, Growing With Every Project.',
    aboutParagraphs: [
      "I began with graphic design and evolved into UI/UX through continuous, hands-on learning. Along the way I've worked across Branding, Graphic Design, Menu Design, UI Concepts, UX Research, Design Systems, UX Case Studies and Digital Interfaces.",
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
      '4× Design-a-thon Participant',
      '2× Hackathon Participant',
      'Continuous Learner',
      'Collaborative Team Player',
    ],
    achievementsHeading: 'Learning & Achievements',
    achievementsPosition: 'after-beyond',
  },
];

export const findTeamMember = (slug: string) => foundingTeam.find((m) => m.slug === slug);
