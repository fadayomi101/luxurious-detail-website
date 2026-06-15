/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { PACKAGES, VEHICLE_SIZES, ADD_ONS } from '../data';
import { Check, Info, Calculator, Sparkles, AlertCircle } from 'lucide-react';

interface ServicesEstimatorProps {
  onSelectConfiguration: (config: {
    packageId: string;
    vehicleSizeId: string;
    addOnIds: string[];
    totalCalculated: number;
  }) => void;
}

export default function ServicesEstimator({ onSelectConfiguration }: ServicesEstimatorProps) {
  // Config state
  const [selectedPackageId, setSelectedPackageId] = useState<string>('signature');
  const [selectedSizeId, setSelectedSizeId] = useState<string>('compact');
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  // Find active elements
  const currentPackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];
  const currentSize = VEHICLE_SIZES.find((s) => s.id === selectedSizeId) || VEHICLE_SIZES[0];

  // Calculate prices
  const basePackagePrice = currentPackage.price;
  const sizeMultiplier = currentSize.multiplier;
  const scaledPackagePrice = Math.round(basePackagePrice * sizeMultiplier);
  
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

    // Scroll to booking anchor
    const formElement = document.getElementById('booking-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-dark bg-brand-dark py-24 text-white px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-3">
            Service Packages
          </span>
          <h2 className="font-hero text-4xl md:text-5xl uppercase italic tracking-tight">
            Detailing Menu
          </h2>
          <div className="w-[48px] h-[3px] bg-brand-accent mx-auto mt-4 mb-4" />
          <p className="text-white/60 font-sans text-sm font-light">
            Select one of our core treatment packages designed to match your vehicle's specific requirements.
          </p>
        </div>

        {/* PACKAGE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {PACKAGES.map((pkg) => {
            const isFeatured = pkg.id === 'signature';
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col text-left p-8 md:p-10 border transition-all ${
                  isFeatured
                    ? 'border-brand-accent bg-brand-dark relative shadow-xl'
                    : 'border-white/10 bg-white/[0.02]/60 hover:border-white/20'
                }`}
                style={{ borderRadius: '0px' }}
              >
                {isFeatured && (
                  <span className="absolute -top-3.5 right-6 bg-brand-accent text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 shadow-md">
                    Recommended Spec
                  </span>
                )}

                <h3 className="font-hero text-2xl uppercase italic text-white tracking-wide mb-1">
                  {pkg.name}
                </h3>
                <p className="text-brand-muted text-xs uppercase tracking-widest font-mono mb-4">
                  Starting at ${pkg.price}
                </p>
                <p className="text-white/70 text-sm font-light leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">
                  {pkg.description}
                </p>

                <div className="h-px bg-white/10 w-full mb-8" />

                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feat, index) => (
                    <li key={index} className="flex items-start space-x-3 text-xs leading-relaxed text-white/80">
                      <Check className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedPackageId(pkg.id);
                    const estimElement = document.getElementById('estimator');
                    if (estimElement) estimElement.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3.5 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                    selectedPackageId === pkg.id
                      ? 'bg-white text-brand-dark'
                      : 'border border-white/20 hover:border-white hover:bg-white/5'
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  {selectedPackageId === pkg.id ? 'Active Choice' : 'Select Package'}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* INTERACTIVE ESTIMATOR ANCHOR */}
        <div id="estimator" className="scroll-mt-24 pt-4">
          <div className="bg-white/[0.02] border border-white/10 p-6 md:p-10 lg:p-14">
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
              <div className="text-left w-full lg:w-auto">
                <span className="text-brand-accent text-xs uppercase font-mono tracking-widest block mb-1">Tactile Console</span>
                <h3 className="font-hero text-3xl md:text-4xl text-white uppercase italic tracking-wide">
                  Detailing Price Estimator
                </h3>
              </div>
              <div className="flex items-center space-x-2 bg-brand-white/5 border border-white/10 px-4 py-2.5 w-full lg:w-auto self-start lg:self-center">
                <Calculator className="h-4 w-4 text-brand-accent" />
                <span className="text-xs font-mono uppercase tracking-wider text-white/70">Custom Formula Processing</span>
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
                        className={`p-4 border text-left cursor-pointer transition-all ${
                          selectedPackageId === pkg.id
                            ? 'border-brand-accent bg-brand-accent/5'
                            : 'border-white/10 bg-white/[0.01] hover:border-white/30'
                        }`}
                        style={{ borderRadius: '0px' }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-white">
                            {pkg.name.split(' ')[0]}
                          </span>
                          {selectedPackageId === pkg.id && (
                            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                          )}
                        </div>
                        <span className="text-lg font-mono font-bold block">${pkg.price}</span>
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
                      <Info className="h-3.5 w-3.5 text-white/45 hover:text-white" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-brand-dark border border-white/15 text-[11px] text-white/80 leading-relaxed shadow-xl hidden group-hover:block z-10">
                        Larger volumes (SUVs/pickups) demand higher concentration of nano-coatings and double active detailing hours.
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {VEHICLE_SIZES.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSizeId(size.id)}
                        className={`p-4 border text-left cursor-pointer transition-all ${
                          selectedSizeId === size.id
                            ? 'border-brand-accent bg-brand-accent/5'
                            : 'border-white/10 bg-white/[0.01] hover:border-white/30'
                        }`}
                        style={{ borderRadius: '0px' }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-white">
                            {size.name}
                          </span>
                          <span className="text-[10px] font-mono text-brand-muted text-white/50 underline">
                            {size.multiplier === 1.0 ? 'Base' : `${size.multiplier}x Scale`}
                          </span>
                        </div>
                        <span className="text-xs text-brand-muted line-clamp-1 text-white/60">
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
                          className={`w-full flex items-center justify-between p-4 border text-left cursor-pointer transition-all ${
                            isSelected
                              ? 'border-brand-accent bg-brand-accent/5 ml-1'
                              : 'border-white/10 bg-white/[0.01] hover:border-white/30'
                          }`}
                          style={{ borderRadius: '0px' }}
                        >
                          <div className="flex items-start space-x-3.5 mr-4">
                            <div className={`mt-0.5 h-4 w-4 border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-brand-accent bg-brand-accent text-white' : 'border-white/20'
                            }`} style={{ borderRadius: '0px' }}>
                              {isSelected && <Check className="h-3 w-3" />}
                            </div>
                            <div>
                              <span className="text-xs font-bold text-white block uppercase tracking-wide">
                                {addon.name}
                              </span>
                              <span className="text-[11px] text-white/50 leading-normal block max-w-lg mt-0.5">
                                {addon.description}
                              </span>
                            </div>
                          </div>
                          <span className="font-mono text-sm font-bold text-brand-accent shrink-0">
                            +${addon.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Calculations Output Card (4 columns) */}
              <div className="lg:col-span-4">
                <div className="bg-white/[0.03] border border-white/15 p-6 md:p-8 h-full flex flex-col justify-between" style={{ minHeight: '360px' }}>
                  
                  <div>
                    <h4 className="font-hero text-xl uppercase italic text-white tracking-wider mb-5 pb-3 border-b border-white/10">
                      Pricing Summary
                    </h4>

                    {/* Math breakdown rows */}
                    <div className="space-y-4 font-mono text-[11px] text-white/70">
                      
                      {/* Base Pack */}
                      <div className="flex justify-between">
                        <span>Base Package Price:</span>
                        <span className="text-right">${basePackagePrice}</span>
                      </div>

                      {/* Scale Factor */}
                      <div className="flex justify-between pb-3 border-b border-white/5">
                        <span>Sizing Scale ({currentSize.name.split(' ')[0]}):</span>
                        <span className="text-right font-bold text-brand-accent">× {sizeMultiplier}</span>
                      </div>

                      {/* Scaled Cost */}
                      <div className="flex justify-between text-xs font-bold text-white">
                        <span>Scaled Base Cost:</span>
                        <span className="text-right">${scaledPackagePrice}</span>
                      </div>

                      {/* Add-ons */}
                      <div className="flex justify-between pb-3 border-b border-white/10">
                        <span>Add-on Protection Modules ({selectedAddOnIds.length}):</span>
                        <span className="text-right font-bold text-brand-accent">+${addOnsTotal}</span>
                      </div>
                    </div>

                    {/* Total Statement */}
                    <div className="mt-8 mb-6 p-4.5 bg-brand-dark/45 border-l-2 border-brand-accent">
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Calculated Total</p>
                      <div className="flex items-baseline space-x-2 mt-1">
                        <span className="text-3xl font-mono font-black text-white">${grandTotal}</span>
                        <span className="text-[10px] font-sans text-brand-muted text-white/50 lowercase">incl. full treatment</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-white/40 leading-normal mb-8">
                      Estimates depend on paint readings. This configuration will be securely injected into your reservation details below.
                    </p>
                  </div>

                  {/* Booking Link Action */}
                  <div className="relative">
                    <button
                      onClick={handleBookEstimate}
                      className="w-full bg-brand-accent hover:opacity-90 text-white font-bold text-xs uppercase tracking-widest py-4 transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
                      style={{ borderRadius: '0px' }}
                    >
                      <Sparkles className="h-3.5 w-3.5 fill-white" />
                      <span>Book Custom Configuration</span>
                    </button>

                    {/* Elegant floating notification */}
                    {showNotification && (
                      <div className="absolute top-full left-0 right-0 mt-3 p-3 bg-brand-accent border border-white/20 text-white text-[11px] font-medium uppercase tracking-wide text-center animate-fade-in flex items-center justify-center space-x-2">
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

      </div>
    </section>
  );
}
