import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Phone, Navigation, Globe, Search, MousePointer2 } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import { createSeededRandom, seededInt } from '@/lib/seededRandom';
import CountUp from '@/components/services/sections/CountUp';

interface GbpMetricsPanelProps {
  /** Any stable per-project string (e.g. project slug), same seed always renders the same numbers. */
  seed: string;
}

/** A believable sample Google Business Profile insights panel, unique per project, generated rather than sourced from a real client account. */
const GbpMetricsPanel = ({ seed }: GbpMetricsPanelProps) => {
  const metrics = useMemo(() => {
    const rand = createSeededRandom(`${seed}-gbp`);
    return [
      { icon: Phone, label: 'Calls', value: seededInt(rand, 38, 214), suffix: '+' },
      { icon: Navigation, label: 'Direction Requests', value: seededInt(rand, 64, 336), suffix: '+' },
      { icon: Globe, label: 'Website Visits', value: seededInt(rand, 142, 688), suffix: '+' },
      { icon: Search, label: 'Discovery Searches', value: seededInt(rand, 52, 84), suffix: '%' },
      { icon: MousePointer2, label: 'Customer Actions', value: seededInt(rand, 210, 940), suffix: '+' },
    ];
  }, [seed]);

  return (
    <div className="rounded-block border border-hairline bg-canvas p-6 md:p-8">
      <div className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold">Google Business Profile</h3>
          <span
            title="This panel shows a generated, illustrative example of Google Business Profile insights. It is not this client's real data."
            className="font-mono text-[10px] uppercase tracking-[0.5px] text-ink/50 bg-surface-soft border border-hairline rounded-pill px-2.5 py-1"
          >
            Illustrative Sample Data
          </span>
        </div>
        <p className="text-xs text-ink/50">
          A generated example of the kind of reporting we deliver, not this client's actual figures.
        </p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {metrics.map((m) => (
          <motion.div key={m.label} variants={fadeUp} className="rounded-lg bg-surface-soft p-4 text-center">
            <m.icon className="h-5 w-5 text-ink/50 mx-auto mb-2" />
            <div className="text-xl font-bold tabular-nums">
              <CountUp value={m.value} suffix={m.suffix} />
            </div>
            <p className="text-xs text-ink/60 mt-1">{m.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GbpMetricsPanel;
