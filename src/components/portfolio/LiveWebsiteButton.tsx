import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LiveWebsiteButtonProps {
  url?: string;
  className?: string;
}

/** Premium CTA linking to the live project. Degrades gracefully when no URL is set yet. */
const LiveWebsiteButton = ({ url, className = '' }: LiveWebsiteButtonProps) => {
  if (!url) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-pill border border-hairline bg-surface-soft px-6 py-3 text-sm font-medium text-ink/50 ${className}`}
      >
        <Clock className="h-4 w-4" />
        Live Site Coming Soon
      </span>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      <Button className="rounded-pill px-6 py-3 group">
        View Live Website
        <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Button>
    </a>
  );
};

export default LiveWebsiteButton;
