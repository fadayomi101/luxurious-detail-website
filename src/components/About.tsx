/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-bg text-brand-text-dark px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left">
            <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-3">
              The Art of Detailing
            </span>
            <h2 className="font-hero text-5xl md:text-6xl uppercase italic leading-tight text-brand-dark tracking-tight">
              We Don't Just Wash.<br />
              <span className="text-brand-accent">We Restore Brilliance.</span>
            </h2>
            
            {/* The specified accent lines */}
            <div className="w-[60px] h-[3.5px] bg-brand-accent my-6" />

            <p className="font-sans text-brand-text-dark/80 text-base md:text-lg leading-relaxed mb-6 font-light">
              Breezy Car Wash was established under a singular, fanatical philosophy: vehicles are sculptural engineering achievements that deserve to present in their absolute most pure, uncompromised light.
            </p>
            <p className="font-sans text-brand-text-dark/70 text-sm leading-relaxed mb-8">
              We bypass automated rotating friction brushes, which inflict micro-marring and swirl scratches across delicate clear coats. Every millimeter of your vehicle is treated by hand under professional spectrum-balanced wash bay lighting, using pure pressurized steam and aerospace-grade polymers.
            </p>

            {/* Core Values / Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-brand-dark/5 text-brand-accent">
                  <Flame className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-brand-dark">Concourse Polish</h4>
                  <p className="text-xs text-brand-text-dark/65 mt-1 leading-relaxed">
                    Single and multi-stage paint corrections to completely erase light scratches.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-brand-dark/5 text-brand-accent">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-brand-dark">Ceramic Isolation</h4>
                  <p className="text-xs text-brand-text-dark/65 mt-1 leading-relaxed">
                    Liquid-glass layers bonding directly to create incredibly hydrophobic defense.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-brand-dark/5 text-brand-accent">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-brand-dark">Microfiber Integrity</h4>
                  <p className="text-xs text-brand-text-dark/65 mt-1 leading-relaxed">
                    Color-coded ultra-dense towels dedicated exclusively to specific panels.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-brand-dark/5 text-brand-accent">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-brand-dark">Steam Decontamination</h4>
                  <p className="text-xs text-brand-text-dark/65 mt-1 leading-relaxed">
                    High-pressure 220°F water vapor sanitization clearing all cabin recesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image Block */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 border-[6px] border-brand-accent translate-x-3 translate-y-3 z-0" />
            <div className="relative z-1 overflow-hidden shadow-2xl bg-brand-dark aspect-square lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800"
                alt="Detallist buffing vehicle paintwork"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-left">
                <p className="text-brand-accent font-mono text-[10px] tracking-widest uppercase mb-1">Interactive Quality</p>
                <p className="text-white text-sm font-bold uppercase tracking-wider">Aesthetic Calibration Assured</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
