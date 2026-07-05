import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] p-8 surface-paper">
      <div className="container-aroneu max-w-xl text-center">
        <span className="text-label uppercase tracking-widest text-zinc-500 block mb-4">
          404
        </span>
        <h1 className="text-h1 mb-6">Not found.</h1>
        <p className="text-body text-zinc-600 mb-10">
          The page you tried to open does not exist on the Aroneu website.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-full text-base font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
