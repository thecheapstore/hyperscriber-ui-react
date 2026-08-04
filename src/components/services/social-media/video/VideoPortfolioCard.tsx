import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { fadeUp } from '@/lib/motion';
import type { SocialVideo } from '../../data/socialVideos';
import { useInViewport } from '../../shared/video/useInViewport';
import { videoPlaybackManager } from '../../shared/video/videoPlaybackManager';

interface VideoPortfolioCardProps {
  video: SocialVideo;
}

const VideoPortfolioCard = ({ video }: VideoPortfolioCardProps) => {
  const { ref: viewportRef, isInView, hasEnteredOnce } = useInViewport();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    return videoPlaybackManager.register(video.id, () => {
      videoRef.current?.pause();
    });
  }, [video.id]);

  useEffect(() => {
    if (!isInView && isPlaying) {
      videoRef.current?.pause();
    }
  }, [isInView, isPlaying]);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      videoPlaybackManager.notifyPlaying(video.id);
      el.play();
    } else {
      el.pause();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = videoRef.current;
    if (!el || !el.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    el.currentTime = ratio * el.duration;
  };

  return (
    <motion.div
      ref={viewportRef}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group relative aspect-[9/16] rounded-lg overflow-hidden bg-ink shadow-card"
    >
      {hasEnteredOnce ? (
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnailUrl}
          muted={isMuted}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onPlay={() => {
            setIsPlaying(true);
            videoPlaybackManager.notifyPlaying(video.id);
          }}
          onPause={() => {
            setIsPlaying(false);
            videoPlaybackManager.notifyPaused(video.id);
          }}
          onEnded={() => {
            setIsPlaying(false);
            videoPlaybackManager.notifyPaused(video.id);
          }}
          onTimeUpdate={(e) => {
            const el = e.currentTarget;
            if (el.duration) setProgress((el.currentTime / el.duration) * 100);
          }}
          onLoadedData={() => setIsLoaded(true)}
        />
      ) : (
        video.thumbnailUrl && <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover" loading="lazy" />
      )}

      {/* Loading state — shown once the card mounts a real <video> until its first frame is ready */}
      {hasEnteredOnce && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/40">
          <Loader2 className="h-6 w-6 text-white animate-spin" />
        </div>
      )}

      {/* Category badge */}
      <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.5px] text-white bg-white/15 backdrop-blur-md border border-white/25 rounded-pill px-2.5 py-1">
        {video.category}
      </span>

      {/* Play / pause toggle (click anywhere on the card) */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
        className="absolute inset-0 flex items-center justify-center"
      >
        {!isPlaying && (!hasEnteredOnce || isLoaded) && (
          <span className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Play className="h-5 w-5 text-white fill-white ml-0.5" />
          </span>
        )}
      </button>

      {/* Mute toggle */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 ${
          isPlaying && isMuted
            ? 'bg-accent-magenta/80 border-accent-magenta animate-pulse'
            : 'bg-white/15 border-white/25 hover:bg-white/25'
        }`}
      >
        {isMuted ? <VolumeX className="h-3.5 w-3.5 text-white" /> : <Volume2 className="h-3.5 w-3.5 text-white" />}
      </button>

      {/* Progress bar */}
      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
        <div
          role="slider"
          aria-label="Video progress"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          onClick={handleSeek}
          className="h-1 w-full rounded-full bg-white/25 cursor-pointer overflow-hidden"
        >
          <div className="h-full bg-white rounded-full transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPortfolioCard;
