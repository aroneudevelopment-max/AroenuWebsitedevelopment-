"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] p-8 surface-paper">
      <div className="container-aroneu max-w-xl text-center">
        <span className="text-label uppercase tracking-widest text-zinc-500 block mb-4">
          Error
        </span>
        <h1 className="text-h1 mb-6">Something went wrong.</h1>
        <p className="text-body text-zinc-600 mb-10">
          The page failed to load. Please try again. If the problem
          continues, contact Aroneu.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block px-8 py-4 rounded-full text-base font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
