import { useEffect, useRef, useState } from 'react';

/** Tracks whether an element is near/within the viewport — used for lazy-mounting and auto-pause. */
// A smaller default than the auto-pause margin would want on its own — a large margin means
// many grid cards start requesting video metadata at once as soon as the section scrolls
// near, which is what was making the whole section feel slow to populate. Loading only once a
// card is genuinely close spreads those requests out as the user actually scrolls.
export const useInViewport = (rootMargin = '60px') => {
  const ref = useRef<HTMLDivElement>(null);
  // Starts true: the observer's first callback is asynchronous, so a card that's
  // clicked play the instant it mounts (it's on-screen, or the user wouldn't have
  // clicked it) must not read as "out of view" and immediately self-pause before
  // the observer has had a chance to confirm visibility.
  const [isInView, setIsInView] = useState(true);
  const [hasEnteredOnce, setHasEnteredOnce] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasEnteredOnce(true);
      },
      // threshold: 0 — "in view" as soon as any pixel is within the expanded root;
      // only a genuine scroll well past the card counts as "left the viewport".
      { rootMargin, threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isInView, hasEnteredOnce };
};
