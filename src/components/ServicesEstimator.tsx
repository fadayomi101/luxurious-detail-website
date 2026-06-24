/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PACKAGES, VEHICLE_SIZES, ADD_ONS } from '../data';
import { Check, Info, Calculator, Sparkles, AlertCircle } from 'lucide-react';

interface ServicesEstimatorProps {
  onSelectConfiguration: (config: {
    packageId: string;
    vehicleSizeId: string;
    addOnIds: string[];
    totalCalculated: number;
  }) => void;
  isHome?: boolean;
}

export default function ServicesEstimator({ onSelectConfiguration, isHome = false }: ServicesEstimatorProps) {
  // Config state
  const [selectedPackageId, setSelectedPackageId] = useState<string>('single_stage');
  const [selectedSizeId, setSelectedSizeId] = useState<string>('sedan');
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  // Find active elements
  const currentPackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];
  const currentSize = VEHICLE_SIZES.find((s) => s.id === selectedSizeId) || VEHICLE_SIZES[0];

  // Calculate prices
  const scaledPackagePrice = currentPackage.prices[currentSize.id] || currentPackage.basePrice;
  
  const addOnsTotal = selectedAddOnIds.reduce((sum, addOnId) => {
    const item = ADD_ONS.find((a) => a.id === addOnId);
    return sum + (item ? item.price : 0);
  }, 0);

  const grandTotal = scaledPackagePrice + addOnsTotal;

  // Toggle add-on
  const handleToggleAddOn = (addOnId: string) => {
    if (selectedAddOnIds.includes(addOnId)) {
      setSelectedAddOnIds(selectedAddOnIds.filter((id) => id !== addOnId));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, addOnId]);
    }
  };

  // Trigger Booking Submission Transition
  const handleBookEstimate = () => {
    onSelectConfiguration({
      packageId: selectedPackageId,
      vehicleSizeId: selectedSizeId,
      addOnIds: selectedAddOnIds,
      totalCalculated: grandTotal,
    });
    
    // Show confirmation notification
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4500);
  };

  const displayedPackages = isHome ? PACKAGES.slice(0, 3) : PACKAGES;

  return (
    <section id="services" className={`relative py-16 bg-gray-50 text-gray-900 px-6 md:px-12 lg:px-24 overflow-hidden ${isHome ? '' : 'pt-0'}`}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        {isHome ? (
          <div className="text-left max-w-3xl mb-16 relative">
            <h2 className="font-hero text-5xl md:text-6xl text-gray-900 leading-[1.1] tracking-tight mb-2">
              Detailing on Demand.<br />
              <span className="text-gray-400">Bring your vehicle to life.</span>
            </h2>
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto mb-20">
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
          </div>
        )}

        {/* PACKAGE GRID */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch ${isHome ? 'mb-12' : 'mb-24'}`}>
          {displayedPackages.map((pkg, index) => {
            const isDark = index % 3 === 2; // 3rd card style (Enterprise)
            const cardMode = index % 3; // 0: Basic, 1: Growth, 2: Enterprise
            
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
                    <div className={`w-[2px] h-6 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                    <p className={`text-base font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Optimized for ₦{pkg.basePrice.toLocaleString()}
                    </p>
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
                      setSelectedPackageId(pkg.id);
                      const estimElement = document.getElementById('estimator');
                      if (estimElement) estimElement.scrollIntoView({ behavior: 'smooth' });
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
          <div className="flex flex-col items-center justify-center mb-12 gap-6 relative z-10">
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
          </div>
        )}

        {/* INTERACTIVE ESTIMATOR ANCHOR */}
        {!isHome && (
          <div id="estimator" className="scroll-mt-24 pt-4">
            <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-6 md:p-10 lg:p-14 overflow-hidden">
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 pb-8 border-b border-gray-100">
                <div className="text-left w-full lg:w-auto">
                <span className="text-brand-accent text-xs uppercase font-mono tracking-widest block mb-1">Tactile Console</span>
                <h3 className="font-hero text-3xl md:text-4xl text-gray-900 tracking-wide">
                  Detailing Price Estimator
                </h3>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 w-full lg:w-auto self-start lg:self-center">
                <Calculator className="h-4 w-4 text-brand-accent" />
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500">Custom Formula Processing</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
              
              {/* Controls Column (8 columns) */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* 1. Step: Base Package Selection */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-widest text-brand-accent block mb-3.5">
                    1. Choose Base Service Package
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {PACKAGES.map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => setSelectedPackageId(pkg.id)}
                        className={`p-4 border rounded-xl text-left cursor-pointer transition-all ${
                          selectedPackageId === pkg.id
                            ? 'border-brand-accent bg-red-50 text-brand-accent'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100 text-gray-800'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider">
                            {pkg.name.split(' ')[0]}
                          </span>
                          {selectedPackageId === pkg.id && (
                            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                          )}
                        </div>
                        <span className="text-lg font-mono font-bold block">Starting at ₦{pkg.basePrice.toLocaleString()}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Step: Vehicle Sizing */}
                <div>
                  <div className="flex items-center space-x-2 mb-3.5">
                    <label className="text-xs uppercase font-extrabold tracking-widest text-brand-accent block">
                      2. Select Vehicle Sizing Scale
                    </label>
                    <div className="group relative cursor-help">
                      <Info className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-800 text-white rounded-lg text-[11px] leading-relaxed shadow-xl hidden group-hover:block z-10">
                        Larger volumes (SUVs/pickups) demand higher concentration of nano-coatings and double active detailing hours.
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {VEHICLE_SIZES.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSizeId(size.id)}
                        className={`p-4 border rounded-xl text-left cursor-pointer transition-all ${
                          selectedSizeId === size.id
                            ? 'border-brand-accent bg-red-50 text-brand-accent'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100 text-gray-800'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider">
                            {size.name}
                          </span>
                          <span className="text-[10px] font-mono text-gray-500 underline">
                            {size.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 line-clamp-1">
                          {size.description}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Step: Optional Addon Customizations */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-widest text-brand-accent block mb-3.5">
                    3. Add Elite Defense Modules (Optional)
                  </label>
                  <div className="space-y-2">
                    {ADD_ONS.map((addon) => {
                      const isSelected = selectedAddOnIds.includes(addon.id);
                      return (
                        <button
                          key={addon.id}
                          onClick={() => handleToggleAddOn(addon.id)}
                          className={`w-full flex items-center justify-between p-4 border rounded-xl text-left cursor-pointer transition-all ${
                            isSelected
                              ? 'border-brand-accent bg-red-50 ml-1'
                              : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-start space-x-3.5 mr-4">
                            <div className={`mt-0.5 h-4 w-4 border rounded-sm flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-brand-accent bg-brand-accent text-white' : 'border-gray-300'
                            }`}>
                              {isSelected && <Check className="h-3 w-3" />}
                            </div>
                            <div>
                              <span className={`text-xs font-bold block uppercase tracking-wide ${isSelected ? 'text-brand-accent' : 'text-gray-900'}`}>
                                {addon.name}
                              </span>
                              <span className="text-[11px] text-gray-500 leading-normal block max-w-lg mt-0.5">
                                {addon.description}
                              </span>
                            </div>
                          </div>
                          <span className="font-mono text-sm font-bold text-brand-accent shrink-0">
                            +₦{addon.price.toLocaleString()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Calculations Output Card (4 columns) */}
              <div className="lg:col-span-4">
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between" style={{ minHeight: '360px' }}>
                  
                  <div>
                    <h4 className="font-hero text-xl text-gray-900 tracking-wider mb-5 pb-3 border-b border-gray-200">
                      Pricing Summary
                    </h4>

                    {/* Math breakdown rows */}
                    <div className="space-y-4 font-mono text-[11px] text-gray-600">
                      
                      {/* Base Pack */}
                      <div className="flex justify-between">
                        <span>Base Package ({currentPackage.name}):</span>
                        <span className="text-right">Starting at ₦{currentPackage.basePrice.toLocaleString()}</span>
                      </div>

                      {/* Scale Factor */}
                      <div className="flex justify-between pb-3 border-b border-gray-200">
                        <span>Vehicle Size Factor ({currentSize.name}):</span>
                        <span className="text-right font-bold text-brand-accent">Applied</span>
                      </div>

                      {/* Scaled Cost */}
                      <div className="flex justify-between text-xs font-bold text-gray-900">
                        <span>Sized Package Cost:</span>
                        <span className="text-right">₦{scaledPackagePrice.toLocaleString()}</span>
                      </div>

                      {/* Add-ons */}
                      <div className="flex justify-between pb-3 border-b border-gray-200">
                        <span>Add-on Protection Modules ({selectedAddOnIds.length}):</span>
                        <span className="text-right font-bold text-brand-accent">+₦{addOnsTotal.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Total Statement */}
                    <div className="mt-8 mb-6 p-4.5 bg-white border-l-2 border-brand-accent shadow-sm rounded-r-xl">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Calculated Total</p>
                      <div className="flex items-baseline space-x-2 mt-1">
                        <span className="text-3xl font-mono font-black text-gray-900">₦{grandTotal.toLocaleString()}</span>
                        <span className="text-[10px] font-sans text-gray-500 lowercase">incl. full treatment</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-gray-500 leading-normal mb-8">
                      Estimates depend on paint readings. This configuration will be securely injected into your reservation details below.
                    </p>
                  </div>

                  {/* Booking Link Action */}
                  <div className="relative">
                    <button
                      onClick={handleBookEstimate}
                      className="w-full bg-black hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-full transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-95 shadow-md"
                    >
                      <Sparkles className="h-3.5 w-3.5 fill-white" />
                      <span>Book Custom Configuration</span>
                    </button>

                    {/* Elegant floating notification */}
                    {showNotification && (
                      <div className="absolute top-full left-0 right-0 mt-3 p-3 bg-brand-accent border-brand-accent rounded-xl text-white text-[11px] font-medium uppercase tracking-wide text-center animate-fade-in flex items-center justify-center space-x-2 shadow-lg z-50">
                        <AlertCircle className="h-3.5 w-3.5 text-white animate-bounce" />
                        <span>Pre-filled in Reservation Console Below!</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
        )}

      </div>
    </section>
  );
}
