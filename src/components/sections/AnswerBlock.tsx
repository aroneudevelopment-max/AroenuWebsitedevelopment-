import React from 'react';

export interface AnswerBlockProps {
  eyebrow?: string;
  heading?: string;
  subcopy?: string;
  data?: any;
}

export function AnswerBlock(props: AnswerBlockProps) {
  const heading = props.heading || props.data?.heading;
  const body = props.subcopy || props.data?.body;
  
  return (
    <section className="section-aroneu py-16 bg-zinc-50 dark:bg-zinc-900">
      <div className="container-aroneu max-w-4xl mx-auto text-center">
        {heading && <h2 className="heading-aroneu mb-6">{heading}</h2>}
        {body && <p className="body-aroneu text-xl text-zinc-700 dark:text-zinc-300 font-medium">{body}</p>}
      </div>
    </section>
  );
}
