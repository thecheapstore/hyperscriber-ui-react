import type { Project, ProjectProcessStep } from './types';
import lawnCareLogo from '@/assets/portfolio/716-lawn-care-logo.jpg';
import rrLandscapingLogo from '@/assets/portfolio/rr-landscaping-logo.png';
import wnyTreeLogo from '@/assets/portfolio/wny-logo.webp';
import buffaloTreeLogo from '@/assets/portfolio/buffalo-tree-logo.webp';
import metaTreeLogo from '@/assets/portfolio/meta-tree-service-logo.webp';
import metaServicesLogo from '@/assets/portfolio/meta-services-logo.webp';
import ashtonServicesLogo from '@/assets/portfolio/ashton-services-logo.webp';
import aOneTreeLogo from '@/assets/portfolio/aone-tree-logo.webp';
import treeCraftLogo from '@/assets/portfolio/treecraft-logo.webp';
import kpLandscapingLogo from '@/assets/portfolio/kplandscaping-logo.jpeg';
import buffaloDeckLogo from '@/assets/portfolio/buffalo-deck-logo.png';

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
      "716 Lawn Care ranked well for general landscaping terms in Buffalo, but its highest margin, most seasonal service, snow plowing, sat on page three and four of Google just as winter bookings opened for the year.",
    category: 'Local SEO & Seasonal Search Growth',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    featured: true,
    highlights: seoFeatures,
    liveUrl: 'https://716lawncare.com',
    overview:
      "716 Lawn Care runs two businesses on one calendar, landscaping crews in summer and plow trucks in winter, across Buffalo and 13 surrounding towns. A full audit found a blank Site Title field silently overriding every page's title tag, 30 near identical location pages built from the same paragraph with the town name swapped in, and a Google Business Profile still categorized as general lawn care and gone quiet right as snow removal search demand was about to spike. Calibre Associates fixed the technical foundation first, then rebuilt all 30 location pages and measured the result rather than assuming it, before turning the Google Business Profile into an active seasonal channel.",
    about: {
      business: 'Residential & Commercial Lawn Care and Landscaping',
      industry: 'Landscaping & Lawn Care',
      location: 'Buffalo, New York, USA',
    },
    goals: [
      'Fix the technical bug silently breaking every page title',
      'Rebuild 30 near identical location pages into genuinely distinct ones',
      'Turn snow plowing into a ranking priority ahead of the season',
      'Reactivate a dormant Google Business Profile as a seasonal channel',
      'Verify every fix against the live site rather than the editor',
    ],
    challenge:
      "A blank Site Title field in WordPress was silently overriding Rank Math's title tags on 24 pages, invisible in the editor and easy to miss without a live render check. Underneath that, all 30 location pages followed the same paragraph in the same order with only the town name swapped, the exact pattern Google treats as duplicate content, 29 pages had no H1 and auto generated meta descriptions, schema was typed as generic Articles instead of Services, and the Google Business Profile was still categorized as general lawn care with no posting activity right as snow removal search demand was about to spike for the season.",
    strategy:
      "We fixed the technical bleeding first, then rebuilt the content that was structurally at risk, then layered in on-page depth and local presence, in that order, and measured the location page rewrite with real text similarity analysis rather than trusting that thirty rewritten pages were different enough by eye.",
    solution:
      "Calibre Associates root caused and fixed the blank Site Title bug, corrected the server's timezone from UTC to America/New_York, and aligned LocalBusiness schema hours with the company's real 24/7 emergency availability. All 30 location pages were rewritten with extended, per service sections specific to each town rather than a shared paragraph, rotated across three distinct layouts by one CSS rule so future towns inherit variation automatically, then measured with a pairwise text similarity pass across all 435 possible page pairs. A missing H1 was added to 29 pages, meta descriptions were replaced with human written copy, schema was corrected from Article to Service across 31 pages, and two way cross linking was built between every location and service page. The Google Business Profile was broadened beyond lawn care to cover landscaping, tree, fence, deck, and snow, with Snow Removal Service made the primary category for the season, backed by a 32 post calendar, 18 snow removal posts, 10 fall cleanup posts, and 4 bundle offers, scheduled across all 13 towns.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The rebuild cut average similarity across the 30 rewritten location pages to 17.5 percent, with only the two genuinely related namesake town pairs crossing the 50 percent review line, while the Google Business Profile now carries a 32 post seasonal calendar timed to when snow removal demand actually peaks. Ranking and traffic reporting is still pending the client's Search Console and GA4 reconnection, so this reflects verified, measured work rather than a projected outcome.",
    businessImpact: [
      "Sitewide title tag bug root caused and fixed after tracing it to a single blank field",
      '30 location pages rewritten and measured at 17.5 percent average similarity, down from a near duplicate pattern',
      'Google Business Profile recategorized and made Snow Removal Service primary ahead of peak season',
      '32 post seasonal Google Business calendar scheduled across all 13 towns',
      'Every fix verified against the live rendered site, after catching an earlier pass that had self reported pages as done when 19 of them had never actually saved',
    ],
    results: [],
    testimonial: {
      quote: "We used to disappear right when snow season started, which is our busiest time. Seeing that get fixed and actually verified, not just promised, made the difference.",
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
      'RR Landscaping & Tree Services had a Google Business Profile with a suspension history and a phone number that did not match the site, Yelp, or Nextdoor, undermining trust signals for a genuinely 5.0 star, 21 review business across 11 towns in greater Syracuse.',
    category: 'Local SEO Foundation & Trust Signal Repair',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://rrlandscapingandtreeservices.com/',
    overview:
      "RR Landscaping & Tree Services has the reputation to back up a strong local search presence, 5.0 stars across 21 Google reviews, real Yelp and Nextdoor listings, and 21 service lines across 11 towns in greater Syracuse, but a mismatched phone number across its own Google Business Profile, Yelp, and Nextdoor, on a profile with a suspension history, was quietly undermining every local trust signal underneath it. Calibre Associates rebuilt the local SEO foundation from the ground up rather than layering content on top of signals that contradicted each other.",
    about: {
      business: 'Residential & Commercial Outdoor Services',
      industry: 'Landscaping & Tree Services',
      location: 'Syracuse, New York, USA',
    },
    goals: [
      'Resolve the NAP mismatch putting the Google Business Profile at risk',
      'Rebuild structured data to accurately represent the business',
      'Sync the service area and services list to what the business actually offers',
      'Give every page real, unique SEO metadata',
      'Build a sustainable content and Google posting calendar',
    ],
    challenge:
      "RR Landscaping's Google Business Profile had already been suspended once, and its listed phone number did not match the number on the website, Yelp, or Nextdoor, exactly the kind of inconsistency that keeps a profile with that history at risk. Underneath that, none of the site's 40 pages carried a focus keyword or written meta description, the service area list covered only 6 of the 11 towns actually served, the services list covered only 6 of 18 real categories, and a stale sitemap cache had silently dropped pages without anyone noticing.",
    strategy:
      "We treated trust signal consistency as the prerequisite for everything else, correcting the phone number mismatch and rebuilding structured data before investing in content, since ranking content built on top of contradictory NAP signals rarely holds.",
    solution:
      "Calibre Associates corrected the Google Business Profile phone number to match the site, Yelp, and Nextdoor, rebuilt HomeAndConstructionBusiness and Organization schema alongside a hand built FAQPage schema, and synced the service area from 6 to all 11 towns actually served with the services list expanded from 6 to 18 real categories. On top of that foundation, all 40 pages were given a real, unique focus keyword and SEO title, and a forward content calendar was built and scheduled: 35 new blog posts running through fall covering tree service and storm damage topics, plus 53 matching Google Business posts scheduled with zero date collisions against the 18 already live.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The program replaces contradictory trust signals with a Google Business Profile, schema layer, and service area that finally match reality, backed by 40 pages of real SEO metadata and a 35 post blog calendar with 53 Google posts scheduled behind it. The engagement is too recent to carry ranking or traffic data, Search Console and GA4 reconnection is the client's next step, so this reflects verified scope of work rather than a projected outcome.",
    businessImpact: [
      'Google Business Profile phone number corrected to match the site, Yelp, and Nextdoor',
      'HomeAndConstructionBusiness, Organization, and FAQPage schema rebuilt to reflect the real business',
      'Service area synced from 6 to 11 towns, services list expanded from 6 to 18 categories',
      '40 of 40 pages now carrying real, unique SEO metadata, up from zero',
      '35 post blog calendar and 53 scheduled Google Business posts live and publishing',
    ],
    results: [],
    testimonial: {
      quote: 'Our profile finally makes sense across every listing instead of contradicting itself. It is the kind of fix we did not know we needed until it was done.',
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
      "Ashton Services NY's hand coded site had drifted into two conflicting business addresses, a contact form quietly forwarding real leads to a stranger's inbox, and five pages splitting the exact keyword equity its own SEO team was trying to consolidate, all fixed and independently verified live.",
    category: 'Technical SEO, Security & Trust Signal Remediation',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://www.ashtonservicesny.com/',
    overview:
      "Ashton Services NY runs on a hand coded PHP site rather than a template platform, which meant years of incremental edits had left real structural cracks no plugin update was ever going to catch. The client's own SEO team already had a content strategy ready to go, so Calibre Associates took on everything underneath it: two conflicting business addresses, dead links inside the services menu, five pages competing for the same search terms, and a contact form quietly forwarding real customer inquiries to a stranger's inbox instead of Ashton's.",
    about: {
      business: 'Landscaping, Lawn Care, Tree Services & Snow Removal',
      industry: 'Landscaping & Property Services',
      location: 'North Tonawanda / Buffalo, New York, USA',
    },
    goals: [
      'Resolve the two address NAP mismatch undermining local ranking signals',
      'Consolidate keyword cannibalizing pages without losing any content',
      'Close the security gaps the site had quietly accumulated over the years',
      'Fix the broken menu and homepage issues undercutting the client SEO team\'s own strategy',
      'Verify every fix against the live site, not the code we shipped',
    ],
    challenge:
      "The homepage schema and footer listed a Buffalo address while the header contact bar listed a different one in North Tonawanda, a NAP mismatch confusing both customers and Google's local ranking signals. The services menu had dead parent links behind working dropdowns, five separate pages for wood decks, composite decks, wood fences, vinyl fences, and chain link fences were splitting keyword equity the SEO team's own strategy was trying to consolidate, and two leftover, unauthenticated form scripts from the original site template were still live, one of them silently forwarding real customer inquiries to an old vendor's inbox instead of Ashton's, with no security headers set and the server broadcasting its exact end of life PHP version.",
    strategy:
      "We ran four workstreams underneath the client's own SEO content strategy rather than in place of it: fix the local SEO foundation and structured data, consolidate fragmented pages instead of duplicating them, close the technical and security gaps nobody sees until they break something, and rebuild the parts of the design that read as templated.",
    solution:
      "The business address was unified to a single source of truth across the footer, contact page, and every page's LocalBusiness schema, verified against the client's actual Google Business Profile pin before anything changed. Five fragmented deck and fence pages were merged into two comprehensive ones with clean redirects from every retired URL, and more than 10 core service pages were aligned to the SEO team's own keyword and content brief. A duplicate Tree Removal menu entry the SEO team had flagged was removed, and a full sitewide audit caught a second, unreported duplicate in the footer before it became a second complaint. On the technical side, missing security headers were added, the server stopped disclosing its PHP version, the two unauthenticated legacy form scripts were closed, a charset bug mangling apostrophes was fixed, and an llms.txt file was deployed for AI answer engines. The homepage hero was rebuilt around one clear message instead of a generic stock carousel, the service card grid's actual root cause, a duplicated image file with no size constraint, was fixed rather than patched around, and a mega menu flyout clipping bug that had been misreported as a different issue entirely was repaired.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "Every fix was checked again against the live production site on September 6, 2026: all 5 recommended security headers confirmed live, all 3 retired URLs 301 redirecting with zero dead ends, 2 duplicate menu entries removed, 5 fragmented deck and fence pages consolidated into 2, 73 pages verified in a clean sitemap, and 3 vulnerable scripts closed, including the one misdirecting real customer leads. Ranking positions and traffic trends belong to the client's own SEO team, tracked in their own Search Console, so this reflects only what is confirmed, live, and reproducible on Calibre's side of the work.",
    businessImpact: [
      'Two conflicting business addresses unified into one verified source of truth across the site and schema',
      "A contact form silently forwarding real leads to a stranger's inbox found and closed",
      '5 fragmented deck and fence pages consolidated into 2, removing a real keyword cannibalization risk',
      'All 5 recommended security headers live, PHP version disclosure stopped',
      'Zero open issues at handoff, every issue the client\'s own SEO team flagged fixed and reverified the same day',
    ],
    results: [
      { label: 'Security Headers Live', value: 5, suffix: '/5' },
      { label: 'Pages In Clean Sitemap', value: 73 },
      { label: 'Vulnerable Scripts Closed', value: 3 },
      { label: 'Open Issues At Handoff', value: 0 },
    ],
    testimonial: {
      quote: "Finding out our contact form had been quietly emailing leads to someone else for who knows how long was unsettling, but having it found, fixed, and proven fixed the same day says everything about how this team works.",
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
  {
    slug: 'tree-craft-tree-services',
    serviceSlug: 'seo',
    companyName: 'TreeCraft Tree Service',
    companyLogo: treeCraftLogo,
    projectName: 'TreeCraft Tree Service, SEO & Local Search Growth',
    shortDescription:
      'TreeCraft Tree Service needed real search visibility across three separate metro areas, Buffalo, Rochester and Batavia, without the duplicate content risk that usually comes with covering that many towns at once.',
    category: 'Programmatic Local SEO Across Three Metro Areas',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://treecraftservices.com/',
    overview:
      'TreeCraft Tree Service works Buffalo, Rochester and Batavia as one crew with one phone line, covering tree removal, trimming, stump grinding, storm response and land clearing. Calibre Associates built the SEO program directly into the site architecture rather than adding it after the fact, so all 62 towns across the three metros carry genuinely distinct, indexable pages for every service the crew performs.',
    about: {
      business: 'Tree Removal, Trimming, Storm Response & Land Clearing',
      industry: 'Tree Services & Arboriculture',
      location: 'Buffalo, Rochester & Batavia, New York',
    },
    goals: [
      'Rank separately for every town and service combination across three metro areas',
      'Avoid duplicate content penalties from covering 62 towns at once',
      'Build discoverability for AI answer engines alongside classic search',
      'Keep structured data and metadata accurate without page by page upkeep',
      'Catch technical SEO defects before they cost search visibility',
    ],
    challenge:
      "Covering three metro areas at once, Buffalo, Rochester and Batavia, meant 62 towns crossed with 5 services, a scale where a lazy build would have produced near identical pages and real duplicate content risk. TreeCraft needed every one of those combinations to carry its own honest local relevance, not a template with the town name swapped in.",
    strategy:
      "We built the SEO program at the architecture level rather than as a layer applied afterward, using a keyword hierarchy that inherits correctly into every generated page and a schema graph written specifically for tree service page types rather than a generic plugin default.",
    solution:
      "Technical SEO built into the page template itself: a title pattern combining primary keyword, town, and brand on every combination page, templated meta descriptions carrying real town placeholders, keyword driven image alt text across the site, and a full internal linking mesh connecting every service, town, and combination page in both directions. A dynamic llms.txt route keeps AI answer engines current with the live service and town list automatically, and a five dimension audit, covering technical SEO, content quality, structured data, answer engine readiness, and sitemap integrity, caught two critical bugs, including two of the site's own pages competing for the same search term, before either reached a live visitor.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The SEO program gives TreeCraft real, separately rankable coverage across three metro areas and 62 towns, built to survive scrutiny rather than trigger it, with a dynamic llms.txt keeping the business visible to AI answer engines as that channel grows.",
    businessImpact: [
      'Genuine per town, per service search visibility across three metro areas',
      'Duplicate content risk addressed at the architecture level, not patched after launch',
      'Dynamic llms.txt keeps AI answer engines current with the live service and town list',
      'Full schema graph validated across every page type rather than a generic plugin default',
      'Two critical and two medium technical SEO defects caught and fixed before handover',
    ],
    results: [],
    testimonial: {
      quote: "We went from one town to feeling like we actually show up everywhere we work. The team caught things in the audit we never would have found ourselves.",
      name: 'TreeCraft Tree Service',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
  {
    slug: 'kp-landscaping',
    serviceSlug: 'seo',
    companyName: 'KP Landscaping',
    companyLogo: kpLandscapingLogo,
    projectName: 'KP Landscaping, SEO & Google Business Profile Growth',
    shortDescription:
      "KP Landscaping's 1,600 plus page rebuild needed a Google Business Profile and local search campaign to match it, since a strong site and an underused profile leave real local visibility on the table.",
    category: 'Google Business Profile & Local Search Campaign',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://kplandscaping.us/',
    overview:
      "KP Landscaping's site already carries a genuine local SEO architecture across Buffalo, Rochester and Batavia. Calibre Associates built the other half of local visibility on top of it, a full Google Business Profile optimization and an active, hand written posting calendar designed to look nothing like the auto generated GBP spam Google's own systems are trained to discount.",
    about: {
      business: 'Landscaping, Hardscaping & Tree Care Contractor',
      industry: 'Landscaping, Hardscaping & Outdoor Living',
      location: 'Buffalo, Rochester & Batavia, New York',
    },
    goals: [
      'Bring Google Business Profile visibility up to the same standard as the rebuilt site',
      'Rebalance the service area list around towns the business actually serves',
      'Run a consistent posting calendar that reads as genuinely written, not templated',
      'Match content themes to what actually drives calls in each metro area',
      'Support the site\'s existing schema and sitemap work with clean canonical structure',
    ],
    challenge:
      "A rebuilt site with real local SEO architecture only carries half the local visibility equation. KP Landscaping's Google Business Profile carried a service area list with duplicate and out of core towns, and no consistent posting activity, leaving the other half of local search underused.",
    strategy:
      "We treated the Google Business Profile as a primary growth channel rather than an afterthought, rebalancing the service area list against the site's own verified local data and building a posting calendar with real content themes matched to seasonal demand in each metro.",
    solution:
      "A full profile optimization across 7 business categories, one primary and six secondary, more than 30 services listed each with its own written description, and a service area list rebalanced from a duplicated 20 town list down to 11 verified Rochester area towns and 9 verified Buffalo area towns pulled directly from the site's own local data set. On top of that sits a 10 week posting calendar, three posts a week on Tuesday, Thursday and Saturday, every post written in a human voice with no hyphens or em dashes and a working Call Now button, split across four themes matched to what drives calls in each metro: landscaping and hardscaping in Rochester and Buffalo, snow plowing in Buffalo, tree removal in both metros around fall storm season, and the 24/7 emergency tree line kept visible ahead of storm season.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The Google Business Profile campaign gives KP Landscaping's already rebuilt site a matching local presence, an accurate service area list, a complete category and service breakdown, and a genuinely human posting calendar instead of the templated activity Google's own systems are built to discount.",
    businessImpact: [
      'Google Business Profile fully optimized across 7 categories and 30 plus individually described services',
      'Service area list rebuilt from a duplicated 20 town list into 11 verified Rochester and 9 verified Buffalo area towns',
      '10 week posting calendar running 3 human written posts a week across 4 seasonally matched themes',
      "Every post built around a working Call Now button tied to the business's real number",
      "Local search architecture on the site itself, segmented sitemap, canonical integrity, and llms.txt, supporting the same campaign",
    ],
    results: [],
    testimonial: {
      quote: "Our profile finally looks as active and real as the business actually is. The posting calendar alone has brought in calls we can trace straight back to it.",
      name: 'KP Landscaping',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
  {
    slug: 'buffalo-deck-builders',
    serviceSlug: 'seo',
    companyName: 'Buffalo Deck Builders',
    companyLogo: buffaloDeckLogo,
    projectName: 'Buffalo Deck Builders, SEO & Local Search Growth',
    shortDescription:
      "Buffalo Deck Builders needed search infrastructure built into 772 pages across 29 towns, not a meta description pass at the end, and an audit caught a defect that had silently blocked every page's search visibility for months.",
    category: 'Local Search Architecture & Technical SEO',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://buffalodeckbuildersny.com/',
    overview:
      "Buffalo Deck Builders sells decks, fences and porches across 29 Western New York towns, a market where nearly every search starts with the service name and near me. Calibre Associates built the SEO program as structural infrastructure rather than a content layer, a local search matrix built into the page architecture itself, schema validated on every template, and a technical audit that caught a defect most builds never find.",
    about: {
      business: 'Deck, Fence & Porch Construction Contractor',
      industry: 'Outdoor Construction & Home Improvement',
      location: 'Western New York',
    },
    goals: [
      'Rank individually for every service across all 29 towns served',
      'Validate a full schema graph across every page type without duplicate business listings',
      'Reach 100 percent unique, keyword targeted metadata across the entire site',
      'Catch any defect preventing search visibility before it costs months of traffic',
      'Add AI answer engine discoverability alongside classic search',
    ],
    challenge:
      "With 24 services sold across 29 towns, a real local search presence meant 696 individually relevant landing pages, not a handful of service pages hoping to rank everywhere at once. On top of that, the site's SEO plugin reported as active with every page's title and description saved correctly, while silently rendering none of it, zero meta descriptions and zero Open Graph tags across all 772 pages, a defect invisible from the front end and easy for a standard QA pass to miss.",
    strategy:
      "We built local search as page architecture rather than a content pass, a 29 town by 24 service matrix where each combination gets its own individually written landing page, backed by a single canonical business entity in schema rather than hundreds of duplicate listings, and we treated technical verification as a standing discipline rather than a one time check.",
    solution:
      "A local search matrix of 696 individually written landing pages, each targeting one specific service in town search and built from real keyword research across all three service categories. Schema is scoped around one canonical HomeAndConstructionBusiness and WebSite entity referenced by ID rather than 696 separate business listings, the exact duplicate NAP pattern search engines penalize, with Service schema scoped per town, FAQPage schema mirroring visible copy, BlogPosting on all 7 articles, and BreadcrumbList across every template. Every one of the 772 pages carries unique, keyword targeted titles and descriptions, keyword driven file names and alt text, and a clean, crawlable URL structure, with llms.txt added for AI search discoverability. The plugin registration defect that had silently blocked meta descriptions and Open Graph tags sitewide was traced to its root cause, fixed, and re verified live across every page type, and the same 772 page crawl and cross device verification pass now runs as a standing step rather than a one time launch check.",
    process: seoProcess,
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    showSeoReporting: true,
    businessImpactSummary:
      "The SEO program turned Buffalo Deck Builders' 772 pages into real, individually rankable local search coverage across 29 towns, while a structural audit caught and fixed a defect that had silently zeroed out the site's meta descriptions and Open Graph tags before it could cost months of visibility.",
    businessImpact: [
      '696 individually written town and service landing pages built into the site architecture',
      'Lighthouse SEO score raised from 92 to a full 100 across the live site',
      'Schema scoped around one canonical business entity rather than hundreds of duplicate listings',
      '100 percent unique, keyword targeted titles and descriptions across all 772 pages',
      "A silent plugin defect that had zeroed out meta descriptions and Open Graph tags sitewide found, fixed, and verified",
      'llms.txt added for AI search engine and generative answer discoverability',
    ],
    results: [
      { label: 'Lighthouse SEO Score', value: 100 },
      { label: 'Lighthouse Accessibility Score', value: 100 },
      { label: 'Pages With Unique SEO Meta', value: 100, suffix: '%' },
      { label: 'Hyperlocal Landing Pages', value: 696 },
    ],
    testimonial: {
      quote: "Finding out our meta descriptions weren't actually live for months was a gut punch, but having it caught and fixed before it cost us more than that says a lot about how thorough this team is.",
      name: 'Buffalo Deck Builders',
      role: 'Business Owner',
    },
    finalCtaHeadline,
    finalCtaDescription,
  },
];
