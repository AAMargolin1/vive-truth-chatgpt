'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-brand-navy/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-xl font-playfair font-semibold text-white">
          VIVE&nbsp;Truth
        </Link>

        <nav className="hidden gap-8 md:flex">
          {['Home', 'Simulations', 'About'].map((item) => (
            <Link
              key={item}
              href="#"
              className="font-inter text-sm text-gray-200 transition hover:text-accent-gold"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger (non-functional placeholder) */}
        <button className="flex md:hidden" aria-label="Open Menu">
          <svg
            className="h-6 w-6 stroke-gray-200"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
