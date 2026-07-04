import React from 'react';

export interface ProductVisualProps {
  eyebrow?: string;
  heading?: string;
  subcopy?: string;
}

export function ProductVisual(props: ProductVisualProps) {
  return (
    <section className="section-aroneu">
      <div className="container-aroneu">
        {props.heading && <h2 className="text-h2">{props.heading}</h2>}
      </div>
    </section>
  );
}
