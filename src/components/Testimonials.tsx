/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from '../data';
import { Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white text-gray-900 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-3">
            VERIFIED ACCLAIMS
          </span>
          <h2 className="font-hero text-4xl md:text-5xl uppercase italic tracking-tight text-gray-900">
            What Detailing Patrons Say
          </h2>
          <div className="w-[48px] h-[3px] bg-brand-accent mx-auto mt-4 mb-4" />
          <p className="text-gray-500 font-sans text-sm font-light">
            We operate our clean protocols on luxury, sports, and daily vehicles. Read reviews from verified local enthusiasts.
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-left relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Visual quote icon ornament */}
                <span className="absolute top-6 right-6 text-gray-200">
                  <MessageSquare className="h-8 w-8" />
                </span>

                <div className="space-y-4">
                  {/* Rating star widgets */}
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                    ))}
                  </div>

                  <p className="font-sans text-gray-700 text-xs md:text-sm italic leading-relaxed min-h-[100px]">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-bold text-sm text-gray-900 uppercase tracking-wider">
                    {item.name}
                  </p>
                  <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase mt-0.5">
                    {item.vehicle}
                  </p>
                  
                  {/* Package chip */}
                  <span className="inline-block mt-3 px-2 py-1 bg-white border border-gray-200 rounded-full text-gray-500 text-[9px] uppercase font-mono tracking-wider shadow-sm">
                    {item.package}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Statistics or trust banner row */}
        <div className="mt-20 border-t border-gray-100 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-gray-50 rounded-3xl p-8">
          <div>
            <p className="font-hero text-4xl text-gray-900">1,200+</p>
            <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest mt-1">Supercars Detailed</p>
          </div>
          <div>
            <p className="font-hero text-4xl text-gray-900">4.98</p>
            <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest mt-1">Aggregate Rank Score</p>
          </div>
          <div>
            <p className="font-hero text-4xl text-gray-900">100%</p>
            <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest mt-1">Chemical Integrity Guarantee</p>
          </div>
          <div>
            <p className="font-hero text-4xl text-gray-900">8 YR+</p>
            <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest mt-1">Pristine Service Record</p>
          </div>
        </div>

      </div>
    </section>
  );
}
