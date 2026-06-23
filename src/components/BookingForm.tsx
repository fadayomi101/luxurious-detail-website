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
  const [selectedPackageId, setSelectedPackageId] = useState('single_stage');
  const [selectedSizeId, setSelectedSizeId] = useState('sedan');
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
        packageId: 'single_stage',
        packageName: 'Single Stage Paint Correction',
        addOnIds: ['ceramic', 'steam_sanitize'],
        addOnNames: ['Premium Ceramic Coating Up', 'AC Vent & Odor Steam Sanitize'],
        date: '2026-06-18',
        time: '11:30 AM',
        notes: 'Please apply extra coating thickness on front splitter and carbon diffuser.',
        totalPrice: 130000 + 90 + 45,
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
  
  const calculatedBase = currentPackage.prices[currentSize.id] || currentPackage.basePrice;
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
    <section id="booking-section" className="scroll-mt-24 py-24 bg-gray-50 text-gray-900 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-3">
            RESERVATION SYSTEM
          </span>
          <h2 className="font-hero text-4xl md:text-5xl uppercase italic tracking-tight text-gray-900">
            Lock In Your Detail
          </h2>
          <div className="w-[48px] h-[3px] bg-brand-accent mx-auto mt-4 mb-4" />
          <p className="text-gray-500 font-sans text-sm font-light">
            Secure scheduling console. Input your information and details. Immediate calendar allocation.
          </p>
        </div>

        {/* BOOKING FORM & ACTIVE RES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Side (7 columns) */}
          <div className="lg:col-span-7 bg-white border border-gray-200 shadow-sm rounded-[2rem] p-6 md:p-10">
            
            <form onSubmit={handleBookSession} className="space-y-6 text-left">
              
              {prefilledConfig && (
                <div className="p-4 bg-brand-accent/10 border border-brand-accent text-brand-accent text-xs uppercase tracking-wider flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 font-bold font-mono">
                    <Sparkles className="h-4 w-4 animate-spin" /> Injected Custom Estimator Setup
                  </span>
                  <button
                    type="button"
                    onClick={onClearPrefilled}
                    className="text-brand-accent hover:text-red-500 text-[11px] font-mono underline ml-4 hover:no-underline"
                  >
                    Clear Setup
                  </button>
                </div>
              )}

              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-2 mb-6">
                1. Customer & Vehicle Dossier
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full name */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2">
                    Owner Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-xs font-sans text-gray-900 focus:bg-white focus:border-brand-accent focus:outline-none placeholder:text-gray-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2">
                    Mobile Phone CRM *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (555) 342-9901"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-xs font-sans text-gray-900 focus:bg-white focus:border-brand-accent focus:outline-none placeholder:text-gray-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Email address */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2">
                    Email Clarification *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@vance.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-xs font-sans text-gray-900 focus:bg-white focus:border-brand-accent focus:outline-none placeholder:text-gray-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Vehicle Make/Model */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2">
                    Vehicle Year, Make, & Model *
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2024 Porsche Carrera GTS"
                      value={vehicleMakeModel}
                      onChange={(e) => setVehicleMakeModel(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-xs font-sans text-gray-900 focus:bg-white focus:border-brand-accent focus:outline-none placeholder:text-gray-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-2 pt-6 mb-6">
                2. Calibration Spec & Scheduling
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Select Package */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2">
                    Core detailing Package
                  </label>
                  <select
                    value={selectedPackageId}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-sans text-gray-900 focus:bg-white focus:border-brand-accent focus:outline-none transition-colors"
                  >
                    {PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} (Starting at ₦{pkg.basePrice.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Vehicle Size */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2">
                    Vehicle Size Multiplier
                  </label>
                  <select
                    value={selectedSizeId}
                    onChange={(e) => setSelectedSizeId(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-sans text-gray-900 focus:bg-white focus:border-brand-accent focus:outline-none transition-colors"
                  >
                    {VEHICLE_SIZES.map((size) => (
                      <option key={size.id} value={size.id}>
                        {size.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Date */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2">
                    Reservation Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-xs font-sans text-gray-900 focus:bg-white focus:border-brand-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Select Time */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2">
                    Arrival Window *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-sans text-gray-900 focus:bg-white focus:border-brand-accent focus:outline-none transition-colors"
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
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2.5">
                  Applied Protective Shields (Select multi)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-3 bg-gray-50 border border-gray-200 rounded-xl">
                  {ADD_ONS.map((add) => {
                    const isChecked = selectedAddOnIds.includes(add.id);
                    return (
                      <label
                        key={add.id}
                        className={`flex items-center space-x-2.5 p-2 border rounded-lg cursor-pointer select-none text-[11px] transition-all ${
                          isChecked
                            ? 'border-brand-accent bg-red-50 text-brand-accent font-bold'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleFormAddOn(add.id)}
                          className="sr-only"
                        />
                        <div className={`h-3 w-3 border rounded-[2px] flex items-center justify-center shrink-0 ${
                          isChecked ? 'border-brand-accent bg-brand-accent text-white' : 'border-gray-300 bg-white'
                        }`}>
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
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-2">
                  Meticulous Requirements & Owner Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Notes on chemical sensitivities, scratch areas, or custom instructions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-sans text-gray-900 focus:bg-white focus:border-brand-accent focus:outline-none placeholder:text-gray-400 transition-colors"
                />
              </div>

              {/* Total calculations statement in form */}
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-8">
                <div className="text-left font-mono">
                  <span className="text-[10px] text-gray-500 block uppercase font-bold">Formula Verification Total</span>
                  <div className="flex items-center space-x-2 mt-0.5">
                    <span className="text-2xl font-black text-gray-900">₦{finalPrice.toLocaleString()}</span>
                    <span className="text-[10px] text-gray-400">(₦{calculatedBase.toLocaleString()} base + ₦{calculatedAddOns.toLocaleString()} shields)</span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full cursor-pointer active:scale-95 transition-all shadow-md"
                >
                  Secure Reservation
                </button>
              </div>

            </form>

          </div>

          {/* Appointments Board Side (5 columns) */}
          <div className="lg:col-span-15 space-y-6 w-full lg:col-span-5 text-left">
            
            <div className="bg-white border text-gray-900 border-gray-200 p-6 rounded-3xl shadow-sm h-full">
              <h3 className="text-xs uppercase font-bold tracking-widest border-b border-gray-100 pb-2 mb-4">
                ACTIVE RESERVATION REGISTRY
              </h3>
              
              <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1">
                {appointments.length === 0 ? (
                  <div className="py-12 text-center text-gray-400 space-y-2">
                    <ShieldAlert className="h-8 w-8 text-gray-300 mx-auto" />
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-500">No Reserved Schedulers Detected</p>
                    <p className="text-[11px] font-sans leading-relaxed px-4">
                      Configure your package and secure a reservation to start booking tracking tracking.
                    </p>
                  </div>
                ) : (
                  appointments.map((appt) => (
                    <div
                      key={appt.id}
                      className="border border-gray-200 bg-gray-50 rounded-2xl p-4.5 space-y-3 relative transition-all"
                    >
                      {/* Booking Title / Head */}
                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <span className="px-2 py-0.5 bg-red-50 text-brand-accent border border-brand-accent/20 rounded-full text-[9px] uppercase font-bold font-mono">
                            {appt.status}
                          </span>
                          <h4 className="font-bold text-xs text-gray-900 uppercase mt-2 font-sans tracking-wide truncate max-w-[180px]">
                            {appt.vehicleMakeModel}
                          </h4>
                        </div>
                        
                        <button
                          onClick={() => handleCancelAppointment(appt.id)}
                          className="text-gray-400 hover:text-red-600 p-1 cursor-pointer transition-colors"
                          title="Cancel Reservation"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="w-full h-px bg-gray-200" />

                      {/* Detail points */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-gray-500">
                        <div>
                          <p className="text-gray-400 text-[9px] uppercase">Service Setup</p>
                          <p className="font-bold text-gray-900 truncate mt-0.5">{appt.packageName.split(' ')[1] || appt.packageName}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-[9px] uppercase">Vehicle scale</p>
                          <p className="font-bold text-gray-900 truncate mt-0.5">{appt.vehicleSize}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-[9px] uppercase">Arrival window</p>
                          <p className="font-bold text-gray-900 mt-0.5">{appt.date} @ {appt.time}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-[9px] uppercase">Security total</p>
                          <p className="font-bold text-brand-accent mt-0.5">₦{appt.totalPrice.toLocaleString()}</p>
                        </div>
                      </div>

                      {appt.addOnNames && appt.addOnNames.length > 0 && (
                        <div className="bg-white p-2 border-l border-brand-accent rounded-sm shadow-sm">
                          <p className="text-[9px] text-gray-400 uppercase font-mono">Active defense shields</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {appt.addOnNames.map((n, i) => (
                              <span key={i} className="text-[9px] uppercase bg-gray-50 border border-gray-200 rounded font-mono text-gray-600 px-1 py-0.5">
                                {n.replace('Premium ', '').replace('Extreme ', '')}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="text-[10px] text-gray-500 space-y-1">
                        <p className="truncate"><span className="text-gray-400 font-bold">CLIENT:</span> {appt.customerName}</p>
                        <p className="truncate"><span className="text-gray-400 font-bold">CONTACT:</span> {appt.customerPhone}</p>
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 z-[150] animate-fade-in">
          <div className="bg-white border border-gray-200 rounded-[2rem] max-w-lg w-full p-8 text-left shadow-2xl space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-green-50 p-2 rounded-xl shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <span className="text-green-600 text-[10px] font-bold font-mono tracking-widest uppercase">CONCOURSE CONFIRMED</span>
                  <h3 className="font-hero text-2xl uppercase italic text-gray-900 tracking-wide">RECEIPT SECURED</h3>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-3 font-mono text-xs leading-normal">
              
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">RESERVATION ID:</span>
                <span className="font-bold text-gray-900">{successBooking.id}</span>
              </div>
              
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">RESERVED VEHICLE:</span>
                <span className="font-bold text-gray-900">{successBooking.vehicleMakeModel}</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">SCALE CONFLICT:</span>
                <span className="font-bold text-gray-900">{successBooking.vehicleSize}</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">DETAILED INTENSITY:</span>
                <span className="font-bold text-brand-accent">{successBooking.packageName}</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">CALENDAR SLOT:</span>
                <span className="font-bold text-gray-900">{successBooking.date} @ {successBooking.time}</span>
              </div>

              <div className="flex justify-between text-sm py-2">
                <span className="font-bold text-gray-900">TOTAL PRICE DETAILED:</span>
                <span className="font-bold text-brand-accent font-sans">₦{successBooking.totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-[11px] font-sans text-gray-500 leading-relaxed text-center">
              Our master detailer is allocated to your slot. A backup briefing notification was sent to <strong className="text-gray-900">{successBooking.customerEmail}</strong>.
            </p>

            <button
              onClick={() => setSuccessBooking(null)}
              className="w-full bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest py-4 hover:bg-gray-800 active:scale-95 cursor-pointer transition-all shadow-md"
            >
              Close Confirmation Receipt
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
