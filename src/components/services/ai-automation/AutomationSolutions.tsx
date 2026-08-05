import {
  Workflow,
  Headset,
  PhoneCall,
  MessageCircle,
  CalendarClock,
  Mail,
  Receipt,
  Building2,
  Megaphone,
  Puzzle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

interface SolutionGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

const SOLUTION_GROUPS: SolutionGroup[] = [
  { title: 'CRM Automation', icon: Workflow, items: ['Lead Routing', 'Pipeline Management', 'Lead Assignment', 'Opportunity Tracking', 'Sales Automation'] },
  { title: 'AI Receptionist', icon: Headset, items: ['24/7 Responses', 'Answer FAQs', 'Book Calls', 'Lead Qualification', 'Call Routing'] },
  { title: 'AI Voice Callers', icon: PhoneCall, items: ['Outbound Calls', 'Appointment Confirmation', 'Follow-up Calls', 'Reminder Calls', 'Customer Qualification'] },
  { title: 'AI Chatbots', icon: MessageCircle, items: ['Website Chat', 'WhatsApp', 'Facebook', 'Instagram', 'Lead Collection', 'Customer Support'] },
  { title: 'Appointment Automation', icon: CalendarClock, items: ['Bookings', 'Rescheduling', 'Calendar Sync', 'Reminders', 'No-show Prevention'] },
  { title: 'Lead Nurturing', icon: Mail, items: ['Email Sequences', 'SMS', 'WhatsApp', 'Follow-ups', 'Reactivation Campaigns'] },
  { title: 'Estimates & Invoicing', icon: Receipt, items: ['Automatic Quotes', 'Invoice Generation', 'Payment Tracking', 'Payment Reminders'] },
  { title: 'Internal Business Automation', icon: Building2, items: ['Task Creation', 'Notifications', 'Document Generation', 'Client Onboarding', 'Employee Workflows', 'Reporting'] },
  { title: 'Marketing Automation', icon: Megaphone, items: ['Campaign Triggers', 'Lead Scoring', 'Customer Journeys', 'Review Requests', 'Referral Systems'] },
  { title: 'Custom AI Solutions', icon: Puzzle, items: ['API Integrations', 'Custom Workflows', 'Business-specific Systems', 'Enterprise Automation'] },
];

const AutomationSolutions = () => {
  return (
    <section id="solutions" className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            WHAT WE BUILD
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">Our Automation Solutions</motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            End-to-end systems covering every part of how your business runs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SOLUTION_GROUPS.map((group) => (
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

export default AutomationSolutions;
