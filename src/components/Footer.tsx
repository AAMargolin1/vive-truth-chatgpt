export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-16 md:mt-24">
      <div className="mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <h3 className="font-playfair text-2xl font-bold">
          <span className="text-accent-gold">VIVE</span>
          <span className="text-white"> Truth</span>
        </h3>
        <p className="mt-4 max-w-2xl mx-auto font-inter">
          VIVE Truth is a project dedicated to the rigorous, analytical exploration of the evidence for Christianity. We believe that faith is not a blind leap, but a reasoned trust in a God
          who has revealed Himself through creation, history, and the person of Jesus Christ. Our mission is to present this evidence clearly and compellingly for a skeptical world.
        </p>
        <p className="mt-8 text-sm font-inter text-gray-500">
          © 2024 VIVE Truth. All Rights Reserved. Content is for informational and educational purposes.
        </p>
      </div>
    </footer>
  );
}