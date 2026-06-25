/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 md:py-24 bg-white text-gray-900 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#CD1C24] tracking-[0.2em] font-mono font-bold text-xs md:text-sm uppercase block mb-4">
            Verified Acclaims
          </span>
          <h2 className="font-hero text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-900">
            What Detailing Patrons Say
          </h2>
          <div className="w-[60px] h-[3px] bg-[#CD1C24] mx-auto mt-6 mb-6" />
          <p className="text-gray-500 font-sans text-sm md:text-base font-light">
            We operate our clean protocols on luxury, sports, and daily vehicles. Read reviews from verified local enthusiasts.
          </p>
        </div>

        {/* TESTIMONIALS MARQUEE */}
        <div className="relative mt-16 w-full overflow-hidden group py-4">
          {/* Edge gradients */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex flex-col gap-6 md:gap-8">
            {/* First Row: Moving Left */}
            <div className="flex gap-6 md:gap-8 w-max animate-marquee hover:[animation-play-state:paused] pr-6 md:pr-8">
              {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
                <div
                  key={`row1-${index}`}
                  className="w-[320px] md:w-[420px] bg-white border border-gray-200/80 rounded-[2rem] p-8 text-left relative flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:border-[#CD1C24]/30 transition-all shrink-0 cursor-default"
                >
                  <Quote className="absolute top-8 right-8 w-10 h-10 text-gray-100 transition-colors duration-500" />
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 font-bold font-mono text-sm shrink-0">
                          {item.name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-gray-900 leading-none">{item.name}</p>
                          <p className="text-gray-500 font-mono text-[10px] tracking-widest mt-1.5">{item.vehicle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#CD1C24] text-[#CD1C24]" />
                      ))}
                    </div>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed min-h-[80px]">
                      "{item.quote}"
                    </p>
                    <div className="pt-5 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-[9px] font-mono tracking-widest rounded-full uppercase">
                        {item.package}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row: Moving Right */}
            <div className="flex gap-6 md:gap-8 w-max animate-marquee-reverse hover:[animation-play-state:paused] pr-6 md:pr-8">
              {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].reverse().map((item, index) => (
                <div
                  key={`row2-${index}`}
                  className="w-[320px] md:w-[420px] bg-white border border-gray-200/80 rounded-[2rem] p-8 text-left relative flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:border-[#CD1C24]/30 transition-all shrink-0 cursor-default"
                >
                  <Quote className="absolute top-8 right-8 w-10 h-10 text-gray-100 transition-colors duration-500" />
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 font-bold font-mono text-sm shrink-0">
                          {item.name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-gray-900 leading-none">{item.name}</p>
                          <p className="text-gray-500 font-mono text-[10px] tracking-widest mt-1.5">{item.vehicle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#CD1C24] text-[#CD1C24]" />
                      ))}
                    </div>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed min-h-[80px]">
                      "{item.quote}"
                    </p>
                    <div className="pt-5 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-[9px] font-mono tracking-widest rounded-full uppercase">
                        {item.package}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Statistics or trust banner row */}
        <div className="mt-16 md:mt-24 mx-4 md:mx-0 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center bg-[#F5E6D0] rounded-[2rem] p-6 md:p-14">
          <div>
            <p className="font-hero text-3xl md:text-4xl text-[#111118]">1,200+</p>
            <p className="text-[#111118]/70 text-[9px] md:text-[10px] uppercase font-mono tracking-widest mt-2 font-semibold">Supercars Detailed</p>
          </div>
          <div>
            <p className="font-hero text-3xl md:text-4xl text-[#111118]">4.98</p>
            <p className="text-[#111118]/70 text-[9px] md:text-[10px] uppercase font-mono tracking-widest mt-2 font-semibold">Aggregate Score</p>
          </div>
          <div>
            <p className="font-hero text-3xl md:text-4xl text-[#111118]">100%</p>
            <p className="text-[#111118]/70 text-[9px] md:text-[10px] uppercase font-mono tracking-widest mt-2 font-semibold">Chemical Integrity</p>
          </div>
          <div>
            <p className="font-hero text-3xl md:text-4xl text-[#111118]">8 YR+</p>
            <p className="text-[#111118]/70 text-[9px] md:text-[10px] uppercase font-mono tracking-widest mt-2 font-semibold">Service Record</p>
          </div>
        </div>

      </div>
    </section>
  );
}
