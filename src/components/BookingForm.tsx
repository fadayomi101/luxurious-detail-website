/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PACKAGES, VEHICLE_SIZES, ADD_ONS } from '../data';
import { Appointment } from '../types';
import { Calendar, Clock, Car, Phone, Mail, User, ShieldAlert, Sparkles, CheckCircle2, Trash2 } from 'lucide-react';

interface BookingFormProps {
  prefilledConfig: {
    packageId: string;
    vehicleSizeId: string;
    addOnIds: string[];
    totalCalculated: number;
  } | null;
  onClearPrefilled: () => void;
}

export default function BookingForm({ prefilledConfig, onClearPrefilled }: BookingFormProps) {
  // Local storage state
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleMakeModel, setVehicleMakeModel] = useState('');
  const [selectedPackageId, setSelectedPackageId] = useState('signature');
  const [selectedSizeId, setSelectedSizeId] = useState('compact');
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00 AM');
  const [notes, setNotes] = useState('');
  
  // Custom toast status
  const [successBooking, setSuccessBooking] = useState<Appointment | null>(null);

  // Load existing bookings from local storage
  useEffect(() => {
    const saved = localStorage.getItem('breezy_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (err) {
        console.error('Error parsing appointments', err);
      }
    } else {
      // Seed an initial demo booking to show the UI in action nicely
      const demo: Appointment = {
        id: 'demo-appt-123',
        customerName: 'Excellent Fadayomi',
        customerPhone: '(555) 382-1104',
        customerEmail: 'fadayomiexcellent2004@gmail.com',
        vehicleMakeModel: 'Porsche Carrera GTS',
        vehicleSize: 'Sedan / Coupe',
        packageId: 'signature',
        packageName: 'Breezy Signature Detail',
        addOnIds: ['ceramic', 'steam_sanitize'],
        addOnNames: ['Premium Ceramic Coating Up', 'AC Vent & Odor Steam Sanitize'],
        date: '2026-06-18',
        time: '11:30 AM',
        notes: 'Please apply extra coating thickness on front splitter and carbon diffuser.',
        totalPrice: 270,
        status: 'Confirmed'
      };
      setAppointments([demo]);
      localStorage.setItem('breezy_appointments', JSON.stringify([demo]));
    }
  }, []);

  // Update form values if configuration is transferred from the pricing estimator
  useEffect(() => {
    if (prefilledConfig) {
      setSelectedPackageId(prefilledConfig.packageId);
      setSelectedSizeId(prefilledConfig.vehicleSizeId);
      setSelectedAddOnIds(prefilledConfig.addOnIds);
    }
  }, [prefilledConfig]);

  // Handle price calculation inside the booking form itself
  const currentPackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];
  const currentSize = VEHICLE_SIZES.find((s) => s.id === selectedSizeId) || VEHICLE_SIZES[0];
  
  const calculatedBase = Math.round(currentPackage.price * currentSize.multiplier);
  const calculatedAddOns = selectedAddOnIds.reduce((sum, id) => {
    const item = ADD_ONS.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);
  const finalPrice = calculatedBase + calculatedAddOns;

  // Toggle addons from form checkboxes
  const handleToggleFormAddOn = (id: string) => {
    if (selectedAddOnIds.includes(id)) {
      setSelectedAddOnIds(selectedAddOnIds.filter((item) => item !== id));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, id]);
    }
  };

  // Submit appointment handler
  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !email || !vehicleMakeModel || !date || !time) {
      alert('Please fill out all required booking fields to secure your reservation.');
      return;
    }

    const packageNames = currentPackage.name;
    const sizeName = currentSize.name;
    const addOnNames = selectedAddOnIds.map(id => ADD_ONS.find(a => a.id === id)?.name || id);

    const newAppointment: Appointment = {
      id: `session-${Date.now()}`,
      customerName: name,
      customerPhone: phone,
      customerEmail: email,
      vehicleMakeModel,
      vehicleSize: sizeName,
      packageId: selectedPackageId,
      packageName: packageNames,
      addOnIds: selectedAddOnIds,
      addOnNames,
      date,
      time,
      notes,
      totalPrice: finalPrice,
      status: 'Confirmed'
    };

    const updated = [newAppointment, ...appointments];
    setAppointments(updated);
    localStorage.setItem('breezy_appointments', JSON.stringify(updated));

    // Show booking receipt toast/modal
    setSuccessBooking(newAppointment);

    // Reset fields
    setName('');
    setPhone('');
    setEmail('');
    setVehicleMakeModel('');
    setDate('');
    setTime('09:00 AM');
    setNotes('');
    onClearPrefilled();

    // Reset pre-filled selection state
    setSelectedAddOnIds([]);
  };

  // Cancel / Delete appointment
  const handleCancelAppointment = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this detailing reservation? This cannot be undone.')) {
      const filtered = appointments.filter(a => a.id !== id);
      setAppointments(filtered);
      localStorage.setItem('breezy_appointments', JSON.stringify(filtered));
    }
  };

  const timeSlots = [
    '08:00 AM',
    '09:30 AM',
    '11:00 AM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM'
  ];

  return (
    <section id="booking-section" className="scroll-mt-24 py-24 bg-brand-dark text-white px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-3">
            RESERVATION SYSTEM
          </span>
          <h2 className="font-hero text-4xl md:text-5xl uppercase italic tracking-tight">
            Lock In Your Detail
          </h2>
          <div className="w-[48px] h-[3px] bg-brand-accent mx-auto mt-4 mb-4" />
          <p className="text-white/60 font-sans text-sm font-light">
            Secure scheduling console. Input your information and details. Immediate calendar allocation.
          </p>
        </div>

        {/* BOOKING FORM & ACTIVE RES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Side (7 columns) */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 p-6 md:p-10">
            
            <form onSubmit={handleBookSession} className="space-y-6 text-left">
              
              {prefilledConfig && (
                <div className="p-4 bg-brand-accent/10 border border-brand-accent text-brand-accent text-xs uppercase tracking-wider flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 font-bold font-mono">
                    <Sparkles className="h-4 w-4 animate-spin" /> Injected Custom Estimator Setup
                  </span>
                  <button
                    type="button"
                    onClick={onClearPrefilled}
                    className="text-white hover:text-brand-accent text-[11px] font-mono underline ml-4 hover:no-underline"
                  >
                    Clear Setup
                  </button>
                </div>
              )}

              <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-6">
                1. Customer & Vehicle Dossier
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full name */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/70 block mb-2">
                    Owner Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-brand-dark border border-white/15 py-3 pl-11 pr-4 text-xs font-sans text-white focus:border-brand-accent focus:outline-none"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/70 block mb-2">
                    Mobile Phone CRM *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (555) 342-9901"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-brand-dark border border-white/15 py-3 pl-11 pr-4 text-xs font-sans text-white focus:border-brand-accent focus:outline-none"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                </div>

                {/* Email address */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/70 block mb-2">
                    Email Clarification *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@vance.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-brand-dark border border-white/15 py-3 pl-11 pr-4 text-xs font-sans text-white focus:border-brand-accent focus:outline-none"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                </div>

                {/* Vehicle Make/Model */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/70 block mb-2">
                    Vehicle Year, Make, & Model *
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2024 Porsche Carrera GTS"
                      value={vehicleMakeModel}
                      onChange={(e) => setVehicleMakeModel(e.target.value)}
                      className="w-full bg-brand-dark border border-white/15 py-3 pl-11 pr-4 text-xs font-sans text-white focus:border-brand-accent focus:outline-none"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 pt-6 mb-6">
                2. Calibration Spec & Scheduling
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Select Package */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/70 block mb-2">
                    Core detailing Package
                  </label>
                  <select
                    value={selectedPackageId}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="w-full bg-brand-dark border border-white/15 py-3 px-4 text-xs font-sans text-white focus:border-brand-accent focus:outline-none"
                    style={{ borderRadius: '0px' }}
                  >
                    {PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} (${pkg.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Vehicle Size */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/70 block mb-2">
                    Vehicle Size Multiplier
                  </label>
                  <select
                    value={selectedSizeId}
                    onChange={(e) => setSelectedSizeId(e.target.value)}
                    className="w-full bg-brand-dark border border-white/15 py-3 px-4 text-xs font-sans text-white focus:border-brand-accent focus:outline-none"
                    style={{ borderRadius: '0px' }}
                  >
                    {VEHICLE_SIZES.map((size) => (
                      <option key={size.id} value={size.id}>
                        {size.name} ({size.multiplier === 1.0 ? 'Base' : `${size.multiplier}x multiplier`})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Date */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/70 block mb-2">
                    Reservation Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-brand-dark border border-white/15 py-3 pl-11 pr-4 text-xs font-sans text-white focus:border-brand-accent focus:outline-none"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                </div>

                {/* Select Time */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/70 block mb-2">
                    Arrival Window *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-brand-dark border border-white/15 py-3 px-4 text-xs font-sans text-white focus:border-brand-accent focus:outline-none"
                    style={{ borderRadius: '0px' }}
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Addons Checklist (Inside Booking Form) */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/70 block mb-2.5">
                  Applied Protective Shields (Select multi)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-3 bg-brand-dark/50 border border-white/10 rounded-sm">
                  {ADD_ONS.map((add) => {
                    const isChecked = selectedAddOnIds.includes(add.id);
                    return (
                      <label
                        key={add.id}
                        className={`flex items-center space-x-2.5 p-2 border cursor-pointer select-none text-[11px] transition-all ${
                          isChecked
                            ? 'border-brand-accent bg-brand-accent/5 font-bold text-white'
                            : 'border-white/5 bg-transparent text-white/60 hover:border-white/25'
                        }`}
                        style={{ borderRadius: '0px' }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleFormAddOn(add.id)}
                          className="sr-only"
                        />
                        <div className={`h-3 w-3 border flex items-center justify-center shrink-0 ${
                          isChecked ? 'border-brand-accent bg-brand-accent text-white' : 'border-white/30'
                        }`} style={{ borderRadius: '0px' }}>
                          {isChecked && <div className="w-1.5 h-1.5 bg-white" />}
                        </div>
                        <span className="truncate">{add.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Special Instructions Notes */}
              <div>
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/70 block mb-2">
                  Meticulous Requirements & Owner Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Notes on chemical sensitivities, scratch areas, or custom instructions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-brand-dark border border-white/15 py-3 px-4 text-xs font-sans text-white focus:border-brand-accent focus:outline-none"
                  style={{ borderRadius: '0px' }}
                />
              </div>

              {/* Total calculations statement in form */}
              <div className="p-4 bg-white/[0.03] border border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-left font-mono">
                  <span className="text-[10px] text-white/50 block uppercase">Formula Verification Total</span>
                  <div className="flex items-center space-x-2 mt-0.5">
                    <span className="text-2xl font-black text-white">${finalPrice}</span>
                    <span className="text-[10px] text-white/40">(${calculatedBase} base + ${calculatedAddOns} shields)</span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="bg-brand-accent hover:opacity-90 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 cursor-pointer active:scale-98 transition-all"
                  style={{ borderRadius: '0px' }}
                >
                  Secure Reservation
                </button>
              </div>

            </form>

          </div>

          {/* Appointments Board Side (5 columns) */}
          <div className="lg:col-span-15 space-y-6 w-full lg:col-span-5 text-left">
            
            <div className="bg-white/[0.02] border border-white/10 p-6">
              <h3 className="text-xs uppercase font-bold tracking-widest text-brand-accent mb-4 border-b border-white/10 pb-2">
                ACTIVE RESERVATION REGISTRY
              </h3>
              
              <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1">
                {appointments.length === 0 ? (
                  <div className="py-12 text-center text-white/40 space-y-2">
                    <ShieldAlert className="h-8 w-8 text-white/20 mx-auto" />
                    <p className="text-xs font-mono uppercase tracking-wider">No Reserved Schedulers Detected</p>
                    <p className="text-[11px] font-sans leading-relaxed px-4">
                      Configure your package and secure a reservation to start booking tracking tracking.
                    </p>
                  </div>
                ) : (
                  appointments.map((appt) => (
                    <div
                      key={appt.id}
                      className="border border-white/10 bg-[#16161e] p-4.5 space-y-3 relative hover:border-white/20 transition-all"
                      style={{ borderRadius: '0px' }}
                    >
                      {/* Booking Title / Head */}
                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <span className="px-2 py-0.5 bg-emerald-600/25 text-emerald-400 border border-emerald-600/30 text-[9px] uppercase font-bold font-mono">
                            {appt.status}
                          </span>
                          <h4 className="font-bold text-xs text-white uppercase mt-2 font-sans tracking-wide truncate max-w-[180px]">
                            {appt.vehicleMakeModel}
                          </h4>
                        </div>
                        
                        <button
                          onClick={() => handleCancelAppointment(appt.id)}
                          className="text-white/40 hover:text-brand-accent p-1 cursor-pointer transition-colors"
                          title="Cancel Reservation"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="w-full h-px bg-white/5" />

                      {/* Detail points */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-white/70">
                        <div>
                          <p className="text-white/40 text-[9px] uppercase">Service Setup</p>
                          <p className="font-bold text-brand-accent truncate mt-0.5">{appt.packageName.split(' ')[1] || appt.packageName}</p>
                        </div>
                        <div>
                          <p className="text-white/40 text-[9px] uppercase">Vehicle scale</p>
                          <p className="font-bold truncate mt-0.5">{appt.vehicleSize}</p>
                        </div>
                        <div>
                          <p className="text-white/40 text-[9px] uppercase">Arrival window</p>
                          <p className="font-bold text-white mt-0.5">{appt.date} @ {appt.time}</p>
                        </div>
                        <div>
                          <p className="text-white/40 text-[9px] uppercase">Security total</p>
                          <p className="font-bold text-white mt-0.5">${appt.totalPrice}</p>
                        </div>
                      </div>

                      {appt.addOnNames && appt.addOnNames.length > 0 && (
                        <div className="bg-brand-dark/45 p-2 border-l border-brand-accent">
                          <p className="text-[9px] text-white/40 uppercase font-mono">Active defense shields</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {appt.addOnNames.map((n, i) => (
                              <span key={i} className="text-[9px] uppercase bg-white/5 border border-white/10 px-1 py-0.5 font-mono text-white/80">
                                {n.replace('Premium ', '').replace('Extreme ', '')}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="text-[10px] text-white/50 space-y-1">
                        <p className="truncate"><span className="text-white/30 font-bold">CLIENT:</span> {appt.customerName}</p>
                        <p className="truncate"><span className="text-white/30 font-bold">CONTACT:</span> {appt.customerPhone}</p>
                      </div>

                    </div>
                  ))
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RESERVATION REGISTER RECEIPT TOAST */}
      {successBooking && (
        <div className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm flex items-center justify-center p-6 z-150 animate-fade-in">
          <div className="bg-[#16161e] border-2 border-brand-accent max-w-lg w-full p-8 text-left relative shadow-2xl space-y-6" style={{ borderRadius: '0px' }}>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-600/25 p-2 shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <span className="text-emerald-400 text-[10px] font-bold font-mono tracking-widest uppercase">CONCOURSE CONFIRMED</span>
                  <h3 className="font-hero text-2xl uppercase italic text-white tracking-wide">RECEIPT SECURED</h3>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark/70 border border-white/5 p-4 space-y-3 font-mono text-xs leading-normal">
              
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/50">RESERVATION ID:</span>
                <span className="font-bold text-white">{successBooking.id}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-white/50">RESERVED VEHICLE:</span>
                <span className="font-bold text-white">{successBooking.vehicleMakeModel}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/50">SCALE CONFLICT:</span>
                <span className="font-bold text-white">{successBooking.vehicleSize}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/50">DETAILED INTENSITY:</span>
                <span className="font-bold text-brand-accent">{successBooking.packageName}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/50">CALENDAR SLOT:</span>
                <span className="font-bold text-white">{successBooking.date} @ {successBooking.time}</span>
              </div>

              <div className="h-px bg-white/10 my-1" />

              <div className="flex justify-between text-sm">
                <span className="font-bold text-white">TOTAL PRICE DETAILED:</span>
                <span className="font-bold text-brand-accent font-sans">${successBooking.totalPrice}</span>
              </div>
            </div>

            <p className="text-[11px] font-sans text-white/60 leading-relaxed text-center">
              Our master detailer is allocated to your slot. A backup briefing notification was sent to <strong className="text-white">{successBooking.customerEmail}</strong>.
            </p>

            <button
              onClick={() => setSuccessBooking(null)}
              className="w-full bg-white text-brand-dark font-extrabold text-xs uppercase tracking-widest py-3.5 hover:bg-white/90 active:scale-98 cursor-pointer transition-all"
              style={{ borderRadius: '0px' }}
            >
              Close Confirmation Receipt
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
