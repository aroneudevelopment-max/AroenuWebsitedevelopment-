"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

/**
 * ScrollReveal
 *
 * Subtle, source-aligned reveal pattern (per the motion brief):
 * - At first server render, content is FULLY VISIBLE (opacity 1, no
 *   transform). This means a no-JS / pre-hydration screenshot still
 *   shows the section.
 * - Once mounted, the IntersectionObserver fires and applies the
 *   hidden-to-visible transition. The animation is 320-500ms, never
 *   loops, and respects prefers-reduced-motion (handled in globals.css).
 * - The "from hidden" state is applied as a className, not as an
 *   inline style, so the SSR HTML never paints at opacity 0.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Direction -> translateY/X
  const getHidden = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 24 };
      case "down":
        return { opacity: 0, y: -24 };
      case "left":
        return { opacity: 0, x: 24 };
      case "right":
        return { opacity: 0, x: -24 };
      default:
        return { opacity: 0 };
    }
  };
  const getVisible = () => ({ opacity: 1, y: 0, x: 0 });

  // Before mount: no transform at all (SSR-safe, accessible).
  // After mount: animate from hidden -> visible when in view, or stay
  // at visible if already in view.
  if (!mounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={isInView ? getVisible() : getHidden()}
      animate={isInView ? getVisible() : getHidden()}
      transition={{
        duration: 0.4,
        delay: isInView ? delay : 0,
        ease: [0.2, 0, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
