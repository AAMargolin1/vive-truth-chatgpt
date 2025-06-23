import Link from 'next/link';
import GenesisTimelineChart from '@/components/GenesisTimelineChart';

const SectionDivider = () => <hr className="my-12 border-t border-gray-700 md:my-16" />;

const creationEventsData = [
  { day: 1, title: 'A Beginning & First Light', claims: [ {c: 'The Universe had a beginning.', s: 'Science confirms a finite beginning—The Big Bang.'}, {c: 'Earth was "formless and empty," dark, and covered in water.', s:'Scientific models show exactly this: a dark, water-enveloped protoplanet.'}, {c: '"Let there be light."', s:'This corresponds to the atmosphere thinning to become translucent, allowing diffuse light to reach the surface.'} ]},
  { day: 2, title: 'Atmosphere Forms', claims: [ {c: 'Separation of "waters above" from "waters below."', s:'This poetically describes the formation of a stable atmosphere and water cycle, with oceans below and vapor/clouds above.'} ]},
  { day: 3, title: 'Dry Land & Plants', claims: [ {c:'Dry land appears.', s:'Tectonic activity pushed continents above the early global ocean.'}, {c:'Land produces vegetation.', s:'Plant life was the first to colonize the new continents, a necessary precursor for animal life.'} ]},
  { day: 4, title: 'Sun, Moon, Stars Appear', claims: [ {c:'Celestial bodies appear "for signs and for seasons".', s:"From Earth's surface, this is when the atmosphere cleared from translucent to transparent, making the sun, moon, and stars visible as distinct objects for the first time."} ]},
  { day: 5, title: 'Small Sea & Flying Creatures', claims: [ {c:'Waters teem with swarms of living creatures, and birds fly.', s:'This matches the fossil record: the Cambrian Explosion of small sea animals, followed by flying insects and later, birds.'} ]},
  { day: 6, title: 'Land Animals & Humans', claims: [ {c:'Land animals are created.', s:'Fossil record confirms land animals became abundant after sea and air life.'}, {c:'Humankind is created last.', s:'Science is unequivocal that anatomically modern humans appear very late in the geological record, the final major addition.'} ]}
];

const comparisonTableData = [
    { feature: 'Nature of God(s)', genesis: 'One, transcendent, pre-existent God', enuma: 'Many gods, born of chaos, who fight and kill each other', egyptian: 'Many gods, often zoomorphic, emerging from a primordial ocean' },
    { feature: 'Creation Process', genesis: 'Orderly, by divine command ("Let there be...")', enuma: 'Violent combat; world made from the corpse of a slain goddess', egyptian: 'Often through magical utterance or bodily fluids of a god' },
    { feature: 'Origin of Humanity', genesis: "Pinnacle of creation, made in God's image", enuma: 'An afterthought, made from demon blood to be slaves for the gods', egyptian: 'Typically formed from clay or the tears of a god' },
    { feature: 'Scientific Correlation', genesis: 'High degree of correspondence with cosmology', enuma: 'No correspondence', egyptian: 'No correspondence' },
];

export default function CreationPage() {
  return (
    <main className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mb-8 inline-flex items-center text-sm font-semibold text-accent-gold hover:text-amber-300 transition-colors">← Back to Main Argument</Link>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center text-accent-gold">A Scientific Audit of Genesis</h1>
        <p className="mt-4 font-inter text-xl text-gray-300 max-w-3xl mx-auto text-center">An investigation into whether the Bible’s most ancient account of creation stands up to the scrutiny of 21st-century science.</p>
        <SectionDivider />
        <section>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-100">Genesis 1 as a Testable Scientific Model</h2>
          <p className="mt-6 font-inter text-lg text-gray-300 max-w-4xl mx-auto text-center">We approach Genesis 1 as a list of initial conditions and creation events from the frame of reference of Earth's surface. Let's audit its claims against the scientific record.</p>
          <div className="mt-6"><GenesisTimelineChart /></div>
        </section>
        <SectionDivider />
        <section>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-100">Creation Event Analysis</h2>
          <div className="mt-12 space-y-12">{creationEventsData.map((event) => (<div key={event.day} className="border border-gray-700/50 bg-gray-900/80 backdrop-blur-md rounded-lg p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center"><div className="md:col-span-1 text-center"><h3 className="font-playfair text-5xl font-bold text-accent-gold">Day {event.day}</h3><p className="font-playfair text-xl font-semibold text-gray-100 mt-2">{event.title}</p></div><div className="md:col-span-2">{event.claims.map((claim, index) => (<div key={index} className={index > 0 ? 'mt-4' : ''}><h4 className="font-playfair text-xl font-bold text-amber-400">{claim.c}</h4><p className="mt-2 font-inter text-gray-300">{claim.s}</p></div>))}</div></div>))}</div>
        </section>
        <SectionDivider />
        <section>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-100">How Does Genesis Compare to Other Ancient Myths?</h2>
          <div className="mt-12 border border-gray-700/50 bg-gray-900/80 backdrop-blur-md rounded-lg p-2 md:p-4 overflow-x-auto"><table className="w-full min-w-[700px] text-left"><thead><tr className="border-b border-gray-700"><th className="p-3 md:p-4 font-playfair font-bold text-lg text-gray-100">Feature</th><th className="p-3 md:p-4 font-playfair font-bold text-lg text-accent-gold">Genesis 1</th><th className="p-3 md:p-4 font-playfair font-bold text-lg text-gray-100">Enuma Elish (Babylonian)</th><th className="p-3 md:p-4 font-playfair font-bold text-lg text-gray-100">Egyptian Myths</th></tr></thead><tbody className="divide-y divide-gray-700/50 font-inter text-gray-300">{comparisonTableData.map(row => (<tr key={row.feature}><td className="p-3 md:p-4 font-semibold text-gray-100">{row.feature}</td><td className="p-3 md:p-4">{row.genesis}</td><td className="p-3 md:p-4">{row.enuma}</td><td className="p-3 md:p-4">{row.egyptian}</td></tr>))}</tbody></table></div>
        </section>
      </div>
    </main>
  );
}