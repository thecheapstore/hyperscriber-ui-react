import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, forceReload?: boolean) => void;
    };
  }
}

// Renders Trustpilot's Review Collector TrustBox. The bootstrap script normally
// scans the DOM for ".trustpilot-widget" once on load, which misses this element
// since React mounts it after that scan runs. Calling loadFromElement directly,
// retrying briefly if the script hasn't finished loading yet, is Trustpilot's
// documented fix for single page apps.
const TrustBox = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let attempts = 0;
    const tryLoad = () => {
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(node, true);
        return;
      }
      attempts += 1;
      if (attempts < 20) {
        setTimeout(tryLoad, 250);
      }
    };
    tryLoad();
  }, []);

  return (
    <div className="flex justify-center">
      <div
        ref={ref}
        className="trustpilot-widget w-full max-w-[260px]"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="6a9d4d22dbdedebd96830c6b"
        data-style-height="52px"
        data-style-width="100%"
        data-token="f12579d0-e99a-404b-83c6-ce74d1b35191"
      >
        <a href="https://www.trustpilot.com/review/calibreassociates.com" target="_blank" rel="noopener noreferrer">
          Trustpilot
        </a>
      </div>
    </div>
  );
};

export default TrustBox;
