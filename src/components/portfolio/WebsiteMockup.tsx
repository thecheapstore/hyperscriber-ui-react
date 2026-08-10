import React from 'react';

type MockupDevice = 'desktop' | 'tablet' | 'mobile';

interface WebsiteMockupProps {
  imageUrl?: string;
  alt?: string;
  className?: string;
  device?: MockupDevice;
}

const PlaceholderContent = () => (
  <div className="w-full h-full bg-surface-soft flex flex-col gap-2 p-4">
    <div className="h-3 w-2/3 rounded-full bg-hairline-soft" />
    <div className="h-2.5 w-1/2 rounded-full bg-hairline-soft" />
    <div className="flex-1 rounded-md bg-hairline-soft mt-2" />
  </div>
);

/** Reusable browser / tablet / phone frame used for portfolio thumbnails and case study screenshots. */
const WebsiteMockup = ({ imageUrl, alt = 'Website preview', className = '', device = 'desktop' }: WebsiteMockupProps) => {
  const content = imageUrl ? (
    <img src={imageUrl} alt={alt} loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
  ) : (
    <PlaceholderContent />
  );

  if (device === 'tablet') {
    return (
      <div className={`bg-ink rounded-[1.75rem] p-3 shadow-card ${className}`}>
        <div className="w-full h-full rounded-lg overflow-hidden bg-canvas">{content}</div>
      </div>
    );
  }

  if (device === 'mobile') {
    return (
      <div className={`relative bg-ink rounded-[2.25rem] p-2.5 shadow-card ${className}`}>
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 rounded-full bg-ink z-10" />
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-canvas">{content}</div>
      </div>
    );
  }

  return (
    <div className={`bg-canvas rounded-lg border border-hairline shadow-card overflow-hidden flex flex-col ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-hairline flex-shrink-0 bg-surface-soft">
        <span className="w-2 h-2 rounded-full bg-hairline" />
        <span className="w-2 h-2 rounded-full bg-hairline" />
        <span className="w-2 h-2 rounded-full bg-hairline" />
      </div>
      <div className="flex-1 overflow-hidden">{content}</div>
    </div>
  );
};

export default WebsiteMockup;
