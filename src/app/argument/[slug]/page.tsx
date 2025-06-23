// src/app/argument/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { argumentsData } from '@/lib/arguments';
import AccordionCard from '@/components/AccordionCard';
import GenesisTimelineChart from '@/components/GenesisTimelineChart';
import GospelsManuscriptChart from '@/components/GospelsManuscriptChart'; // 1. Import the new chart

export default function ArgumentPage({ params }: { params: { slug: string } }) {
  const argument = argumentsData.find((arg) => arg.slug === params.slug);

  if (!argument) {
    notFound();
  }

  return (
    <main className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back Button */}
        <Link
          href="/#argument-flow"
          className="inline-flex items-center text-accent-gold hover:text-amber-300 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Arguments
        </Link>

        {/* Page Header */}
        <div className="text-center my-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            {argument.title}
          </h1>
          <p className="mt-4 text-lg text-gray-300">{argument.subtitle}</p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {argument.cards.map((card, index) => (
            <AccordionCard key={index} title={card.title} content={card.content} />
          ))}
        </div>

        {/* Conditionally render charts based on slug */}
        {argument.slug === 'scientific-audit-of-genesis' && <GenesisTimelineChart />}
        {argument.slug === 'gospels-on-trial' && <GospelsManuscriptChart />}
      </div>
    </main>
  );
}