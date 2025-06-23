import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'VIVE Truth – The God Hypothesis',
  description: 'An analytical investigation into the evidence for God.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-navy text-gray-200 font-inter antialiased">
        {/* Subtle Cosmic Background */}
        <div className="fixed inset-0 z-[-1] bg-brand-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(52,64,112,0.3),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(100,50,90,0.25),transparent_40%)]"></div>
        </div>

        <Header />
        <div className="relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}