/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Droplets } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full aspect-video md:aspect-auto md:h-[100dvh] bg-white overflow-hidden flex items-center justify-center"
    >
      <video
        src="/final_hero_section.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Emblem to cover the star watermark (shifted off-center) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="absolute top-[40%] left-[65%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-none"
      >
        <div className="bg-black/40 backdrop-blur-2xl rounded-full p-6 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-center">
           <Droplets className="w-14 h-14 text-white hover:scale-105 transition-transform" />
        </div>
      </motion.div>

      <div className="absolute inset-0 z-20 w-full h-full max-w-[1600px] mx-auto flex flex-col justify-between items-center px-4 pb-[5vh] md:pb-[8vh]">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
           className="flex gap-4 justify-center items-center mt-auto mb-[5vh] pointer-events-auto"
        >
          <button className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_32px_rgba(255,255,255,0.2)] hover:scale-105">
            Discover
          </button>
          <button 
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white font-medium hover:bg-black/60 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.4)] hover:scale-105"
          >
            Book Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}


