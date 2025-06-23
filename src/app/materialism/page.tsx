import Link from 'next/link';
import CambrianChart from '@/components/CambrianChart';

const SectionDivider = () => <hr className="my-16 border-t border-gray-800" />;

const crisisData = [
    { title: 'Crisis 1: The Cosmological Origin', summary: 'Materialism has no explanation for the origin of the universe itself. The Borde-Guth-Vilenkin theorem proves any expanding universe must have a beginning. The question "What caused the Big Bang?" is one science cannot answer, as the cause must be outside of space and time.'},
    { title: 'Crisis 2: The Design Origin (Fine-Tuning)', summary: 'The physical laws and constants of the universe are balanced on a razor\'s edge. To explain this, materialism posits an unobservable, infinite multiverse—a faith-based, unscientific proposition.'},
    { title: 'Crisis 3: The Biological Origin (Life)', summary: 'The spontaneous generation of life from non-living chemicals (abiogenesis) is statistically impossible. It requires functional proteins and instructional DNA to exist simultaneously. The "primordial soup" is now considered a myth by many researchers.'},
    { title: 'Crisis 4: The Species Origin (Humans)', summary: 'While microevolution is a fact, macroevolution—the idea that unguided natural selection can create fundamentally new body plans and the information for them—is a theory in crisis, contradicted by the fossil record, most notably the Cambrian Explosion.', chart: true }
];

export default function MaterialismPage() {
  return (
    <main className="py-16 sm:py-20">
      {/* Page container is now wider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <Link href="/" className="mb-8 inline-flex items-center text-sm font-semibold text-accent-gold hover:text-amber-300 transition-colors">← Back to Main Argument</Link>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center text-accent-gold">The Materialist's Paradox</h1>
            <p className="mt-4 font-inter text-xl text-gray-300 text-center max-w-3xl mx-auto">An Analytical Audit of the Prevailing Scientific Worldview</p>
        </div>

        <SectionDivider />

        <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-100">The Data That Shatters the Paradigm</h2>
            <p className="mt-6 font-inter text-lg text-gray-300 text-center">The most direct falsification of materialism comes from a large, well-documented, and peer-reviewed body of evidence: <strong>veridical Near-Death Experiences (NDEs).</strong> These are cases where individuals, while clinically dead with no measurable brain activity, report accurate perceptions of events outside the reach of their physical senses.</p>
        </div>
        
        {/* REDESIGNED: Logical Implications Section */}
        <div className="mt-16 glass-card p-8 md:p-12">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-8 text-amber-400">The Logical Implication of Veridical NDEs</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
                {/* Premise 1 */}
                <div className="flex-1 max-w-sm"><div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center border-2 border-accent-gold/50 rounded-full bg-accent-gold/10 text-accent-gold font-playfair text-3xl">1</div><h4 className="font-playfair font-bold text-lg text-gray-100">Premise (Materialism)</h4><p className="font-inter text-sm text-gray-400 mt-2">Consciousness is a product of the physical brain. No brain activity = no consciousness.</p></div>
                
                <div className="text-5xl font-thin text-gray-600 self-center transform rotate-90 md:rotate-0">+</div>

                {/* Premise 2 */}
                <div className="flex-1 max-w-sm"><div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center border-2 border-blue-400/50 rounded-full bg-blue-400/10 text-blue-400 font-playfair text-3xl">2</div><h4 className="font-playfair font-bold text-lg text-gray-100">Premise (The Data)</h4><p className="font-inter text-sm text-gray-400 mt-2">Verified cases show consciousness and perception occur with no measurable brain activity.</p></div>
                
                <div className="text-5xl font-thin text-gray-600 self-center transform rotate-90 md:rotate-0">=</div>

                {/* Conclusion */}
                <div className="flex-1 max-w-sm"><div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center border-2 border-red-500/50 rounded-full bg-red-500/10 text-red-500 font-playfair text-3xl">!</div><h4 className="font-playfair font-bold text-lg text-gray-100">Conclusion (Falsified)</h4><p className="font-inter text-sm text-gray-400 mt-2">The core claim of materialism is contradicted by objective, repeatable data.</p></div>
            </div>
        </div>
        
        <SectionDivider />

        <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-100">The Four Origin Crises</h2>
            <p className="mt-6 font-inter text-lg text-gray-300 text-center">Beyond the direct falsification from NDEs, materialism fails to provide any coherent, evidence-based explanation for the fundamental questions of origin.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {crisisData.map((crisis, index) => (
                // Applying the interactive card style here
                <div key={index} className="glass-card-interactive p-8">
                    <h3 className="font-playfair font-bold text-2xl mb-3 text-amber-400">{crisis.title}</h3>
                    <p className="font-inter text-gray-300">{crisis.summary}</p>
                    {crisis.chart && <CambrianChart />}
                </div>
            ))}
        </div>

        <SectionDivider />
        
        <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-100">The Great Reversal: A Balance of Faith</h2>
            <p className="mt-6 font-inter text-lg text-gray-300 text-center">The evidence suggests a reversal of the common narrative. A worldview's strength is measured by what it can explain with the fewest unproven articles of faith.</p>
        </div>
        {/* REDESIGNED: Great Reversal Section */}
        <div className="mt-16 glass-card">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
                <div className="p-8"><h3 className="font-playfair font-bold text-xl mb-4 text-center text-red-400">The Materialist's Ledger of Faith</h3><ul className="space-y-4 font-inter text-gray-300">{['I have faith that consciousness and reason arose from non-conscious, non-rational matter.', 'I have faith the universe began to exist without a cause, violating known physics.', 'I have faith in an unobservable, infinite multiverse to explain away cosmic fine-tuning.', 'I have faith that life spontaneously organized itself from non-living chemicals against astronomical odds.', 'I have faith that all NDE data from verifiable sources is universally false or misinterpreted.'].map(item => <li key={item} className="flex items-start"><span className="text-red-500 mr-3 mt-1">✗</span><span>{item}</span></li>)}</ul></div>
                <div className="p-8"><h3 className="font-playfair font-bold text-xl mb-4 text-center text-blue-400">The Theist's Ledger of Faith</h3><ul className="space-y-4 font-inter text-gray-300">{['I have faith that a transcendent, intelligent Mind is the best explanation for a universe exhibiting the properties of a thought: a beginning, elegant laws, fine-tuning for life, and the presence of other minds.'].map(item => <li key={item} className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✓</span><span>{item}</span></li>)}</ul></div>
            </div>
        </div>
      </div>
    </main>
  );
}