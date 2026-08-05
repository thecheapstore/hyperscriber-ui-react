import type { LucideIcon } from 'lucide-react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce, easeOut } from '@/lib/motion';

export interface WorkflowStep {
  label: string;
  icon: LucideIcon;
}

interface WorkflowChainProps {
  steps: WorkflowStep[];
  /** 'dark' for use on bg-ink sections, 'light' for use on canvas/white sections */
  tone?: 'light' | 'dark';
  /** Smaller nodes for hero-context use */
  compact?: boolean;
}

const WorkflowChain = ({ steps, tone = 'light', compact = false }: WorkflowChainProps) => {
  const isDark = tone === 'dark';
  const nodeSize = compact ? 'w-11 h-11' : 'w-14 h-14';
  const iconSize = compact ? 'h-4 w-4' : 'h-5 w-5';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-1 lg:gap-0"
    >
      {steps.map((step, index) => (
        <motion.div key={step.label} variants={fadeUp} className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col items-center gap-2.5 px-2">
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              className={`${nodeSize} rounded-full flex items-center justify-center border ${
                isDark
                  ? 'bg-white/[0.06] border-white/15 text-inverse-ink'
                  : 'bg-canvas border-hairline text-ink shadow-card'
              }`}
            >
              <step.icon className={iconSize} />
            </motion.div>
            <span className={`text-xs font-semibold text-center max-w-[6.5rem] ${isDark ? 'text-inverse-ink/80' : 'text-ink/80'}`}>
              {step.label}
            </span>
          </div>

          {index < steps.length - 1 && (
            <>
              <motion.div
                aria-hidden
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.1 }}
                className={`lg:hidden ${isDark ? 'text-inverse-ink/30' : 'text-ink/25'}`}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>
              <div className="relative hidden lg:block w-8 xl:w-10 h-px mx-1">
                <div className={`absolute inset-0 ${isDark ? 'bg-white/15' : 'bg-hairline'}`} />
                <motion.div
                  aria-hidden
                  animate={{ x: ['-100%', '200%'], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: easeOut, delay: index * 0.15 }}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-magenta"
                />
                <ArrowRight
                  className={`absolute -right-1 top-1/2 -translate-y-1/2 h-3 w-3 ${isDark ? 'text-inverse-ink/30' : 'text-ink/25'}`}
                />
              </div>
            </>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WorkflowChain;
