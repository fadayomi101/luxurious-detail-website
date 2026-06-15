/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Columns, Grid, Eye, AlertCircle } from 'lucide-react';

export default function BeforeAfterGallery() {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0-100%
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = GALLERY_ITEMS[activeItemIndex];

  // Handle slide drag
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only trigger if mouse button is pressed or simply hover/drag
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-24 bg-brand-bg text-brand-text-dark px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-3">
            Proof of Craft
          </span>
          <h2 className="font-hero text-4xl md:text-5xl uppercase italic tracking-tight text-brand-dark">
            Paint Rejuvenation Showcase
          </h2>
          <div className="w-[48px] h-[3px] bg-brand-accent mx-auto mt-4 mb-4" />
          <p className="text-brand-text-dark/60 font-sans text-sm font-light">
            Slide the divider handle left and right on the work below to observe our high-precision optical multi-stage correction capability.
          </p>
        </div>

        {/* WORK SELECTOR BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {GALLERY_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(index);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeItemIndex === index
                  ? 'bg-brand-accent text-white'
                  : 'bg-brand-dark/5 text-brand-dark/85 hover:bg-brand-dark/10'
              }`}
              style={{ borderRadius: '0px' }}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* INTERACTIVE WIPER WORKSTAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main wiping image panel (7 columns) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={(e) => handleMove(e.clientX)}
              className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden select-none cursor-ew-resize bg-brand-dark border-4 border-brand-dark shadow-2xl"
            >
              {/* After State (underneath, full width) */}
              <img
                src={activeItem.afterImg}
                alt="After immaculate detailing restoration"
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 right-4 bg-lime-600/90 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1 font-bold z-10 select-none">
                AFTER BREEZY RESTORATION
              </span>

              {/* Before State (overlay with variable clipped width) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none transition-all duration-75"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImg}
                  alt="Before detailing restoration"
                  className="absolute inset-0 h-full w-full object-cover max-w-none"
                  // Ensure scale matches active image container
                  style={{
                    width: containerRef.current ? containerRef.current.offsetWidth : '100vw',
                    height: containerRef.current ? containerRef.current.offsetHeight : '100%'
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute bottom-4 left-4 bg-brand-accent/90 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1 font-bold z-10 select-none">
                BEFORE WORKSTAGE
              </span>

              {/* Dividing visual slider bar */}
              <div
                className="absolute inset-y-0 w-1 bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Physical Slider Handle Grip */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-brand-accent text-white flex items-center justify-center shadow-lg border border-white/20 select-none">
                  <Columns className="h-4 w-4 rotate-90" />
                </div>
              </div>
              
              {/* HTML Range slider input for reliable, responsive accessibility & dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 hover:opacity-0 cursor-ew-resize z-30"
              />
            </div>
            <p className="md:hidden text-[10px] text-brand-dark/50 uppercase tracking-widest mt-2 flex items-center justify-center gap-1">
              <Eye className="h-3.5 w-3.5 text-brand-accent animate-pulse" />
              <span>Tap & drag image slider to sweep wash stage</span>
            </p>
          </div>

          {/* Description commentary Column (4 columns) */}
          <div className="lg:col-span-4 text-left">
            <span className="p-1 px-2 text-[9px] uppercase font-mono font-bold bg-brand-dark/10 text-brand-dark tracking-wider rounded-sm">
              Workstage Case #{activeItemIndex + 1}
            </span>
            <h4 className="font-hero text-2xl uppercase italic text-brand-dark tracking-wide mt-3 mb-4">
              {activeItem.title}
            </h4>
            <div className="w-[30px] h-[2px] bg-brand-accent mb-4" />
            <p className="font-sans text-sm text-brand-text-dark/80 leading-relaxed mb-6 font-light">
              {activeItem.description}
            </p>

            <div className="bg-brand-dark/5 border-l-2 border-brand-accent p-4.5 font-mono text-xs text-brand-text-dark/75 space-y-2">
              <p className="font-bold text-[10px] text-brand-dark uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <AlertCircle className="h-3.5 w-3.5 text-brand-accent" />
                Performance Log
              </p>
              <div className="flex justify-between">
                <span>Correction Level:</span>
                <span className="font-sans font-bold">95%+ Restoration</span>
              </div>
              <div className="flex justify-between">
                <span>Working hours:</span>
                <span className="font-sans font-bold">4.5 - 6 Hours</span>
              </div>
              <div className="flex justify-between">
                <span>Coating bonded:</span>
                <span className="font-sans font-bold">Graphene Hydrophobic</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
