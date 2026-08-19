import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Eye, Percent, TrendingUp } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import { createSeededRandom, seededInt, seededFloat } from '@/lib/seededRandom';
import CountUp from '@/components/services/sections/CountUp';

interface SearchPerformanceDashboardProps {
  /** Any stable per-project string (e.g. project slug), same seed always renders the same numbers. */
  seed: string;
}

/** A believable sample dashboard, unique per project, generated rather than sourced from a real client account. */
const SearchPerformanceDashboard = ({ seed }: SearchPerformanceDashboardProps) => {
  const { stats, clicksTrend } = useMemo(() => {
    const rand = createSeededRandom(`${seed}-search`);

    const totalClicks = seededInt(rand, 640, 3200);
    const totalImpressions = seededInt(rand, 11000, 48000);
    const avgCtr = seededFloat(rand, 2.8, 8.6, 1);
    const avgPosition = seededInt(rand, 3, 14);

    // A generally upward-trending 12-month curve with realistic month-to-month noise,
    // not a perfectly smooth ramp, but not random either.
    const months = 12;
    const startFraction = seededFloat(rand, 0.28, 0.45, 2);
    let value = totalClicks * startFraction;
    const growthPerMonth = ((totalClicks - value) / months) * seededFloat(rand, 0.85, 1.15, 2);
    const trend: number[] = [];
    for (let i = 0; i < months; i++) {
      const noise = seededFloat(rand, -0.14, 0.14, 2);
      value = Math.max(value * 0.6, value + growthPerMonth + value * noise);
      trend.push(Math.round(value));
    }
    trend[trend.length - 1] = totalClicks;

    return {
      stats: [
        { icon: MousePointerClick, label: 'Total Clicks', value: totalClicks, prefix: '', suffix: '+' },
        { icon: Eye, label: 'Total Impressions', value: Math.round((totalImpressions / 1000) * 10) / 10, prefix: '', suffix: 'K+' },
        { icon: Percent, label: 'Average CTR', value: avgCtr, prefix: '', suffix: '%' },
        { icon: TrendingUp, label: 'Avg. Position', value: avgPosition, prefix: '#', suffix: '' },
      ],
      clicksTrend: trend,
    };
  }, [seed]);

  const maxClicks = Math.max(...clicksTrend);

  return (
    <div className="rounded-block border border-hairline bg-canvas p-6 md:p-8">
      <div className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold">Search Performance</h3>
          <span
            title="This dashboard shows a generated, illustrative example of what search performance reporting looks like. It is not this client's real data."
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
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="rounded-lg bg-surface-soft p-4">
            <stat.icon className="h-4 w-4 text-ink/50 mb-2" />
            <div className="text-2xl font-bold tabular-nums">
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <p className="text-xs text-ink/60 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.5px] text-ink/40 mb-3">Clicks, Last 12 Months</p>
        <div className="flex items-end gap-1.5 h-24">
          {clicksTrend.map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${Math.max(4, (v / maxClicks) * 100)}%` }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 rounded-t-sm bg-ink/80"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPerformanceDashboard;
