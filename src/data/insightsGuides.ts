/**
 * Long form guides on the founder's blog, insights.calibreassociates.com, matched to each service.
 * These are followed links (no rel=nofollow): the blog is owned by the Calibre team, and the
 * main site passing authority to it is the point. Titles match the live article titles.
 */
export const INSIGHTS_URL = 'https://insights.calibreassociates.com/';
export const INSIGHTS_ARTICLES_URL = 'https://insights.calibreassociates.com/articles/';

export interface InsightsGuide {
  title: string;
  href: string;
}

const guide = (title: string, slug: string): InsightsGuide => ({
  title,
  href: `${INSIGHTS_ARTICLES_URL}${slug}/`,
});

/** Keyed by service slug (src/components/services/data/services.ts). Three guides per service. */
export const SERVICE_GUIDES: Record<string, InsightsGuide[]> = {
  'website-development': [
    guide('The Local Service Business Website Checklist We Use Before Launch', 'local-service-website-checklist'),
    guide('What Decides the Cost of a Website in India', 'how-much-does-a-website-cost-in-india'),
    guide('How to Choose a Website Development Company in India', 'choose-website-development-company-india'),
  ],
  seo: [
    guide('Local SEO for Tree Service Companies', 'local-seo-for-tree-service-companies'),
    guide('Landscaping SEO: How I Get Landscaping Companies Found Locally', 'landscaping-seo-for-landscaping-companies'),
    guide('How We Rank Service Area Pages Without Thin Content', 'programmatic-local-seo-service-areas'),
  ],
  'social-media-marketing': [
    guide('How to Build a Social Media Content Calendar You Will Actually Follow', 'social-media-content-calendar'),
    guide('The Social Media Metrics That Show Campaign Performance', 'social-media-campaign-metrics'),
    guide('Video Marketing for Local Service Businesses: A Job Site System', 'video-marketing-for-local-service-business'),
  ],
  'video-editing': [
    guide('What to Look for in a Video Editing Service for Your Business', 'choose-video-editing-service'),
    guide('How to Optimize Video for Every Social Media Platform', 'optimize-video-for-social-media'),
    guide('Video Marketing for Local Service Businesses: A Job Site System', 'video-marketing-for-local-service-business'),
  ],
  'lead-generation-paid-advertising': [
    guide('Google Ads vs Meta Ads for Lead Generation: Which Comes First?', 'google-ads-vs-meta-ads'),
    guide('How I Build a Speed to Lead System for Local Service Businesses', 'speed-to-lead-local-service-business'),
    guide('SEO or Paid Ads: Where an Indian Small Business Should Spend First', 'seo-vs-paid-ads-small-business'),
  ],
  'ai-automation-solutions': [
    guide('How I Set Up GoHighLevel for a Home Service Company', 'gohighlevel-setup-home-services'),
    guide('GoHighLevel vs n8n: Which One a Service Business Needs', 'gohighlevel-vs-n8n'),
    guide('WhatsApp Automation for Indian Small Businesses', 'whatsapp-automation-for-indian-small-business'),
  ],
  'brand-identity-development': [
    guide('What a Brand Identity Project Actually Includes', 'brand-identity-project-includes'),
    guide('Website Branding Elements: How a Brand Carries Onto Your Site', 'website-branding-elements'),
    guide('Concept Work vs Client Work: How to Read an Agency Portfolio', 'judge-agency-brand-portfolio'),
  ],
  'application-software-development': [
    guide('What Custom Software Development Really Means for a Business', 'what-is-custom-software-development'),
    guide('Website vs Web App: Which One Does Your Business Need?', 'website-vs-web-app'),
    guide('How CRM Workflow Automation Fixes a Leaky Sales Process', 'crm-workflow-automation-sales'),
  ],
};
