"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
}

export function Tilt3D({ children, className = "" }: Tilt3DProps) {
  const ref = useRef(null);
  
  // Basic scroll-linked 3D rotation effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <div ref={ref} style={{ perspective: 1200 }} className={className}>
      <motion.div
        style={{
          rotateX,
          scale,
          transformStyle: "preserve-3d"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
