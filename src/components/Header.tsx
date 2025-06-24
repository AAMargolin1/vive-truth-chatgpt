'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [ { href: '/', text: 'Home' }, { href: '/materialism', text: 'Materialism' }, { href: '/creation', text: 'Creation' }, { href: '/foreshadowing', text: 'Foreshadowing' }, { href: '/prophecies', text: 'Prophecies' }, { href: '/gospels', text: 'Gospels' }, { href: '/resurrection', text: 'Resurrection' }, { href: '/ndes', text: 'NDEs' }, ];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-cosmic-ink/80 border-b border-ui-slate/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-playfair font-bold text-text-bright">
          VIVE<span className="text-luminous-cyan">Truth</span>
        </Link>
        <nav className="hidden md:flex items-baseline space-x-1">
          {navLinks.map((link) => (
            <Link key={link.text} href={link.href} className={`font-inter text-sm px-3 py-2 rounded-md transition-colors ${ pathname === link.href ? 'text-luminous-cyan bg-ui-hover' : 'text-text-neutral hover:text-text-bright hover:bg-ui-hover' }`}>
              {link.text}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu... (code is the same, just included for completeness) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-text-neutral hover:text-text-bright focus:outline-none">
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && <div className="md:hidden"><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{navLinks.map((link) => ( <Link key={`mobile-${link.text}`} href={link.href} className={`block font-inter text-base px-3 py-2 rounded-md transition-colors ${ pathname === link.href ? 'text-luminous-cyan bg-ui-slate/50' : 'text-text-neutral hover:text-text-bright hover:bg-ui-slate/50' }`}>{link.text}</Link>))}</div></div>}
    </header>
  );
}