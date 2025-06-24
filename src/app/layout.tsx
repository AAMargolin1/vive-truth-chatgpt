import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'VIVE Truth – An Analytical Investigation',
  description: 'A scientist\'s evidence-based journey from atheism to faith.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* The body now has the pure black background */}
      <body className="text-text-neutral font-inter antialiased bg-cosmic-ink">

        <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden">
          {/* This container will drift, moving the radial gradients with it */}
          <div className="relative h-full w-full animate-aurora-drift [animation-duration:60s]">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(34,211,238,0.15),transparent)]"></div>
            <div className="absolute bottom-[-10%] right-[-20%] top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(192,38,211,0.15),transparent)] [animation-delay:-30s]"></div>
          </div>
        </div>
        
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}