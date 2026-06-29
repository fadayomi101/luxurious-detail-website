import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Watch } from 'lucide-react';
import { useRef } from 'react';
import watchCareBg from '../assets/1st-vid.mp4';

export default function WatchCareTeaser() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 12) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background accents & Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          src={watchCareBg}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40 object-center"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-brand-accent/20 blur-[120px] rounded-full rotate-12 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-4 flex items-center gap-2">
              <Watch className="w-4 h-4" /> New Service Segment
            </span>
            <h2 className="font-hero text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
              Precision Watch Polishing.
            </h2>
            <p className="text-gray-400 font-sans text-base leading-relaxed mb-8 max-w-lg">
              We apply the same uncompromising standards of our automotive detailing to the precision instruments on your wrist. Honest assessment, meticulous execution, and horological respect.
            </p>
            <Link 
              to="/watch-care" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 transition-colors px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl"
            >
              Explore Watch Care
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] backdrop-blur-sm">
                <h3 className="font-hero text-2xl mb-6">Why Choose Luxuriös?</h3>
                <ul className="space-y-4">
                  {[
                    'Product-led quality using Swissvax Metal Polish',
                    'Case-type expertise across steel, titanium, and PVD',
                    'White-glove handling and documentation',
                    'A strict Do-No-Harm standard'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-2"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
