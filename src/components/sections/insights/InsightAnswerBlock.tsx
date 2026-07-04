import React from 'react';

export function InsightAnswerBlock({ heading, body }: { heading?: string, body?: string }) {
  if (!body) return null;
  
  return (
    <section className="py-12">
      <div className="container-aroneu max-w-3xl mx-auto">
        <div className="bg-[#FAF9F6] dark:bg-zinc-900 border-l-4 border-black dark:border-white p-8 rounded-r-xl shadow-sm">
          {heading && (
            <h2 className="text-xl font-medium mb-4 text-black dark:text-white">
              {heading}
            </h2>
          )}
          <p className="text-body text-zinc-800 dark:text-zinc-200">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
