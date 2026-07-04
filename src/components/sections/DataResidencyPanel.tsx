import React from 'react';

export interface DataResidencyPanelProps {
 eyebrow?: string;
 heading?: string;
 subcopy?: string;
}

export function DataResidencyPanel(props: DataResidencyPanelProps) {
 return (
 <section className="section-aroneu">
 <div className="container-aroneu">
 {props.heading && <h2 className="text-h2">{props.heading}</h2>}
 </div>
 </section>
 );
}
