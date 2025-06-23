'use client';

import { useState, useRef } from 'react';

type ExpandableCardProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode; // The expandable content
};

export default function ExpandableCard({ title, subtitle, children }: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border border-gray-700/50 bg-gray-900/80 backdrop-blur-md rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center cursor-pointer hover:bg-gray-800/50 transition-colors"
      >
        <div>
          <h3 className="font-playfair font-bold text-xl text-accent-gold">{title}</h3>
          {subtitle && <p className="font-inter text-sm text-gray-400 mt-1">{subtitle}</p>}
        </div>
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
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
        className="overflow-hidden transition-all duration-700 ease-in-out"
      >
        {/* The content inside is only rendered when the section is open, for performance */}
        {isOpen && (
          <div className="border-t border-gray-700/50 p-6">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}