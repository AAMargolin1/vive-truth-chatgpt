// src/components/ArgumentFlow.tsx
import Link from 'next/link';

const argumentCards = [
  {
    slug: 'materialists-paradox',
    icon: (
      <svg
        className="h-6 w-6 text-accent-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L5.636 18.364m12.728 0L5.636 5.636"
        />
      </svg>
    ),
    title: "1. The Materialist's Paradox",
    description:
      "An analytical audit of the prevailing scientific worldview, arguing it is falsified by data and requires more blind faith than theism.",
    linkText: 'Explore the Evidence',
  },
  {
    slug: 'scientific-audit-of-genesis',
    icon: (
      <svg
        className="h-6 w-6 text-accent-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: '2. A Scientific Audit of Genesis',
    description:
      'Testing Genesis 1 as a scientific model against cosmology, demonstrating its superior predictive power over competing ancient myths and even naturalism.',
    linkText: 'Analyze the Design',
  },
  {
    slug: 'divine-echo',
    icon: (
      <svg
        className="h-6 w-6 text-accent-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M4 17h2m2 0h2m-4 4h4m4-16h2m2 0h2m-4-4v4m4 0v4m-4-4h4m-2 12h2m2 0h2M7 7l10 10M7 17L17 7"
        />
      </svg>
    ),
    title: '3. The Divine Echo',
    description:
      'Applying a rigorous analytical framework to distinguish divinely authored foreshadowing (typology) from mere coincidence in the Old Testament.',
    linkText: 'Uncover the Patterns',
  },
  {
    slug: 'prophetic-fingerprint',
    icon: (
      <svg
        className="h-6 w-6 text-accent-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v11.494m-9-5.747h18"
        />
        <path d="M12 6.253a4.5 4.5 0 00-4.5 4.5v2.494a4.5 4.5 0 009 0v-2.494a4.5 4.5 0 00-4.5-4.5z" />
      </svg>
    ),
    title: '4. The Prophetic Fingerprint',
    description:
      'Evaluating Messianic prophecy as objective, falsifiable evidence using an analytical framework to score for specificity and historical confirmation.',
    linkText: 'Examine the Predictions',
  },
  {
    slug: 'gospels-on-trial',
    icon: (
      <svg
        className="h-6 w-6 text-accent-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v11.494m-9-5.747h18"
        />
        <path d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 15.75h16.5M3.75 8.25h16.5" />
      </svg>
    ),
    title: '5. The Gospels on Trial',
    description:
      'A forensic investigation into the historical reliability of the Gospels using the standard tests of historiography and evidence from undesigned coincidences.',
    linkText: 'Weigh the Testimony',
  },
  {
    slug: 'autopsy-of-history',
    icon: (
      <svg
        className="h-6 w-6 text-accent-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14l-4-4m4 4l4-4" />
        <path d="M3 10h18M3 5h18" />
      </svg>
    ),
    title: '6. An Autopsy of History',
    description:
      'A forensic investigation of the resurrection, using bedrock facts accepted by mainstream scholars to demonstrate it as the inference to the best explanation.',
    linkText: 'Investigate the Central Claim',
  },
];

const bonusCard = {
  slug: 'beyond-the-brain',
  title: 'Bonus: Beyond the Brain',
  description:
    'An analytical investigation of Near-Death Experiences, presenting both the objective evidence that falsifies materialism and the subjective data that corroborates a biblical worldview.',
  linkText: 'Consider Modern Evidence',
};

export default function ArgumentFlow() {
  return (
    <section id="argument-flow" className="bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold text-white md:text-4xl">
            A Rational Path to Faith
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
            The case for Christianity is not a blind leap, but a logical progression built on
            cumulative evidence. Each step below builds upon the last, forming a coherent and
            powerful argument.
          </p>
        </div>

        {/* Main Argument Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {argumentCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-accent-gold/50 hover:shadow-2xl hover:shadow-accent-gold/10"
            >
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800">
                  {card.icon}
                </div>
              </div>
              <div className="mt-6 flex-grow">
                <h3 className="font-playfair text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-base text-gray-400">{card.description}</p>
              </div>
              <div className="mt-6">
                <Link
                  href={`/argument/${card.slug}`}
                  className="font-semibold text-accent-gold transition hover:text-amber-300"
                >
                  {card.linkText} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Card */}
        <div className="mt-10 flex justify-center">
          <div className="flex w-full flex-col items-center rounded-lg border border-gray-800 bg-gray-900/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-accent-gold/50 hover:shadow-2xl hover:shadow-accent-gold/10 md:flex-row lg:w-2/3">
            <div className="mb-6 flex-shrink-0 md:mb-0 md:mr-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
                <svg
                  className="h-8 w-8 text-accent-gold"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 006-6c0-1.791-.76-3.414-2-4.625a6 6 0 00-4-1.625a6 6 0 00-4 1.625a6 6 0 00-2 4.625a6 6 0 006 6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15.75a3.75 3.75 0 003.75-3.75c0-1.12-.485-2.14-1.28-2.835a3.75 3.75 0 00-4.94 0c-.795.695-1.28 1.715-1.28 2.835A3.75 3.75 0 0012 15.75z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="font-playfair text-xl font-bold text-white">{bonusCard.title}</h3>
              <p className="mt-2 text-base text-gray-400">{bonusCard.description}</p>
              <div className="mt-4">
                <Link
                  href={`/argument/${bonusCard.slug}`}
                  className="font-semibold text-accent-gold transition hover:text-amber-300"
                >
                  {bonusCard.linkText} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}