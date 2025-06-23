'use client';

export default function Hero() {
  return (
    <div className="relative">
      {/* Three.js canvas will be implemented in Stage 2. This placeholder mimics the structure. */}
      <div className="absolute inset-0 bg-brand-navy z-0">
          <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-sm">
           [Three.js Animated Background Placeholder]
         </div>
      </div>

      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Gradient overlay to ensure text readability over the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0f1f] z-10"></div>
        <div className="relative z-20 px-4">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight"
            style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
          >
            The God Hypothesis: An Analytical Investigation
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-inter">
            An analytical, evidence-based investigation of the hypothesis that God created the Universe, precisely prophesied the Messiah, Jesus Christ, for over 1,000 years, and definitively demonstrated His divine authority through Christ's resurrection from the dead.
          </p>
          <div className="mt-10 flex flex-col items-center">
            {/* The <a> tag with href pointing to an ID on the same page will trigger smooth scroll by default in modern browsers */}
            <a href="#argument-flow" className="group text-lg font-semibold accent-gold hover:text-amber-300">
                <svg className="w-10 h-10 text-amber-500 mx-auto mb-2 animate-bounce-y" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
                Explore the Evidence
            </a>
            {/* Define the animation directly here for simplicity */}
            <style jsx global>{`
                .animate-bounce-y { animation: bounceY 2s infinite; }
                @keyframes bounceY { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
            `}</style>
          </div>
        </div>
      </section>
    </div>
  );
}