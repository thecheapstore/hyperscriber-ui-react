import {
  Layers, Sparkles, Check, Globe, Database, Bot, MessageSquare, Mail,
  Workflow, CalendarCheck, Receipt, RefreshCw, Star, LayoutDashboard,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import WorkflowChain, { type WorkflowStep } from '../shared/WorkflowChain';

const HIGHLEVEL_ALONE = ['CRM & Pipelines', 'Calendars & Booking', 'Basic Workflow Automations', 'Forms & Funnels', 'SMS & Email Sending'];
const HIGHLEVEL_PLUS_N8N = [
  'AI-Powered Lead Qualification',
  'Multi-System Integrations',
  'Custom Logic & Branching',
  'Advanced Data Processing',
  'Cross-Platform Automation',
  'Enterprise-Grade Workflows',
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  { label: 'Lead Enters Website', icon: Globe },
  { label: 'CRM', icon: Database },
  { label: 'AI Qualification', icon: Bot },
  { label: 'SMS', icon: MessageSquare },
  { label: 'Email', icon: Mail },
  { label: 'Sales Pipeline', icon: Workflow },
  { label: 'Calendar', icon: CalendarCheck },
  { label: 'Invoice', icon: Receipt },
  { label: 'Follow-up', icon: RefreshCw },
  { label: 'Review Request', icon: Star },
  { label: 'Dashboard', icon: LayoutDashboard },
];

const WhyHighLevelN8n = () => {
  return (
    <>
      <section id="why-highlevel-n8n" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
              OUR APPROACH
            </motion.span>
            <motion.h2 variants={fadeUp} className="mb-4">Why HighLevel + n8n?</motion.h2>
            <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
              HighLevel is already a powerful CRM and marketing platform on its own. We extend it
              into full CRM workflow automation with custom n8n workflows, connecting it to AI,
              your tools and your data in ways the platform alone can't do.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="bg-surface-soft border border-hairline rounded-block p-8">
              <div className="w-12 h-12 rounded-lg bg-canvas text-ink/60 flex items-center justify-center mb-5">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-ink/80">HighLevel Alone</h3>
              <p className="text-xs text-ink/50 mb-5">A strong out-of-the-box platform</p>
              <ul className="space-y-2.5">
                {HIGHLEVEL_ALONE.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <Check className="h-4 w-4 text-ink/40 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="relative bg-ink text-inverse-ink border border-ink rounded-block p-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)]">
              <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-pill bg-accent-magenta px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] text-white">
                <Sparkles className="h-3 w-3" />
                Calibre Associates
              </span>
              <div className="w-12 h-12 rounded-lg bg-white/10 text-inverse-ink flex items-center justify-center mb-5">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-1">HighLevel + n8n</h3>
              <p className="text-xs text-inverse-ink/50 mb-5">Extended with custom automation</p>
              <ul className="space-y-2.5">
                {HIGHLEVEL_PLUS_N8N.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-inverse-ink/90">
                    <Check className="h-4 w-4 text-accent-magenta flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Full-width automated workflow chain */}
      <section className="py-16 md:py-20 bg-ink overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block py-1 px-3 mb-5 font-mono uppercase text-caption tracking-[0.6px] rounded-pill bg-white/10 text-inverse-ink">
              SEE IT IN ACTION
            </span>
            <h3 className="text-inverse-ink text-2xl md:text-3xl font-bold mb-3">
              One Lead. Eleven Automated Steps. Zero Manual Work.
            </h3>
            <p className="text-inverse-ink/60">All automated, from first click to closed review.</p>
          </motion.div>

          <WorkflowChain steps={WORKFLOW_STEPS} tone="dark" compact />
        </div>
      </section>
    </>
  );
};

export default WhyHighLevelN8n;
