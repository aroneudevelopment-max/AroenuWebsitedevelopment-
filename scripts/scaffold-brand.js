const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const libBrandDir = path.join(srcDir, 'lib', 'brand');
const compBrandDir = path.join(srcDir, 'components', 'brand');

[libBrandDir, compBrandDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 1. Asset Map
const assetsContent = `
export const aroneuBrandAssets = {
  logos: {
    horizontal: {
      ink: '/brand/logos/aroneu-logo-horizontal-ink.svg',
      paper: '/brand/logos/aroneu-logo-horizontal-paper.svg',
      gradient: '/brand/logos/aroneu-logo-horizontal-reversed-gradient-lockup.svg',
    },
    stacked: {
      ink: '/brand/logos/aroneu-logo-stacked-ink.svg',
      paper: '/brand/logos/aroneu-logo-stacked-paper.svg',
    },
    monogram: {
      ink: '/brand/logos/aroneu-monogram-a-ink.svg',
      paper: '/brand/logos/aroneu-monogram-a-paper.svg',
    }
  },
  icons: {
    appDark: '/brand/icons/aroneu-app-icon-dark.png',
    appLight: '/brand/icons/aroneu-app-icon-light.png',
    appSignature: '/brand/icons/aroneu-app-icon-signature.png',
    maskable: '/brand/icons/aroneu-maskable-icon-512.png',
  },
  favicon: {
    svg: '/favicon.svg',
    png16: '/favicon-16.png',
    png32: '/favicon-32.png',
    appleTouch: '/apple-touch-icon.png',
  }
};
`;
fs.writeFileSync(path.join(libBrandDir, 'aroneuBrandAssets.ts'), assetsContent.trim() + '\n', 'utf8');

// 2. Logo Component
const logoContent = `
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
      className={\`aroneu-logo \${className}\`} 
      priority
    />
  );
}
`;
fs.writeFileSync(path.join(compBrandDir, 'AroneuLogo.tsx'), logoContent.trim() + '\n', 'utf8');

console.log('Brand components scaffolding complete.');
