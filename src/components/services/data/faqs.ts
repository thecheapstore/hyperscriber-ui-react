export interface Faq {
  question: string;
  answer: string;
}

// Shared placeholder FAQ set used across the Services page and every
// individual service page until service-specific questions are written.
export const defaultFaqs: Faq[] = [
  {
    question: "How do you maintain our brand voice across marketing, content, and development?",
    answer: "We begin with a deep discovery process to understand your brand positioning, target audience, tone, and business goals. This includes reviewing existing content, design assets, and customer touchpoints. Our AI tools are guided by this framework, and every deliverable is reviewed by experienced strategists, designers, or developers to ensure consistency, clarity, and brand alignment across all channels."
  },
  {
    question: "What is your typical turnaround time for services?",
    answer: "Timelines vary depending on the service scope. Lead generation campaigns and paid ads are usually launched within 7 to 10 business days. SEO and social media strategies typically require 2 to 3 weeks for setup. Website, application, or software development timelines depend on project complexity and are clearly defined before execution begins."
  },
  {
    question: "How do you measure performance and results?",
    answer: "We track performance using clear, business-focused metrics. This includes lead volume, cost per lead, conversion rates, SEO rankings, website performance, engagement metrics, and automation efficiency. You receive transparent reports and insights that show what is working, what needs improvement, and how each service contributes to revenue growth."
  },
  {
    question: "Do you offer revisions or ongoing optimization?",
    answer: "Yes. Our process is collaborative and iterative. We include revision cycles to refine messaging, design, or functionality based on feedback. For ongoing services like SEO, paid advertising, social media management, and automation, continuous optimization is built into our workflow to improve results over time."
  },
  {
    question: "How do you understand our industry and business before starting?",
    answer: "We conduct detailed research into your industry, competitors, target customers, and existing systems. This includes keyword research, market analysis, user behavior insights, and technical audits when required. This research-driven approach allows us to create strategies, content, and systems that are relevant, scalable, and aligned with real business needs."
  }
];
