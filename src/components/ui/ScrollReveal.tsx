"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const getHidden = () => {
    switch (direction) {
      case "up":
        return { opacity: 1, y: 18 };
      case "down":
        return { opacity: 1, y: -18 };
      case "left":
        return { opacity: 1, x: 18 };
      case "right":
        return { opacity: 1, x: -18 };
      default:
        return { opacity: 1 };
    }
  };
  
  const getVisible = () => ({ opacity: 1, y: 0, x: 0 });

  return (
    <motion.div
      className={className}
      initial={getHidden()}
      whileInView={getVisible()}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.2, 0, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
