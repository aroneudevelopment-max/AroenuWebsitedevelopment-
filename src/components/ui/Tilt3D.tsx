"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Tilt3D
 *
 * Subtle, source-aligned scroll-linked 3D rotation. Used only on
 * home / capability-teams / about heroes (per the placement doc).
 * SSR-safe: before mount, no transform is applied (so the server
 * HTML is at the resting state, not pre-rotated). After mount, a
 * scroll-linked rotation is applied via framer-motion.
 */
export function Tilt3D({ children, className = "" }: Tilt3DProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <div ref={ref} style={{ perspective: 1200 }} className={className}>
      <motion.div
        style={{
          rotateX,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
