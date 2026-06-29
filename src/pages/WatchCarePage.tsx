import { motion } from 'motion/react';
import WatchCareSection from '../components/WatchCareSection';

export default function WatchCarePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-white"
    >
      <WatchCareSection />
    </motion.div>
  );
}
