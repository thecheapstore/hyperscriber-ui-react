
import { MessageSquare, FileText, Laptop, Mail, Users, Target, Lightbulb, PenTool, BarChart, Layers } from 'lucide-react';
import { Service } from '../types/service';
import React from 'react';

export const services: Service[] = [
  {
    id: "development",
    icon: React.createElement(Laptop, { className: "h-8 w-8" }),
    title: "Website, App & Software Development",
    description: "Build fast, scalable, and conversion focused digital products designed for long term business growth.",
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
        icon: React.createElement(Target, { className: "h-6 w-6 text-teal-500" }),
        description: "We understand your business goals and design a clear structure focused on usability and conversions."
      },
      {
        title: "Design & Architecture",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-teal-500" }),
        description: "UI UX design and system architecture built for speed, scalability, and long term growth."
      },
      {
        title: "Development & Testing",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-teal-500" }),
        description: "Full stack development with thorough testing to ensure performance and reliability."
      },
      {
        title: "Launch & Optimization",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-teal-500" }),
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
    color: "from-teal-500 to-blue-500",
    bgLight: "bg-teal-50"
  },

  {
    id: "lead-generation",
    icon: React.createElement(MessageSquare, { className: "h-8 w-8" }),
    title: "Lead Generation & Paid Advertising",
    description: "Generate consistent, high quality leads through ROI focused paid advertising and funnel strategies.",
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
        icon: React.createElement(Target, { className: "h-6 w-6 text-blue-500" }),
        description: "We define target audiences, offers, and funnel structure to maximize conversions."
      },
      {
        title: "Creative & Campaign Setup",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-blue-500" }),
        description: "High converting ad creatives and landing pages built for performance."
      },
      {
        title: "Launch & Optimization",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-blue-500" }),
        description: "Continuous optimization based on real time campaign data."
      },
      {
        title: "Tracking & Scaling",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-blue-500" }),
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
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50"
  },

  {
    id: "seo-social",
    icon: React.createElement(FileText, { className: "h-8 w-8" }),
    title: "SEO & Social Media Marketing",
    description: "Grow organic traffic, brand authority, and inbound leads through SEO and social media management.",
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
        icon: React.createElement(Target, { className: "h-6 w-6 text-purple-500" }),
        description: "Keyword research, competitor analysis, and content planning."
      },
      {
        title: "Optimization & Publishing",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-purple-500" }),
        description: "SEO optimized content and consistent social media publishing."
      },
      {
        title: "Authority Building",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-purple-500" }),
        description: "Backlinks, engagement strategies, and reputation management."
      },
      {
        title: "Performance Tracking",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-purple-500" }),
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
    color: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50"
  },

  {
    id: "automation-ai",
    icon: React.createElement(Layers, { className: "h-8 w-8" }),
    title: "Automation & AI Solutions",
    description: "Streamline operations and scale faster with custom automation and AI powered business systems.",
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
        icon: React.createElement(Target, { className: "h-6 w-6 text-sky-500" }),
        description: "Identify bottlenecks and opportunities for automation."
      },
      {
        title: "System Design",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-sky-500" }),
        description: "Design automation workflows and AI logic tailored to your business."
      },
      {
        title: "Implementation",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-sky-500" }),
        description: "Build and deploy automation systems across your tools."
      },
      {
        title: "Optimization & Scaling",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-sky-500" }),
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
    color: "from-blue-500 to-sky-400",
    bgLight: "bg-sky-50"
  }
];