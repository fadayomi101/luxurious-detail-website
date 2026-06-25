import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scrolling while splash screen is visible
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 2500); // 2.5 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-64 md:w-80 mix-blend-multiply">
            {/* Base faded logo */}
            <img 
              src="/logo.png" 
              alt="Logo Base" 
              className="w-full h-auto object-contain opacity-20 grayscale"
            />
            {/* Colored filling logo */}
            <motion.img 
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              src="/logo.png" 
              alt="Logo Fill" 
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
