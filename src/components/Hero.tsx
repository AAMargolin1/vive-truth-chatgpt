'use client';
// This component is mostly correct, just updating colors and tone.
export default function Hero() {
  return (
    <div className="relative">
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-ink/10 to-cosmic-ink z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-bright tracking-tight leading-tight" style={{ textShadow: '0 0 25px rgba(34, 211, 238, 0.2)' }}>
            The God Hypothesis:
            <br className="hidden md:block" />
            <span className="text-luminous-cyan">An Analytical Investigation</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-text-neutral font-inter">
            A scientist's evidence-based journey from atheism to faith. This is a rigorous, data-driven exploration of the evidence that led to a surprising, world-altering conclusion.
          </p>
          <div className="mt-12 flex flex-col items-center">
            <a href="#argument-flow" className="group font-semibold text-luminous-cyan hover:text-white transition-colors duration-300">
                <svg className="w-10 h-10 text-luminous-cyan mx-auto mb-2 animate-bounce-y" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                Begin the Investigation
            </a>
            <style jsx global>{`.animate-bounce-y { animation: bounceY 2.5s infinite; } @keyframes bounceY { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }`}</style>
          </div>
        </div>
      </section>
    </div>
  );
}