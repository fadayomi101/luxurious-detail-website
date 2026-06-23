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
        src="/fotor-video_remover_object-hd-20260618181733.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="absolute inset-0 z-10 w-full h-full max-w-[1600px] mx-auto flex flex-col justify-between items-center px-4 pb-[5vh] md:pb-[8vh]">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
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

      {/* Covering the Watermark Star */}
      <div className="absolute bottom-4 right-6 md:bottom-8 md:right-12 z-20 opacity-80 mix-blend-overlay">
        <Droplets className="w-8 h-8 md:w-12 md:h-12 text-white/50" />
      </div>
    </section>
  );
}


