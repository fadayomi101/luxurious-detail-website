import { motion } from 'motion/react';
import { Watch, Microscope, Shield, Check, Package } from 'lucide-react';
import { useRef } from 'react';
import watchCareBg from '../assets/1st-vid.mp4';
import addon11Image from '../assets/11.jpeg';
import addon22Image from '../assets/22.jpeg';
import addon33Image from '../assets/33.jpeg';
import addon44Image from '../assets/44.jpeg';
import addon55Image from '../assets/55.jpeg';
import addon66Image from '../assets/66.jpeg';
import processBgImage from '../assets/77.jpeg';

export default function WatchCareSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 12) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section id="watch-care" className="bg-white text-gray-900">
      
      {/* Header Hero with Video Background */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-900 text-white overflow-hidden mb-16 md:mb-24">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <motion.video
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            ref={videoRef}
            src={watchCareBg}
            autoPlay
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-brand-accent/20 blur-[120px] rounded-full rotate-12 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-3">
              New Service Segment
            </span>
            <h2 className="font-hero text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white">
              Precision Watch Polishing & Restoration
            </h2>
            <div className="w-[48px] h-[3px] bg-brand-accent mx-auto mt-6 mb-6" />
            <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
              Every timepiece tells a story. Our watch polishing division applies the same uncompromising standard behind Luxuriös Detail's automotive work to the instruments on your wrist — restoring what should be restored, and preserving what should be preserved.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Features / Positioning */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Watch, title: 'Case-Type Expertise', desc: 'Steel, PVD, two-tone, and titanium — each requires different polish chemistry.' },
            { icon: Microscope, title: 'Product-Led Quality', desc: 'Swissvax Metal Polish anchors our consumables selection.' },
            { icon: Shield, title: 'Do-No-Harm Standard', desc: 'Pre- and post-service documentation. Honest scope assessment upfront.' },
            { icon: Package, title: 'White-Glove Handling', desc: 'Stored in padded trays, returned in a branded pouch with a service card.' },
          ].map((feat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] hover:shadow-lg transition-all text-center flex flex-col items-center"
            >
              <feat.icon className="w-8 h-8 text-brand-accent mb-5" strokeWidth={1.5} />
              <h3 className="font-hero text-xl text-gray-900 mb-3">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Service Tiers */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <h3 className="font-hero text-3xl text-gray-900 mb-2">Service Menu</h3>
            <p className="text-gray-500 text-sm">Three tiered service levels. All include condition assessment and post-service inspection.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Tier 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all"
            >
               <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 block">TIER I</span>
               <h4 className="font-hero text-2xl text-gray-900 mb-1">The Refresh</h4>
               <p className="text-brand-accent text-sm italic mb-6">Surface dirt, grime & light micro-scratches</p>
               <ul className="space-y-3 mb-8 flex-grow">
                 {['Ultrasonic-style hand clean', 'Swissvax Metal Polish light application', 'Microfibre buff to remove swirl marks', 'Crystal exterior clean'].map((item, i) => (
                   <li key={i} className="flex gap-3 text-sm text-gray-600">
                     <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
               <div className="pt-6 border-t border-gray-100 mt-auto">
                 <div className="flex items-baseline gap-2 mb-1">
                   <span className="text-gray-900 text-2xl font-bold">₦18,000</span>
                   <span className="text-gray-500 text-xs font-medium">starting from</span>
                 </div>
               </div>
            </motion.div>

            {/* Tier 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col bg-gray-900 text-white rounded-[2rem] p-8 shadow-xl relative transform lg:-translate-y-4"
            >
               <div className="absolute top-6 right-6 text-brand-accent text-[10px] font-bold tracking-widest uppercase">MOST POPULAR</div>
               <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 block">TIER II</span>
               <h4 className="font-hero text-2xl text-white mb-1">The Detail</h4>
               <p className="text-gray-300 text-sm italic mb-6">Full case restoration with mixed-finish preservation</p>
               <ul className="space-y-3 mb-8 flex-grow">
                 {['Everything in The Refresh', 'Brushed-surface restoration on lugs', 'Mirror refinement on case flanks', 'Between-link bracelet detail', 'Caseback clean & micro-polish'].map((item, i) => (
                   <li key={i} className="flex gap-3 text-sm text-gray-300">
                     <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
               <div className="pt-6 border-t border-gray-700 mt-auto">
                 <div className="flex items-baseline gap-2 mb-1">
                   <span className="text-white text-2xl font-bold">₦35,000</span>
                   <span className="text-gray-400 text-xs font-medium">starting from</span>
                 </div>
               </div>
            </motion.div>

            {/* Tier 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all"
            >
               <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 block">TIER III</span>
               <h4 className="font-hero text-2xl text-gray-900 mb-1">The Collector's Polish</h4>
               <p className="text-brand-accent text-sm italic mb-6">Full restoration — as close to ex-factory</p>
               <ul className="space-y-3 mb-8 flex-grow">
                 {['Everything in The Detail', 'Gasket-area micro-cleaning', 'Integrated bracelet deep detail', 'Scratch-mapping consultation', 'Condition report before & after'].map((item, i) => (
                   <li key={i} className="flex gap-3 text-sm text-gray-600">
                     <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
               <div className="pt-6 border-t border-gray-100 mt-auto">
                 <div className="flex items-baseline gap-2 mb-1">
                   <span className="text-gray-900 text-2xl font-bold">₦65,000</span>
                   <span className="text-gray-500 text-xs font-medium">starting from</span>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Add-On Services */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <h3 className="font-hero text-3xl text-gray-900 mb-2">Build Your Service</h3>
            <p className="text-gray-500 text-sm">Available as additions to any tier. Quoted at booking once we've assessed the piece.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Rubber / NATO Strap Clean', desc: 'Deep clean, degrease & UV-protect rubber straps or full fabric strap wash', price: '₦5,000', bgImage: true, imageSrc: addon66Image },
              { title: 'Crystal Polish', desc: 'Cerium oxide buff for mineral crystals with light scratches. Not applicable to sapphire.', price: '₦8,000', bgImage: true, imageSrc: addon22Image },
              { title: 'Bracelet Link Service', desc: 'Removal of stretch, realignment and clasp adjustment on H-link & oyster bracelets', price: '₦7,500', bgImage: true, imageSrc: addon33Image },
              { title: 'Leather Strap Condition', desc: 'Leather cleaner + conditioner treatment. Extends strap life, removes odour.', price: '₦4,500', bgImage: true, imageSrc: addon11Image },
              { title: 'Macro Photography Set', desc: '6–10 high-resolution detail shots for insurance, sale listing, or collection records', price: '₦6,000', bgImage: true, imageSrc: addon55Image },
              { title: 'Express Turnaround', desc: 'Same-day return (subject to availability). Applies to Tier I & II only.', price: '+₦5,000', bgImage: true, imageSrc: addon44Image }
            ].map((addon, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className={`relative border border-gray-100 p-6 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full overflow-hidden ${addon.bgImage ? 'text-white' : 'bg-white'}`}
              >
                {addon.bgImage && (
                  <>
                    <img src={addon.imageSrc} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
                    <div className="absolute inset-0 bg-gray-900/70 z-0" />
                  </>
                )}
                <div className="relative z-10">
                  <h4 className={`${addon.bgImage ? 'text-white' : 'text-gray-900'} font-bold text-sm mb-2`}>{addon.title}</h4>
                  <p className={`${addon.bgImage ? 'text-gray-300' : 'text-gray-500'} text-xs leading-relaxed mb-6`}>{addon.desc}</p>
                </div>
                <div className="relative z-10 text-brand-accent text-sm font-bold tracking-wide">{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process & Eligibility Summarized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h4 className="font-hero text-2xl text-gray-900 mb-6">The Process</h4>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Intake & Log', desc: 'Condition noted, photos taken under light.' },
                { step: '02', title: 'Assessment', desc: 'Finish type mapped, scope confirmed.' },
                { step: '03', title: 'Polish & Detail', desc: 'Directional polishing and microfibre buff.' },
                { step: '04', title: 'Inspection', desc: 'Post-service check under magnification.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-brand-accent font-hero font-bold">{item.step}</span>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h5>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative p-8 rounded-3xl overflow-hidden text-white flex flex-col justify-center"
          >
             <img src={processBgImage} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
             <div className="absolute inset-0 bg-gray-900/80 z-0" />
             <div className="relative z-10">
               <h4 className="font-hero text-2xl text-white mb-6">Service Scope</h4>
               <div className="space-y-6">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">We Service</h5>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Stainless steel cases & bracelets, two-tone references, and select microbrands. Brands include Rolex (Tier III), Omega, Cartier, Tissot, Seiko, and more.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Not Currently Offered</h5>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Solid gold/platinum cases, heavy PVD/DLC, movement servicing, crystal replacement, and ceramic bezels.
                    </p>
                  </div>
               </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
