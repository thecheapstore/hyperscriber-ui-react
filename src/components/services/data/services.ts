
import {
  Laptop, Code2, Share2, Search, Video, MessageSquare, Layers, Target, Lightbulb, PenTool, BarChart,
  TrendingUp, ShieldCheck, Smartphone, Clock, LifeBuoy,
  DollarSign, Filter, ClipboardCheck, FlaskConical, MousePointerClick, Rocket,
  Blocks, Plug, Timer, Gauge, Activity, Palette, Sparkles, Wand2, Film,
} from 'lucide-react';
import { Service } from '../types/service';
import React from 'react';
import websiteDevPreview from '@/assets/images/mockup-website.jpg';
import brandIdentityPreview from '@/assets/portfolio/brand-identity/plume/01_hero.jpg';

export const services: Service[] = [
  {
    id: "website-development",
    slug: "website-development",
    icon: React.createElement(Laptop, { className: "h-8 w-8" }),
    title: "Website Development",
    shortDescription: "Fast, conversion focused websites and custom WordPress development built to represent your brand and turn visitors into paying customers.",
    description: "We design and build fast, scalable websites, from custom WordPress development to full web applications, engineered for long term business growth.",
    previewImage: websiteDevPreview,
    details: [
      "Custom website design and development",
      "Web application and SaaS platform development",
      "Mobile application development",
      "Custom software solutions for business workflows",
      "UI UX focused architecture and performance optimization",
      "SEO ready and scalable development practices"
    ],
    benefits: [
      "High performance websites and applications",
      "Improved user experience and engagement",
      "Scalable systems that grow with your business",
      "Clean, maintainable, and future proof codebase",
      "Stronger brand credibility through premium design"
    ],
    process: [
      {
        title: "Requirement & UX Planning",
        icon: React.createElement(Target, { className: "h-6 w-6 text-ink" }),
        description: "We understand your business goals and design a clear structure focused on usability and conversions."
      },
      {
        title: "Design & Architecture",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-ink" }),
        description: "UI UX design and system architecture built for speed, scalability, and long term growth."
      },
      {
        title: "Development & Testing",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-ink" }),
        description: "Full stack development with thorough testing to ensure performance and reliability."
      },
      {
        title: "Launch & Optimization",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-ink" }),
        description: "Deployment, performance optimization, and ongoing improvements post launch."
      }
    ],
    caseStudy: {
      client: "Growth Focused SaaS Company",
      results: [
        "65% improvement in website performance",
        "48% increase in conversion rate",
        "Scalable platform supporting rapid user growth"
      ]
    },
    color: "bg-block-mint",
    bgLight: "bg-block-mint",
    stats: [
      { label: "Websites Built", value: 120, suffix: "+" },
      { label: "Projects Delivered", value: 150, suffix: "+" },
      { label: "Avg. Load Time Improvement", value: 65, suffix: "%" },
      { label: "Client Satisfaction", value: 98, suffix: "%" }
    ],
    portfolioCategories: [
      { label: "Website Screenshots", description: "Full page captures of recent website builds." },
      { label: "Desktop Mockup", description: "High fidelity desktop presentation of the finished build." },
      { label: "Mobile Mockup", description: "Responsive mobile view of the same project." },
      { label: "Before / After", description: "Visual comparison against the previous website." },
      { label: "Live Preview", description: "Direct link to view the finished website live." },
      { label: "Technology Used", description: "Stack and tools used to build the project." }
    ]
  },

  {
    id: "application-software-development",
    slug: "application-software-development",
    icon: React.createElement(Code2, { className: "h-8 w-8" }),
    title: "Application & Software Development",
    shortDescription: "Custom web apps, SaaS platforms, and business software development engineered for performance, security, and scale.",
    description: "We design and build scalable applications and custom software solutions, engineered for performance, reliability, and long term business growth.",
    details: [
      "Custom website design and development",
      "Web application and SaaS platform development",
      "Mobile application development",
      "Custom software solutions for business workflows",
      "UI UX focused architecture and performance optimization",
      "SEO ready and scalable development practices"
    ],
    benefits: [
      "High performance websites and applications",
      "Improved user experience and engagement",
      "Scalable systems that grow with your business",
      "Clean, maintainable, and future proof codebase",
      "Stronger brand credibility through premium design"
    ],
    process: [
      {
        title: "Requirement & UX Planning",
        icon: React.createElement(Target, { className: "h-6 w-6 text-ink" }),
        description: "We understand your business goals and design a clear structure focused on usability and conversions."
      },
      {
        title: "Design & Architecture",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-ink" }),
        description: "UI UX design and system architecture built for speed, scalability, and long term growth."
      },
      {
        title: "Development & Testing",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-ink" }),
        description: "Full stack development with thorough testing to ensure performance and reliability."
      },
      {
        title: "Launch & Optimization",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-ink" }),
        description: "Deployment, performance optimization, and ongoing improvements post launch."
      }
    ],
    caseStudy: {
      client: "Growth Focused SaaS Company",
      results: [
        "65% improvement in website performance",
        "48% increase in conversion rate",
        "Scalable platform supporting rapid user growth"
      ]
    },
    color: "bg-block-cream",
    bgLight: "bg-block-cream",
    stats: [
      { label: "Applications Delivered", value: 60, suffix: "+" },
      { label: "Projects Delivered", value: 150, suffix: "+" },
      { label: "System Uptime", value: 99, suffix: "%" },
      { label: "Client Satisfaction", value: 98, suffix: "%" }
    ],
    portfolioCategories: [],
    whyChooseReasons: [
      { icon: React.createElement(TrendingUp, { className: "h-6 w-6" }), title: "Built to Scale", description: "Architecture designed for growth from day one, not a rebuild waiting to happen." },
      { icon: React.createElement(Code2, { className: "h-6 w-6" }), title: "Clean, Maintainable Code", description: "Well-documented, testable code your team (or ours) can extend without fighting it later." },
      { icon: React.createElement(Gauge, { className: "h-6 w-6" }), title: "Performance-First Engineering", description: "Every build is measured against real speed and reliability benchmarks, not just feature checklists." },
      { icon: React.createElement(Smartphone, { className: "h-6 w-6" }), title: "Cross-Platform Expertise", description: "Web, mobile, and internal tools built with a consistent, unified architecture." },
      { icon: React.createElement(ShieldCheck, { className: "h-6 w-6" }), title: "Security Best Practices", description: "Modern security standards baked into every layer, not bolted on after launch." },
      { icon: React.createElement(LifeBuoy, { className: "h-6 w-6" }), title: "Real Post-Launch Support", description: "We stay involved after go-live, monitoring, fixes, and iteration, not a handoff and goodbye." },
    ],
    finalCtaHeadline: "Ready to Build Software That Scales With You?",
    finalCtaDescription: "Book a free consultation and we'll map out the architecture, timeline, and cost for your project.",
  },

  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    icon: React.createElement(Share2, { className: "h-8 w-8" }),
    title: "Social Media Marketing",
    shortDescription: "Consistent, on brand social media marketing and content creation that builds authority, community, and customer trust.",
    description: "Grow brand authority and inbound engagement with a social media marketing strategy built around consistent content, real community growth, and measurable results.",
    details: [
      "On page and off page SEO optimization",
      "Technical SEO and content optimization",
      "Social media content planning and posting",
      "Google My Business and online reputation management",
      "Content distribution across social platforms"
    ],
    benefits: [
      "Higher search engine rankings",
      "Consistent organic traffic growth",
      "Improved brand visibility and trust",
      "Inbound leads from search and social",
      "Long term digital asset creation"
    ],
    process: [
      {
        title: "SEO & Content Strategy",
        icon: React.createElement(Target, { className: "h-6 w-6 text-ink" }),
        description: "Keyword research, competitor analysis, and content planning."
      },
      {
        title: "Optimization & Publishing",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-ink" }),
        description: "SEO optimized content and consistent social media publishing."
      },
      {
        title: "Authority Building",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-ink" }),
        description: "Backlinks, engagement strategies, and reputation management."
      },
      {
        title: "Performance Tracking",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-ink" }),
        description: "Continuous monitoring and optimization for sustained growth."
      }
    ],
    caseStudy: {
      client: "Local & SaaS Brand",
      results: [
        "Top 3 rankings for high intent keywords",
        "140% increase in organic traffic",
        "Consistent inbound leads month over month"
      ]
    },
    color: "bg-block-pink",
    bgLight: "bg-block-pink",
    stats: [
      { label: "Posts Published", value: 2400, suffix: "+" },
      { label: "Avg. Engagement Growth", value: 85, suffix: "%" },
      { label: "Followers Gained", value: 40, suffix: "K+" },
      { label: "Brands Managed", value: 35, suffix: "+" }
    ],
    portfolioCategories: [
      { label: "Reels", description: "Short-form video content built for reach and engagement." },
      { label: "Carousels", description: "Multi-slide posts designed for saves and shares." },
      { label: "Feed Preview", description: "Cohesive grid and brand aesthetic preview." },
      { label: "Engagement Metrics", description: "Reach, engagement, and growth performance snapshots." },
      { label: "Content Calendar", description: "Sample of a planned monthly content calendar." },
      { label: "Brand Style Guide", description: "Visual identity guidelines applied across content." }
    ]
  },

  {
    id: "seo",
    slug: "seo",
    icon: React.createElement(Search, { className: "h-8 w-8" }),
    title: "Search Engine Optimization",
    shortDescription: "Dominate Google Search, Google Maps, and AI powered search results with expert search engine optimization.",
    description: "Local SEO, technical SEO, and AI search optimization built to make your business impossible to miss, on Google, Google Maps, and beyond.",
    details: [
      "On page and off page SEO optimization",
      "Technical SEO and content optimization",
      "Social media content planning and posting",
      "Google My Business and online reputation management",
      "Content distribution across social platforms"
    ],
    benefits: [
      "Higher search engine rankings",
      "Consistent organic traffic growth",
      "Improved brand visibility and trust",
      "Inbound leads from search and social",
      "Long term digital asset creation"
    ],
    process: [
      {
        title: "SEO & Content Strategy",
        icon: React.createElement(Target, { className: "h-6 w-6 text-ink" }),
        description: "Keyword research, competitor analysis, and content planning."
      },
      {
        title: "Optimization & Publishing",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-ink" }),
        description: "SEO optimized content and consistent social media publishing."
      },
      {
        title: "Authority Building",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-ink" }),
        description: "Backlinks, engagement strategies, and reputation management."
      },
      {
        title: "Performance Tracking",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-ink" }),
        description: "Continuous monitoring and optimization for sustained growth."
      }
    ],
    caseStudy: {
      client: "Local & SaaS Brand",
      results: [
        "Top 3 rankings for high intent keywords",
        "140% increase in organic traffic",
        "Consistent inbound leads month over month"
      ]
    },
    color: "bg-block-lilac",
    bgLight: "bg-block-lilac",
    stats: [
      { label: "Organic Traffic Growth", value: 140, suffix: "%" },
      { label: "Keywords Ranked", value: 3200, suffix: "+" },
      { label: "Avg. Ranking Improvement", value: 22, suffix: " positions" },
      { label: "Projects Delivered", value: 90, suffix: "+" }
    ],
    portfolioCategories: [
      { label: "Ranking Improvements", description: "Keyword position gains tracked over time." },
      { label: "Search Console Data", description: "Impressions, clicks, and CTR performance snapshots." },
      { label: "Analytics Growth", description: "Organic traffic growth visualized month over month." },
      { label: "Keyword Growth", description: "Expansion of ranking keyword footprint." },
      { label: "Local SEO", description: "Map pack and local search visibility examples." },
      { label: "Backlink Profile", description: "Authority and backlink growth overview." }
    ]
  },

  {
    id: "video-editing",
    slug: "video-editing",
    icon: React.createElement(Video, { className: "h-8 w-8" }),
    title: "Video Editing",
    shortDescription: "Polished, scroll stopping video editing for social media, ads, and brand storytelling.",
    description: "Professional video editing services that turn raw footage into polished, on brand content built to engage audiences across social media, YouTube, and paid ad campaigns.",
    details: [
      "Short form video editing for social and ads",
      "Long form video editing for YouTube and web",
      "Motion graphics and on-brand titling",
      "Color correction and audio cleanup",
      "Platform specific formatting and captions",
      "Fast turnaround for high volume content needs"
    ],
    benefits: [
      "Consistent, professional brand presentation",
      "Higher engagement across social platforms",
      "Faster content turnaround for campaigns",
      "Video content optimized per platform",
      "More value extracted from existing footage"
    ],
    process: [
      {
        title: "Footage Review & Story Direction",
        icon: React.createElement(Target, { className: "h-6 w-6 text-ink" }),
        description: "We review raw footage and define the story, pacing, and platform requirements."
      },
      {
        title: "Editing & Motion Graphics",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-ink" }),
        description: "Editing, color correction, sound design, and on-brand motion graphics."
      },
      {
        title: "Revisions & Refinement",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-ink" }),
        description: "Feedback rounds to refine pacing, messaging, and visual polish."
      },
      {
        title: "Delivery & Platform Formatting",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-ink" }),
        description: "Final delivery formatted and captioned for every target platform."
      }
    ],
    caseStudy: {
      client: "Content Driven Brand",
      results: [
        "3x increase in average watch time",
        "Consistent weekly content output",
        "Higher engagement across social channels"
      ]
    },
    color: "bg-block-coral",
    bgLight: "bg-block-coral",
    stats: [
      { label: "Videos Edited", value: 800, suffix: "+" },
      { label: "Avg. Watch Time Increase", value: 3, suffix: "x" },
      { label: "Content Delivered Weekly", value: 15, suffix: "+" },
      { label: "Client Satisfaction", value: 97, suffix: "%" }
    ],
    portfolioCategories: [
      { label: "Before / After", description: "Raw footage compared against the final edit." },
      { label: "Embedded Video", description: "Full video sample embedded directly on page." },
      { label: "Short-Form Reel", description: "Vertical, platform-native short-form edits." },
      { label: "Motion Graphics", description: "Titling, transitions, and animated brand elements." },
      { label: "Color Grading", description: "Before and after color correction examples." },
      { label: "Sound Design", description: "Audio mixing and sound design samples." }
    ]
  },

  {
    id: "lead-generation-paid-advertising",
    slug: "lead-generation-paid-advertising",
    icon: React.createElement(MessageSquare, { className: "h-8 w-8" }),
    title: "Lead Generation & Paid Advertising",
    shortDescription: "ROI focused lead generation and paid advertising campaigns across Google Ads and Meta Ads that generate consistent, high quality leads.",
    description: "We help you generate consistent, high quality leads through ROI focused paid advertising, Google Ads, Meta Ads, and full funnel marketing strategies.",
    details: [
      "Google Ads, Meta Ads, and LinkedIn Ads management",
      "Audience research and targeting strategy",
      "Ad creatives and landing page optimization",
      "Lead capture and conversion tracking setup",
      "A/B testing and performance optimization"
    ],
    benefits: [
      "Consistent flow of qualified leads",
      "Lower cost per lead and higher ROI",
      "Clear visibility into campaign performance",
      "Scalable advertising systems for growth",
      "Improved conversion rates across funnels"
    ],
    process: [
      {
        title: "Audience & Funnel Strategy",
        icon: React.createElement(Target, { className: "h-6 w-6 text-ink" }),
        description: "We define target audiences, offers, and funnel structure to maximize conversions."
      },
      {
        title: "Creative & Campaign Setup",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-ink" }),
        description: "High converting ad creatives and landing pages built for performance."
      },
      {
        title: "Launch & Optimization",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-ink" }),
        description: "Continuous optimization based on real time campaign data."
      },
      {
        title: "Tracking & Scaling",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-ink" }),
        description: "Advanced tracking and scaling strategies to grow profitable campaigns."
      }
    ],
    caseStudy: {
      client: "B2B Service Business",
      results: [
        "3.2x return on ad spend",
        "52% reduction in cost per lead",
        "Consistent inbound leads within 30 days"
      ]
    },
    color: "bg-block-lime",
    bgLight: "bg-block-lime",
    stats: [
      { label: "Leads Generated", value: 25000, suffix: "+" },
      { label: "Campaign ROAS", value: 3.2, suffix: "x" },
      { label: "Cost Per Lead Reduction", value: 52, suffix: "%" },
      { label: "Projects Delivered", value: 110, suffix: "+" }
    ],
    portfolioCategories: [],
    whyChooseReasons: [
      { icon: React.createElement(DollarSign, { className: "h-6 w-6" }), title: "ROI-Obsessed Management", description: "Every dollar of spend is tied back to a measurable outcome, not just impressions." },
      { icon: React.createElement(Filter, { className: "h-6 w-6" }), title: "Full-Funnel Strategy", description: "From first click to closed lead, we build and optimize the whole journey, not just the ad." },
      { icon: React.createElement(ClipboardCheck, { className: "h-6 w-6" }), title: "Transparent Reporting", description: "Clear, honest reporting on what's working and what's not, no vanity metrics." },
      { icon: React.createElement(FlaskConical, { className: "h-6 w-6" }), title: "Continuous A/B Testing", description: "Creative, copy, and targeting are constantly tested to keep cost per lead trending down." },
      { icon: React.createElement(MousePointerClick, { className: "h-6 w-6" }), title: "Landing Pages Built to Convert", description: "Purpose-built landing pages, not a generic homepage redirect." },
      { icon: React.createElement(Rocket, { className: "h-6 w-6" }), title: "Fast Campaign Launch", description: "Structured onboarding gets qualified traffic flowing quickly, without cutting corners." },
    ],
    finalCtaHeadline: "Ready for a Predictable Pipeline of Leads?",
    finalCtaDescription: "Book a free consultation and we'll show you exactly how we'd structure your campaigns for ROI.",
  },

  {
    id: "ai-automation-solutions",
    slug: "ai-automation-solutions",
    icon: React.createElement(Layers, { className: "h-8 w-8" }),
    title: "AI Automation & Solutions",
    shortDescription: "Custom AI automation for small businesses that streamlines operations, reduces manual work, and scales your team's output.",
    description: "Streamline operations and scale faster with custom AI automation, CRM workflow automation, and business systems built around how your team actually works.",
    details: [
      "CRM workflow automation",
      "AI powered lead qualification systems",
      "Sales and marketing automation",
      "Custom integrations between tools",
      "Operational process automation"
    ],
    benefits: [
      "Reduced manual work and errors",
      "Faster response times and efficiency",
      "Scalable business operations",
      "Improved data accuracy and reporting",
      "More focus on revenue generating activities"
    ],
    process: [
      {
        title: "Process Mapping",
        icon: React.createElement(Target, { className: "h-6 w-6 text-ink" }),
        description: "Identify bottlenecks and opportunities for automation."
      },
      {
        title: "System Design",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-ink" }),
        description: "Design automation workflows and AI logic tailored to your business."
      },
      {
        title: "Implementation",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-ink" }),
        description: "Build and deploy automation systems across your tools."
      },
      {
        title: "Optimization & Scaling",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-ink" }),
        description: "Continuous improvements to maximize efficiency and ROI."
      }
    ],
    caseStudy: {
      client: "Service Based Business",
      results: [
        "60% reduction in manual tasks",
        "2x faster lead response time",
        "Improved operational efficiency across teams"
      ]
    },
    color: "bg-block-mint",
    bgLight: "bg-block-mint",
    stats: [
      { label: "Hours Automated Monthly", value: 4500, suffix: "+" },
      { label: "Workflows Built", value: 200, suffix: "+" },
      { label: "Avg. Efficiency Improvement", value: 60, suffix: "%" },
      { label: "Projects Delivered", value: 80, suffix: "+" }
    ],
    portfolioCategories: [],
    whyChooseReasons: [
      { icon: React.createElement(Blocks, { className: "h-6 w-6" }), title: "Custom-Built, Not Templated", description: "Automations designed around how your business actually operates, not a generic recipe." },
      { icon: React.createElement(Plug, { className: "h-6 w-6" }), title: "Seamless Tool Integration", description: "Connects the tools you already use, CRM, forms, email, calendars, into one workflow." },
      { icon: React.createElement(Timer, { className: "h-6 w-6" }), title: "Real Time & Cost Savings", description: "Automation is scoped around hours actually saved, not novelty for its own sake." },
      { icon: React.createElement(TrendingUp, { className: "h-6 w-6" }), title: "Scales With Your Team", description: "Systems built to keep working as your volume grows, without constant rebuilding." },
      { icon: React.createElement(Activity, { className: "h-6 w-6" }), title: "Reliable, Monitored Systems", description: "We monitor what we build so failures get caught early, not discovered by your team." },
      { icon: React.createElement(Rocket, { className: "h-6 w-6" }), title: "Fast Implementation", description: "Structured scoping and build process gets automations live in weeks, not quarters." },
    ],
    finalCtaHeadline: "Ready to Automate the Busywork?",
    finalCtaDescription: "Book a free consultation and we'll identify exactly where automation saves you the most time.",
  },

  {
    id: "brand-identity-development",
    slug: "brand-identity-development",
    icon: React.createElement(Palette, { className: "h-8 w-8" }),
    title: "Brand Identity Development",
    shortDescription: "Complete brand identities, wordmark, color system, packaging, and campaign content, built from scratch and ready to launch.",
    description: "We design complete brand identities from the ground up, wordmark, color system, packaging, and a full content campaign to launch it with, so a brand looks and feels finished before it ever goes live.",
    previewImage: brandIdentityPreview,
    details: [
      "Wordmark, logo, and packaging design",
      "Color system and typography selection",
      "Brand voice and messaging direction",
      "Campaign photography and art direction",
      "Full funnel ad creative across formats",
      "Short form video reels and content"
    ],
    benefits: [
      "A cohesive identity across every touchpoint",
      "Launch ready campaign content, not just a logo file",
      "Consistent visual language across photography and video",
      "Full funnel creative planned alongside the identity, not after it",
      "A brand that looks established from day one"
    ],
    process: [
      {
        title: "Discovery & Positioning",
        icon: React.createElement(Target, { className: "h-6 w-6 text-ink" }),
        description: "We define who the brand is for, what it stands for, and how it should feel before any design starts."
      },
      {
        title: "Identity Design",
        icon: React.createElement(Palette, { className: "h-6 w-6 text-ink" }),
        description: "Wordmark, color system, typography, and packaging designed to work together as one identity."
      },
      {
        title: "Campaign Production",
        icon: React.createElement(Wand2, { className: "h-6 w-6 text-ink" }),
        description: "Photography, art direction, and video content produced to launch the identity, not just present it."
      },
      {
        title: "Delivery & Launch Kit",
        icon: React.createElement(Film, { className: "h-6 w-6 text-ink" }),
        description: "A complete, ready to use set of assets handed off across every format and platform you need."
      }
    ],
    caseStudy: {
      client: "In House Concept Brands",
      results: [
        "Four complete brand identities designed end to end",
        "Full photography and video campaigns produced per brand",
        "A full paid social funnel demonstrated across formats"
      ]
    },
    color: "bg-block-pink",
    bgLight: "bg-block-pink",
    stats: [
      { label: "Brand Identities Designed", value: 4, suffix: "+" },
      { label: "Campaign Assets Produced", value: 45, suffix: "+" },
      { label: "Funnel Stages Covered", value: 3 },
      { label: "Content Formats Delivered", value: 5, suffix: "+" }
    ],
    portfolioCategories: [
      { label: "Brand Identity", description: "Wordmark, color system, and packaging design for each concept brand." },
      { label: "Campaign Photography", description: "Hero, lifestyle, macro, and flat lay shots built around the identity." },
      { label: "Full Funnel Creative", description: "Awareness, consideration, and conversion ad creative in multiple formats." },
      { label: "Video Reels", description: "Short form vertical video content cut for Stories and Reels placements." }
    ],
    whyChooseReasons: [
      { icon: React.createElement(Palette, { className: "h-6 w-6" }), title: "Identity First, Not Logo Only", description: "We design the whole system, wordmark, color, type, and packaging, not a single logo file." },
      { icon: React.createElement(Sparkles, { className: "h-6 w-6" }), title: "Launch Ready Campaign Content", description: "Every identity ships with the photography and video needed to actually launch it." },
      { icon: React.createElement(Filter, { className: "h-6 w-6" }), title: "Full Funnel Thinking", description: "Awareness, consideration, and conversion creative planned together, not bolted on later." },
      { icon: React.createElement(Film, { className: "h-6 w-6" }), title: "Photography and Video, One System", description: "Stills and short form video share the same identity, palette, and voice." },
      { icon: React.createElement(Wand2, { className: "h-6 w-6" }), title: "Fast, AI Assisted Production", description: "Campaign content generated efficiently without sacrificing consistency or craft." },
      { icon: React.createElement(ShieldCheck, { className: "h-6 w-6" }), title: "Transparent Process", description: "Every concept project in our portfolio is clearly labeled as demo or client work." },
    ],
    finalCtaHeadline: "Ready to Build a Brand From Scratch?",
    finalCtaDescription: "Book a free consultation and we'll map out the identity and campaign content your brand needs to launch.",
  }
];
