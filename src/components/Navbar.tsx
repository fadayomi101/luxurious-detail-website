/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Exact navigation items from prompt mapped to sections
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Service', href: '#services' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-4 left-0 w-full px-4 sm:px-8 lg:px-16 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* LEFT: Brand logo with luxury vector emblem & typography */}
        <a 
          href="#top" 
          className="flex items-center hover:scale-105 active:scale-95 transition-all group"
          aria-label="LUXURIÖS DETAIL Home"
        >
          {/* Symmetrical Luxury Detail Emblem */}
          <svg 
            className="h-8 w-auto text-brand-accent transition-transform duration-500 group-hover:scale-105" 
            viewBox="0 0 100 70" 
            fill="currentColor"
          >
            {/* Left outer pillar hollow window with finger (evenodd cutout) */}
            <path 
              fillRule="evenodd" 
              clipRule="evenodd"
              d="M 20,62 L 20,35 C 20,27 24,21 34,21 C 36,21 38,22 38,25 L 38,62 Z M 24,57 L 24,39 C 24,31 25,29 27,29 L 27,48 A 2,2 0 0 0 31,48 L 31,27 C 31,25 32,25 34,25 L 34,57 Z" 
            />
            
            {/* Central parallel high-pillars (offset/asymmetrical curves) */}
            <path d="M 41,62 L 41,19 A 6,6 0 0 1 47,13 L 47,62 Z" />
            <path d="M 53,62 L 53,13 A 6,6 0 0 1 59,19 L 59,62 Z" />
            
            {/* Right outer pillar hollow window with finger (perfectly symmetrical mirror) */}
            <path 
              fillRule="evenodd" 
              clipRule="evenodd"
              d="M 80,62 L 80,35 C 80,27 76,21 66,21 C 64,21 62,22 62,25 L 62,62 Z M 76,57 L 76,39 C 76,31 75,29 73,29 L 73,48 A 2,2 0 0 1 69,48 L 69,27 C 69,25 68,25 66,25 L 66,57 Z" 
            />
          </svg>
        </a>

        {/* CENTER (Desktop): liquid-glass pill with Links + Claim active button */}
        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-2 shadow-xl">
          <nav className="flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors font-body tracking-wide relative after:content-[''] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[1px] after:bg-brand-accent after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <button
            onClick={onOpenBooking}
            className="group bg-white text-black px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap flex items-center gap-1.5 hover:bg-brand-bg hover:text-brand-text-dark transition-all duration-200 active:scale-95 shadow-md font-body cursor-pointer"
          >
            <span>Contact Us</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 14 14" 
              fill="none" 
              className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            >
              <path 
                d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* RIGHT: 48x48 spacer (or mobile menu button for responsiveness) */}
        <div className="relative">
          {/* For desktop: 48x48 spacer to balance perfectly */}
          <div className="hidden md:block w-12 h-12 opacity-0 select-none pointer-events-none" />

          {/* For mobile: Sleek hamburger toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-white/90 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[72px] left-4 right-4 liquid-glass rounded-3xl p-6 shadow-2xl flex flex-col gap-5"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-base font-medium text-white/90 hover:text-white transition-colors font-body tracking-wide border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="group w-full bg-white text-black py-3 px-4 text-center text-sm font-semibold rounded-full flex items-center justify-center gap-1.5 hover:bg-brand-bg transition-colors font-body"
            >
              <span>Contact Us</span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                fill="none" 
                className="opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              >
                <path 
                  d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
