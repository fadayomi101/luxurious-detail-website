import { motion } from 'motion/react';
import About from '../components/About';
import aboutBanner from '../assets/about-banner-new.png';

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-20 lg:pt-24 min-h-screen"
    >
      {/* Banner Section */}
      <div 
        className="relative w-full h-[15vh] md:h-[20vh] min-h-[140px] flex items-center justify-center bg-[#111] bg-[center_38%] md:bg-[center_38%] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl mx-auto px-4 mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-hero text-5xl md:text-6xl text-white tracking-tight mb-4"
          >
            Our Philosophy
          </motion.h1>
        </div>
      </div>
      
      <div className="mt-4 md:mt-8">
        <About />
      </div>
    </motion.div>
  );
}
