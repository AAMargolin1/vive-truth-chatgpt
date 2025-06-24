import Link from 'next/link';
import CambrianChart from '@/components/CambrianChart';

const SectionDivider = () => <div className="my-20 md:my-28 border-t border-ui-slate/20 max-w-4xl mx-auto"></div>;

const crisisData = [
    { title: 'Crisis 1: The Cosmological Origin', summary: 'Materialism has no explanation for the origin of the universe itself. The Borde-Guth-Vilenkin theorem proves any expanding universe must have a beginning, creating a causal problem science cannot address.'},
    { title: 'Crisis 2: The Design Origin (Fine-Tuning)', summary: 'The physical laws and constants of our universe are exquisitely fine-tuned for life. Materialism\'s only recourse is an unobservable, infinite multiverse—an article of faith, not science.'},
    { title: 'Crisis 3: The Biological Origin (Life)', summary: 'The spontaneous generation of life from non-living chemicals (abiogenesis) is statistically impossible, requiring the simultaneous, unguided formation of functional proteins and instructional DNA.'},
    { title: 'Crisis 4: The Species Origin (Humans)', summary: 'While microevolution is a fact, macroevolution—the origin of new body plans—lacks sufficient explanation and is contradicted by the explosive, top-down appearance of phyla in the fossil record.', chart: true }
];

export default function MaterialismPage() {
  return (
    <main className="section-container animate-fade-in-up">
      <div className="content-wrapper">
        {/* Section 1: Page Header */}
        <div className="text-center max-w-4xl mx-auto">
            <Link href="/" className="mb-8 inline-flex items-center text-sm font-semibold text-luminous-cyan hover:text-white transition-colors">← Back to Main Argument</Link>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-luminous-cyan">The Materialist's Paradox</h1>
            <p className="mt-4 font-inter text-lg md:text-xl text-text-neutral max-w-3xl mx-auto">An analytical audit of the prevailing scientific worldview, arguing it is contradicted by data and requires more unproven assumptions than a theistic framework.</p>
        </div>

        <SectionDivider />

        {/* Section 2: Logical Implications */}
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-text-bright">The Data That Shatters the Paradigm</h2>
            <p className="mt-6 font-inter text-lg text-text-neutral">The falsification of materialism can be framed as a simple logical proof, using verifiable data from clinical studies of consciousness.</p>
        </div>
        <div className="mt-16 living-glass p-8 md:p-12">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-10 text-luminous-cyan">The Syllogism of Consciousness</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
                <div className="flex-1 max-w-sm"><div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center border-2 border-luminous-cyan/30 rounded-full bg-luminous-cyan/10 text-luminous-cyan font-playfair text-3xl">P1</div><h4 className="font-playfair font-bold text-lg text-text-bright">Premise (The Theory)</h4><p className="font-inter text-sm text-text-subtle mt-2">Materialism asserts that consciousness is an emergent property of the physical brain.</p></div>
                <div className="text-5xl font-thin text-ui-slate self-center transform rotate-90 md:rotate-0">+</div>
                <div className="flex-1 max-w-sm"><div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center border-2 border-veridian-teal/30 rounded-full bg-veridian-teal/10 text-veridian-teal font-playfair text-3xl">P2</div><h4 className="font-playfair font-bold text-lg text-text-bright">Premise (The Data)</h4><p className="font-inter text-sm text-text-subtle mt-2">Veridical NDE studies provide verified data of consciousness persisting during clinical death.</p></div>
                <div className="text-5xl font-thin text-ui-slate self-center transform rotate-90 md:rotate-0">=</div>
                <div className="flex-1 max-w-sm"><div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center border-2 border-burnt-amber/40 rounded-full bg-burnt-amber/10 text-burnt-amber font-playfair text-3xl">C</div><h4 className="font-playfair font-bold text-lg text-text-bright">Conclusion (Falsified)</h4><p className="font-inter text-sm text-text-subtle mt-2">Therefore, the materialist assertion is falsified by the available clinical evidence.</p></div>
            </div>
        </div>

        <SectionDivider />

        {/* Section 3: Origin Crises */}
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-text-bright">The Four Origin Crises</h2>
            <p className="mt-6 font-inter text-lg text-text-neutral">Beyond direct falsification, materialism fails to provide coherent, evidence-based explanations for the fundamental questions of origin.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {crisisData.map((crisis) => (
                <div key={crisis.title} className="living-glass-interactive">
                    <h3 className="font-playfair font-bold text-2xl mb-3 text-luminous-cyan">{crisis.title}</h3>
                    <p className="font-inter text-text-neutral">{crisis.summary}</p>
                    {crisis.chart && <CambrianChart />}
                </div>
            ))}
        </div>

        <SectionDivider />

        {/* Section 4: Great Reversal */}
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-text-bright">The Great Reversal: A Balance of Faith</h2>
            <p className="mt-6 font-inter text-lg text-text-neutral">A worldview's strength is measured by what it can explain with the fewest unproven articles of faith. This is a form of Occam's Razor.</p>
        </div>
        <div className="mt-16 living-glass">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="p-8"><h3 className="font-playfair font-bold text-xl mb-6 text-center text-burnt-amber">The Materialist's Ledger of Faith</h3><ul className="space-y-4 font-inter text-text-neutral">{['I have faith that consciousness and reason arose from non-conscious, non-rational matter.', 'I have faith the universe began to exist without a cause, violating known physics.', 'I have faith in an unobservable, infinite multiverse to explain away cosmic fine-tuning.', 'I have faith that life spontaneously organized itself from non-living chemicals against astronomical odds.', 'I have faith that all NDE data from verifiable sources is universally false or misinterpreted.'].map(item => <li key={item} className="flex items-start"><span className="text-burnt-amber/80 mr-4 mt-1 text-lg">✗</span><span>{item}</span></li>)}</ul></div>
                <div className="p-8"><h3 className="font-playfair font-bold text-xl mb-6 text-center text-luminous-cyan">The Theist's Ledger of Faith</h3><ul className="space-y-4 font-inter text-text-neutral">{['I have faith that a transcendent, intelligent Mind is the best explanation for a universe exhibiting the properties of a thought: a beginning, elegant laws, fine-tuning for life, and the presence of other minds.'].map(item => <li key={item} className="flex items-start"><span className="text-luminous-cyan mr-3 mt-1 text-lg">✓</span><span>{item}</span></li>)}</ul></div>
            </div>
        </div>
      </div>
    </main>
  );
}