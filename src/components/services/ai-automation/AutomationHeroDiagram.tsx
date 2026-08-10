import { motion } from 'framer-motion';
import { Bot, Database, Mail, Phone, CalendarCheck, Receipt, UserPlus } from 'lucide-react';

const SATELLITES = [
  { label: 'CRM', icon: Database, top: '12.5%', left: '50%' },
  { label: 'Email', icon: Mail, top: '31.25%', left: '82.5%' },
  { label: 'Calendar', icon: CalendarCheck, top: '68.75%', left: '82.5%' },
  { label: 'Invoices', icon: Receipt, top: '87.5%', left: '50%' },
  { label: 'Lead Capture', icon: UserPlus, top: '68.75%', left: '17.5%' },
  { label: 'Phone', icon: Phone, top: '31.25%', left: '17.5%' },
];

const LINE_POINTS: Array<[number, number]> = [
  [200, 50],
  [330, 125],
  [330, 275],
  [200, 350],
  [70, 275],
  [70, 125],
];

const AutomationHeroDiagram = () => {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto aspect-square">
      {/* Ambient glow to give the diagram a "premium dial" backdrop instead of floating in empty black */}
      <div
        aria-hidden
        className="absolute inset-[6%] rounded-full bg-accent-magenta/10 blur-[50px]"
      />

      {/* Orbit ring ties the satellites into one visible system */}
      <div
        aria-hidden
        className="absolute inset-[10%] rounded-full border border-white/[0.08]"
      />

      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden>
        {LINE_POINTS.map(([x, y], i) => (
          <motion.line
            key={i}
            x1="200"
            y1="200"
            x2={x}
            y2={y}
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -100 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: i * 0.15 }}
          />
        ))}
      </svg>

      {/* Center AI hub */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent-magenta/20 border border-accent-magenta/40 flex items-center justify-center shadow-[0_0_50px_-5px_rgba(217,70,239,0.6)]">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-accent-magenta/90 flex items-center justify-center">
            <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
        </div>
        <span className="block text-center text-xs font-bold text-inverse-ink mt-2">AI</span>
      </motion.div>

      {/* Satellite nodes */}
      {SATELLITES.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
          style={{ top: node.top, left: node.left }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/[0.08] border border-white/20 flex items-center justify-center shadow-[0_4px_16px_-4px_rgba(0,0,0,0.5)]"
          >
            <node.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-inverse-ink/90" />
          </motion.div>
          <span className="text-[10px] font-semibold text-inverse-ink/75 whitespace-nowrap">{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default AutomationHeroDiagram;
