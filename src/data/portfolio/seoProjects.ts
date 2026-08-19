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
      "716 Lawn Care grew from one mowing route in 2010 into a full landscaping and hardscaping company, but its organic search presence hadn't kept pace with fifteen years of real growth across Erie and Niagara counties.",
    category: 'Local SEO & Google Business Profile Growth',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    featured: true,
    highlights: seoFeatures,
    liveUrl: 'https://716lawncare.com',
    overview:
      "716 Lawn Care started with a truck, a trailer, and a mowing route in 2010, and has since grown into a full service landscaping, hardscaping, and snow plowing company covering more than two dozen towns across Erie and Niagara counties. Calibre Associates built a dedicated local SEO program on top of their existing website, focused on organic visibility, Google Business Profile growth, and turning fifteen years of real, earned local reputation into consistent search rankings.",
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
      "716 Lawn Care's actual differentiator is fifteen years of consistency, not a flashy pitch, but that kind of quiet, steady reputation rarely translates into search visibility on its own. The site wasn't structured to compete for the local searches that matter most, and the company's four real service groups, lawn care, landscaping, hardscaping, and tree and seasonal work, weren't mapped to the specific local keywords homeowners across Erie and Niagara counties actually search.",
    strategy:
      'We approached this as a local search first engagement built around the company\'s real service groups and its more than two dozen town service area, auditing the technical foundation and treating the Google Business Profile as a primary growth channel rather than an afterthought.',
    solution:
      'Calibre Associates delivered a full local SEO program built around 716 Lawn Care\'s actual service structure: technical audit and fixes, on-page optimization across the lawn care, landscaping, hardscaping, and tree and seasonal service pages, local landing pages mapped to the specific Erie and Niagara county towns the company serves, Google Business Profile optimization, and a practical content strategy built on topics the company already publishes, like hydroseeding versus sod and the right time to install sod in Buffalo.',
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The SEO program gives 716 Lawn Care's fifteen years of real local growth a search presence to match it, mapping the company's actual four service groups and Erie and Niagara county footprint to the specific searches homeowners run, rather than generic landscaping keywords.",
    businessImpact: [
      "Fifteen year local track record translated into structured, keyword mapped service pages",
      'Local landing pages built around the specific towns the company actually serves',
      'Google Business Profile optimized to reflect real service categories, not generic listings',
      'Practical, already published content, like sod versus hydroseeding, used to build topical authority',
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
      'RR Landscaping & Tree Services runs a 20 plus member crew out of Liverpool, New York with strong word of mouth in Syracuse, but almost no organic search presence to match that real operational scale.',
    category: 'Local SEO & Local Search Optimization',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://rrlandscapingandtreeservices.com/',
    overview:
      'RR Landscaping & Tree Services operates out of Liverpool, New York with a crew of more than 20 and over a decade of hands on experience with Central New York\'s soil and weather conditions, offering 21 distinct services across landscaping, tree care, and snow plowing. Calibre Associates built a dedicated local SEO program focused on ranking for both landscaping and tree service searches across a competitive Syracuse market.',
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
      "A crew of more than 20 and 21 distinct services is a real operational scale most single truck competitors can't match, but RR Landscaping's organic search presence didn't reflect it. The site wasn't ranking for core landscaping and tree service terms, and there was no local SEO structure connecting that crew capacity to the specific Syracuse area towns the company actually serves.",
    strategy:
      "We prioritized a technical SEO first approach paired with local service area targeting built around RR Landscaping's real crew size and decade of local soil and weather experience, so the site could compete for both landscaping and tree service searches across Syracuse and surrounding communities on the strength of what the business can actually deliver.",
    solution:
      "We delivered technical SEO fixes, on-page optimization across all 21 landscaping and tree service pages, local service area content built around Syracuse and the surrounding communities, Google Business Profile optimization highlighting the company's crew size and local address, and a citation strategy to build authority in a competitive local market.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The local SEO program gives RR Landscaping & Tree Services a search presence that finally matches its real crew size and decade of local experience, supporting both landscaping and tree service search demand from a single, well organized site.",
    businessImpact: [
      '21 individual services mapped to the specific local searches homeowners actually run',
      'Crew size and Liverpool address used as concrete Google Business Profile trust signals',
      'Stronger local search and map presence across Syracuse and surrounding communities',
      'Citation strategy built to reflect over a decade of established local operation',
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
      'WNY Tree Specialists covers five counties with genuine 24/7 emergency response, a broader footprint than any other tree company in the portfolio, and its search visibility needed to reflect that reach across both routine and storm driven searches.',
    category: 'Local SEO & Emergency Search Visibility',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://wnytreespecialists.com/',
    overview:
      'WNY Tree Specialists covers five counties, Erie, Monroe, Niagara, Ontario, and Livingston, stretching from Buffalo through greater Rochester, with true 24/7 emergency availability and a client base spanning homeowners, HOAs, schools, churches, and municipal properties. Calibre Associates built a local SEO program designed around both routine tree care searches and the urgent, storm-driven searches that define much of the tree service industry across that entire footprint.',
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
      "A five county footprint is a genuinely different scale than a single metro tree company, and WNY Tree Specialists needed its search visibility to reach dozens of towns from Buffalo to greater Rochester, not just its home market. The site wasn't structured to capture urgent, storm driven local searches across that whole area, and its two anchor markets, Buffalo and Amherst, didn't have the dedicated local pages that kind of reach requires.",
    strategy:
      "We built the SEO strategy around the company's real geographic reach and its genuine 24/7 emergency commitment, prioritizing the Buffalo and Amherst anchor markets while structuring the broader five county area, Erie, Monroe, Niagara, Ontario, and Livingston, for long-term coverage.",
    solution:
      "Local SEO structure built around five distinct counties and dedicated Buffalo and Amherst location pages, technical optimization, Google Business Profile management highlighting genuine 24/7 availability, and authority building content aimed at the client types the company actually serves, from homeowners to schools and municipalities.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The SEO program positions WNY Tree Specialists to capture both everyday and emergency tree service demand across a genuinely five county footprint, with Buffalo and Amherst built out as strong anchor markets rather than left to compete on generic county wide terms alone.",
    businessImpact: [
      'Dedicated Buffalo and Amherst pages built as strong local anchors',
      'Five county service structure, Erie, Monroe, Niagara, Ontario, Livingston, organized for long-term reach',
      'Genuine 24/7 emergency availability made a visible trust signal in search and Google Business Profile',
      'Content built around the company\'s real client range, from homeowners to schools and municipalities',
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
      'Buffalo Tree Specialists owns its own crane and runs no subcontractors, a specific claim most competitors can\'t make, and the SEO strategy was built to make sure that differentiator actually surfaces in search rather than getting lost among generic tree service listings.',
    category: 'Local SEO & Emergency Search Visibility',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://buffalotreespecialists.com/',
    overview:
      "Buffalo Tree Specialists owns its own crane equipment, pulls its own permits, and runs no subcontractors, backed by ISA certified arborists, OSHA 30 compliance, ANSI A300 pruning standards, and two million dollars in liability coverage. Calibre Associates built a local SEO program focused on ranking quickly for urgent, high-intent tree service searches across the more than two dozen Western New York towns the company serves, while making that crane ownership and compliance story visible in search, not just on the site itself.",
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
      "Buffalo Tree Specialists competes in a crowded local market where most competitors make the same licensed and insured claims. Its real differentiator, owning its crane and running no subcontractors, needed to surface in search results and Google Business Profile content, not just live on the website, so a homeowner comparing options in a stressful moment sees the distinction before they even click through.",
    strategy:
      'We focused the SEO approach on surfacing the crane ownership and no subcontractor claim directly in local search and map content, backed by the specific ISA, OSHA 30, and ANSI A300 credentials that support it, so trust builds before a searcher reaches the site.',
    solution:
      "Technical SEO, Google Business Profile optimization built around the company's real compliance credentials, local citation building, and service area SEO structured around emergency and same day tree service searches across the more than two dozen towns Buffalo Tree Specialists serves.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The SEO program helps Buffalo Tree Specialists lead with what actually separates it from other Buffalo tree companies, crane ownership and no subcontractors, in the moments that matter most: urgent, high-intent local searches where trust has to build fast.",
    businessImpact: [
      'Crane ownership and no subcontractor claim surfaced directly in local search and map content',
      'ISA, OSHA 30, and ANSI A300 credentials used as concrete Google Business Profile trust signals',
      'Stronger local citation and map presence across the Western New York service area',
      'Clearer differentiation from local competitors making generic licensed and insured claims',
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
      'Meta Tree Services NY already covers more than 60 towns across five regions from Buffalo to the Finger Lakes, a scale that needed an SEO structure built region by region rather than one generic New York wide campaign.',
    category: 'Scalable Local SEO Architecture',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://metatreeservicesny.com/',
    overview:
      'Meta Tree Services NY covers more than 60 towns organized into five named regions, Buffalo and Erie County, Niagara County, the Northtowns, Rochester, and the Finger Lakes, with more than a thousand properties served over a decade of local experience. Calibre Associates built a local SEO program structured around that existing five region footprint, so the site could rank consistently across an area few tree companies attempt to cover.',
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
      "Covering five regions and more than 60 towns from Buffalo to the Finger Lakes is a genuinely different SEO problem than a single metro tree company, since a generic statewide campaign would dilute relevance in every individual market while a town by town approach at that scale would be unmanageable to maintain.",
    strategy:
      "We structured the SEO program around the company's own five region breakdown, Buffalo and Erie County, Niagara County, the Northtowns, Rochester, and the Finger Lakes, giving each region real, distinct content while keeping the framework repeatable enough to extend as the business grows further.",
    solution:
      "Technical SEO, region based local landing page architecture matched to Meta Tree Services NY's actual five region structure, Google Business Profile optimization reflecting more than a thousand properties served, and a content strategy built around the company's plainspoken, family owned voice, telling customers what a tree actually needs rather than upselling unnecessary work.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The regional SEO architecture positions Meta Tree Services NY to keep its search visibility consistent across an already large five region footprint, while giving the company room to grow into new towns without starting the structure over each time.",
    businessImpact: [
      'Five region local structure, matched to the company\'s own internal breakdown, built for consistent visibility',
      'Google Business Profile optimization reflecting more than a thousand properties served',
      "Content strategy built around the company's plainspoken, honest assessment voice",
      'Repeatable framework in place for continued expansion beyond the current 60 plus towns',
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
      "Meta Services NY sells close to two dozen services under a one crew, one number bundling pitch, and its SEO strategy needed to rank each service on its own while keeping that bundled coordination story intact rather than one page cannibalizing another.",
    category: 'Multi-Service Local SEO Architecture',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://metaservicesny.com/',
    overview:
      "Meta Services NY grew from a lawn care company into a full outdoor property operation over twenty years, now covering close to two dozen services across five groupings, Lawn Care, Landscaping, Tree Services, Outdoor Living, and Exterior and Seasonal work, all sold on a single crew, single number bundling pitch. Calibre Associates built a local SEO program structured around that real service breadth without letting individual service pages compete against each other in search.",
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
      "With close to two dozen services across five groupings, Meta Services NY's SEO strategy had to solve a specific problem, cannibalization between individual service pages, while still surfacing the company's actual selling point, one crew and one number covering everything a property needs outdoors, instead of reading like unrelated services bundled together for search purposes only.",
    strategy:
      "We approached this with a hub and spoke content architecture matched to the company's own five service groupings, giving each service its own optimized page while the bundling pitch itself, and region specific technical realities like clay soil and freeze thaw cycles, reinforced overall domain authority.",
    solution:
      "On-page SEO across all five service groupings and their individual pages, technical SEO improvements, Google Business Profile optimization built around the twenty year business history and same day coordination pitch, and internal linking connecting every service to the same five region service area used across the company's portfolio.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The structured SEO architecture helps Meta Services NY rank across close to two dozen services without one page undercutting another, while keeping the company's real one crew, one number bundling pitch, backed by twenty years in business, visible in search rather than diluted into generic property services language.",
    businessImpact: [
      'Close to two dozen services across five groupings ranked without internal cannibalization',
      "Twenty year business history and single crew bundling pitch surfaced as a genuine trust signal",
      'Region specific technical details, clay soil, freeze thaw cycles, used in local content',
      'Internal linking structured around the same five region footprint shared across the company\'s brands',
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
      'A family-owned company founded in 2019 with 15 employees and a genuine hub and spoke structure of 30 named town pages, Ashton Services NY needed a consistent local presence across the Buffalo area to match a site architecture more ambitious than most newer landscaping companies attempt.',
    category: 'Local SEO Foundation Building',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://www.ashtonservicesny.com/',
    overview:
      "Ashton Services NY is a family-owned landscaping and property services company founded in 2019, now with 15 employees covering lawn care, landscaping, tree services, snow plowing, decks, and fencing across roughly 30 named towns in the Buffalo area. Calibre Associates built a local SEO foundation to establish the brand in organic search, with a particular focus on consistent, accurate local business information across every channel a newer business needs to build trust on.",
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
      "As a newer, family-owned business founded in 2019, Ashton Services NY already had an ambitious 30 town hub and spoke page structure and a broad service catalog, lawn care, hardscaping, tree service, and snow plowing, but needed consistent business information and citation coverage across the Buffalo area to earn the trust signals that longer established competitors accumulate naturally over time.",
    strategy:
      "We focused on building a strong technical and local SEO foundation quickly, prioritizing consistent NAP (name, address, phone) accuracy across every listing and citation, since that consistency matters even more for a five year old business than for one with decades of accumulated trust.",
    solution:
      "Technical SEO, on-page optimization across the lawn care, landscaping, tree service, and snow plowing offerings, Google Business Profile setup and optimization, and local citation building and cleanup across the Buffalo and North Tonawanda area to ensure consistent business information everywhere the company is listed.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The local SEO foundation helps Ashton Services NY compete for visibility against longer-established landscaping companies, backing up its existing 30 town page structure with the consistent business information and citation accuracy that turns an ambitious site into a trusted one.",
    businessImpact: [
      'Consistent business name, address, and phone information established across citations and listings',
      'Existing 30 town hub and spoke page structure backed by matching local SEO signals',
      'Improved visibility across the lawn care, tree service, and snow plowing catalog',
      'Foundation in place for a five year old business to compete against long established competitors',
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
      "A-One Tree Services backs a zero property damage guarantee with ANSI A300 pruning standards and a spider lift that reaches through gates as narrow as 36 inches, but that specific credibility wasn't reflected in how the company showed up across Rochester's six distinct service regions.",
    category: 'Local SEO Across a Multi-Community Service Area',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://aonetreeservicerochesterny.com/',
    overview:
      "A-One Tree Services has served Rochester, NY and the surrounding Monroe County communities since 2008, offering tree removal, trimming, stump grinding, storm damage cleanup, and 24/7 emergency response, backed by a zero property damage guarantee, ANSI A300 pruning standards, and specialized spider lift equipment for tight access jobs. Calibre Associates built a local SEO program structured around the six regional clusters the company already uses internally, Rochester, Brighton and Pittsford, Greece and Irondequoit, Webster and Penfield, Henrietta and Chili, and Fairport and Perinton.",
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
      "A-One Tree Services already had real, specific differentiators, a zero property damage guarantee, ANSI A300 standards, a no subcontractor model where the crew that quotes the job is the crew that does it, and a spider lift for properties with narrow gate access, but none of that showed up clearly across the six distinct community clusters the company actually serves around Rochester.",
    strategy:
      "We built a local SEO strategy structured around A-One's own six regional groupings rather than a flat list of towns, translating their real world guarantee, certifications, and specialized equipment into stronger, region specific search visibility.",
    solution:
      "Local SEO architecture covering all six regional clusters, Rochester, Brighton and Pittsford, Greece and Irondequoit, Webster and Penfield, Henrietta and Chili, and Fairport and Perinton, technical SEO improvements, Google Business Profile optimization highlighting the zero damage guarantee and spider lift capability, and citation building to reinforce more than 15 years of established local authority.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The local SEO program helps A-One Tree Services' organic search visibility finally reflect the specific credibility they've built over 15 plus years, a zero damage guarantee, real certifications, and specialized equipment, across all six regional clusters they actually serve around Rochester.",
    businessImpact: [
      'Six regional clusters, matched to the company\'s own internal groupings, given distinct local content',
      'Zero property damage guarantee and spider lift capability surfaced as concrete trust signals',
      'ANSI A300 and no subcontractor model used to reinforce Google Business Profile credibility',
      'Citation building strengthened to reflect more than 15 years of established local authority',
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
