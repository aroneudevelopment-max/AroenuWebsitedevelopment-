import React from 'react';

export function InsightAnswerBlock({ heading, body }: { heading?: string, body?: string }) {
 if (!body) return null;
 
 return (
 <section className="py-12">
 <div className="container-aroneu max-w-3xl mx-auto">
 <div className="bg-[#FAF9F6] border-l-4 border-black p-8 rounded-r-xl shadow-sm">
 {heading && (
 <h2 className="text-xl font-medium mb-4">
 {heading}
 </h2>
 )}
 <p className="text-body opacity-80">
 {body}
 </p>
 </div>
 </div>
 </section>
 );
}
