import {
  Search,
  Instagram,
  MapPin,
  LayoutTemplate,
  Workflow,
  Mail,
  Send,
  Phone,
  MessageSquare,
  Star,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

interface ServiceGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

const SERVICE_GROUPS: ServiceGroup[] = [
  { title: 'Google Ads', icon: Search, items: ['Search campaigns', 'Display campaigns', 'Performance Max', 'Remarketing', 'Local campaigns'] },
  { title: 'Meta Advertising', icon: Instagram, items: ['Facebook', 'Instagram', 'Lead Forms', 'Retargeting', 'Lookalike Audiences'] },
  { title: 'Local Service Ads (LSA)', icon: MapPin, items: ['Google Guaranteed', 'Call Generation', 'Service Businesses', 'Lead Tracking'] },
  { title: 'Landing Pages', icon: LayoutTemplate, items: ['Conversion-focused design', 'A/B Testing', 'Lead Capture', 'Speed Optimization'] },
  { title: 'CRM Integration', icon: Workflow, items: ['Lead Routing', 'Pipeline', 'Notifications', 'Follow-ups', 'Appointment Scheduling'] },
  { title: 'Email Marketing', icon: Mail, items: ['Lead Nurturing', 'Newsletter Campaigns', 'Promotional Campaigns', 'Customer Retention', 'Automated Sequences'] },
  { title: 'Cold Email Outreach', icon: Send, items: ['Personalized Outreach', 'AI Personalization', 'Follow-up Sequences', 'Reply Tracking', 'Lead Qualification'] },
  { title: 'Sales Outreach', icon: Phone, items: ['Cold Calling', 'Inbound Follow-up', 'Lead Qualification', 'Appointment Scheduling', 'Sales Support', 'CRM Updates'] },
  { title: 'SMS Marketing', icon: MessageSquare, items: ['Appointment Reminders', 'Promotions', 'Follow-ups', 'Missed Call Text Back', 'Customer Engagement'] },
  { title: 'Reputation Marketing', icon: Star, items: ['Google Reviews', 'Review Requests', 'Customer Feedback', 'Brand Trust'] },
];

const LeadGenServices = () => {
  return (
    <section id="services" className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            WHAT WE DO
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">Our Lead Generation Services</motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            A complete, connected system — not a single channel.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICE_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white border border-hairline rounded-block p-7 transition-shadow duration-300 hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-soft text-ink flex items-center justify-center mb-5">
                <group.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-medium text-ink/60 bg-surface-soft border border-hairline rounded-pill px-2.5 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadGenServices;
