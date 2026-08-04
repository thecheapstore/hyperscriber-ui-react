import React from 'react';

interface TechnologyBadgeProps {
  name: string;
  className?: string;
}

const TechnologyBadge = ({ name, className = '' }: TechnologyBadgeProps) => (
  <span
    className={`inline-flex items-center rounded-pill border border-hairline bg-surface-soft px-3 py-1 text-xs font-medium text-ink/80 ${className}`}
  >
    {name}
  </span>
);

export default TechnologyBadge;
