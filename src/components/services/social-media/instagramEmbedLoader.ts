declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

let scriptPromise: Promise<void> | null = null;

/** Loads Instagram's official embed widget script once and reuses it across every card. */
export const loadInstagramEmbedScript = (): Promise<void> => {
  if (window.instgrm) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src*="instagram.com/embed.js"]');
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Instagram embed script failed to load')));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Instagram embed script failed to load'));
    document.body.appendChild(script);
  });

  return scriptPromise;
};
