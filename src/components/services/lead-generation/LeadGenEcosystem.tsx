import { Radio, FileText, ClipboardList, Database, CheckCheck, CalendarCheck, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/motion';
import WorkflowChain, { type WorkflowStep } from '../shared/WorkflowChain';

const ECOSYSTEM_STEPS: WorkflowStep[] = [
  { label: 'Traffic Sources', icon: Radio },
  { label: 'Landing Pages', icon: FileText },
  { label: 'Forms', icon: ClipboardList },
  { label: 'CRM', icon: Database },
  { label: 'Lead Qualification', icon: CheckCheck },
  { label: 'Appointment Booking', icon: CalendarCheck },
  { label: 'Sales Team', icon: Users },
  { label: 'Closed Customer', icon: Trophy },
];

const LeadGenEcosystem = () => {
  return (
    <section className="py-20 md:py-24 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">HOW IT WORKS</span>
          <h2 className="mb-4">The Lead Generation Ecosystem</h2>
          <p className="text-ink/70 text-body-lg">
            Every lead generation strategy we build moves through one connected system, not a set
            of disconnected tactics.
          </p>
        </motion.div>

        <WorkflowChain steps={ECOSYSTEM_STEPS} tone="light" />
      </div>
    </section>
  );
};

export default LeadGenEcosystem;
