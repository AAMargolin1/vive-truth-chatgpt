import Link from 'next/link';
import ArgumentFlow from '@/components/ArgumentFlow'; // Import the new component

// This is the Hero Section component
function Hero() {
  return (
    <section className="relative flex h-[60vh] md:h-[80vh] items-center justify-center overflow-hidden bg-brand-navy">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 to-brand-navy" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-playfair text-4xl font-semibold leading-tight text-white md:text-6xl">
          The God&nbsp;Hypothesis:
          <br className="hidden md:block" />
          <span className="text-accent-gold">An Analytical&nbsp;Investigation</span>
        </h1>

        <p className="mt-6 text-lg text-gray-200 md:text-xl">
          Explore meticulous, science-driven arguments that challenge the materialist worldview and
          point powerfully toward an intelligent Creator.
        </p>

        <Link
          href="#argument-flow"
          className="group mt-12 inline-flex flex-col items-center text-accent-gold"
        >
          <span className="font-inter text-sm uppercase tracking-wider">
            Explore&nbsp;the&nbsp;Evidence
          </span>
          <svg
            className="mt-2 h-6 w-6 animate-bounce text-accent-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

// This is the main page export
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ArgumentFlow /> {/* Add the new component here */}
    </main>
  );
}