/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled || location.pathname !== '/' 
        ? 'md:py-4 md:px-8 lg:px-16' 
        : 'md:py-6'
    }`}>
      <div className={`mx-auto flex items-center justify-between transition-all duration-300 max-w-[1400px] ${
        isScrolled || location.pathname !== '/' 
          ? 'bg-white/70 backdrop-blur-md shadow-sm rounded-[2rem] /* mobile only */ md:rounded-full px-4 sm:px-8 md:px-8 py-4 md:py-3' 
          : 'bg-transparent px-4 sm:px-8 lg:px-16 py-6 md:py-0'
      }`}>
        {/* LEFT: Brand logo with luxury vector emblem & typography */}
        <Link 
          to="/" 
          className="flex items-center hover:scale-105 active:scale-95 transition-all group"
          aria-label="LUXURIÖS DETAIL Home"
        >
          {/* Symmetrical Luxury Detail Emblem */}
          <svg 
            className={`h-8 w-auto transition-transform duration-500 group-hover:scale-105 ${
              location.pathname !== '/' 
                ? 'text-[#CD1C24]' 
                : isScrolled 
                  ? 'text-gray-900 group-hover:text-[#CD1C24]' 
                  : 'text-white group-hover:text-[#CD1C24]'
            }`}
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
        </Link>

        {/* CENTER (Desktop): Links + Claim active button */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors font-body tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:bg-current after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 ${isScrolled || location.pathname !== '/' ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <Link
            to="/contact"
            className={`group px-6 py-2.5 text-sm font-bold rounded-full whitespace-nowrap flex items-center gap-1.5 transition-all duration-200 active:scale-95 shadow-md font-body cursor-pointer ${isScrolled || location.pathname !== '/' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'}`}
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
          </Link>
        </div>

        {/* RIGHT: 48x48 spacer (or mobile menu button for responsiveness) */}
        <div className="relative">
          {/* For desktop: 48x48 spacer to balance perfectly */}
          <div className="hidden md:block w-12 h-12 opacity-0 select-none pointer-events-none" />

          {/* For mobile: Sleek hamburger toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer ${isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className={`md:hidden absolute left-4 right-4 rounded-3xl p-6 shadow-2xl flex flex-col gap-5 ${isScrolled ? 'top-16 bg-white border border-gray-100' : 'top-[72px] liquid-glass'}`}
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-base font-bold transition-colors font-body tracking-wide border-b ${isScrolled || location.pathname !== '/' ? 'text-gray-900 border-gray-100 hover:text-brand-accent' : 'text-white/90 border-white/5 hover:text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`group w-full py-3 px-4 text-center text-sm font-bold rounded-full flex items-center justify-center gap-1.5 transition-colors font-body ${isScrolled || location.pathname !== '/' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-brand-bg relative z-50'}`}
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
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
