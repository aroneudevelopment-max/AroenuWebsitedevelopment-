import React from 'react';
import { SectionContent } from "@/lib/content/types";

export interface AnswerBlockProps {
 eyebrow?: string;
 heading?: string;
 subcopy?: string;
 data?: SectionContent;
}

export function AnswerBlock(props: AnswerBlockProps) {
 const heading = props.heading || props.data?.heading;
 const body = props.subcopy || props.data?.body;
 
 return (
 <section className="section-aroneu surface-sand">
 <div className="container-aroneu max-w-4xl mx-auto text-center">
 {heading && <h2 className="heading-aroneu mb-6">{heading}</h2>}
 {body && <p className="body-aroneu text-xl opacity-80 font-medium">{body}</p>}
 </div>
 </section>
 );
}
