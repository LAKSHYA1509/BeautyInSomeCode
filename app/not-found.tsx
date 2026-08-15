import Link from "next/link"

// Replaces the old app/NotFound.tsx, which was a Vite/react-router leftover.
// Next only picks up a lowercase `not-found.tsx`, so that file never rendered —
// and it was one of the last two things importing react-router-dom.

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0D0D0D] px-6 text-center">
      <span className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-[#C9A962]">
        404
      </span>

      <h1 className="mb-4 text-4xl font-light tracking-tight text-[#E8E8E8] sm:text-5xl md:text-6xl">
        This page doesn&apos;t exist.
      </h1>

      <p className="mb-10 max-w-md text-base leading-relaxed text-[#888888]">
        Either it moved, or it never did. Both happen.
      </p>

      <Link
        href="/"
        className="group inline-flex items-center gap-2 border-b border-[#C9A962] pb-1 text-lg text-[#E8E8E8] transition-all duration-300 hover:border-transparent hover:text-[#C9A962]"
      >
        Back home
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
    </main>
  )
}
