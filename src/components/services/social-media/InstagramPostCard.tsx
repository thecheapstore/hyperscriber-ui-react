import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import { fadeUp } from '@/lib/motion';
import type { InstagramPost } from '../data/instagramPosts';
import { loadInstagramEmbedScript } from './instagramEmbedLoader';

interface InstagramPostCardProps {
  post: InstagramPost;
  index: number;
}

const GRADIENTS = [
  'from-block-coral via-surface-soft to-block-lilac',
  'from-block-mint via-surface-soft to-block-lime',
  'from-block-lilac via-surface-soft to-accent-magenta',
  'from-block-lime via-surface-soft to-block-mint',
  'from-accent-magenta via-surface-soft to-block-coral',
];

const EMBED_TIMEOUT_MS = 8000;

type EmbedStatus = 'loading' | 'embedded' | 'fallback';

/** Tries a real Instagram embed (official widget, no API token needed) and silently falls back to a premium placeholder card if it doesn't render in time. */
const InstagramPostCard = ({ post, index }: InstagramPostCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<EmbedStatus>('loading');
  const gradient = GRADIENTS[index % GRADIENTS.length];

  useEffect(() => {
    let cancelled = false;
    let pollId: number | undefined;
    let timeoutId: number | undefined;

    loadInstagramEmbedScript()
      .then(() => {
        if (cancelled || !containerRef.current) return;
        window.instgrm?.Embeds.process();

        // Poll for a genuinely rendered embed rather than relying solely on a MutationObserver,
        // Instagram's script can batch-insert iframes for every card on the page in one pass, and
        // observers set up a tick apart can miss each other's insertion. Polling always checks
        // live DOM state directly, so it can't miss it.
        //
        // An <iframe> existing isn't enough on its own: Instagram sizes it via its own postMessage
        // handshake, and that handshake can silently fail for a post while the iframe tag stays in
        // the DOM at ~0 height. Only trust the embed once Instagram has marked it rendered AND it
        // actually has real height, otherwise treat it the same as never having loaded.
        pollId = window.setInterval(() => {
          const iframe = containerRef.current?.querySelector('iframe');
          if (iframe?.classList.contains('instagram-media-rendered') && iframe.getBoundingClientRect().height > 10) {
            setStatus('embedded');
            if (pollId) window.clearInterval(pollId);
            if (timeoutId) window.clearTimeout(timeoutId);
          }
        }, 250);

        timeoutId = window.setTimeout(() => {
          if (!cancelled) setStatus('fallback');
          if (pollId) window.clearInterval(pollId);
        }, EMBED_TIMEOUT_MS);
      })
      .catch(() => {
        if (!cancelled) setStatus('fallback');
      });

    return () => {
      cancelled = true;
      if (pollId) window.clearInterval(pollId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [post.url]);

  if (status === 'fallback') {
    return (
      <motion.a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        whileHover={{ y: -6 }}
        className="group relative aspect-square rounded-lg overflow-hidden border border-hairline shadow-card block transition-shadow duration-300 hover:shadow-lg"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105`} />

        <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
          <Instagram className="h-4 w-4 text-ink" />
        </span>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-14 h-14 rounded-full bg-canvas/70 backdrop-blur-md border border-white/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Instagram className="h-6 w-6 text-ink" />
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-3">
          <span className="flex items-center justify-center gap-1.5 w-full rounded-pill bg-canvas/85 backdrop-blur-md border border-hairline px-3 py-2 text-xs font-semibold text-ink transition-colors duration-300 group-hover:bg-canvas">
            View Post
            <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="relative min-h-[420px] rounded-lg overflow-hidden border border-hairline shadow-card bg-canvas transition-shadow duration-300 hover:shadow-lg"
    >
      {status === 'loading' && (
        <div className={`absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br ${gradient}`}>
          <Instagram className="h-6 w-6 text-ink animate-pulse" />
        </div>
      )}

      <div ref={containerRef}>
        {/* Official Instagram embed widget, instagram.com/embed.js replaces this with the post's real iframe. Left unconstrained so the full post (caption, likes, comments) shows, not just a cropped top slice. */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={post.url}
          data-instgrm-version="14"
          style={{ margin: 0, minWidth: '100%', width: '100%' }}
        />
      </div>
    </motion.div>
  );
};

export default InstagramPostCard;
