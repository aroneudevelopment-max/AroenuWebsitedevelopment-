import React from 'react';

export interface FeatureGridProps {
  eyebrow?: string;
  heading?: string;
  subcopy?: string;
}

export function FeatureGrid(props: FeatureGridProps) {
  return (
    <section className="section-aroneu">
      <div className="container-aroneu">
        {props.heading && <h2 className="text-h2">{props.heading}</h2>}
      </div>
    </section>
  );
}
