/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-8 md:py-16 bg-white text-gray-900 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Visual Composition */}
          <div className="lg:col-span-6 relative w-full h-[550px] lg:h-[700px] mb-12 lg:mb-0 order-2 lg:order-1">
            {/* Left Video (Rectangle) */}
            <div className="absolute left-0 top-0 w-[45%] h-[55%] lg:h-[60%] overflow-hidden rounded-tr-3xl rounded-br-3xl z-10 shadow-lg relative bg-black">
              <video 
                src="/about-video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>

            {/* Right Image (Arched top) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute right-0 bottom-0 top-[10%] w-[65%] h-[90%] overflow-hidden rounded-t-[150px] lg:rounded-t-[200px] rounded-bl-3xl rounded-br-3xl shadow-xl z-0"
            >
              <motion.img 
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                src="/c300.jpeg" 
                className="w-full h-full object-cover object-center" 
                alt="Paint correction on C300" 
              />
            </motion.div>

            {/* Floating Card */}
            <div className="absolute left-0 lg:left-8 bottom-[5%] lg:bottom-[10%] bg-white p-6 lg:p-8 rounded-[2rem] shadow-2xl w-[85%] max-w-[340px] border border-gray-100 z-20">
              <div className="space-y-8">
                
                {/* Bar 1 */}
                <div>
                   <div className="flex justify-between text-[15px] font-bold text-gray-900 mb-3 font-hero tracking-wide">
                      <span>Surface Clarity</span>
                      <span>85%</span>
                   </div>
                   <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-accent h-full w-[85%] rounded-full" />
                   </div>
                </div>
                
                {/* Bar 2 */}
                <div>
                   <div className="flex justify-between text-[15px] font-bold text-gray-900 mb-3 font-hero tracking-wide">
                      <span>Hydrophobic Shield</span>
                      <span>95%</span>
                   </div>
                   <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-accent h-full w-[95%] rounded-full" />
                   </div>
                </div>

                {/* Bar 3 */}
                <div>
                   <div className="flex justify-between text-[15px] font-bold text-gray-900 mb-3 font-hero tracking-wide">
                      <span>OEM Material Revival</span>
                      <span>75%</span>
                   </div>
                   <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-accent h-full w-[75%] rounded-full" />
                   </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-center order-1 lg:order-2 mb-12 lg:mb-0">
            {/* Tracking Label */}
            <div className="flex items-center gap-3 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-bg shadow-sm" />
              <span>Our Story</span>
            </div>

            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-hero text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-6 tracking-tight"
            >
              Craftsmanship in Every <br />Car Detail
            </motion.h2>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-sans text-gray-600 text-[17px] leading-relaxed mb-12 space-y-6"
            >
              <p>
                At Luxuriös Detail, we believe that world-class automotive care shouldn’t come at the cost of our planet. We align our daily operations with UN Sustainable Development Goals 6 and 12.
              </p>
              <p>
                By pairing elite nano-coatings and master level paint correction with biodegradable chemistry and strict water conservation practices, we deliver a flawless, guilt-free shine. <strong className="text-gray-900 font-semibold font-hero tracking-wide">Perfection for your vehicle, protection for our world.</strong>
              </p>
            </motion.div>

            {/* Grid of Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {[
                "pH-Balanced Chemistry",
                "Aerospace-Grade Protection",
                "Scantron-Grade Inspection",
                "Interior Sanitization & Care",
                "The Two-Bucket Ritual",
                "White-Glove Concierge"
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-3.5 bg-brand-bg/50 border border-brand-bg/80 px-5 py-4 rounded-xl hover:bg-brand-bg transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0" />
                  <span className="text-sm font-medium font-body text-gray-900 tracking-wide">{pill}</span>
                </div>
              ))}
            </motion.div>

            {/* Accreditations / Certificates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mb-10 flex flex-col items-start"
            >
               <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Official Accreditations</span>
               <div className="flex items-center space-x-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 border-[2.5px] border-[#003b49] bg-white">
                    <span className="text-[#003b49] font-bold text-[15px] tracking-widest ml-0.5">IMI</span>
                  </div>
                  <div className="flex flex-col justify-center text-[#003b49]">
                    <span className="font-bold text-[12px] leading-[1.1] tracking-wider flex items-baseline space-x-1.5">
                      <span>INSTITUTE</span>
                      <span className="font-medium text-[9px] tracking-normal">OF THE</span>
                    </span>
                    <span className="font-bold text-[12px] leading-[1.1] tracking-wider mt-0.5">
                      MOTOR INDUSTRY
                    </span>
                  </div>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-[#CD1C24] text-white hover:bg-gray-900 transition-colors px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm"
              >
                Discover Our Services
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

