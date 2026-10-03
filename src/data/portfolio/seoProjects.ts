import type { Project } from './types';
import lawnCareLogo from '@/assets/portfolio/716-lawn-care-logo.webp';
import rrLandscapingLogo from '@/assets/portfolio/rr-landscaping-logo.webp';
import wnyTreeLogo from '@/assets/portfolio/wny-logo.webp';
import buffaloTreeLogo from '@/assets/portfolio/buffalo-tree-logo.webp';
import metaTreeLogo from '@/assets/portfolio/meta-tree-service-logo.webp';
import metaServicesLogo from '@/assets/portfolio/meta-services-logo.webp';
import ashtonServicesLogo from '@/assets/portfolio/ashton-services-logo.webp';
import aOneTreeLogo from '@/assets/portfolio/aone-tree-logo.webp';
import treeCraftLogo from '@/assets/portfolio/treecraft-logo.webp';
import kpLandscapingLogo from '@/assets/portfolio/kplandscaping-logo.webp';
import buffaloDeckLogo from '@/assets/portfolio/buffalo-deck-logo.webp';

// Editorial rules for every entry in this file:
// 1. Describe the work we did and the facts we verified on the live site or in Search Console. No claims about
//    rankings, traffic or leads. Those will be added once there are at least six months of Search Console history.
// 2. Facts about the live sites were last verified on 4 October 2026.
// 3. No testimonials or generated dashboards until real, attributable ones exist.

const seoFeatures = [
  'On Page SEO',
  'Local SEO',
  'Google Business Profile Management',
  'Technical SEO',
  'Structured Data',
  'Content Strategy',
  'Search Console Setup',
];

const finalCtaHeadline = 'Want a Local SEO Plan Built Around Your Business?';
const finalCtaDescription =
  'Book a free consultation and we will walk through how we would structure your pages, your Google Business Profile and your tracking.';

const dataNote =
  'Rankings, traffic and lead numbers are deliberately not shown on this page. A site needs at least six months of Search Console history before any trend means something, and we will publish measured results here once that evidence exists. Until then this page lists the work we did and the facts we verified.';

export const seoProjects: Project[] = [
  // ---------------------------------------------------------------- 716 Lawn Care
  {
    slug: '716-lawn-care',
    serviceSlug: 'seo',
    companyName: '716 Lawn Care',
    companyLogo: lawnCareLogo,
    projectName: '716 Lawn Care, SEO & Local Search Growth',
    shortDescription:
      'We fixed a sitewide title tag bug, rebuilt 30 near identical location pages and rebuilt the Google Business Profile around snow plowing ahead of the winter season for 716 Lawn Care in Buffalo.',
    category: 'Local SEO & Seasonal Search Structure',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    featured: true,
    highlights: seoFeatures,
    liveUrl: 'https://716lawncare.com',
    overview:
      '716 Lawn Care runs two businesses on one calendar, landscaping crews in summer and plow trucks in winter, across Buffalo and 13 surrounding towns. When we audited the site we found a blank Site Title field silently overriding page titles, 30 location pages built from the same paragraph with only the town name swapped, and a Google Business Profile that was still categorized as general lawn care and had gone quiet just as snow removal searches were about to rise. We fixed the technical foundation first, then rebuilt all 30 location pages and measured the result with text similarity analysis, then turned the Google Business Profile into an active seasonal channel.',
    about: {
      business: 'Residential & Commercial Lawn Care and Landscaping',
      industry: 'Landscaping & Lawn Care',
      location: 'Buffalo, New York, USA',
    },
    goals: [
      'Find and fix the technical bug affecting every page title',
      'Rebuild 30 near identical location pages into genuinely distinct pages',
      'Make snow plowing a priority service in the site structure before the season',
      'Restart a dormant Google Business Profile as a seasonal channel',
      'Check every fix against the live rendered site, not the editor',
    ],
    challenge:
      "A blank Site Title field in WordPress was overriding Rank Math title tags on 24 pages, which is invisible in the editor and easy to miss without a live render check. Underneath that, all 30 location pages followed the same paragraph in the same order with only the town name swapped, the pattern Google describes as duplicate content. 29 pages had no H1 and auto generated meta descriptions, schema was typed as generic Article instead of Service, and the Google Business Profile still carried a general lawn care category with no recent posting, just before snow removal demand rises for the season.",
    strategy:
      'We worked in a fixed order: fix the technical problems first, rebuild the content that was structurally at risk second, then add on page depth and local presence. We measured the location page rewrite with pairwise text similarity analysis instead of judging thirty rewritten pages by eye.',
    solution:
      "We traced the blank Site Title bug to its source and fixed it, corrected the server timezone from UTC to America/New_York, and aligned LocalBusiness schema hours with the company's real 24/7 emergency availability. All 30 location pages were rewritten with extended, per service sections specific to each town, rotated across three distinct layouts by one CSS rule so future towns inherit variation automatically. We then compared every pair of pages, 435 pairs in all. A missing H1 was added to 29 pages, meta descriptions were replaced with human written copy, schema was corrected from Article to Service across 31 pages, and two way links were built between every location page and service page. The Google Business Profile was broadened beyond lawn care to cover landscaping, tree, fence, deck and snow work, with Snow Removal Service set as the primary category for the season. We supported it with a 32 post calendar, 18 snow removal posts, 10 fall cleanup posts and 4 bundle offers, scheduled across all 13 towns.",
    process: [
      { title: 'Audit With a Live Render Check', description: 'We compared what the editor showed with what the live pages actually served, which is how the blank Site Title field overriding 24 page titles came to light.' },
      { title: 'Technical Fixes', description: 'The title bug was fixed at the source, the server timezone was corrected to America/New_York and LocalBusiness hours were aligned with real 24/7 availability.' },
      { title: 'Location Page Rebuild', description: 'All 30 location pages were rewritten with town specific, per service sections and rotated across three layouts so no two read from the same template.' },
      { title: 'Similarity Measurement', description: 'A pairwise text comparison across all 435 page pairs measured the rewrite, with an average similarity of 17.5 percent after the rebuild.' },
      { title: 'On Page and Schema Corrections', description: 'An H1 was added to 29 pages, meta descriptions were rewritten by hand, schema moved from Article to Service on 31 pages and location and service pages were linked both ways.' },
      { title: 'Google Business Profile Restructure', description: 'Categories were broadened and Snow Removal Service became primary, backed by a 32 post seasonal calendar across all 13 towns.' },
      { title: 'Verification and Search Console', description: 'Every fix was checked again on the live site. Sitemaps are submitted in Search Console, which reports Breadcrumbs and Review snippets as valid with no errors.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      'Page titles restored sitewide after tracing the blank Site Title override',
      'LocalBusiness, Service, FAQPage and BreadcrumbList structured data on the live site',
      'One H1 on every sampled page, human written meta descriptions',
      'Self referencing canonical tags on every sampled page',
      'Sitemap index and page sitemaps submitted in Google Search Console, last read successfully on 3 October 2026',
      'Search Console reports Breadcrumbs and Review snippets valid with no errors',
      'llms.txt published for AI answer engines',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'The rebuild lowered average similarity across the 30 rewritten location pages to 17.5 percent, with only the two genuinely related namesake town pairs crossing the 50 percent review line, and the Google Business Profile now carries a 32 post seasonal calendar timed to the snow season.',
    businessImpact: [
      'Sitewide title tag bug traced to a single blank field and fixed',
      '30 location pages rewritten and measured at 17.5 percent average similarity',
      'Google Business Profile recategorized with Snow Removal Service as primary for the season',
      '32 post seasonal calendar scheduled across all 13 towns',
      'Every fix checked against the live rendered site, after catching an earlier pass where 19 pages reported as done had never saved',
    ],
    results: [
      { label: 'Location Pages Rebuilt', value: 30 },
      { label: 'Average Page Similarity After Rebuild', value: 17.5, suffix: '%' },
      { label: 'Google Business Posts Scheduled', value: 32 },
      { label: 'Towns Covered', value: 13 },
    ],
    dataNote,
    faqs: [
      {
        question: 'What was wrong with the 716 Lawn Care site before the SEO work?',
        answer:
          'A blank Site Title field in WordPress was overriding page titles on 24 pages, 29 pages had no H1, and the 30 location pages were near copies of each other with only the town name changed. The Google Business Profile also still carried a general lawn care category.',
      },
      {
        question: 'How did you make sure the 30 location pages were different enough?',
        answer:
          'We compared every pair of pages, 435 pairs in total, with a text similarity measurement. After the rewrite the average similarity was 17.5 percent, and only two namesake town pairs crossed the 50 percent line we use for manual review.',
      },
      {
        question: 'Why was snow plowing set as the primary Google Business Profile category?',
        answer:
          'Snow plowing is the most seasonal service the company sells. Making Snow Removal Service the primary category before winter, with a calendar of snow posts behind it, lines the profile up with the season when people search for that service.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'Not yet. We only publish measured results once a site has at least six months of Search Console history. This page describes the work and the facts we verified on the live site.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },

  // ---------------------------------------------------------------- RR Landscaping
  {
    slug: 'rr-landscaping',
    serviceSlug: 'seo',
    companyName: 'RR Landscaping & Tree Services',
    companyLogo: rrLandscapingLogo,
    projectName: 'RR Landscaping & Tree Services, SEO & Local Search Growth',
    shortDescription:
      'We corrected a mismatched phone number across Google, Yelp and Nextdoor, rebuilt structured data and gave all 40 pages unique SEO metadata for RR Landscaping & Tree Services in Syracuse.',
    category: 'Local SEO Foundation & Trust Signal Repair',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://rrlandscapingandtreeservices.com/',
    overview:
      'RR Landscaping & Tree Services has a strong reputation to build on: 5.0 stars across 21 Google reviews, real Yelp and Nextdoor listings, and 21 service lines across 11 towns in greater Syracuse. A mismatched phone number across its Google Business Profile, Yelp and Nextdoor, on a profile that had already been suspended once, undermined those local trust signals. We rebuilt the local SEO foundation from the ground up instead of adding content on top of signals that contradicted each other.',
    about: {
      business: 'Residential & Commercial Outdoor Services',
      industry: 'Landscaping & Tree Services',
      location: 'Syracuse, New York, USA',
    },
    goals: [
      'Resolve the phone number mismatch that put the Google Business Profile at risk',
      'Rebuild structured data so it describes the business accurately',
      'Match the service area and services list to what the business actually offers',
      'Give every page real, unique SEO metadata',
      'Set up a content and Google posting calendar the team can sustain',
    ],
    challenge:
      "The Google Business Profile had been suspended once, and its listed phone number did not match the number on the website, Yelp or Nextdoor, which is the kind of inconsistency that keeps a profile with that history at risk. None of the site's 40 pages carried a focus keyword or written meta description, the service area list covered only 6 of the 11 towns served, the services list covered only 6 of 18 real categories, and a stale sitemap cache had silently dropped pages without anyone noticing.",
    strategy:
      'We treated consistent trust signals as the prerequisite for everything else. We corrected the phone number and rebuilt structured data before investing in content, because content built on top of contradictory name, address and phone signals rarely holds.',
    solution:
      'We corrected the Google Business Profile phone number to match the site, Yelp and Nextdoor, rebuilt HomeAndConstructionBusiness and Organization schema alongside a hand built FAQPage schema, and expanded the service area from 6 to all 11 towns served and the services list from 6 to 18 real categories. On top of that foundation, all 40 pages received a real, unique focus keyword and SEO title. We then built and scheduled a forward content calendar: 35 new blog posts running through fall on tree service and storm damage topics, plus 53 matching Google Business posts scheduled with no date collisions against the 18 already live.',
    process: [
      { title: 'Name, Address and Phone Audit', description: 'We compared the phone number across the website, Google Business Profile, Yelp and Nextdoor and found the mismatch on a profile with a suspension history.' },
      { title: 'Profile Correction', description: 'The Google Business Profile phone number was corrected to match every other listing before anything else changed.' },
      { title: 'Structured Data Rebuild', description: 'HomeAndConstructionBusiness and Organization schema were rebuilt, with a hand written FAQPage schema for the visible questions.' },
      { title: 'Service Area and Services Sync', description: 'The service area grew from 6 to all 11 towns and the services list from 6 to 18 categories, so the profile describes the real business.' },
      { title: 'Page Metadata', description: 'All 40 pages received a unique focus keyword, SEO title and written meta description, up from none.' },
      { title: 'Content and Posting Calendar', description: '35 blog posts and 53 Google Business posts were scheduled with no date collisions against the 18 posts already live.' },
      { title: 'Sitemap Check', description: 'The stale sitemap cache that had dropped pages was identified, and the sitemap index is registered in Google Search Console.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      'One consistent phone number across the site, Google Business Profile, Yelp and Nextdoor',
      'HomeAndConstructionBusiness, Service, FAQPage and BreadcrumbList structured data on the live site',
      'Unique SEO titles and written meta descriptions on all 40 pages',
      'Self referencing canonical tags on every sampled page',
      'Sitemap index registered in Google Search Console',
      '58 URLs listed in the sitemaps, split across pages, posts and categories',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'The program replaces contradictory trust signals with a profile, schema layer and service area that match reality, backed by 40 pages of real SEO metadata and a content calendar of 35 blog posts and 53 Google posts.',
    businessImpact: [
      'Google Business Profile phone number corrected to match the site, Yelp and Nextdoor',
      'HomeAndConstructionBusiness, Organization and FAQPage schema rebuilt to describe the real business',
      'Service area expanded from 6 to 11 towns and services list from 6 to 18 categories',
      '40 of 40 pages now carry unique SEO metadata, up from none',
      '35 post blog calendar and 53 scheduled Google Business posts',
    ],
    results: [
      { label: 'Pages With Unique SEO Metadata', value: 40 },
      { label: 'Towns in Service Area', value: 11 },
      { label: 'Blog Posts Scheduled', value: 35 },
      { label: 'Google Business Posts Scheduled', value: 53 },
    ],
    dataNote,
    faqs: [
      {
        question: 'Why did you fix the phone number before writing any content?',
        answer:
          'A Google Business Profile that has been suspended once is sensitive to inconsistent business details. If the phone number on the profile does not match the website, Yelp and Nextdoor, new content builds on signals that contradict each other, so we corrected the number first.',
      },
      {
        question: 'What changed in the structured data for RR Landscaping?',
        answer:
          'We rebuilt HomeAndConstructionBusiness and Organization schema so it describes the real business, and added a hand written FAQPage schema that mirrors the visible questions on the page.',
      },
      {
        question: 'How many towns and services does the profile cover now?',
        answer:
          'The service area went from 6 to all 11 towns the company serves, and the services list went from 6 to 18 real categories.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'Not yet. We publish measured results once a site has at least six months of Search Console history. This page lists the work and the facts we verified.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },

  // ---------------------------------------------------------------- WNY Tree Specialists
  {
    slug: 'wny-tree-specialists',
    serviceSlug: 'seo',
    companyName: 'WNY Tree Specialists',
    companyLogo: wnyTreeLogo,
    projectName: 'WNY Tree Specialists, SEO & Local Search Growth',
    shortDescription:
      'We built a service and city page structure, FAQ markup and Search Console tracking for WNY Tree Specialists, a 24/7 emergency tree service working from Buffalo to Rochester.',
    category: 'Local SEO & Emergency Search Structure',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://wnytreespecialists.com/',
    overview:
      'WNY Tree Specialists is a Western New York tree company with 24/7 emergency response, working between Buffalo and Rochester. Tree searches fall into two groups, planned work such as trimming and removal, and urgent storm driven jobs, and a compact site has to serve both. We structured the site around that split: a dedicated page for each core service, separate Buffalo and Rochester city pages, an emergency service page and FAQ content marked up for search.',
    about: {
      business: 'Professional Tree Care & Emergency Services',
      industry: 'Tree Services & Arboriculture',
      location: 'Buffalo, New York, USA',
    },
    goals: [
      'Give each core tree service its own focused page',
      'Separate planned tree work from urgent storm response in the site structure',
      'Add dedicated pages for the Buffalo and Rochester markets',
      'Mark up common customer questions as FAQ structured data',
      'Set up Search Console so growth can be measured over time',
    ],
    challenge:
      'A small site has little room to waste. Tree removal, trimming, stump grinding, land clearing, storm damage cleanup and emergency response each need a page that stands on its own, and two city markets need pages of their own, without any of those pages repeating each other. The site also had to make 24/7 emergency availability visible, because that is the detail an urgent searcher is looking for.',
    strategy:
      'We kept the structure tight and specific: one page per service, one page per city and a gallery that shows finished work, linked together so every page supports the others. Emergency availability is stated on its own page and repeated where an urgent visitor will look for it.',
    solution:
      'The live site now has six service pages, tree removal, tree trimming and pruning, stump grinding, land clearing, storm damage cleanup and emergency tree service, plus city pages for Buffalo and Rochester, a work gallery and the legal pages, 19 URLs in all. Common customer questions are written into the pages and marked up as FAQPage structured data. The sitemap index was submitted to Google Search Console on 25 September 2026 and read successfully, so the site can now be measured page by page as data builds.',
    process: [
      { title: 'Service Mapping', description: 'We listed the services customers actually search for and gave tree removal, trimming and pruning, stump grinding, land clearing and storm cleanup a page each.' },
      { title: 'Emergency Page', description: 'A dedicated emergency tree service page states 24/7 availability for urgent, storm driven searches.' },
      { title: 'City Pages', description: 'Separate Buffalo and Rochester pages describe the work in each market in local terms.' },
      { title: 'FAQ Content and Markup', description: 'Real customer questions were answered on the page and marked up as FAQPage structured data.' },
      { title: 'Internal Linking', description: 'Service, city and gallery pages link to each other so each page supports the rest of the site.' },
      { title: 'Search Console Setup', description: 'The sitemap index was submitted on 25 September 2026 and read successfully, with 19 URLs discovered.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      'Six individual service pages, including a dedicated emergency tree service page',
      'Separate city pages for Buffalo and Rochester',
      'FAQPage structured data on pages with customer questions',
      'Unique page titles and self referencing canonical tags on every sampled page',
      'Sitemap index submitted to Google Search Console on 25 September 2026, 19 URLs discovered',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'The site now has a focused structure for planned and emergency tree work across two city markets, with tracking in place so progress can be measured.',
    businessImpact: [
      'Six individual service pages built, including emergency tree service',
      'Separate Buffalo and Rochester city pages',
      'Common questions answered on the page and marked up as FAQPage structured data',
      'Sitemap submitted and read successfully in Google Search Console',
    ],
    results: [
      { label: 'Service Pages', value: 6 },
      { label: 'City Pages', value: 2 },
      { label: 'URLs in Sitemap', value: 19 },
    ],
    dataNote,
    faqs: [
      {
        question: 'How is the WNY Tree Specialists site structured?',
        answer:
          'It has six service pages, separate Buffalo and Rochester city pages, a gallery and the legal pages, 19 URLs in total. Each service has its own page so each one can be found for what it is.',
      },
      {
        question: 'Why does the site have a separate emergency tree service page?',
        answer:
          'Emergency searches come from people who need help now. A dedicated page that states 24/7 availability gives those searches a direct answer, while routine services keep their own pages.',
      },
      {
        question: 'What structured data does the site use?',
        answer:
          'Customer questions on the pages are marked up as FAQPage structured data, so search engines can read them as questions and answers.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'Not yet. The sitemap went into Search Console on 25 September 2026, which is too recent for any trend. We publish results after six months of data.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },

  // ---------------------------------------------------------------- Buffalo Tree Specialists
  {
    slug: 'buffalo-tree-specialists',
    serviceSlug: 'seo',
    companyName: 'Buffalo Tree Specialists',
    companyLogo: buffaloTreeLogo,
    projectName: 'Buffalo Tree Specialists, SEO & Local Search Growth',
    shortDescription:
      'We built 29 town and service pages, 7 service pages and Search Console tracking around the crane ownership and no subcontractor story of Buffalo Tree Specialists.',
    category: 'Local SEO & Service Area Structure',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://buffalotreespecialists.com/',
    overview:
      'Buffalo Tree Specialists owns its crane, handles its own permits and does not use subcontractors, with ISA certified arborists and OSHA compliance behind the work. Many Buffalo tree companies make the same licensed and insured claim, so we built the site to put those specifics in front of a homeowner early. The structure pairs 7 service pages with 29 town and service pages across Western New York, so each combination of service and place has a page of its own.',
    about: {
      business: 'Emergency Ready Tree Removal & Care',
      industry: 'Tree Services, Tree Removal & Arboriculture',
      location: 'Buffalo, New York, USA',
    },
    goals: [
      'Make crane ownership and the no subcontractor model visible on the site',
      'Give each core service its own page',
      'Add a page for each town and service combination across the service area',
      'Use certifications as concrete trust signals',
      'Set up Search Console tracking for the whole structure',
    ],
    challenge:
      'In a crowded local market most tree companies say the same things. The things that set Buffalo Tree Specialists apart, owning its own crane equipment, pulling its own permits and running no subcontractors, needed to appear in the page content and the Google Business Profile, not sit in a single paragraph. A homeowner comparing options after a storm should see that difference before clicking through.',
    strategy:
      'We built the page structure around service plus place, so a search for a specific service in a specific town lands on a page written for it, and we put the company specifics, the crane, the permits and the ISA and OSHA credentials, into those pages and the profile.',
    solution:
      'The live site has 7 service pages and 29 service location pages for towns across Western New York, alongside the core pages. Crane ownership, permit handling and the no subcontractor model are stated in the content, supported by the ISA certified arborist and OSHA credentials. A sitemap index covering 74 URLs was submitted to Google Search Console on 1 October 2026 and read successfully, replacing an older sitemap that had listed 103 URLs.',
    process: [
      { title: 'Differentiator Review', description: 'We listed what is genuinely different about the company, crane ownership, permit handling and no subcontractors, and checked each against what the site already said.' },
      { title: 'Service Pages', description: 'Seven service pages give each core tree service its own page.' },
      { title: 'Town and Service Pages', description: 'Twenty nine service location pages pair a service with a town across Western New York.' },
      { title: 'Credentials as Trust Signals', description: 'ISA certified arborists and OSHA compliance are stated in page content and in Google Business Profile copy.' },
      { title: 'Google Business Profile Work', description: 'Profile copy and services were aligned with the same company specifics used on the site.' },
      { title: 'Sitemap Clean Up and Submission', description: 'A new sitemap index covering 74 URLs was submitted on 1 October 2026 and read successfully, replacing the older sitemap.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      'Seven service pages and 29 town and service pages',
      'Crane ownership, permit handling and the no subcontractor model stated in page content',
      'ISA certified arborist and OSHA credentials used as trust signals',
      'Sitemap index submitted to Google Search Console on 1 October 2026, 74 URLs discovered',
      'Self referencing canonical tags on every sampled page',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'The site now has a page for each service and for each service and town combination, with the specific company differences written into the content.',
    businessImpact: [
      'Seven service pages and 29 town and service pages built',
      'Crane ownership and the no subcontractor model written into page content',
      'ISA and OSHA credentials used as concrete trust signals',
      'New sitemap index submitted and read successfully in Google Search Console',
    ],
    results: [
      { label: 'Service Pages', value: 7 },
      { label: 'Town and Service Pages', value: 29 },
      { label: 'URLs in Sitemap Index', value: 74 },
    ],
    dataNote,
    faqs: [
      {
        question: 'What makes Buffalo Tree Specialists different from other Buffalo tree companies?',
        answer:
          'The company owns its own crane equipment, handles its own permits and does not use subcontractors. The site and the Google Business Profile state this in specific terms instead of using the generic licensed and insured wording most competitors use.',
      },
      {
        question: 'How are the town pages organized?',
        answer:
          'There are 29 pages that pair a service with a town across Western New York, so a search for a particular service in a particular town lands on a page written for that combination.',
      },
      {
        question: 'Which credentials does the site mention?',
        answer:
          'ISA certified arborists and OSHA compliance, because they are specific, checkable and relevant to a homeowner choosing who works near their house.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'Not yet. The new sitemap was submitted on 1 October 2026. We publish results after six months of Search Console data.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },

  // ---------------------------------------------------------------- Meta Tree Services NY
  {
    slug: 'meta-tree-services-ny',
    serviceSlug: 'seo',
    companyName: 'Meta Tree Services NY',
    companyLogo: metaTreeLogo,
    projectName: 'Meta Tree Services NY, SEO & Local Search Growth',
    shortDescription:
      'We built a region by region structure of 63 town pages, service pages and 21 project pages for Meta Tree Services NY, covering Buffalo to the Finger Lakes.',
    category: 'Scalable Local SEO Architecture',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://metatreeservicesny.com/',
    overview:
      'Meta Tree Services NY works across more than 60 towns grouped into five regions, from Buffalo and Erie County through Niagara County, the Northtowns and Rochester to the Finger Lakes, and has served more than a thousand properties. A single statewide page would be too vague for any one market, and a hand built page for every town would be impossible to keep up. We built a repeatable structure instead: a page for each town, a page for each core service and a set of project pages that show real jobs.',
    about: {
      business: 'Comprehensive Tree Care & Preventative Maintenance',
      industry: 'Tree Services & Arboriculture',
      location: 'New York, USA',
    },
    goals: [
      'Build a local structure that can grow as the business adds towns',
      'Give each of the five regions its own content',
      'Show real work with project pages',
      'Keep every page easy to crawl and clearly linked',
      'Track the whole site in Google Search Console',
    ],
    challenge:
      'Covering five regions and more than 60 towns is a different problem from covering one city. A statewide campaign dilutes relevance in every market, while a hand written page for every town cannot be maintained. The site needed a structure that gave each region and town real, distinct content and could still be extended without rebuilding it.',
    strategy:
      'We followed the five region breakdown the company already uses internally. Each region and town gets its own content, and the same template of sections, services, local detail and linked projects, makes the structure repeatable when a new town is added.',
    solution:
      'The live site has 63 town pages, six core service pages covering tree removal, trimming and pruning, stump grinding, lot and land clearing, tree planting and transplanting and emergency storm damage, and 21 project pages that document real jobs, 114 URLs in total. Search Console reads the page and post sitemaps successfully and validates Breadcrumbs structured data on 64 pages with no errors. A refreshed sitemap index was submitted on 4 September 2026.',
    process: [
      { title: 'Region Mapping', description: 'We adopted the five regions the company already works in, Buffalo and Erie County, Niagara County, the Northtowns, Rochester and the Finger Lakes.' },
      { title: 'Town Page Template', description: 'A repeatable template of sections gives each of the 63 towns distinct local content without a page by page rebuild.' },
      { title: 'Service Pages', description: 'Six service pages cover removal, trimming, stump grinding, land clearing, planting and emergency storm damage.' },
      { title: 'Project Pages', description: 'Twenty one project pages show real jobs and link back to the matching services and towns.' },
      { title: 'Structured Data', description: 'Breadcrumb markup runs across the site and FAQ markup is used where a page answers customer questions.' },
      { title: 'Search Console Setup', description: 'Page and post sitemaps are read successfully and a refreshed sitemap index was submitted on 4 September 2026.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      '63 town pages, 6 service pages and 21 project pages in a 114 URL sitemap',
      'Five region structure matching how the company actually works',
      'Breadcrumb structured data on 64 pages, reported valid with no errors in Google Search Console',
      'Unique page titles, one H1 and a self referencing canonical on every sampled page',
      'Sitemap index submitted to Google Search Console on 4 September 2026',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'The structure gives each region, town and service its own page and gives the company a repeatable way to add new towns without rebuilding the site.',
    businessImpact: [
      '63 town pages built on one repeatable template',
      'Six service pages and 21 project pages that document real jobs',
      'Breadcrumb structured data valid on 64 pages in Google Search Console',
      'Five region structure that matches the way the company works',
    ],
    results: [
      { label: 'Town Pages', value: 63 },
      { label: 'Project Pages', value: 21 },
      { label: 'URLs in Sitemap', value: 114 },
      { label: 'Regions Covered', value: 5 },
    ],
    dataNote,
    faqs: [
      {
        question: 'How does the Meta Tree Services NY site handle more than 60 towns?',
        answer:
          'It uses one repeatable template for town pages, so each of the 63 towns has distinct local content and a new town can be added without redesigning anything.',
      },
      {
        question: 'Which regions does the site cover?',
        answer:
          'Five regions: Buffalo and Erie County, Niagara County, the Northtowns, Rochester and the Finger Lakes.',
      },
      {
        question: 'What are the project pages for?',
        answer:
          'There are 21 project pages that document real jobs. They give visitors proof of the work and link back to the matching services and towns.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'Not yet. We publish measured results once a site has at least six months of Search Console history.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },

  // ---------------------------------------------------------------- Meta Services NY
  {
    slug: 'meta-services-ny',
    serviceSlug: 'seo',
    companyName: 'Meta Services NY',
    companyLogo: metaServicesLogo,
    projectName: 'Meta Services NY, SEO & Local Search Growth',
    shortDescription:
      'We built a hub and spoke structure of 37 service pages, 11 snow plowing town pages and service area pages for Meta Services NY, with FAQ and breadcrumb markup.',
    category: 'Multi Service Local SEO Architecture',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://metaservicesny.com/',
    overview:
      'Meta Services NY grew from a lawn care company into a full outdoor property business over twenty years. It now offers close to two dozen services across five groups, Lawn Care, Landscaping, Tree Services, Outdoor Living and Exterior and Seasonal work, sold under one crew and one phone number. The job was to give every service its own page without those pages competing against each other, while keeping the bundled one crew story intact.',
    about: {
      business: 'Multi Service Property Improvement Company',
      industry: 'Property Services, Home Improvement & Construction',
      location: 'New York, USA',
    },
    goals: [
      'Give each service its own focused page',
      'Prevent service pages from competing with each other for the same searches',
      'Keep the one crew, one number story visible across the site',
      'Add seasonal pages for snow plowing by town',
      'Track the full site in Google Search Console',
    ],
    challenge:
      'With close to two dozen services in five groups, the main risk is cannibalization, where several pages target the same search and none of them does it well. The site also had to keep the real selling point, one crew and one number for everything a property needs outdoors, so it does not read as unrelated services grouped together only for search.',
    strategy:
      'We used a hub and spoke structure that mirrors the company five service groups. Each group has a hub, each service has its own spoke page, and region specific details such as clay soil and freeze thaw cycles keep the local content specific.',
    solution:
      'The live site has 37 service URLs organized under the five groups, 6 service area pages, 11 snow plowing pages for individual towns and a blog, 138 URLs in all. Each service page is linked to its group hub and to the same service area pages. Search Console reads the sitemap successfully and validates Breadcrumbs on 109 pages with no errors, and the sitemap was submitted on 29 September 2026.',
    process: [
      { title: 'Service Grouping', description: 'We organized the services into the five groups the company already uses and mapped each service to one page and one main search.' },
      { title: 'Cannibalization Check', description: 'We checked that no two pages targeted the same main phrase before writing, and linked related services instead of repeating them.' },
      { title: 'Hub and Spoke Pages', description: 'A hub page for each group links to its service pages, which link back and across to related services.' },
      { title: 'Snow Plowing Town Pages', description: 'Eleven town pages give the seasonal plowing service its own local entry points.' },
      { title: 'Structured Data', description: 'Breadcrumb, FAQ and LocalBusiness markup run across the site.' },
      { title: 'Search Console Setup', description: 'The sitemap was submitted on 29 September 2026 and read successfully, with 138 URLs discovered.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      '37 service URLs organized under five service groups',
      'Eleven snow plowing pages for individual towns and six service area pages',
      'Breadcrumb structured data on 109 pages, reported valid with no errors in Google Search Console',
      'FAQPage and LocalBusiness structured data on the live site',
      'Sitemap submitted to Google Search Console on 29 September 2026, 138 URLs discovered',
      'Unique titles, one H1 and a self referencing canonical on every sampled page',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'Every service now has its own page inside a clear group structure, with the one crew bundled story and local seasonal detail kept visible.',
    businessImpact: [
      '37 service URLs organized under five groups with hub and spoke links',
      'Eleven snow plowing town pages for the seasonal service',
      'Breadcrumb structured data valid on 109 pages in Google Search Console',
      'Region specific details, clay soil and freeze thaw cycles, used in local content',
    ],
    results: [
      { label: 'Service URLs', value: 37 },
      { label: 'Snow Plowing Town Pages', value: 11 },
      { label: 'URLs in Sitemap', value: 138 },
    ],
    dataNote,
    faqs: [
      {
        question: 'How do you stop a site with many services from competing with itself?',
        answer:
          'Each service gets one page and one main search, grouped under a hub page. Related services link to each other instead of repeating the same content, so two pages do not target the same phrase.',
      },
      {
        question: 'What are the five service groups on the Meta Services NY site?',
        answer:
          'Lawn Care, Landscaping, Tree Services, Outdoor Living and Exterior and Seasonal work.',
      },
      {
        question: 'Why does the site have separate snow plowing pages for towns?',
        answer:
          'Snow plowing is a seasonal service that people search for by town. Eleven town pages give it local entry points without mixing it into the year round service pages.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'Not yet. The sitemap was submitted on 29 September 2026, which is too recent for any trend. We publish results after six months of data.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },

  // ---------------------------------------------------------------- Ashton Services NY
  {
    slug: 'ashton-services-ny',
    serviceSlug: 'seo',
    companyName: 'Ashton Services NY',
    companyLogo: ashtonServicesLogo,
    projectName: 'Ashton Services NY, SEO & Local Search Growth',
    shortDescription:
      'We unified two conflicting business addresses, closed a contact form that was forwarding leads to a stranger, consolidated five competing pages and added security headers for Ashton Services NY.',
    category: 'Technical SEO, Security & Trust Signal Remediation',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://www.ashtonservicesny.com/',
    overview:
      "Ashton Services NY runs on a hand coded PHP site rather than a template platform, so years of small edits had left structural cracks no plugin update would ever catch. The client's own SEO team already had a content strategy, so Calibre Associates took on everything underneath it: two conflicting business addresses, dead links inside the services menu, five pages competing for the same search terms, and a contact form quietly forwarding real customer inquiries to a stranger's inbox.",
    about: {
      business: 'Landscaping, Lawn Care, Tree Services & Snow Removal',
      industry: 'Landscaping & Property Services',
      location: 'North Tonawanda / Buffalo, New York, USA',
    },
    goals: [
      'Resolve the two address mismatch in the local signals',
      'Consolidate pages that split the same keyword without losing any content',
      'Close the security gaps the site had accumulated over the years',
      "Fix the broken menu and homepage issues that held back the client SEO team's strategy",
      'Verify every fix against the live site, not the code we shipped',
    ],
    challenge:
      "The homepage schema and footer listed a Buffalo address while the header contact bar listed a different one in North Tonawanda, a mismatch that confuses customers and local search signals alike. The services menu had dead parent links behind working dropdowns, and five separate pages for wood decks, composite decks, wood fences, vinyl fences and chain link fences split the keyword focus the SEO team was trying to consolidate. Two leftover, unauthenticated form scripts from the original site template were still live, and one was silently forwarding real customer inquiries to an old vendor's inbox. The site also set no security headers and told every visitor its exact, end of life PHP version.",
    strategy:
      "We ran four workstreams underneath the client's own SEO content strategy instead of replacing it: fix the local SEO foundation and structured data, merge fragmented pages instead of duplicating them, close the technical and security gaps nobody sees until they cause damage, and rebuild the parts of the design that read as templated.",
    solution:
      "The business address was unified to a single source of truth across the footer, contact page and every page's LocalBusiness schema, checked against the client's real Google Business Profile pin before anything changed. Five fragmented deck and fence pages were merged into two comprehensive ones with clean redirects from every retired URL, and more than 10 core service pages were aligned to the SEO team's keyword and content brief. A duplicate Tree Removal menu entry was removed, and a full sitewide audit caught a second duplicate in the footer before it became a second complaint. On the technical side we added security headers, stopped the server from disclosing its PHP version, closed the two unauthenticated form scripts, fixed a charset bug that garbled apostrophes and published an llms.txt file for AI answer engines. The homepage hero was rebuilt around one clear message in place of a generic stock carousel, the service card grid problem was fixed at its root cause, a duplicated image file with no size constraint, and a mega menu flyout clipping bug was repaired.",
    process: [
      { title: 'Address Audit', description: 'We compared the address in the header, footer, contact page and schema with the real Google Business Profile pin and found two conflicting addresses.' },
      { title: 'Single Source of Truth', description: 'One verified address now feeds the footer, contact page and every page of LocalBusiness schema.' },
      { title: 'Page Consolidation', description: 'Five fragmented deck and fence pages were merged into two, with a 301 redirect from every retired URL and no content lost.' },
      { title: 'Security Review', description: 'We found two unauthenticated legacy form scripts, one forwarding leads to an old vendor, plus missing headers and PHP version disclosure, and fixed all of it.' },
      { title: 'Menu and Homepage Fixes', description: 'Dead parent links, a duplicate Tree Removal entry and a clipping mega menu flyout were repaired, and the hero was rebuilt around one message.' },
      { title: 'Live Verification', description: 'On 6 September 2026 every fix was checked again on the production site, including headers, redirects and the sitemap.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      'One verified business address across footer, contact page and LocalBusiness schema',
      'Strict Transport Security, nosniff, frame, referrer and permissions headers live on the production site',
      'Server no longer discloses its PHP version',
      'Retired URLs 301 redirect to their replacements with no dead ends',
      'Clean 73 URL sitemap, self referencing canonical tags and one H1 on every sampled page',
      'llms.txt published for AI answer engines',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'Every fix was checked again on the live production site on 6 September 2026, covering the security headers, the retired URL redirects, the menu cleanup, the 73 page sitemap and the closed scripts. Search Console data for this site belongs to the client SEO team, so this page covers only what is confirmed and reproducible on our side of the work.',
    businessImpact: [
      'Two conflicting business addresses unified into one verified source across the site and schema',
      "A contact form forwarding real leads to a stranger's inbox found and closed",
      'Five fragmented deck and fence pages consolidated into two with clean redirects',
      'All five recommended security headers live and PHP version disclosure stopped',
      "No open issues at handoff, every item the client's SEO team flagged fixed and rechecked",
    ],
    results: [
      { label: 'Security Headers Live', value: 5, suffix: '/5' },
      { label: 'Pages in Clean Sitemap', value: 73 },
      { label: 'Vulnerable Scripts Closed', value: 3 },
      { label: 'Open Issues at Handoff', value: 0 },
    ],
    dataNote:
      'Search performance data for this site is held by the client SEO team in their own Search Console, so no rankings or traffic are shown here. This page covers the technical, security and structure work we completed and verified.',
    faqs: [
      {
        question: 'What was the most serious problem found on the Ashton Services NY site?',
        answer:
          "A leftover contact form script from the original template was forwarding real customer inquiries to an old vendor's inbox instead of Ashton's. It was closed along with a second unauthenticated script.",
      },
      {
        question: 'Why were five deck and fence pages merged into two?',
        answer:
          'Pages for wood decks, composite decks, wood fences, vinyl fences and chain link fences were splitting the same keyword focus. Merging them into two comprehensive pages keeps all the content, and a 301 redirect from every retired URL sends visitors and search engines to the right place.',
      },
      {
        question: 'Which security headers does the site use now?',
        answer:
          'Strict Transport Security, X Content Type Options, X Frame Options, Referrer Policy and Permissions Policy are all live on the production site.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'No. Search performance for this site is tracked by the client SEO team, so this page only covers the work we completed and verified.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },

  // ---------------------------------------------------------------- A-One Tree Services
  {
    slug: 'a-one-tree-services',
    serviceSlug: 'seo',
    companyName: 'A-One Tree Services',
    companyLogo: aOneTreeLogo,
    projectName: 'A-One Tree Services Rochester NY, SEO & Local Search Growth',
    shortDescription:
      'We organized the A-One Tree Services site around six Rochester area communities, with service pages, service area content and structured data for a Monroe County tree company.',
    category: 'Local SEO Across a Multi Community Service Area',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://aonetreeservicerochesterny.com/',
    overview:
      'A-One Tree Services has worked in Rochester and the surrounding Monroe County communities since 2008, offering tree removal, trimming, stump grinding, land clearing, storm damage cleanup and 24/7 emergency response. The company stands behind a zero property damage guarantee, follows ANSI A300 pruning standards and owns a spider lift for jobs with tight access. We organized the site around the six community clusters the company already uses: Rochester, Brighton and Pittsford, Greece and Irondequoit, Webster and Penfield, Henrietta and Chili, and Fairport and Perinton.',
    about: {
      business: 'Professional Tree Removal, Trimming & Emergency Services',
      industry: 'Tree Services & Arboriculture',
      location: 'Rochester, New York, USA',
    },
    goals: [
      'Organize the site around the six community clusters the company already uses',
      'Give each core service its own page',
      'Show the guarantee, the standards and the specialist equipment in page content',
      'Mark up the business, services and common questions as structured data',
      'Support the Google Business Profile with the same specifics',
    ],
    challenge:
      'A-One Tree Services already had real, specific strengths: a zero property damage guarantee, ANSI A300 standards and a spider lift for properties with narrow gate access. None of that came through clearly for the six different Rochester area communities the company serves, which are far enough apart to search for tree work in different ways.',
    strategy:
      "We built the structure around the company's own six clusters instead of a flat list of towns, and wrote the real world specifics, the guarantee, the standards and the equipment, into the service and area content so they appear where someone is comparing options.",
    solution:
      'The live site has dedicated pages for tree removal, tree trimming, stump grinding and land clearing, a service area page that names all six clusters, a work gallery and a blog, 92 URLs in all. Structured data covers the local business, the services and their offers, FAQ content, reviews and breadcrumbs. We aligned the Google Business Profile with the same guarantee, standards and spider lift detail, and built local citations so the business information matches in more places.',
    process: [
      { title: 'Cluster Mapping', description: 'We used the six community clusters the company already works in, Rochester, Brighton and Pittsford, Greece and Irondequoit, Webster and Penfield, Henrietta and Chili, and Fairport and Perinton.' },
      { title: 'Service Pages', description: 'Tree removal, tree trimming, stump grinding and land clearing each have a page of their own.' },
      { title: 'Service Area Content', description: 'A service area page names every cluster and the communities in it in plain local terms.' },
      { title: 'Specifics in the Copy', description: 'The zero property damage guarantee, ANSI A300 standards and spider lift are written into the pages where visitors compare options.' },
      { title: 'Structured Data', description: 'LocalBusiness, Service, OfferCatalog, FAQPage, Review and BreadcrumbList markup describe the business and its pages.' },
      { title: 'Profile and Citations', description: 'The Google Business Profile was aligned with the same details and citations were built to keep business information consistent.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      'Dedicated pages for tree removal, trimming, stump grinding and land clearing',
      'Service area page covering all six community clusters',
      'LocalBusiness, Service, OfferCatalog, FAQPage, Review and BreadcrumbList structured data on the live site',
      'Self referencing canonical tags and one H1 on every sampled page',
      'Every image on the home page carries descriptive alt text',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'The site is organized around the six clusters the company already works in, with the guarantee, the standards and the equipment visible in the content.',
    businessImpact: [
      'Six community clusters given distinct local content',
      'Zero property damage guarantee, ANSI A300 standards and spider lift written into page content',
      'Structured data covering the business, services, offers, FAQs and breadcrumbs',
      'Google Business Profile aligned with the same details, with local citations built',
    ],
    results: [
      { label: 'Community Clusters', value: 6 },
      { label: 'Service Pages', value: 4 },
      { label: 'URLs in Sitemap', value: 92 },
    ],
    dataNote:
      'We do not have Search Console access for this site, so no search performance data is shown. This page lists the structure and markup we built and verified on the live site.',
    faqs: [
      {
        question: 'How is the A-One Tree Services site organized?',
        answer:
          'Around the six community clusters the company already works in: Rochester, Brighton and Pittsford, Greece and Irondequoit, Webster and Penfield, Henrietta and Chili, and Fairport and Perinton. Each core service has its own page as well.',
      },
      {
        question: 'Which company details did you build into the content?',
        answer:
          'The zero property damage guarantee, ANSI A300 pruning standards and the spider lift used for jobs with tight access, because those are specific things a homeowner comparing tree companies can check.',
      },
      {
        question: 'What structured data does the site use?',
        answer:
          'LocalBusiness, Service, OfferCatalog, FAQPage, Review and BreadcrumbList markup on the live site.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'No. We do not have Search Console access for this site, and we only publish measured results once there are at least six months of data.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },

  // ---------------------------------------------------------------- TreeCraft Tree Service
  {
    slug: 'tree-craft-tree-services',
    serviceSlug: 'seo',
    companyName: 'TreeCraft Tree Service',
    companyLogo: treeCraftLogo,
    projectName: 'TreeCraft Tree Service, SEO & Local Search Growth',
    shortDescription:
      'We built SEO into the TreeCraft site architecture: 62 towns, 5 services and 310 distinct town and service pages across Buffalo, Rochester and Batavia, plus a dynamic llms.txt.',
    category: 'Programmatic Local SEO Across Three Metro Areas',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://treecraftservices.com/',
    overview:
      'TreeCraft Tree Service works Buffalo, Rochester and Batavia as one crew with one phone line, covering tree removal, trimming, stump grinding, storm response and land clearing. We built the SEO program into the site architecture instead of adding it afterward, so all 62 towns across the three metros have their own page, and every service has its own page in every town, 310 combination pages in all.',
    about: {
      business: 'Tree Removal, Trimming, Storm Response & Land Clearing',
      industry: 'Tree Services & Arboriculture',
      location: 'Buffalo, Rochester & Batavia, New York',
    },
    goals: [
      'Give every town and service combination its own page across three metro areas',
      'Avoid duplicate content when covering 62 towns at once',
      'Make the site readable by AI answer engines as well as search engines',
      'Keep structured data and metadata accurate without page by page upkeep',
      'Catch technical SEO defects before they reach a live visitor',
    ],
    challenge:
      'Three metro areas, 62 towns and 5 services add up to 310 combinations. A lazy build would have produced near identical pages and real duplicate content risk. Each combination needed its own honest local relevance, not a template with the town name swapped in.',
    strategy:
      'We built the SEO into the page architecture: a keyword hierarchy that carries correctly into every generated page, and a schema graph written for tree service page types in place of a generic plugin default.',
    solution:
      "Technical SEO sits in the page template itself: a title pattern combining the primary keyword, the town and the brand on every combination page, templated meta descriptions with real town placeholders, keyword driven image alt text across the site and a full internal linking mesh that connects every service, town and combination page in both directions. A dynamic llms.txt route keeps AI answer engines current with the live service and town list automatically. A five part audit covering technical SEO, content quality, structured data, answer engine readiness and sitemap integrity caught two critical bugs, including two of the site's own pages competing for the same search term, before either reached a live visitor.",
    process: [
      { title: 'Architecture Plan', description: 'We planned 62 towns across three metros and 5 services as a hierarchy, so every generated page inherits the right keyword and structure.' },
      { title: 'Title and Description Templates', description: 'Every combination page gets a title built from the primary keyword, town and brand, and a meta description with real town placeholders.' },
      { title: 'Internal Linking Mesh', description: 'Service, town and combination pages link to each other in both directions.' },
      { title: 'Structured Data Graph', description: 'A schema graph written for tree service pages covers TreeService, Service, OfferCatalog, FAQPage, BreadcrumbList and Speakable markup.' },
      { title: 'AI Readiness', description: 'A dynamic llms.txt route keeps AI answer engines current with the live service and town list.' },
      { title: 'Five Part Audit', description: 'A technical, content, structured data, answer engine and sitemap audit caught two critical and two medium defects before handover.' },
      { title: 'Search Console Setup', description: 'The sitemap index was submitted on 14 September 2026 and read successfully, with 393 URLs discovered.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      '62 town pages, 5 service pages and 310 town and service pages in a 393 URL sitemap',
      'Title and meta description templates with real town placeholders on every combination page',
      'TreeService, Service, OfferCatalog, FAQPage, BreadcrumbList and Speakable structured data on the live site',
      'Breadcrumb structured data reported valid in Google Search Console',
      'Dynamic llms.txt for AI answer engines',
      'Sitemap index submitted to Google Search Console on 14 September 2026',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'TreeCraft now has a separate, indexable page for every town and service across three metro areas, built so the structure holds up under review instead of repeating itself.',
    businessImpact: [
      '62 town pages and 310 town and service pages built into the site architecture',
      'Duplicate content risk handled at the architecture level, not patched after launch',
      'Dynamic llms.txt that tracks the live service and town list',
      'Structured data graph written for tree service page types',
      'Two critical and two medium technical defects caught and fixed before handover',
    ],
    results: [
      { label: 'Towns Covered', value: 62 },
      { label: 'Town and Service Pages', value: 310 },
      { label: 'URLs in Sitemap', value: 393 },
      { label: 'Metro Areas', value: 3 },
    ],
    dataNote,
    faqs: [
      {
        question: 'How do you avoid duplicate content across 310 town and service pages?',
        answer:
          'The site is built so each combination page carries real, town specific detail and a title and description generated from the keyword, the town and the brand. A five part audit also checked that no two pages competed for the same search term.',
      },
      {
        question: 'What is the llms.txt file on the TreeCraft site?',
        answer:
          'It is a plain text file for AI answer engines that lists the live services and towns. It is generated by a dynamic route, so it stays current without anyone editing it.',
      },
      {
        question: 'What did the audit find before handover?',
        answer:
          'Two critical and two medium technical defects, including two of the site own pages competing for the same search term. All were fixed before a live visitor could be affected.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'Not yet. The sitemap went into Search Console on 14 September 2026. We publish results after six months of data.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },

  // ---------------------------------------------------------------- KP Landscaping
  {
    slug: 'kp-landscaping',
    serviceSlug: 'seo',
    companyName: 'KP Landscaping',
    companyLogo: kpLandscapingLogo,
    projectName: 'KP Landscaping, SEO & Google Business Profile Growth',
    shortDescription:
      'We optimized the KP Landscaping Google Business Profile across 7 categories and 30 plus services and scheduled a 10 week, human written post calendar to match its 1,600 page site.',
    category: 'Google Business Profile & Local Search Campaign',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://kplandscaping.us/',
    overview:
      'The KP Landscaping site already has a real local SEO architecture across Buffalo, Rochester and Batavia, with 1,632 URLs. Calibre Associates built the other half of local visibility on top of it: a full Google Business Profile optimization and an active, hand written posting calendar designed to look nothing like the auto generated posts Google trains its systems to discount.',
    about: {
      business: 'Landscaping, Hardscaping & Tree Care Contractor',
      industry: 'Landscaping, Hardscaping & Outdoor Living',
      location: 'Buffalo, Rochester & Batavia, New York',
    },
    goals: [
      'Bring the Google Business Profile up to the standard of the rebuilt site',
      'Rebalance the service area list around towns the business actually serves',
      'Run a consistent posting calendar that reads as genuinely written',
      'Match content themes to what drives calls in each metro',
      'Support the site schema and sitemap work with clean canonical structure',
    ],
    challenge:
      "A rebuilt site with a real local SEO architecture covers only half of local visibility. The KP Landscaping Google Business Profile carried a service area list with duplicate and out of area towns and no consistent posting activity, which left the second half of local search underused.",
    strategy:
      "We treated the Google Business Profile as a primary channel, not an afterthought. We rebalanced the service area list against the site's own verified local data and built a posting calendar with themes matched to seasonal demand in each metro.",
    solution:
      "A full profile optimization across 7 business categories, one primary and six secondary, with more than 30 services each carrying its own written description. The service area list went from a duplicated 20 town list to 11 verified Rochester area towns and 9 verified Buffalo area towns, pulled directly from the site's own local data set. On top of that sits a 10 week posting calendar, three posts a week on Tuesday, Thursday and Saturday, each written in a human voice with a working Call Now button. The posts are split across four themes matched to what drives calls in each metro: landscaping and hardscaping in Rochester and Buffalo, snow plowing in Buffalo, tree removal in both metros around fall storm season, and the 24/7 emergency tree line kept visible ahead of storm season.",
    process: [
      { title: 'Profile Audit', description: 'We reviewed categories, services, service area and posting history against what the business actually does.' },
      { title: 'Categories and Services', description: 'Seven categories, one primary and six secondary, and more than 30 services with written descriptions were set up.' },
      { title: 'Service Area Rebalance', description: 'A duplicated 20 town list became 11 verified Rochester area towns and 9 verified Buffalo area towns, matched to the site local data.' },
      { title: 'Post Themes', description: 'Four themes were matched to demand in each metro: landscaping and hardscaping, snow plowing, fall tree removal and the emergency tree line.' },
      { title: 'Ten Week Calendar', description: 'Three hand written posts a week, on Tuesday, Thursday and Saturday, each with a working Call Now button.' },
      { title: 'Site Support', description: 'The segmented sitemap, canonical tags and llms.txt on the site support the same local structure.' },
      { title: 'Search Console Setup', description: 'The sitemap index was submitted on 2 October 2026 and read successfully, with 1,632 URLs discovered.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      'Segmented sitemaps for core pages, services, locations, local services and posts, 1,632 URLs in total',
      'LocalBusiness, OfferCatalog, Service, FAQPage and BreadcrumbList structured data on the live site',
      'Breadcrumb structured data on 50 pages reported valid in Google Search Console',
      'Self referencing canonical tags and one H1 on every sampled page',
      'llms.txt published for AI answer engines',
      'Sitemap index submitted to Google Search Console on 2 October 2026',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'The profile campaign gives the rebuilt site a matching local presence: an accurate service area, a complete category and service breakdown and a genuinely human posting calendar.',
    businessImpact: [
      'Google Business Profile optimized across 7 categories and 30 plus individually described services',
      'Service area rebuilt from a duplicated 20 town list into 11 Rochester area and 9 Buffalo area towns',
      '10 week calendar of 3 human written posts a week across 4 seasonal themes',
      'Every post built around a working Call Now button tied to the real business number',
      'Segmented sitemap, canonical integrity and llms.txt on the site supporting the same campaign',
    ],
    results: [
      { label: 'Business Categories', value: 7 },
      { label: 'Services Described', value: 30, suffix: '+' },
      { label: 'Weeks of Posts Planned', value: 10 },
      { label: 'URLs in Sitemap', value: 1632 },
    ],
    dataNote,
    faqs: [
      {
        question: 'What was changed on the KP Landscaping Google Business Profile?',
        answer:
          'We set up 7 categories, one primary and six secondary, wrote a description for each of more than 30 services, and rebalanced the service area from a duplicated 20 town list to 11 Rochester area towns and 9 Buffalo area towns.',
      },
      {
        question: 'How are the Google Business posts written?',
        answer:
          'By hand, in a human voice, three times a week on Tuesday, Thursday and Saturday for 10 weeks. Each post has a working Call Now button and belongs to one of four themes matched to what drives calls in each metro.',
      },
      {
        question: 'How big is the KP Landscaping site?',
        answer:
          'The sitemaps list 1,632 URLs, split across core pages, services, locations, local service pages and posts.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'Not yet. The sitemap was submitted on 2 October 2026, which is too recent for any trend. We publish results after six months of data.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },

  // ---------------------------------------------------------------- Buffalo Deck Builders
  {
    slug: 'buffalo-deck-builders',
    serviceSlug: 'seo',
    companyName: 'Buffalo Deck Builders',
    companyLogo: buffaloDeckLogo,
    projectName: 'Buffalo Deck Builders, SEO & Local Search Growth',
    shortDescription:
      'We built search infrastructure into 772 Buffalo Deck Builders pages across 29 towns, and caught a plugin defect that had silently left meta descriptions and Open Graph tags blank sitewide.',
    category: 'Local Search Architecture & Technical SEO',
    portfolioCategory: 'Website Development',
    platformTags: ['Local Business'],
    highlights: seoFeatures,
    liveUrl: 'https://buffalodeckbuildersny.com/',
    overview:
      'Buffalo Deck Builders sells decks, fences and porches across 29 Western New York towns, where nearly every search starts with the service name plus near me. We built the SEO program as structural infrastructure and not a content layer: a local page matrix built into the page architecture, schema validated on every template, and a technical audit that found a defect most builds never catch.',
    about: {
      business: 'Deck, Fence & Porch Construction Contractor',
      industry: 'Outdoor Construction & Home Improvement',
      location: 'Western New York',
    },
    goals: [
      'Give every service its own page in each of the 29 towns served',
      'Validate a full schema graph across every page type without duplicate business listings',
      'Reach 100 percent unique, keyword targeted metadata across the whole site',
      'Catch any defect that blocks search visibility before it costs months',
      'Add AI answer engine discoverability alongside classic search',
    ],
    challenge:
      "With 24 services sold across 29 towns, a real local presence meant 696 individually relevant landing pages, not a handful of service pages. On top of that, the SEO plugin reported as active with every page's title and description saved, while silently rendering none of it: zero meta descriptions and zero Open Graph tags across all 772 pages. The defect was invisible from the front end and easy for a standard QA pass to miss.",
    strategy:
      'We built local search as page architecture, a 29 town by 24 service matrix where each combination gets its own written landing page, backed by one canonical business entity in schema in place of hundreds of duplicate listings. We treated technical verification as a standing routine, not a one time check.',
    solution:
      'A local matrix of 696 individually written landing pages, each aimed at one service in one town and built from keyword research across all three service categories. Schema is scoped around one canonical HomeAndConstructionBusiness and WebSite entity referenced by ID instead of 696 separate business listings, the duplicate name, address and phone pattern search engines discount, with Service schema per town, FAQPage schema mirroring visible copy, BlogPosting on the articles and BreadcrumbList on every template. Every one of the 772 pages carries a unique, keyword targeted title and description, keyword driven file names and alt text and a clean, crawlable URL structure, with an llms.txt added for AI search. The plugin registration defect that had blanked meta descriptions and Open Graph tags sitewide was traced to its root cause, fixed and checked again on the live site across every page type. The same 772 page crawl and cross device check now runs as a standing step.',
    process: [
      { title: 'Keyword Research by Service', description: 'We researched all three service categories and mapped 24 services to the way people search for them in each town.' },
      { title: 'Page Matrix', description: 'A 29 town by 24 service matrix produced 696 individually written landing pages built into the site architecture.' },
      { title: 'Schema Graph', description: 'One canonical business entity and WebSite entity are referenced by ID, with Service schema per town and BreadcrumbList on every template.' },
      { title: 'Unique Metadata', description: 'Every page received a unique, keyword targeted title and meta description, with keyword driven file names and alt text.' },
      { title: 'Plugin Defect Hunt', description: 'A full crawl showed zero meta descriptions and zero Open Graph tags rendering. The cause was traced and fixed, then verified live on every page type.' },
      { title: 'Standing Verification', description: 'A 772 page crawl and cross device check was added as a standing step, not a one time launch check.' },
      { title: 'Search Console Setup', description: 'The sitemap index was submitted on 23 September 2026 and read successfully, with 776 URLs discovered.' },
    ],
    screenshots: {},
    features: seoFeatures,
    featuresSectionTitle: 'Services Delivered',
    featuresSectionEyebrow: 'WHAT WE DELIVERED',
    seoFoundation: [
      'One canonical HomeAndConstructionBusiness and WebSite entity referenced by ID, not hundreds of duplicate business listings',
      'Service, FAQPage, BlogPosting and BreadcrumbList structured data on the live site',
      'Breadcrumb structured data on 55 pages reported valid in Google Search Console',
      'Unique titles and descriptions and a self referencing canonical on every sampled page',
      'Sitemap index submitted to Google Search Console on 23 September 2026, 776 URLs discovered',
      'llms.txt published for AI answer engines',
    ],
    outcomeTitle: 'What We Delivered',
    outcomeEyebrow: 'SCOPE OF WORK',
    processEyebrow: 'HOW WE WORKED',
    processTitle: 'Our Process on This Project',
    processDescription: 'The steps we took, in the order we took them.',
    businessImpactSummary:
      'The 772 page site now has individually written local coverage across 29 towns, and a structural audit caught and fixed a defect that had blanked its meta descriptions and Open Graph tags before it could cost months of visibility.',
    businessImpact: [
      '696 individually written town and service landing pages built into the architecture',
      'Lighthouse SEO score raised from 92 to 100 on the live site',
      'Schema scoped around one canonical business entity instead of hundreds of duplicates',
      '100 percent unique, keyword targeted titles and descriptions across all 772 pages',
      'A silent plugin defect that had blanked meta descriptions and Open Graph tags sitewide found, fixed and verified',
      'llms.txt added for AI search engine and generative answer discoverability',
    ],
    results: [
      { label: 'Lighthouse SEO Score', value: 100 },
      { label: 'Lighthouse Accessibility Score', value: 100 },
      { label: 'Pages With Unique SEO Metadata', value: 100, suffix: '%' },
      { label: 'Local Landing Pages', value: 696 },
    ],
    dataNote,
    faqs: [
      {
        question: 'Why does the Buffalo Deck Builders site have 696 local landing pages?',
        answer:
          'The company sells 24 services across 29 towns, and each combination is something a customer searches for. Each of the 696 pages is written for one service in one town instead of one page trying to cover every town.',
      },
      {
        question: 'What was the silent plugin defect?',
        answer:
          'The SEO plugin appeared active and every title and description was saved, but nothing was rendered: zero meta descriptions and zero Open Graph tags across all 772 pages. It was found by a full crawl, traced to its cause, fixed and checked again on the live site.',
      },
      {
        question: 'How does the site avoid duplicate business listings in structured data?',
        answer:
          'It uses one canonical HomeAndConstructionBusiness and WebSite entity that every page refers to by ID, rather than repeating the full business details on every page.',
      },
      {
        question: 'Are ranking results published for this project?',
        answer:
          'Not yet. The sitemap went into Search Console on 23 September 2026, which is too recent for a trend. We publish results after six months of data.',
      },
    ],
    finalCtaHeadline,
    finalCtaDescription,
  },
];
