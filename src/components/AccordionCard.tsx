// src/components/AccordionCard.tsx
'use client';

import { useState } from 'react';

type AccordionCardProps = {
  title: string;
  content: string;
};

export default function AccordionCard({ title, content }: AccordionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800 bg-gray-900/50 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <svg
          className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? '1000px' : '0px' }} // A simple way to animate height
      >
        <div
          className="p-6 pt-0 text-gray-300 prose prose-invert prose-p:text-gray-300 prose-li:text-gray-300"
          dangerouslySetInnerHTML={{ __html: content }} // Renders the HTML from our data file
        />
      </div>
    </div>
  );
}