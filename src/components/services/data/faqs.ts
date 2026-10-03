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
    answer: "We track performance using clear, business focused metrics. This includes lead volume, cost per lead, conversion rates, SEO rankings, website performance, engagement metrics, and automation efficiency. You receive transparent reports and insights that show what is working, what needs improvement, and how each service contributes to revenue growth."
  },
  {
    question: "Do you offer revisions or ongoing optimization?",
    answer: "Yes. Our process is collaborative and iterative. We include revision cycles to refine messaging, design, or functionality based on feedback. For ongoing services like SEO, paid advertising, social media management, and automation, continuous optimization is built into our workflow to improve results over time."
  },
  {
    question: "How do you understand our industry and business before starting?",
    answer: "We conduct detailed research into your industry, competitors, target customers, and existing systems. This includes keyword research, market analysis, user behavior insights, and technical audits when required. This research driven approach allows us to create strategies, content, and systems that are relevant, scalable, and aligned with real business needs."
  }
];

// Questions for the Application & Software Development page, shown in the FAQ accordion and in FAQPage JSON-LD.
export const applicationSoftwareFaqs: Faq[] = [
  {
    question: "What is custom software development?",
    answer: "Custom software development is building an application specifically for your business, its workflows and its users, rather than adapting an off the shelf product. It suits teams whose process is too specific, too manual or too connected to other systems for a generic tool to handle well."
  },
  {
    question: "What is the difference between a website and a web app?",
    answer: "A website mainly presents information, such as services, case studies and contact details. A web app lets users do something: log in, manage data, book, pay or collaborate. Many projects combine both, with a marketing site on the front and an application behind a login."
  },
  {
    question: "Do you build SaaS platforms?",
    answer: "Yes. SaaS platform development is part of our application work, including user accounts, subscriptions, dashboards and integrations. We start by defining the smallest version that proves the idea, then build on a foundation that can scale as your user base grows."
  },
  {
    question: "Do you build mobile apps?",
    answer: "Mobile application development is part of our scope. We recommend a native or cross platform approach after learning about your users, your budget and which device features you need, and a responsive web app is sometimes enough to validate the idea first."
  },
  {
    question: "How long does custom software take to build?",
    answer: "It depends on the number of features, user roles and integrations. We define the scope on a discovery call, break the build into stages with clear milestones and give you a timeline before development starts, so you always know what ships next."
  },
  {
    question: "How much does custom software development cost?",
    answer: "Cost depends on scope, so we do not quote a single number up front. After a discovery call about your workflow, users and integrations, we provide a scope specific quote and can phase the build so you start with the features that matter most."
  },
  {
    question: "How do you keep custom applications secure?",
    answer: "Security is planned from the first sprint: authenticated access, input validation, encrypted connections, sensible permissions and regular dependency updates. We use the OWASP Top 10 as a checklist for common web application risks during build and review."
  },
  {
    question: "Will you support the software after launch?",
    answer: "Yes. Deployment, monitoring and fixes continue after go live, and we can plan ongoing improvements as your users and requirements change. Our process includes a launch and support stage, so you are not left with a handoff and goodbye."
  },
  {
    question: "Can you integrate the software with my CRM and other tools?",
    answer: "Yes. We connect applications to CRMs such as HighLevel, payment processors, calendars, email and messaging through APIs and webhooks, and pair them with AI automation when workflows need to run on their own."
  }
];
