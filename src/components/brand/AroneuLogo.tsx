import React from 'react';
import Image from 'next/image';
import { aroneuBrandAssets } from '@/lib/brand/aroneuBrandAssets';

export interface AroneuLogoProps {
  variant?: 'horizontal' | 'stacked' | 'monogram';
  tone?: 'ink' | 'paper' | 'gradient';
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export function AroneuLogo({ 
  variant = 'horizontal', 
  tone = 'ink', 
  className = '', 
  width, 
  height,
  alt = "Aroneu Logo"
}: AroneuLogoProps) {
  
  // Guard against invalid combinations like stacked + gradient
  let resolvedTone = tone;
  if (variant !== 'horizontal' && tone === 'gradient') {
    resolvedTone = 'ink';
    console.warn("Gradient tone is only available for horizontal logo variant. Falling back to ink.");
  }
  
  const src = (aroneuBrandAssets.logos[variant] as any)[resolvedTone];

  if (!src) {
    return null;
  }

  return (
    <Image 
      src={src} 
      alt={alt} 
      width={width || 120} 
      height={height || 40} 
      className={`aroneu-logo ${className}`} 
      priority
    />
  );
}
