/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '../data';
import { Check, Car, Truck } from 'lucide-react';

interface ServicesEstimatorProps {
  onSelectConfiguration?: (config: any) => void;
  isHome?: boolean;
}

type VehicleSizeType = 'sedan' | 'mid_suv' | 'suv' | 'suv_lwb';

export default function ServicesEstimator({ onSelectConfiguration, isHome = false }: ServicesEstimatorProps) {
  const displayedPackages = isHome ? PACKAGES.slice(0, 3) : PACKAGES;
  const [selectedSize, setSelectedSize] = useState<VehicleSizeType>('sedan');

  const VEHICLE_SIZES: { id: VehicleSizeType; label: string; icon: any }[] = [
    { id: 'sedan', label: 'Sedan', icon: Car },
    { id: 'mid_suv', label: 'Mid SUV', icon: Car },
    { id: 'suv', label: 'SUV', icon: Truck },
    { id: 'suv_lwb', label: 'SUV LWB', icon: Truck },
  ];

  return (
    <section id="services" className={`relative py-8 md:py-16 bg-gray-50 text-gray-900 px-6 md:px-12 lg:px-24 overflow-hidden ${isHome ? '' : 'pt-0 md:pt-0'}`}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        {isHome ? (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-left max-w-3xl mb-12 relative"
          >
            <h2 className="font-hero text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-[1.1] tracking-tight mb-2">
              Detailing on Demand.<br />
              <span className="text-gray-400">Bring your vehicle to life.</span>
            </h2>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
          >
            <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-3">
              Service Packages
            </span>
            <h2 className="font-hero text-4xl md:text-5xl leading-tight tracking-tight text-gray-900">
              Detailing Menu
            </h2>
            <div className="w-[48px] h-[3px] bg-brand-accent mx-auto mt-4 mb-4" />
            <p className="text-gray-500 font-sans text-sm font-light">
              Select one of our core treatment packages designed to match your vehicle's specific requirements.
            </p>
          </motion.div>
        )}

        {/* VEHICLE SIZE SELECTOR */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-wrap justify-center md:justify-start gap-2 mb-10 md:mb-16"
        >
          <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 flex overflow-x-auto w-full md:w-auto scrollbar-hide">
            {VEHICLE_SIZES.map((size) => {
              const Icon = size.icon;
              const isSelected = selectedSize === size.id;
              return (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap flex-1 md:flex-none justify-center ${
                    isSelected 
                      ? 'bg-gray-900 text-white shadow-md' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {size.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* PACKAGE GRID */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch ${isHome ? 'mb-12' : 'mb-24'}`}>
          {displayedPackages.map((pkg, index) => {
            const isDark = index % 3 === 2; // 3rd card style (Enterprise)
            const cardMode = index % 3; // 0: Basic, 1: Growth, 2: Enterprise
            
            const currentPrice = pkg.prices[selectedSize] || pkg.basePrice;
            
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col text-left p-8 md:p-10 transition-all rounded-[2rem] border ${
                  isDark
                    ? 'border-transparent bg-[#1a1a1a] text-white shadow-2xl'
                    : 'border-gray-100 bg-white hover:border-gray-200 shadow-xl'
                }`}
              >
                {/* Pill & Short Name */}
                <div className="mb-8">
                  <span className={`inline-block text-sm font-bold tracking-wide rounded-full px-5 py-2 mb-6 ${
                    cardMode === 0 ? 'bg-gray-900 text-white' : 
                    cardMode === 1 ? 'bg-brand-accent text-white shadow-lg shadow-red-500/30' : 
                    'bg-transparent border border-gray-600 text-white'
                  }`}>
                    {pkg.name}
                  </span>

                  <div className="flex items-center gap-3">
                    <div className={`w-[2px] h-10 ${isDark ? 'bg-gray-600' : 'bg-brand-accent'}`}></div>
                    <div>
                       <p className={`text-xs uppercase tracking-widest font-bold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                         Starting At
                       </p>
                       <p className={`text-3xl font-hero ${isDark ? 'text-white' : 'text-gray-900'}`}>
                         ₦{currentPrice.toLocaleString()}
                       </p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow font-sans">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      <Check className={`h-4 w-4 shrink-0 mt-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {!isHome ? (
                  <button
                    onClick={() => {
                      if (onSelectConfiguration) {
                        onSelectConfiguration({
                          packageId: pkg.id,
                          vehicleSizeId: selectedSize,
                          totalCalculated: currentPrice
                        });
                      }
                    }}
                    className={`w-full py-4 text-sm font-bold transition-all cursor-pointer rounded-full shadow-md ${
                      cardMode === 0 ? 'bg-gray-900 text-white hover:bg-black' : 
                      'bg-brand-accent text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30'
                    }`}
                  >
                    Get Started
                  </button>
                ) : (
                  <Link
                    to="/services"
                    className={`w-full py-4 text-sm font-bold text-center block transition-all cursor-pointer rounded-full shadow-md ${
                      cardMode === 0 ? 'bg-gray-900 text-white hover:bg-black' : 
                      'bg-brand-accent text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30'
                    }`}
                  >
                    Get Started
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {isHome && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center justify-center mb-12 gap-6 relative z-10"
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm shadow-sm"
            >
              See All Packages
            </Link>

            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-sm font-medium text-gray-700 max-w-full overflow-hidden">
              <div className="w-5 h-5 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Check className="w-3 h-3" />
              </div>
              <span className="truncate whitespace-normal"><strong className="text-gray-900">Satisfaction Guarantee -</strong> If the reflection doesn't captivate you, our work isn't done.</span>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
