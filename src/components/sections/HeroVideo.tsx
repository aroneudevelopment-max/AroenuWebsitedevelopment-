"use client";

import React, { useEffect, useRef } from "react";

type HeroVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel: string;
};

export function HeroVideo({
  src,
  poster,
  className = "",
  ariaLabel,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const ensurePlayback = () => {
      video.muted = true;
      video.defaultMuted = true;

      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {
          // If autoplay is blocked, the poster remains visible as the fallback.
        });
      }
    };

    ensurePlayback();

    const handleCanPlay = () => ensurePlayback();
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        ensurePlayback();
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      className={className}
      aria-label={ariaLabel}
    />
  );
}
