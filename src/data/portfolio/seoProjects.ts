import type { Project, ProjectProcessStep } from './types';
import lawnCareLogo from '@/assets/portfolio/716-lawn-care-logo.jpg';
import rrLandscapingLogo from '@/assets/portfolio/rr-landscaping-logo.png';
import wnyTreeLogo from '@/assets/portfolio/wny-logo.webp';
import buffaloTreeLogo from '@/assets/portfolio/buffalo-tree-logo.webp';
import metaTreeLogo from '@/assets/portfolio/meta-tree-service-logo.webp';
import metaServicesLogo from '@/assets/portfolio/meta-services-logo.webp';
import ashtonServicesLogo from '@/assets/portfolio/ashton-services-logo.webp';
import aOneTreeLogo from '@/assets/portfolio/aone-tree-logo.webp';

// Shared methodology applied consistently across every SEO engagement, the same
// process, described once, rather than reworded per project.
const seoProcess: ProjectProcessStep[] = [
  { title: 'Website Audit', description: 'A full technical and content audit to identify what\'s holding organic visibility back.' },
  { title: 'Technical SEO', description: 'Site speed, crawlability, indexing, and structured data fixed at the foundation.' },
  { title: 'Keyword Research', description: 'Mapping real local search intent to the pages that should be ranking for it.' },
  { title: 'Content Optimization', description: 'On-page content rewritten and structured around what customers actually search for.' },
  { title: 'Google Business Profile Optimization', description: 'Profile completeness, categories, posts, and photos optimized for local pack visibility.' },
  { title: 'Local SEO', description: 'Service-area pages, citations, and local signals built to strengthen map and local search rankings.' },
  { title: 'Performance Monitoring', description: 'Ongoing tracking and iteration based on real ranking and traffic data.' },
];

const seoFeatures = [
  'On Page SEO',
  'Off Page SEO',
  'Local SEO',
  'Google Business Profile Management',
  'Technical SEO',
  'Content Strategy',
  'Conversion Optimization',
];

const finalCtaHeadline = 'Ready to Grow Your Business Organically?';
const finalCtaDescription = "Book a free consultation and we'll show you exactly how we'd approach your local SEO strategy.";

export const seoProjects: Project[] = [
  {
    slug: '716-lawn-care',
    serviceSlug: 'seo',
    companyName: '716 Lawn Care',
    companyLogo: lawnCareLogo,
    projectName: '716 Lawn Care, SEO & Local Search Growth',
    shortDescription:
      "716 Lawn Care needed to turn its already-strong reputation in Buffalo into consistent organic visibility, showing up in local search and Google Maps results whenever nearby homeowners searched for lawn care.",
    category: 'Local SEO & Google Business Profile Growth',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    featured: true,
    highlights: seoFeatures,
    liveUrl: 'https://716lawncare.com',
    overview:
      "716 Lawn Care is a professional landscaping and lawn care company serving Buffalo and the surrounding Western New York region. Calibre Associates was brought in to build a dedicated local SEO program on top of their existing website, focused on organic visibility, Google Business Profile growth, and long-term search authority.",
    about: {
      business: 'Residential & Commercial Lawn Care and Landscaping',
      industry: 'Landscaping & Lawn Care',
      location: 'Buffalo, New York, USA',
    },
    goals: [
      'Rank for high-intent local search terms',
      'Grow Google Business Profile visibility and engagement',
      'Build a scalable local content strategy',
      'Reduce reliance on paid advertising over time',
      'Establish long-term organic search authority in Western New York',
    ],
    challenge:
      "Despite delivering excellent work, 716 Lawn Care's website wasn't structured to compete for the local searches that matter most, \"lawn care near me,\" \"landscaping Buffalo NY,\" and similar high-intent terms. The Google Business Profile was underutilized, service pages weren't targeting the right local keywords, and there was no consistent content strategy to build long-term authority.",
    strategy:
      'We approached this as a local-search-first engagement, auditing the technical foundation, rebuilding on-page structure around real search intent, and treating the Google Business Profile as a primary growth channel rather than an afterthought.',
    solution:
      'Calibre Associates delivered a full local SEO program: technical audit and fixes, on-page optimization across every service page, structured local landing pages for each service area, Google Business Profile optimization and ongoing management, and a content strategy built to establish 716 Lawn Care as the authority for lawn care and landscaping across Western New York.',
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The SEO program gives 716 Lawn Care a durable, compounding source of organic visibility across Buffalo and Western New York, reducing reliance on paid ads while building long-term local authority.",
    businessImpact: [
      'Established as a leading local search presence for lawn care in Buffalo',
      'Improved visibility across Google Search and Google Maps',
      'Stronger Google Business Profile engagement',
      'Scalable content foundation for continued growth',
      'More consistent inbound inquiries from organic search',
    ],
    results: [],
    testimonial: {
      quote: "Since working with Calibre Associates, we're showing up in searches we never used to rank for. It's made a real difference in the calls we get.",
      name: '716 Lawn Care',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
  {
    slug: 'rr-landscaping',
    serviceSlug: 'seo',
    companyName: 'RR Landscaping & Tree Services',
    companyLogo: rrLandscapingLogo,
    projectName: 'RR Landscaping & Tree Services, SEO & Local Search Growth',
    shortDescription:
      'RR Landscaping & Tree Services had strong word-of-mouth in Syracuse but almost no organic search presence, Calibre Associates built the local SEO foundation to change that.',
    category: 'Local SEO & Local Search Optimization',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://rrlandscapingandtreeservices.com/',
    overview:
      'RR Landscaping & Tree Services is a professional landscaping and tree care company serving Syracuse, New York and the surrounding communities. Calibre Associates built a dedicated local SEO program focused on ranking for both landscaping and tree service searches across a competitive multi-service local market.',
    about: {
      business: 'Residential & Commercial Outdoor Services',
      industry: 'Landscaping & Tree Services',
      location: 'Syracuse, New York, USA',
    },
    goals: [
      'Rank for landscaping and tree service search terms',
      'Build local SEO structure across multiple service areas',
      'Strengthen Google Business Profile visibility',
      'Establish long-term organic authority in Syracuse',
    ],
    challenge:
      "RR Landscaping & Tree Services had strong word-of-mouth in Syracuse but almost no organic search presence, the site wasn't ranking for core landscaping and tree service terms, and there was no local SEO structure to support multiple service areas.",
    strategy:
      'We prioritized a technical-SEO-first approach paired with local service-area targeting, so the site could compete for both landscaping and tree service searches across Syracuse and surrounding communities.',
    solution:
      'We delivered technical SEO fixes, on-page optimization across landscaping and tree service pages, local service-area content, Google Business Profile optimization, and a citation strategy to build authority in a competitive local market.',
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      'The local SEO program gives RR Landscaping & Tree Services a stronger organic foundation across Syracuse, supporting both landscaping and tree service search demand from a single, well-structured site.',
    businessImpact: [
      'Improved organic visibility for landscaping and tree service terms',
      'Stronger local search and map presence in Syracuse',
      'More structured, scalable service-area content',
      'Improved Google Business Profile engagement',
    ],
    results: [],
    testimonial: {
      quote: 'We started showing up for searches we never ranked for before. The whole process was straightforward and well communicated.',
      name: 'RR Landscaping & Tree Services',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
  {
    slug: 'wny-tree-specialists',
    serviceSlug: 'seo',
    companyName: 'WNY Tree Specialists',
    companyLogo: wnyTreeLogo,
    projectName: 'WNY Tree Specialists, SEO & Local Search Growth',
    shortDescription:
      'Tree service searches spike during emergencies, Calibre Associates built an SEO strategy to make sure WNY Tree Specialists is visible at exactly those moments.',
    category: 'Local SEO & Emergency Search Visibility',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://wnytreespecialists.com/',
    overview:
      'WNY Tree Specialists is a professional tree care company serving Buffalo and Western New York. Calibre Associates built a local SEO program designed around both routine tree care searches and the urgent, storm-driven searches that define much of the tree service industry.',
    about: {
      business: 'Professional Tree Care & Emergency Services',
      industry: 'Tree Services & Arboriculture',
      location: 'Buffalo, New York, USA',
    },
    goals: [
      'Rank for both routine and emergency tree service searches',
      'Build trust signals that convert urgent searches into calls',
      'Strengthen local map pack visibility',
      'Establish long-term authority in Western New York tree care',
    ],
    challenge:
      "Tree service searches spike during emergencies, storm damage, hazardous trees, and WNY Tree Specialists needed to be visible at exactly those moments. The site wasn't structured to capture urgent, high-intent local searches or to build the trust signals homeowners look for before calling a tree company.",
    strategy:
      'We built the SEO strategy around intent: making sure WNY Tree Specialists ranks for both routine tree care searches and urgent, storm-driven emergency searches across Western New York.',
    solution:
      'Local SEO structure, technical optimization, Google Business Profile management, service-area content, and authority building focused on positioning WNY Tree Specialists as the trusted, fast-responding option in local search results.',
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      'The SEO program positions WNY Tree Specialists to capture both everyday and emergency tree service demand across Buffalo and Western New York.',
    businessImpact: [
      'Improved visibility for both routine and emergency search terms',
      'Stronger local map pack presence',
      'Improved trust signals across search and Google Business Profile',
      'Scalable foundation for continued local SEO growth',
    ],
    results: [],
    testimonial: {
      quote: "Our online presence finally matches the quality of our work. We're getting found by the right customers at the right time.",
      name: 'WNY Tree Specialists',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
  {
    slug: 'buffalo-tree-specialists',
    serviceSlug: 'seo',
    companyName: 'Buffalo Tree Specialists',
    companyLogo: buffaloTreeLogo,
    projectName: 'Buffalo Tree Specialists, SEO & Local Search Growth',
    shortDescription:
      'Buffalo Tree Specialists competes in a crowded local market where customers often search while already in a stressful situation, the SEO strategy was built around speed-to-trust.',
    category: 'Local SEO & Emergency Search Visibility',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://buffalotreespecialists.com/',
    overview:
      'Buffalo Tree Specialists is a professional tree service company serving Buffalo, New York and surrounding communities. Calibre Associates built a local SEO program focused on ranking quickly for urgent, high-intent tree service searches.',
    about: {
      business: 'Emergency-Ready Tree Removal & Care',
      industry: 'Tree Services, Tree Removal & Arboriculture',
      location: 'Buffalo, New York, USA',
    },
    goals: [
      'Rank for emergency and same-day tree service searches',
      'Build trust quickly with first-time searchers',
      'Strengthen local citations and map visibility',
      'Differentiate from other Buffalo tree service competitors in search',
    ],
    challenge:
      'Buffalo Tree Specialists competes in a crowded local market where customers often search while already in a stressful situation. The website needed to build trust and rank quickly for emergency and same-day service searches, not just general tree service terms.',
    strategy:
      'We focused the SEO approach on speed-to-trust, technical performance, clear local signals, and content built around the urgent searches that convert fastest.',
    solution:
      'Technical SEO, Google Business Profile optimization, local citation building, and service-area SEO structured around emergency and same-day tree service searches across Buffalo.',
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      'The SEO program helps Buffalo Tree Specialists show up, and be trusted, in the moments that matter most: urgent, high-intent local searches.',
    businessImpact: [
      'Improved visibility for emergency and same-day search terms',
      'Stronger local citation and map presence',
      'Faster trust-building for first-time searchers',
      'Clearer differentiation from local competitors in search results',
    ],
    results: [],
    testimonial: {
      quote: 'People find us faster now, especially after storms when it matters most. The local SEO work has genuinely paid off.',
      name: 'Buffalo Tree Specialists',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
  {
    slug: 'meta-tree-services-ny',
    serviceSlug: 'seo',
    companyName: 'Meta Tree Services NY',
    companyLogo: metaTreeLogo,
    projectName: 'Meta Tree Services NY, SEO & Local Search Growth',
    shortDescription:
      'Meta Tree Services NY needed a scalable SEO foundation capable of supporting a broader New York service footprint without diluting local relevance in any one market.',
    category: 'Scalable Local SEO Architecture',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://metatreeservicesny.com/',
    overview:
      'Meta Tree Services NY is a professional tree care company providing comprehensive tree services across New York. Calibre Associates built a local SEO program structured to scale cleanly into new service areas over time.',
    about: {
      business: 'Comprehensive Tree Care & Preventative Maintenance',
      industry: 'Tree Services & Arboriculture',
      location: 'New York, USA',
    },
    goals: [
      'Build a scalable local SEO framework',
      'Rank across multiple New York service areas',
      'Maintain local relevance as the business expands',
      'Strengthen Google Business Profile visibility',
    ],
    challenge:
      'Meta Tree Services NY needed a scalable SEO foundation capable of supporting a broader New York service footprint, not just a single metro area, without diluting local relevance in any one market.',
    strategy:
      "We structured the SEO program to scale, a repeatable local SEO framework that could extend to new service areas as the business grows, while keeping each location's content genuinely locally relevant.",
    solution:
      'Technical SEO, scalable local landing page architecture, Google Business Profile optimization, and a content strategy designed to expand cleanly into new New York markets over time.',
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      'The scalable SEO architecture positions Meta Tree Services NY to grow its organic presence into new service areas without starting from scratch each time.',
    businessImpact: [
      'Improved organic visibility across current service areas',
      'Repeatable framework for future market expansion',
      'Stronger Google Business Profile performance',
      'More structured, locally relevant content foundation',
    ],
    results: [],
    testimonial: {
      quote: 'The team set us up with a system that actually scales as we grow into new areas, not just a one-time fix.',
      name: 'Meta Tree Services NY',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
  {
    slug: 'meta-services-ny',
    serviceSlug: 'seo',
    companyName: 'Meta Services NY',
    companyLogo: metaServicesLogo,
    projectName: 'Meta Services NY, SEO & Local Search Growth',
    shortDescription:
      "As a multi-service property improvement company, Meta Services NY needed its SEO strategy to cover many distinct services without any one service page cannibalizing another.",
    category: 'Multi-Service Local SEO Architecture',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://metaservicesny.com/',
    overview:
      'Meta Services NY is a full-service property improvement company providing residential and commercial services across New York. Calibre Associates built a local SEO program structured around their broad service catalog.',
    about: {
      business: 'Multi-Service Property Improvement Company',
      industry: 'Property Services, Home Improvement & Construction',
      location: 'New York, USA',
    },
    goals: [
      'Rank across a wide range of distinct services',
      'Avoid service pages competing against each other in search',
      'Strengthen overall domain authority',
      'Improve Google Business Profile visibility',
    ],
    challenge:
      'As a multi-service property improvement company, Meta Services NY needed its SEO strategy to cover many distinct services without any one service page cannibalizing another, a common challenge for businesses with a broad service catalog.',
    strategy:
      "We approached this with a hub-and-spoke content architecture, giving each service its own optimized page while reinforcing overall domain authority.",
    solution:
      'On-page SEO across every service category, technical SEO improvements, Google Business Profile optimization, and a structured internal linking strategy connecting all service and location pages.',
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      'The structured SEO architecture helps Meta Services NY rank across its full range of services without one page undercutting another in search.',
    businessImpact: [
      'Improved organic visibility across multiple service categories',
      'Reduced internal competition between service pages',
      'Stronger overall domain authority',
      'Improved Google Business Profile engagement',
    ],
    results: [],
    testimonial: {
      quote: 'We offer a lot of services and were worried about them competing with each other online. That concern is gone now.',
      name: 'Meta Services NY',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
  {
    slug: 'ashton-services-ny',
    serviceSlug: 'seo',
    companyName: 'Ashton Services NY',
    companyLogo: ashtonServicesLogo,
    projectName: 'Ashton Services NY, SEO & Local Search Growth',
    shortDescription:
      'A family-owned landscaping and property services company founded in 2019, Ashton Services NY needed to build organic visibility from the ground up in a competitive Buffalo-area market.',
    category: 'Local SEO Foundation Building',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://www.ashtonservicesny.com/',
    overview:
      'Ashton Services NY is a family-owned, locally operated landscaping and property services company based in North Tonawanda, serving Buffalo and the surrounding area with lawn care, landscaping, tree services, snow removal, and outdoor construction. Calibre Associates built a local SEO foundation to establish the brand in organic search.',
    about: {
      business: 'Landscaping, Lawn Care, Tree Services & Snow Removal',
      industry: 'Landscaping & Property Services',
      location: 'North Tonawanda / Buffalo, New York, USA',
    },
    goals: [
      'Build organic search visibility from the ground up',
      'Compete against more established local competitors',
      'Rank across a broad service catalog',
      'Strengthen Google Business Profile presence',
    ],
    challenge:
      'As a newer, family-owned business founded in 2019, Ashton Services NY needed to build organic visibility from the ground up in a competitive Buffalo-area market dominated by more established landscaping companies.',
    strategy:
      'We focused on building a strong technical and local SEO foundation quickly, establishing trust signals and local relevance to help a younger business compete against longer-established competitors in organic search.',
    solution:
      'Technical SEO, on-page optimization across their landscaping, lawn care, tree service, and snow removal offerings, Google Business Profile setup and optimization, and local citation building across the Buffalo and North Tonawanda area.',
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      'The local SEO foundation helps Ashton Services NY compete for visibility against longer-established landscaping companies in the Buffalo area.',
    businessImpact: [
      'Established organic search presence from a low starting baseline',
      'Improved visibility across a broad service catalog',
      'Stronger local trust signals and citations',
      'Foundation in place for continued organic growth',
    ],
    results: [],
    testimonial: {
      quote: "As a newer business, getting found online felt impossible. Calibre Associates gave us a real foundation to build on.",
      name: 'Ashton Services NY',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
  {
    slug: 'a-one-tree-services',
    serviceSlug: 'seo',
    companyName: 'A-One Tree Services',
    companyLogo: aOneTreeLogo,
    projectName: 'A-One Tree Services Rochester NY, SEO & Local Search Growth',
    shortDescription:
      "With 15+ years of hands-on experience and a strong local reputation, A-One Tree Services had the credibility to dominate local search in Rochester, their organic visibility just didn't reflect it yet.",
    category: 'Local SEO Across a Multi-Community Service Area',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://aonetreeservicerochesterny.com/',
    overview:
      'A-One Tree Services has served Rochester, NY and the surrounding Monroe County communities since 2008, offering tree removal, trimming, stump grinding, storm damage cleanup, and 24/7 emergency response. Calibre Associates built a local SEO program to match their organic visibility to their established reputation.',
    about: {
      business: 'Professional Tree Removal, Trimming & Emergency Services',
      industry: 'Tree Services & Arboriculture',
      location: 'Rochester, New York, USA',
    },
    goals: [
      'Rank across Rochester and surrounding Monroe County communities',
      'Reflect 15+ years of experience and certifications in search visibility',
      'Strengthen Google Business Profile presence',
      'Capture both routine and emergency tree service searches',
    ],
    challenge:
      "With 15+ years of hands-on experience and a 4.8-star reputation, A-One Tree Services had the credibility to dominate local search in Rochester, but their organic visibility didn't yet reflect that reputation across the many Monroe County communities they serve.",
    strategy:
      'We built a local SEO strategy structured around Rochester and each of the surrounding Monroe County communities A-One serves, translating their real-world reputation and certifications into stronger search visibility.',
    solution:
      "Local SEO architecture covering Rochester and surrounding Monroe County service areas, technical SEO improvements, Google Business Profile optimization highlighting their certifications and guarantee, and citation building to reinforce their established local authority.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The local SEO program helps A-One Tree Services' organic search visibility finally reflect the reputation they've built over 15+ years in Rochester.",
    businessImpact: [
      'Improved visibility across Rochester and surrounding Monroe County communities',
      'Stronger local map pack presence',
      'Search visibility now reflects established reputation and certifications',
      'Improved Google Business Profile engagement',
    ],
    results: [],
    testimonial: {
      quote: "15 years in business and we're finally showing up online the way we should. Calibre Associates understood exactly what we needed.",
      name: 'A-One Tree Services',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
];
