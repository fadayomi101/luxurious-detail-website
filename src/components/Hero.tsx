/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Clock, Star, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-brand-dark flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-36 pb-16"
    >
      {/* Background Video with premium high-contrast overlays */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          src="assets/ui-flow.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-65 pointer-events-none select-none"
        />
        {/* Soft luxury brand gradient overlays to preserve deep typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F10] via-[#0F0F10]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-transparent to-[#0F0F10]/40" />
        {/* Soft secondary color glow */}
        <div 
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" 
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-left flex flex-col items-start">
        
        {/* Vector representation of the user-uploaded brand logo (LUXURIÖS DETAIL) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start gap-3 mb-10 group"
        >
          {/* Symmetrical Luxury Detail Emblem */}
          <div className="flex items-center gap-4">
            <svg 
              className="h-14 w-auto text-brand-accent transition-transform duration-500 hover:scale-105" 
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
            
            <div className="flex flex-col">
              <span className="text-white font-sans text-2xl font-black tracking-[0.3em] uppercase leading-none">
                LUXURIÖS
              </span>
              <span className="text-brand-accent font-sans text-[10px] font-bold tracking-[0.45em] uppercase mt-1 flex items-center gap-1.5 opacity-90">
                <span className="w-4 h-[1px] bg-brand-accent/55" />
                DETAIL
                <span className="w-4 h-[1px] bg-brand-accent/55" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="inline-flex items-center space-x-2 text-brand-accent tracking-[0.25em] font-bold text-xs uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 bg-brand-accent inline-block rounded-full animate-pulse" />
          <span>The Ultimate Detailing Sanctuary</span>
        </motion.div>

        {/* Massive condensed title */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="font-hero text-[clamp(48px,12vw,135px)] font-black italic uppercase leading-[0.82] text-white tracking-tighter mb-8"
        >
          BREEZY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">CAR DETAIL</span>
        </motion.h1>

        {/* Subtitle in the Barlow/Inter body font */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/85 font-body text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-[550px] mb-12"
        >
          Crafting concourse-level brilliance through extreme hand calibration, high-performance steam filtration, and elite ceramic shell defense systems.
        </motion.p>

        {/* Solid CTA & Secondary Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="group bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-xs uppercase tracking-[0.2em] px-10 py-5 cursor-pointer active:scale-98 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-brand-accent/15"
            style={{ borderRadius: '0px' }}
          >
            <span>Lock In Your Session</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <a
            href="#estimator"
            className="border border-white/10 hover:border-white/30 text-white font-bold text-xs uppercase tracking-[0.2em] px-10 py-5 text-center transition-colors hover:bg-white/5 cursor-pointer"
            style={{ borderRadius: '0px' }}
          >
            Estimate Pricing
          </a>
        </motion.div>

        {/* Trust tags with elegant borders */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-16 border-t border-white/5 w-full max-w-3xl text-left"
        >
          <div className="flex items-start space-x-3">
            <ShieldCheck className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-wider">Fully Insured</p>
              <p className="text-white/40 text-[10px] uppercase font-mono mt-0.5">Premium Protection</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Star className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-wider">5.0 Star Rated</p>
              <p className="text-white/40 text-[10px] uppercase font-mono mt-0.5">250+ Audited Reviews</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-wider">Meticulous Care</p>
              <p className="text-white/40 text-[10px] uppercase font-mono mt-0.5">Dedicated Timetables</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant minimalist background geometric design (completely transparent, matches high-end catalogues) */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:flex items-center justify-center pointer-events-none z-0 opacity-10">
        <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.1">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="28" strokeDasharray="1 3" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="0" y1="50" x2="100" y2="50" />
        </svg>
      </div>
    </section>
  );
}

