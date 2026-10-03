// Copy and structure for the industry and location hub pages.
// Every fact here comes from SOURCES.md or from the case study data in src/data/portfolio.
// Visible copy follows the site rule: no hyphens or dashes, no invented numbers, no invented addresses.

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingLink {
  to: string;
  label: string;
}

export interface LandingTextItem {
  title: string;
  text: string;
  link?: LandingLink;
}

export interface LandingProcessStep {
  title: string;
  description: string;
}

export interface LandingProjectRef {
  serviceSlug: string;
  slug: string;
}

export interface LandingProofNote {
  /** Descriptive anchor text, links to the case study */
  anchor: string;
  to: string;
  /** Text that follows the anchor */
  text: string;
}

export interface LandingBase {
  slug: string;
  /** Canonical route path with a trailing slash */
  path: string;
  /** Full <title> tag */
  title: string;
  /** Short label for navigation menus and footer links */
  navLabel: string;
  /** One sentence summary for cards and menus */
  summary: string;
  /** Meta description, 140 to 160 characters */
  metaDescription: string;
  h1: string;
  eyebrow: string;
  /** The direct answer block shown under the H1 and reused by answer engines */
  answer: string;
  processTitle: string;
  processIntro: string;
  process: LandingProcessStep[];
  faqs: LandingFaq[];
  ctaHeadline: string;
  ctaDescription: string;
  /** Other hub pages worth linking to from the bottom of the page */
  explore: LandingTextItem[];
}

export interface IndustryPage extends LandingBase {
  serviceName: string;
  serviceType: string;
  areaServed: string[];
  loss: { title: string; intro: string; items: LandingTextItem[] };
  build: { title: string; intro: string; items: LandingTextItem[] };
  proof: {
    title: string;
    intro: string;
    notes: LandingProofNote[];
    websiteRefs: LandingProjectRef[];
    seoTitle: string;
    seoIntro: string;
    seoRefs: LandingProjectRef[];
  };
}

export interface LocationPage extends LandingBase {
  about: { title: string; paragraphs: string[]; links: LandingLink[] };
  services: { title: string; intro: string; items: LandingTextItem[] };
  areas: { title: string; intro: string; places: string[]; note: string };
  proof: { title: string; intro: string; refs: LandingProjectRef[] };
  quickFacts: { label: string; value: string }[];
  business: {
    name: string;
    telephone: string;
    email: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    areaServed: { type: 'City' | 'AdministrativeArea' | 'Country'; name: string }[];
    description: string;
  };
}

const TREE_PATH = "/industries/tree-service-marketing/";
const LANDSCAPING_PATH = "/industries/landscaping-and-lawn-care-marketing/";
const LUCKNOW_PATH = "/locations/lucknow-india/";
const BUFFALO_PATH = "/locations/buffalo-new-york/";

export const industryPages: IndustryPage[] = [
  {
    slug: "tree-service-marketing",
    path: TREE_PATH,
    title: "Tree Service Website Design and SEO | Calibre Associates",
    navLabel: "Tree Service Marketing",
    summary:
      "Tree service website design, local SEO and lead generation for tree companies around Buffalo, Rochester and Syracuse NY.",
    metaDescription:
      "Tree service website design, local SEO and lead generation for Buffalo and Rochester NY tree companies. See real case studies, then book a free strategy call.",
    h1: "Tree Service Marketing: Website Design, SEO and Lead Generation for Tree Companies",
    eyebrow: "TREE SERVICE MARKETING",
    serviceName: "Tree Service Marketing, Website Design and SEO",
    serviceType: "Digital marketing for tree service companies",
    answer:
      "Tree service marketing works when your website, your Google Business Profile and your follow up all answer the question a homeowner has with a fallen limb or a dying oak: who can come, how fast, and can I trust them. Calibre Associates builds tree service websites with a page for every service and every town you work in, runs local SEO and Google Business Profile management, adds paid search for storm and emergency demand, and connects every call and form to a CRM and an AI receptionist so no lead goes unanswered. We have done this for tree companies across Buffalo, Rochester and the rest of Western New York.",
    loss: {
      title: "Why local service businesses like tree companies lose leads online",
      intro:
        "Local service businesses rarely lose leads because of the quality of their work. They lose them in the few seconds a homeowner spends comparing options on a phone. These are the leaks we find most often when we audit a tree service website.",
      items: [
        {
          title: "One services page for every job",
          text: "A single page cannot rank for tree removal, trimming, stump grinding, storm cleanup and land clearing at the same time. Each job a homeowner searches for needs its own page, with its own process, photos and answers.",
        },
        {
          title: "No pages for the towns you actually serve",
          text: "People search with a town name attached. If your site never mentions the towns you work in, a competitor that does gets the call. The fix is real town pages with real local detail, not one paragraph with the town name swapped, which is the pattern Google treats as duplicate content.",
        },
        {
          title: "A Google Business Profile that is wrong or quiet",
          text: "Most tree calls start in the map results. Mismatched phone numbers, thin categories and no recent activity cost you visibility before anyone reaches your site. On RR Landscaping and Tree Services we corrected a Google Business Profile phone number so it matched the website, Yelp and Nextdoor.",
        },
        {
          title: "Storm and emergency searches that go unanswered",
          text: "Emergency demand arrives after a storm, at night, on a phone. If the emergency page is buried, the form goes to an inbox nobody checks or the call rolls to voicemail, the job goes to the next listing.",
        },
        {
          title: "Trust signals hidden in the footer",
          text: "Crane ownership, credentials and a no subcontractor policy are the reasons a homeowner picks one crew over another. On Buffalo Tree Specialists those points became the central argument of the site instead of a line of fine print.",
        },
        {
          title: "Leads with no follow up",
          text: "A form submission that sits for a day is a lost estimate. Leads need to be captured, tracked and answered fast, including when the whole crew is up in a tree.",
        },
      ],
    },
    build: {
      title: "What we build for tree service companies",
      intro:
        "Marketing for tree service companies is a system, not a single deliverable. Here is what we put in place and how each piece connects to the next.",
      items: [
        {
          title: "Website architecture with service and location pages",
          text: "A fast, mobile first site with a dedicated page for each service, a page for each town and county you cover, an emergency page and a gallery of real job photos. TreeCraft Tree Service renders 62 towns and 5 services from two data files, which produced 310 town and service pages that each read differently.",
          link: { to: "/services/website-development/", label: "Tree service website design" },
        },
        {
          title: "Local SEO for tree removal and related searches",
          text: "Title and heading structure, schema, internal linking, technical fixes and citation cleanup aimed at the searches that turn into jobs, such as tree removal in your town, stump grinding and emergency tree service.",
          link: { to: "/services/seo/", label: "Tree service SEO" },
        },
        {
          title: "Google Business Profile management",
          text: "Primary and secondary categories, a service list with real descriptions, an accurate service area and a steady posting calendar timed to storm season and fall pruning demand, written in a human voice.",
          link: { to: "/services/seo/", label: "Google Business Profile and local SEO" },
        },
        {
          title: "Paid ads for tree service lead generation",
          text: "Google Ads and Meta Ads aimed at removal, storm damage and emergency searches, with call tracking and landing pages built for one action: call or request a quote.",
          link: { to: "/services/lead-generation-paid-advertising/", label: "Tree service lead generation" },
        },
        {
          title: "CRM follow up and appointment booking",
          text: "Every call, form and message lands in one pipeline with automatic text and email follow up, reminders and estimate scheduling. We work with CRM platforms such as GoHighLevel.",
          link: { to: "/services/ai-automation-solutions/", label: "CRM and automation for local business" },
        },
        {
          title: "AI receptionist",
          text: "An AI receptionist answers around the clock, handles common questions, qualifies the job, books a call and routes true emergencies to your crew lead, so storm night calls are not lost.",
          link: { to: "/services/ai-automation-solutions/", label: "AI receptionist and automation" },
        },
      ],
    },
    proof: {
      title: "Tree service websites we have built",
      intro:
        "These are real tree service engagements around Buffalo, Rochester and Western New York. Each card opens the full case study, including what we built and why.",
      notes: [
        {
          anchor: "WNY Tree Specialists",
          to: "/services/website-development/projects/wny-tree-specialists/",
          text: "covers five counties, with a visible 24/7 emergency process and dedicated Buffalo and Amherst location pages.",
        },
        {
          anchor: "Buffalo Tree Specialists",
          to: "/services/website-development/projects/buffalo-tree-specialists/",
          text: "turned crane ownership and a no subcontractor policy into its main trust argument.",
        },
        {
          anchor: "Meta Tree Services NY",
          to: "/services/website-development/projects/meta-tree-services-ny/",
          text: "gave each of six services its own page across a service area of more than 60 towns.",
        },
        {
          anchor: "TreeCraft Tree Service",
          to: "/services/website-development/projects/tree-craft-tree-services/",
          text: "serves Buffalo, Rochester and Batavia from a build that renders 62 towns and 5 services from two data files.",
        },
      ],
      websiteRefs: [
        { serviceSlug: "website-development", slug: "wny-tree-specialists" },
        { serviceSlug: "website-development", slug: "buffalo-tree-specialists" },
        { serviceSlug: "website-development", slug: "meta-tree-services-ny" },
        { serviceSlug: "website-development", slug: "tree-craft-tree-services" },
        { serviceSlug: "website-development", slug: "arborix-tree-services" },
        { serviceSlug: "website-development", slug: "branch-experts-rochester" },
      ],
      seoTitle: "Tree service SEO and Google Business Profile case studies",
      seoIntro:
        "The search side of the same work. These case studies cover audits, technical fixes, location pages and profile management for tree companies.",
      seoRefs: [
        { serviceSlug: "seo", slug: "wny-tree-specialists" },
        { serviceSlug: "seo", slug: "buffalo-tree-specialists" },
        { serviceSlug: "seo", slug: "meta-tree-services-ny" },
        { serviceSlug: "seo", slug: "tree-craft-tree-services" },
        { serviceSlug: "seo", slug: "a-one-tree-services" },
        { serviceSlug: "seo", slug: "rr-landscaping" },
      ],
    },
    processTitle: "How we work with tree service companies",
    processIntro:
      "A short, clear sequence from the first call to monthly reporting, with no surprises about what is being built or why.",
    process: [
      { title: "Discovery call", description: "We learn which services earn you the most, which towns you want to win and where leads are slipping away today." },
      { title: "Audit", description: "We review your website, Google Business Profile, listings and phone and form handling to find the real leaks." },
      { title: "Service and town map", description: "We plan the pages you need, one per service and one per town worth ranking in, before anything is designed." },
      { title: "Build", description: "We design and develop the site, set up schema, tracking and your lead capture, and tune it for speed on a phone." },
      { title: "Search and profile", description: "We optimize your Google Business Profile, fix local SEO foundations and start a steady posting calendar." },
      { title: "Follow up and report", description: "We connect your CRM and AI receptionist, add paid ads where they make sense and review results with you regularly." },
    ],
    faqs: [
      {
        question: "How much does tree service website design cost?",
        answer:
          "We scope each project to the number of services and towns you want to rank for, so there is no fixed price on this page. The biggest drivers are how many service and town pages you need, whether you want CRM and booking set up, and whether ongoing SEO or ads are included. Book a free strategy call and we will send a scoped quote.",
      },
      {
        question: "How do tree service companies get more leads online?",
        answer:
          "They combine four things: a fast website with a page for each service and town, a complete and active Google Business Profile, paid search for emergency and storm demand, and quick follow up on every call and form. Missing any one of these usually leaves jobs on the table. We build and connect all four.",
      },
      {
        question: "Does tree service SEO work for a company in Buffalo or Rochester?",
        answer:
          "Yes. Local SEO is built around the towns you serve, and we have built and optimized sites for tree companies working across Buffalo, Rochester and Western New York. Nobody can honestly promise a ranking position, but a site with real service pages, real town pages and a healthy Google Business Profile is competing properly for the searches that bring tree jobs.",
      },
      {
        question: "How long does tree service SEO take to show results?",
        answer:
          "Paid ads can produce calls within days of launch, while local SEO builds over months and depends on how competitive your towns are and how much needs fixing. We start with technical and profile fixes that can move quickly, then add pages and content that compound over time.",
      },
      {
        question: "Do I need a separate page for each town and each service?",
        answer:
          "For the services and towns that matter to your business, yes. Each page should carry real local detail such as the crews, jobs, soil, weather or neighborhoods involved, not copy that is identical apart from the town name. Pages built that way answer searches properly and avoid duplicate content problems.",
      },
      {
        question: "Can you manage my Google Business Profile and ads together?",
        answer:
          "Yes. The profile, the website and the ads should all tell the same story, with the same phone number, services and service area. We manage them as one system so your map listing, your landing pages and your ad copy support each other instead of competing.",
      },
    ],
    areaServed: ["Buffalo, New York", "Rochester, New York", "Syracuse, New York", "Western New York"],
    ctaHeadline: "Ready to Get More Tree Jobs From Search?",
    ctaDescription:
      "Book a free consultation and we will show you where your tree service website and Google Business Profile are losing leads.",
    explore: [
      {
        title: "Landscaping and lawn care marketing",
        text: "The same system applied to landscaping, lawn care, snow plowing and hardscaping companies.",
        link: { to: LANDSCAPING_PATH, label: "Landscaping and lawn care marketing" },
      },
      {
        title: "Digital marketing agency in Buffalo NY",
        text: "How we work with Buffalo, Rochester and Syracuse businesses.",
        link: { to: BUFFALO_PATH, label: "Digital marketing agency in Buffalo NY" },
      },
      {
        title: "All case studies",
        text: "Browse every website, SEO and brand project we have documented.",
        link: { to: "/portfolio/", label: "Website design and SEO case studies" },
      },
    ],
  },
  {
    slug: "landscaping-and-lawn-care-marketing",
    path: LANDSCAPING_PATH,
    title: "Landscaping Web Design and Lawn Care SEO | Calibre Associates",
    navLabel: "Landscaping and Lawn Care Marketing",
    summary:
      "Landscaping website design, lawn care SEO and lead generation, including snow plowing and hardscaping, for companies around Buffalo, Rochester and Syracuse NY.",
    metaDescription:
      "Landscaping website design, lawn care SEO and lead generation for Buffalo and Rochester NY contractors, including snow plowing and hardscaping. Book a call.",
    h1: "Landscaping and Lawn Care Marketing: Website Design, SEO and Lead Generation",
    eyebrow: "LANDSCAPING AND LAWN CARE MARKETING",
    serviceName: "Landscaping and Lawn Care Marketing, Website Design and SEO",
    serviceType: "Digital marketing for landscaping and lawn care companies",
    answer:
      "Landscaping and lawn care marketing works when your website, Google Business Profile and follow up match how the business really earns money across the year: mowing and landscaping in summer, hardscaping and decks in spring and fall, snow plowing in winter. Calibre Associates builds landscaping websites with a page for each service and each town, runs lawn care SEO and Google Business Profile management timed to the season, adds paid ads for landscaping lead generation, and connects every inquiry to a CRM and an AI receptionist. Our proof comes from landscaping, lawn care and outdoor construction companies across Buffalo, Rochester and Syracuse, including 716 Lawn Care, where our founder is Managing Director.",
    loss: {
      title: "Why local service businesses like landscapers lose leads online",
      intro:
        "Landscaping and lawn care companies sell several different businesses on one calendar, and most websites flatten that into one list of services. That is where the leads leak.",
      items: [
        {
          title: "Seasonal services buried in one paragraph",
          text: "716 Lawn Care sells landscaping in summer and snow plowing in winter. Before our work, snow plowing lived in a single paragraph on a services page, so the site gave its most seasonal service no page of its own for a customer to land on. A service that lives in one paragraph is easy to miss.",
        },
        {
          title: "Town pages that all say the same thing",
          text: "Thirty near identical location pages shared one paragraph with only the town name swapped. We rewrote them with town specific detail and measured the result at 17.5 percent average similarity across the set, so each page earns its place.",
        },
        {
          title: "A Google Business Profile in the wrong category",
          text: "A profile categorized as general lawn care, with no posts, cannot compete for snow removal, hardscaping or tree searches. Categories, services and posting have to match the work you want more of.",
        },
        {
          title: "Quote requests that take too many steps",
          text: "Long forms and no click to call button on mobile lose jobs from people standing in their yard. Buffalo Deck Builders carries a quick quote popup on every page and a sticky call to action bar on mobile.",
        },
        {
          title: "Proof that does not look like proof",
          text: "A gallery of perfect finished shots feels like stock photography. Real job photos, honest service areas and plain language build trust. Meta Services NY states that snow plowing is limited to a narrower set of ZIP codes instead of overselling coverage.",
        },
        {
          title: "Leads with no follow up",
          text: "Spring quote requests arrive in bursts. Without tracking and automatic follow up, half of them go cold while crews are on site, and nobody knows which marketing channel sent the good ones.",
        },
      ],
    },
    build: {
      title: "What we build for landscaping and lawn care companies",
      intro:
        "Landscaping lead generation needs the website, search presence and follow up to work as one system. This is what we build.",
      items: [
        {
          title: "Landscaping website design with service and town pages",
          text: "A fast, mobile first site organized around your real service groups, such as lawn care, landscaping, hardscaping, and tree and seasonal work, with a gallery of real projects. KP Landscaping runs 1,612 pages across 24 services and 62 towns, and Buffalo Deck Builders runs 772 pages including 696 hyperlocal landing pages across 29 towns and 24 services.",
          link: { to: "/services/website-development/", label: "Landscaping website design" },
        },
        {
          title: "Lawn care SEO with seasonal planning",
          text: "Technical fixes, titles, headings, schema and internal linking, plus a calendar that pushes the right service at the right time, such as snow plowing and snow removal before winter bookings open.",
          link: { to: "/services/seo/", label: "Lawn care SEO" },
        },
        {
          title: "Google Business Profile management",
          text: "Correct primary and secondary categories, individually described services, a verified service area and a hand written posting calendar. For KP Landscaping we built a ten week calendar of three posts a week around the services that drive calls in each metro.",
          link: { to: "/services/seo/", label: "Google Business Profile and local SEO" },
        },
        {
          title: "Paid ads for landscaping lead generation",
          text: "Google Ads and Meta Ads for landscaping, hardscaping, snow plowing and deck projects, sent to landing pages that make requesting a quote a one step action.",
          link: { to: "/services/lead-generation-paid-advertising/", label: "Landscaping lead generation" },
        },
        {
          title: "CRM follow up and reminders",
          text: "Every inquiry is captured in one pipeline with automatic text and email follow up, estimate reminders and appointment scheduling, so seasonal rushes do not overwhelm the office.",
          link: { to: "/services/ai-automation-solutions/", label: "CRM and automation for landscaping companies" },
        },
        {
          title: "AI receptionist",
          text: "An AI receptionist answers questions, qualifies the job, books a visit and routes urgent calls to the right person, including during the busy weeks when nobody can pick up the phone.",
          link: { to: "/services/ai-automation-solutions/", label: "AI receptionist and automation" },
        },
      ],
    },
    proof: {
      title: "Landscaping and lawn care websites we have built",
      intro:
        "Real landscaping, lawn care and outdoor construction businesses in Western New York and Syracuse. Each card opens the full case study.",
      notes: [
        {
          anchor: "716 Lawn Care",
          to: "/services/website-development/projects/716-lawn-care/",
          text: "is organized into four real service groups, with a projects gallery and a blog on practical local topics such as hydroseeding versus sod.",
        },
        {
          anchor: "KP Landscaping",
          to: "/services/website-development/projects/kp-landscaping/",
          text: "was rebuilt with more than 1,600 pages, with cross page similarity cut from 93 to 95 percent down to 8 to 16 percent.",
        },
        {
          anchor: "RR Landscaping and Tree Services",
          to: "/services/website-development/projects/rr-landscaping/",
          text: "covers 21 service lines across 11 towns around Syracuse, with a media library cut by 87 percent.",
        },
        {
          anchor: "Buffalo Deck Builders",
          to: "/services/website-development/projects/buffalo-deck-builders/",
          text: "is a 772 page site with 696 hyperlocal landing pages, generated by a repeatable build pipeline.",
        },
        {
          anchor: "Meta Services NY",
          to: "/services/website-development/projects/meta-services-ny/",
          text: "bundles lawn care, landscaping, tree work and outdoor living under one crew and one phone number.",
        },
      ],
      websiteRefs: [
        { serviceSlug: "website-development", slug: "716-lawn-care" },
        { serviceSlug: "website-development", slug: "kp-landscaping" },
        { serviceSlug: "website-development", slug: "rr-landscaping" },
        { serviceSlug: "website-development", slug: "buffalo-deck-builders" },
        { serviceSlug: "website-development", slug: "meta-services-ny" },
      ],
      seoTitle: "Lawn care and landscaping SEO case studies",
      seoIntro:
        "The search work behind those sites, from fixing a sitewide title bug to building seasonal Google Business Profile calendars.",
      seoRefs: [
        { serviceSlug: "seo", slug: "716-lawn-care" },
        { serviceSlug: "seo", slug: "kp-landscaping" },
        { serviceSlug: "seo", slug: "rr-landscaping" },
        { serviceSlug: "seo", slug: "buffalo-deck-builders" },
        { serviceSlug: "seo", slug: "meta-services-ny" },
        { serviceSlug: "seo", slug: "ashton-services-ny" },
      ],
    },
    processTitle: "How we work with landscaping and lawn care companies",
    processIntro:
      "We plan around your seasons, so the right service is promoted before demand arrives, not after.",
    process: [
      { title: "Discovery call", description: "We map your service groups, your busiest and most profitable seasons and the towns you want to win." },
      { title: "Audit", description: "We review your website, titles, location pages, Google Business Profile and how quote requests are handled." },
      { title: "Seasonal plan", description: "We schedule the work so snow plowing, hardscaping and lawn care each get attention ahead of their peak." },
      { title: "Build and fix", description: "We build or repair the site, service pages and town pages, with schema, speed and mobile quote flow done properly." },
      { title: "Profile, search and ads", description: "We run your Google Business Profile, local SEO and paid ads against the same plan and the same message." },
      { title: "Follow up and report", description: "We connect your CRM and AI receptionist and review calls, forms and results with you regularly." },
    ],
    faqs: [
      {
        question: "How much does landscaping website design cost?",
        answer:
          "It depends on the number of services and towns you want pages for, plus whether you need a gallery, quote flow, CRM setup or ongoing SEO. We do not publish a flat price because a five page site and a 700 page local search build are very different projects. Book a free strategy call and we will scope it and send a quote.",
      },
      {
        question: "What is the best way to get more landscaping leads?",
        answer:
          "Start with a website that has a page for each service and each town, a complete Google Business Profile in the right categories, and a fast way to request a quote on a phone. Then add paid ads for the seasonal services you most want to sell and follow up quickly on every inquiry. We build and connect all of these.",
      },
      {
        question: "How is lawn care SEO different from general SEO?",
        answer:
          "Lawn care SEO is local and seasonal. Customers search by town and by season, and the map results matter as much as the website. That means service area pages, a well managed Google Business Profile, and a plan that promotes snow plowing, hardscaping or lawn care ahead of the months when each one sells.",
      },
      {
        question: "Can you market snow plowing and hardscaping, not only lawn care?",
        answer:
          "Yes. Seasonal and project based services need their own pages, their own profile categories and their own timing. On 716 Lawn Care we made snow removal the primary Google Business Profile category ahead of peak season, and on KP Landscaping we built posting themes around hardscaping and snow plowing.",
      },
      {
        question: "Do you build WordPress websites for landscaping companies?",
        answer:
          "Most of our landscaping builds are custom WordPress sites, several on hand coded themes with no heavy page builder, so they load fast and can grow to hundreds of pages. We choose the platform that fits the business and explain the tradeoffs on the discovery call.",
      },
      {
        question: "Do you work with landscaping companies outside Buffalo?",
        answer:
          "Yes. Our landscaping and outdoor service clients include businesses around Buffalo, Rochester and Syracuse, and we work with local service companies across the USA. The method is the same wherever you are: real service pages, real town pages and a profile that matches the business.",
      },
    ],
    areaServed: ["Buffalo, New York", "Rochester, New York", "Syracuse, New York", "Western New York"],
    ctaHeadline: "Ready to Fill Your Landscaping Calendar?",
    ctaDescription:
      "Book a free consultation and we will show you where your landscaping website and Google Business Profile are leaving jobs behind.",
    explore: [
      {
        title: "Tree service marketing",
        text: "Website design, SEO and lead generation for tree removal and arborist companies.",
        link: { to: TREE_PATH, label: "Tree service marketing" },
      },
      {
        title: "Digital marketing agency in Buffalo NY",
        text: "How we work with Buffalo, Rochester and Syracuse businesses.",
        link: { to: BUFFALO_PATH, label: "Digital marketing agency in Buffalo NY" },
      },
      {
        title: "All case studies",
        text: "Browse every website, SEO and brand project we have documented.",
        link: { to: "/portfolio/", label: "Website design and SEO case studies" },
      },
    ],
  },
];

export const locationPages: LocationPage[] = [
  {
    slug: "lucknow-india",
    path: LUCKNOW_PATH,
    title: "Digital Marketing Agency in Lucknow | Calibre Associates",
    navLabel: "Lucknow, India",
    summary:
      "Our head office: a digital marketing, website development, SEO and AI automation agency in Lucknow, Uttar Pradesh, serving India and the USA.",
    metaDescription:
      "Calibre Associates is a digital marketing agency in Lucknow offering website development, SEO and AI automation across India and the USA. Book a free call.",
    h1: "Digital Marketing Agency in Lucknow for Websites, SEO and AI Automation",
    eyebrow: "LUCKNOW, UTTAR PRADESH, INDIA",
    answer:
      "Calibre Associates is a digital marketing agency with its head office in Lucknow, Uttar Pradesh, India. Founded by Abhijeet Jain, we build websites and ecommerce stores, run SEO and Google Business Profile work, manage paid ads and social media, create brand identities and video, and build AI automation and CRM systems for businesses across India and the USA. If you are searching for a website development company in Lucknow, an SEO company in Lucknow or an AI automation agency in India, this page explains what we do, who does it and how to start.",
    about: {
      title: "A digital marketing agency headquartered in Lucknow",
      paragraphs: [
        "Calibre Associates was founded in December 2025 in Lucknow, Uttar Pradesh, as an end to end digital growth and technology agency. Our head office is here, and so is our founder, Abhijeet Jain, who leads the agency as Founder and CEO.",
        "The idea came from a pattern Abhijeet kept seeing. Businesses were managing branding, marketing, communication, website development and internal processes through separate vendors, which made consistency and coordination hard. Calibre puts those pieces under one team, so the website, the search presence, the ads, the CRM and the follow up all work from the same plan.",
        "We work with startups and emerging brands, small and medium businesses, local and home service companies, ecommerce brands and service based businesses. Our clients are in India and the USA, and our strongest case studies come from local service businesses in Western New York and ecommerce brands in India.",
      ],
      links: [
        { to: "/our-team/abhijeet-jain/", label: "Meet Abhijeet Jain, Founder and CEO" },
        { to: "/our-team/", label: "Meet the Calibre Associates team" },
      ],
    },
    services: {
      title: "Digital marketing services we offer from Lucknow",
      intro:
        "One team, several disciplines. You can hire us for a single service or for the whole system.",
      items: [
        {
          title: "Website development company in Lucknow",
          text: "Custom websites and ecommerce stores built mobile first, fast and ready for search. Our India portfolio includes brands in mattresses, designer apparel, fragrance, specialty coffee and jewellery.",
          link: { to: "/services/website-development/", label: "Website development services" },
        },
        {
          title: "SEO company in Lucknow",
          text: "Technical SEO, on page work, local SEO and Google Business Profile management, with structured data so answer engines can read your pages. Our deepest proof is local SEO for service businesses in the USA, and the same method applies to Indian businesses that depend on local search.",
          link: { to: "/services/seo/", label: "SEO services" },
        },
        {
          title: "Lead generation and paid advertising",
          text: "Google Ads and Meta Ads, landing pages and conversion tracking, built to bring in enquiries you can measure instead of clicks you cannot.",
          link: { to: "/services/lead-generation-paid-advertising/", label: "Lead generation and paid ads" },
        },
        {
          title: "AI automation agency in India",
          text: "CRM workflow automation, AI lead qualification, an AI receptionist, and automatic follow up, reminders and appointment scheduling that remove manual work from your week.",
          link: { to: "/services/ai-automation-solutions/", label: "AI automation services" },
        },
        {
          title: "Social media marketing and content",
          text: "Social media management, content creation, video editing and creator led campaigns through our talent management team.",
          link: { to: "/services/social-media-marketing/", label: "Social media marketing" },
        },
        {
          title: "Brand identity development",
          text: "Brand identity, visual systems and campaign concepts that keep your website, ads and social profiles looking like one business.",
          link: { to: "/services/brand-identity-development/", label: "Brand identity development" },
        },
      ],
    },
    areas: {
      title: "Areas we serve from Lucknow",
      intro: "Our head office is in Lucknow, and we work with clients in these places.",
      places: ["Lucknow", "Uttar Pradesh", "India", "United States"],
      note: "Work for clients in the USA is run remotely from Lucknow, with a Buffalo, New York phone line for North American clients. See our Buffalo page for how that works.",
    },
    proof: {
      title: "Websites we have built for businesses in India",
      intro:
        "A selection of ecommerce and personal brand projects for Indian businesses and creators. Each card opens the full case study.",
      refs: [
        { serviceSlug: "website-development", slug: "flo-mattress" },
        { serviceSlug: "website-development", slug: "tulsi-online" },
        { serviceSlug: "website-development", slug: "scentira-india" },
        { serviceSlug: "website-development", slug: "hatti-kaapi" },
        { serviceSlug: "website-development", slug: "gemennial" },
        { serviceSlug: "website-development", slug: "manasvi-pathak" },
      ],
    },
    quickFacts: [
      { label: "Head office", value: "Lucknow, Uttar Pradesh, India" },
      { label: "Founder and CEO", value: "Abhijeet Jain" },
      { label: "India phone", value: "+91 9792848868" },
      { label: "Email", value: "info@calibreassociates.com" },
      { label: "Serves", value: "India and the USA" },
    ],
    business: {
      name: "Calibre Associates, Lucknow Head Office",
      telephone: "+91 9792848868",
      email: "info@calibreassociates.com",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
      areaServed: [
        { type: "City", name: "Lucknow" },
        { type: "AdministrativeArea", name: "Uttar Pradesh" },
        { type: "Country", name: "India" },
        { type: "Country", name: "United States" },
      ],
      description:
        "Digital marketing agency with its head office in Lucknow, Uttar Pradesh, offering website development, SEO, paid advertising, social media marketing, brand identity and AI automation for businesses in India and the USA.",
    },
    processTitle: "How to start working with us",
    processIntro: "A simple path from first conversation to a scoped plan.",
    process: [
      { title: "Book a call", description: "Use our calendar, phone or email to book a free strategy call." },
      { title: "Review", description: "We look at your website, search presence, ads and tools, and ask what you want to change." },
      { title: "Scoped proposal", description: "You receive a clear plan with what will be built, in what order and what each phase includes." },
      { title: "Build and launch", description: "We design, develop and launch in phases, with regular check ins and shared progress." },
      { title: "Grow and support", description: "We keep improving search, ads, automation and content based on real results." },
    ],
    faqs: [
      {
        question: "Which digital marketing agency should I choose in Lucknow?",
        answer:
          "Choose on evidence, not on promises. Calibre Associates is a digital marketing agency in Lucknow that combines website development, SEO, paid ads, social media, branding and AI automation in one team, which suits businesses tired of coordinating several vendors. Ask any agency for real case studies, and ours are on our portfolio page.",
      },
      {
        question: "Do you offer website development in Lucknow for small businesses?",
        answer:
          "Yes. We build custom websites and ecommerce stores for startups, small and medium businesses and creators, with a focus on mobile speed, clean structure for search and clear lead capture. We scope each project to your needs instead of selling a fixed package.",
      },
      {
        question: "Can you do SEO for a business outside Lucknow?",
        answer:
          "Yes. We are based in Lucknow but serve clients across India and the USA. Our local SEO case studies are mostly for service businesses in Western New York, so we regularly work on Google Business Profile, service area pages and local search for businesses in other cities and countries.",
      },
      {
        question: "What does an AI automation agency do for a business in India?",
        answer:
          "It connects your tools and removes repetitive work. For example, a lead fills a form, the CRM records it, an automatic message goes out, an AI receptionist answers questions and books a call, and your team gets a reminder. We design and build those workflows around how your business already runs.",
      },
      {
        question: "How do I contact Calibre Associates in Lucknow?",
        answer:
          "Call +91 9792848868, email info@calibreassociates.com or book a free strategy call through our calendar. If you are a North American business, you can also call our Buffalo line on +1 716 355 1231.",
      },
    ],
    ctaHeadline: "Ready to Grow With a Lucknow Digital Agency?",
    ctaDescription:
      "Book a free consultation and tell us what you want your website, search presence and automation to do for your business.",
    explore: [
      {
        title: "Digital marketing agency in Buffalo NY",
        text: "Our North America line and Western New York work.",
        link: { to: BUFFALO_PATH, label: "Digital marketing agency in Buffalo NY" },
      },
      {
        title: "Website design and SEO case studies",
        text: "Every project we have documented, grouped by service.",
        link: { to: "/portfolio/", label: "Website design and SEO case studies" },
      },
      {
        title: "Tree service marketing",
        text: "Our strongest niche proof, local service businesses in New York.",
        link: { to: TREE_PATH, label: "Tree service marketing" },
      },
    ],
  },
  {
    slug: "buffalo-new-york",
    path: BUFFALO_PATH,
    title: "Digital Marketing Agency in Buffalo NY | Calibre Associates",
    navLabel: "Buffalo, New York",
    summary:
      "Web design, local SEO and lead generation for Buffalo, Rochester and Syracuse businesses, with a North America phone line in Buffalo.",
    metaDescription:
      "Web design, local SEO and lead generation for Buffalo, Rochester and Syracuse NY businesses. Call our Buffalo line or book a free strategy call with Calibre.",
    h1: "Digital Marketing Agency in Buffalo NY for Web Design and Local SEO",
    eyebrow: "BUFFALO AND WESTERN NEW YORK",
    answer:
      "Calibre Associates helps Buffalo and Western New York businesses get found and called through web design, local SEO, Google Business Profile management, paid ads and automation. Our head office is in Lucknow, India, with a Buffalo phone line on +1 716 355 1231 for North American clients, and our founder Abhijeet Jain is Managing Director of 716 Lawn Care in Buffalo. Most of our case studies are local service businesses around Buffalo, Rochester and Syracuse, so we know how search works for tree service, landscaping, lawn care and home service companies in this region.",
    about: {
      title: "Why Buffalo and Western New York businesses work with us",
      paragraphs: [
        "Calibre Associates is run from Lucknow, Uttar Pradesh, India, and serves businesses in India and the USA. For North American clients we keep a Buffalo phone line, +1 716 355 1231, so you can reach us on a local number. We do not list a street address, and projects are managed remotely through scheduled calls.",
        "What ties us to this region is the work. Abhijeet Jain, our Founder and CEO, is also Managing Director of 716 Lawn Care, a Buffalo landscaping, lawn care and snow plowing company, where he oversees operations, strategy, marketing and technology. That means we see the seasonal swings and lead handling problems of a local service business from the inside, not only from a spreadsheet.",
        "The case studies below show the pattern. We have built websites and run local SEO for tree service, landscaping, lawn care, deck building and property service companies serving Buffalo, Rochester, Syracuse and the towns between them.",
      ],
      links: [
        { to: "/our-team/abhijeet-jain/", label: "Meet Abhijeet Jain, Founder and CEO" },
        { to: "/contact/", label: "Contact Calibre Associates" },
      ],
    },
    services: {
      title: "Local SEO and web design for Buffalo businesses",
      intro:
        "Western New York has real seasons, and they shape what people search for and when. Here is how we turn that into leads.",
      items: [
        {
          title: "Web design for Buffalo businesses",
          text: "Fast, mobile first websites with a page for each service and each town you serve. We have built service area structures covering Buffalo, Amherst, Rochester, Batavia and Syracuse, including sites with more than 60 towns.",
          link: { to: "/services/website-development/", label: "Web design and development" },
        },
        {
          title: "Local SEO in Buffalo NY",
          text: "Local SEO starts with the map results and the pages behind them: accurate listings, service area pages with real local detail, schema and internal linking. We write for local conditions such as lake effect snow, clay soil and freeze thaw cycles instead of generic copy.",
          link: { to: "/services/seo/", label: "Local SEO and Google Business Profile" },
        },
        {
          title: "Seasonal search planning",
          text: "Snow plowing and snow removal need attention before winter bookings open, storm cleanup after high wind, and landscaping and hardscaping in spring. We plan content, profile posts and ads around that calendar.",
          link: { to: "/services/seo/", label: "Seasonal local SEO planning" },
        },
        {
          title: "Lead generation and paid ads",
          text: "Google Ads and Meta Ads aimed at the services you most want to sell, with call tracking and landing pages that make it easy to request a quote on a phone.",
          link: { to: "/services/lead-generation-paid-advertising/", label: "Lead generation for local business" },
        },
        {
          title: "CRM, AI receptionist and follow up",
          text: "One pipeline for calls, forms and messages, automatic follow up, and an AI receptionist that answers around the clock and books visits.",
          link: { to: "/services/ai-automation-solutions/", label: "AI automation for local business" },
        },
        {
          title: "Industry specific marketing",
          text: "If you run a tree company, landscaping business or lawn care service, start with our industry pages for the full approach and the matching case studies.",
          link: { to: TREE_PATH, label: "Tree service marketing" },
        },
      ],
    },
    areas: {
      title: "Areas we serve in New York",
      intro: "These are the places our Western New York case studies cover.",
      places: [
        "Buffalo",
        "Amherst",
        "North Tonawanda",
        "Erie County",
        "Niagara County",
        "Rochester",
        "Batavia",
        "Syracuse",
        "Western New York",
      ],
      note: "We also work with local service businesses across the USA. Beyond New York, projects follow the same remote process.",
    },
    proof: {
      title: "Western New York businesses we have built for",
      intro:
        "Real projects for Buffalo, Rochester and Syracuse companies. Each card opens the full case study.",
      refs: [
        { serviceSlug: "website-development", slug: "716-lawn-care" },
        { serviceSlug: "website-development", slug: "wny-tree-specialists" },
        { serviceSlug: "website-development", slug: "buffalo-tree-specialists" },
        { serviceSlug: "website-development", slug: "buffalo-deck-builders" },
        { serviceSlug: "website-development", slug: "rr-landscaping" },
        { serviceSlug: "website-development", slug: "branch-experts-rochester" },
      ],
    },
    quickFacts: [
      { label: "North America phone", value: "+1 716 355 1231" },
      { label: "Email", value: "info@calibreassociates.com" },
      { label: "Head office", value: "Lucknow, Uttar Pradesh, India" },
      { label: "Local leadership", value: "Abhijeet Jain, Managing Director of 716 Lawn Care, Buffalo NY" },
      { label: "Serves", value: "Buffalo, Rochester, Syracuse and Western New York" },
    ],
    business: {
      name: "Calibre Associates, North America",
      telephone: "+1 716 355 1231",
      email: "info@calibreassociates.com",
      addressLocality: "Buffalo",
      addressRegion: "New York",
      addressCountry: "US",
      areaServed: [
        { type: "City", name: "Buffalo" },
        { type: "City", name: "Rochester" },
        { type: "City", name: "Syracuse" },
        { type: "AdministrativeArea", name: "Niagara County" },
        { type: "AdministrativeArea", name: "Western New York" },
      ],
      description:
        "Digital marketing agency serving North America from a Buffalo phone line, offering web design, local SEO, Google Business Profile management, paid advertising and AI automation for Buffalo, Rochester and Syracuse businesses.",
    },
    processTitle: "How a Buffalo project works",
    processIntro: "Remote, clear and quick to start.",
    process: [
      { title: "Call or book", description: "Call +1 716 355 1231 or book a free strategy call and tell us about the business." },
      { title: "Local audit", description: "We review your site, your Google Business Profile and how you rank in the towns you serve." },
      { title: "Plan by season", description: "We build a plan around the services and months that matter most to your revenue." },
      { title: "Build and launch", description: "We build or fix the site, profile and tracking, and launch in phases." },
      { title: "Follow up and improve", description: "We connect CRM and automation, then keep improving based on calls, forms and search data." },
    ],
    faqs: [
      {
        question: "Do you have an office in Buffalo, New York?",
        answer:
          "Our head office is in Lucknow, Uttar Pradesh, India. For North American clients we run a Buffalo phone line on +1 716 355 1231, and our founder is Managing Director of 716 Lawn Care in Buffalo. We do not list a street address, and projects are managed remotely through scheduled calls and shared updates.",
      },
      {
        question: "What does local SEO for a Buffalo business include?",
        answer:
          "It includes a technical audit, service and town pages with real local detail, schema, internal linking, Google Business Profile optimization, listing cleanup and a steady posting calendar. The goal is to appear in the map results and in organic search for the services and towns you want to win.",
      },
      {
        question: "Can you help a business in Rochester or Syracuse, not only Buffalo?",
        answer:
          "Yes. Our case studies include companies serving Rochester and Syracuse as well as Buffalo and Batavia. The approach is the same in each market: pages and profiles that reflect the towns you genuinely serve.",
      },
      {
        question: "Do you only work with home service companies?",
        answer:
          "No, but local service businesses are where our proof is strongest, particularly tree service, landscaping, lawn care and deck building. We also build ecommerce sites and personal brand sites, and our case studies page shows all of it.",
      },
      {
        question: "How do I get a quote for web design in Buffalo?",
        answer:
          "Call +1 716 355 1231, email info@calibreassociates.com or book a free strategy call. We will ask about your services, towns and goals, then send a scoped quote based on the pages and systems you actually need.",
      },
    ],
    ctaHeadline: "Ready to Win More Local Customers in Western New York?",
    ctaDescription:
      "Book a free consultation or call our Buffalo line and we will review how your business shows up in local search today.",
    explore: [
      {
        title: "Landscaping and lawn care marketing",
        text: "Website design, SEO and lead generation for landscapers and lawn care companies.",
        link: { to: LANDSCAPING_PATH, label: "Landscaping and lawn care marketing" },
      },
      {
        title: "Tree service marketing",
        text: "Website design, SEO and lead generation for tree companies.",
        link: { to: TREE_PATH, label: "Tree service marketing" },
      },
      {
        title: "Digital marketing agency in Lucknow",
        text: "Our head office in Lucknow, Uttar Pradesh.",
        link: { to: LUCKNOW_PATH, label: "Digital marketing agency in Lucknow" },
      },
    ],
  },
];

export const getIndustryPage = (slug: string | undefined): IndustryPage | undefined =>
  industryPages.find((p) => p.slug === slug);

export const getLocationPage = (slug: string | undefined): LocationPage | undefined =>
  locationPages.find((p) => p.slug === slug);

/** Every route this file powers, for the sitemap, navigation and footer. */
export const landingPagePaths: string[] = [
  ...industryPages.map((p) => p.path),
  ...locationPages.map((p) => p.path),
];
