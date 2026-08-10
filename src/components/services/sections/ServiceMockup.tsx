import React from 'react';
import { motion } from 'framer-motion';
import { Search, Play, Bot, MapPin, TrendingUp, Star } from 'lucide-react';
import type { MockupVariant } from '../data/mockupVariants';
import InstagramFeedMockup from './InstagramFeedMockup';

const SkeletonLine = ({ className = '' }: { className?: string }) => (
  <div className={`h-2 rounded-full bg-hairline-soft ${className}`} />
);

const BrowserMockup = ({ previewImage }: { previewImage?: string }) => (
  <div className="w-full h-full bg-canvas rounded-lg shadow-card overflow-hidden flex flex-col">
    <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-hairline flex-shrink-0">
      <span className="w-2 h-2 rounded-full bg-hairline" />
      <span className="w-2 h-2 rounded-full bg-hairline" />
      <span className="w-2 h-2 rounded-full bg-hairline" />
      <span className="ml-2 flex-1 h-4 rounded-pill bg-surface-soft" />
    </div>
    {previewImage ? (
      <div className="flex-1 overflow-hidden bg-surface-soft flex items-center justify-center">
        <img src={previewImage} alt="" className="w-full h-full object-contain" />
      </div>
    ) : (
      <div className="p-4 flex-1 flex flex-col gap-3">
        <div className="h-8 w-2/3 rounded-md bg-ink" />
        <SkeletonLine className="w-full" />
        <SkeletonLine className="w-4/5" />
        <div className="mt-1 h-6 w-24 rounded-pill bg-ink" />
        <div className="grid grid-cols-3 gap-2 mt-auto">
          <div className="h-10 rounded-md bg-surface-soft" />
          <div className="h-10 rounded-md bg-surface-soft" />
          <div className="h-10 rounded-md bg-surface-soft" />
        </div>
      </div>
    )}
  </div>
);

const DashboardMockup = () => (
  <div className="w-full h-full bg-canvas rounded-lg shadow-card overflow-hidden flex">
    <div className="w-10 border-r border-hairline flex flex-col items-center gap-3 py-4 flex-shrink-0">
      <div className="w-5 h-5 rounded-md bg-ink" />
      <div className="w-5 h-5 rounded-md bg-surface-soft" />
      <div className="w-5 h-5 rounded-md bg-surface-soft" />
      <div className="w-5 h-5 rounded-md bg-surface-soft" />
    </div>
    <div className="flex-1 p-3 flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        <div className="h-12 rounded-md bg-surface-soft flex items-end p-1.5"><div className="h-4 w-full rounded-sm bg-ink/70" /></div>
        <div className="h-12 rounded-md bg-surface-soft flex items-end p-1.5"><div className="h-8 w-full rounded-sm bg-ink/70" /></div>
        <div className="h-12 rounded-md bg-surface-soft flex items-end p-1.5"><div className="h-6 w-full rounded-sm bg-ink/70" /></div>
      </div>
      <div className="flex-1 rounded-md bg-surface-soft p-3 flex items-end gap-1.5">
        {[40, 65, 45, 80, 55, 90, 60].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm bg-ink/80" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  </div>
);

const SocialMockup = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-[70%] h-full max-h-full bg-canvas rounded-2xl shadow-card border border-hairline p-3 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-surface-soft flex-shrink-0" />
        <div className="flex-1 flex flex-col gap-1">
          <SkeletonLine className="w-3/4" />
          <SkeletonLine className="w-1/2" />
        </div>
      </div>
      <div className="flex-1 rounded-lg bg-surface-soft" />
      <div className="flex items-center gap-3 text-ink/40">
        <div className="w-4 h-4 rounded-full border-2 border-current" />
        <div className="w-4 h-4 rounded-full border-2 border-current" />
        <div className="w-4 h-4 rounded-full border-2 border-current" />
      </div>
    </div>
  </div>
);

const SearchMockup = () => (
  <div className="w-full h-full bg-canvas rounded-lg shadow-card p-4 flex flex-col gap-3">
    <div className="flex items-center gap-2 h-9 rounded-pill border border-hairline px-3">
      <Search className="h-3.5 w-3.5 text-ink/40 flex-shrink-0" />
      <SkeletonLine className="w-1/2" />
    </div>
    {[1, 2, 3].map((rank) => (
      <div key={rank} className="flex items-center gap-2.5">
        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-ink text-canvas text-[10px] font-bold flex items-center justify-center">{rank}</span>
        <div className="flex-1 flex flex-col gap-1">
          <SkeletonLine className="w-3/4" />
          <SkeletonLine className="w-1/2 !bg-hairline" />
        </div>
      </div>
    ))}
    <div className="mt-auto h-12 rounded-md bg-surface-soft flex items-end p-1.5 gap-1">
      {[30, 45, 40, 60, 55, 75, 85].map((h, i) => (
        <div key={i} className="flex-1 rounded-t-sm bg-ink/70" style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

const RankingsMockup = () => (
  <div className="w-full h-full bg-canvas rounded-lg shadow-card p-4 sm:p-6 flex flex-col gap-3">
    <div className="flex items-center gap-2 h-9 rounded-pill border border-hairline px-3 flex-shrink-0">
      <Search className="h-3.5 w-3.5 text-ink/40 flex-shrink-0" />
      <SkeletonLine className="w-2/3" />
    </div>

    <motion.div
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      className="rounded-lg bg-ink text-inverse-ink p-3.5 flex items-center gap-3 flex-shrink-0"
    >
      <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center font-bold text-sm flex-shrink-0">#1</span>
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="h-2 w-3/4 rounded-full bg-white/70" />
        <div className="h-2 w-1/2 rounded-full bg-white/30" />
      </div>
      <TrendingUp className="h-4 w-4 text-block-lime flex-shrink-0" />
    </motion.div>

    <div className="rounded-lg bg-surface-soft p-3 flex items-center gap-2 flex-shrink-0">
      <MapPin className="h-4 w-4 text-ink/50 flex-shrink-0" />
      <SkeletonLine className="w-1/2" />
      <span className="ml-auto flex items-center gap-0.5 text-ink/60 flex-shrink-0">
        <Star className="h-3 w-3 fill-current" />
        <span className="text-[10px] font-semibold">4.9</span>
      </span>
    </div>

    <div className="mt-auto h-14 rounded-md bg-surface-soft flex items-end p-1.5 gap-1">
      {[30, 42, 38, 55, 50, 68, 62, 78, 85].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 rounded-t-sm bg-ink/70"
        />
      ))}
    </div>
  </div>
);

const VideoMockup = () => (
  <div className="w-full h-full bg-canvas rounded-lg shadow-card overflow-hidden flex flex-col">
    <div className="flex-1 bg-ink flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-canvas/90 flex items-center justify-center">
        <Play className="h-5 w-5 text-ink fill-ink ml-0.5" />
      </div>
    </div>
    <div className="p-3 flex items-center gap-1">
      {[
        { w: 'w-1/4', c: 'bg-block-coral' },
        { w: 'w-1/6', c: 'bg-block-lilac' },
        { w: 'w-1/3', c: 'bg-block-mint' },
        { w: 'w-1/5', c: 'bg-block-lime' },
      ].map((clip, i) => (
        <div key={i} className={`h-6 rounded-sm ${clip.w} ${clip.c}`} />
      ))}
    </div>
  </div>
);

const FunnelMockup = () => (
  <div className="w-full h-full bg-canvas rounded-lg shadow-card p-6 flex flex-col items-center justify-center gap-2">
    {[100, 78, 56, 34].map((w, i) => (
      <div
        key={i}
        className={`h-8 rounded-sm ${i === 3 ? 'bg-ink' : 'bg-surface-soft'} flex items-center justify-center`}
        style={{ width: `${w}%` }}
      >
        {i === 3 && <span className="text-canvas text-[10px] font-semibold">Converted</span>}
      </div>
    ))}
  </div>
);

const WorkflowMockup = () => {
  const nodes = [
    { label: 'Trigger', x: '10%', y: '15%' },
    { label: 'Filter', x: '55%', y: '10%' },
    { label: 'AI', x: '30%', y: '55%', accent: true },
    { label: 'Action', x: '68%', y: '65%' },
  ];
  return (
    <div className="w-full h-full bg-canvas rounded-lg shadow-card relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <line x1="18%" y1="22%" x2="58%" y2="17%" className="stroke-hairline" strokeWidth="2" />
        <line x1="18%" y1="22%" x2="36%" y2="60%" className="stroke-hairline" strokeWidth="2" />
        <line x1="36%" y1="60%" x2="72%" y2="70%" className="stroke-hairline" strokeWidth="2" />
      </svg>
      {nodes.map((node) => (
        <div
          key={node.label}
          className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-pill border px-3 py-1.5 text-[10px] font-medium ${
            node.accent ? 'bg-ink text-canvas border-ink' : 'bg-surface-soft text-ink border-hairline'
          }`}
          style={{ left: node.x, top: node.y }}
        >
          {node.accent && <Bot className="h-3 w-3" />}
          {node.label}
        </div>
      ))}
    </div>
  );
};

const ImageMockup = ({ previewImage }: { previewImage?: string }) => (
  <div className="w-full h-full flex items-center justify-center">
    {previewImage ? (
      <img src={previewImage} alt="" className="w-full h-full object-contain" />
    ) : (
      <div className="w-full h-full rounded-lg bg-surface-soft" />
    )}
  </div>
);

const MOCKUP_COMPONENTS: Record<MockupVariant, React.FC<{ previewImage?: string }>> = {
  browser: BrowserMockup,
  image: ImageMockup,
  dashboard: DashboardMockup,
  social: SocialMockup,
  instagram: InstagramFeedMockup,
  search: SearchMockup,
  rankings: RankingsMockup,
  video: VideoMockup,
  funnel: FunnelMockup,
  workflow: WorkflowMockup,
};

interface ServiceMockupProps {
  variant: MockupVariant;
  /** Real project screenshot, only rendered by the `browser` variant, ignored by the rest */
  previewImage?: string;
}

const ServiceMockup = ({ variant, previewImage }: ServiceMockupProps) => {
  const MockupContent = MOCKUP_COMPONENTS[variant];
  return (
    <motion.div style={{ transform: 'translateZ(30px)' }} className="w-full h-full p-4 sm:p-6">
      <MockupContent previewImage={previewImage} />
    </motion.div>
  );
};

export default ServiceMockup;
