import React from 'react';

export interface CardProps {
  title?: string; body?: string; children?: React.ReactNode; variant?: "sharp" | "soft" | "glass" | "metric" | "product" | "caseStudy" | "article" | "job";
}

export function Card(props: CardProps) {
  return (
    <div className="card-component">
      {/* TODO: Implement Card UI using tokens */}
      
      
      {props.children}
    </div>
  );
}
