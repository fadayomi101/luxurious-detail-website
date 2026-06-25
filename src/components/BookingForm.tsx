/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PACKAGES, VEHICLE_SIZES } from '../data';
import { Appointment } from '../types';
import { Calendar, Clock, Car, Phone, Mail, User, ShieldAlert, Sparkles, CheckCircle2, Trash2 } from 'lucide-react';

interface BookingFormProps {
  prefilledConfig: {
    packageId: string;
    vehicleSizeId: string;
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
        date: '2026-06-18',
        time: '11:30 AM',
        notes: 'Please apply extra coating thickness on front splitter and carbon diffuser.',
        totalPrice: 130000,
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
    }
  }, [prefilledConfig]);

  // Handle price calculation inside the booking form itself
  const currentPackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];
  const currentSize = VEHICLE_SIZES.find((s) => s.id === selectedSizeId) || VEHICLE_SIZES[0];
  
  const finalPrice = currentPackage.prices[currentSize.id] || currentPackage.basePrice;

  // Submit appointment handler
  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !email || !vehicleMakeModel || !date || !time) {
      alert('Please fill out all required booking fields to secure your reservation.');
      return;
    }

    const packageNames = currentPackage.name;
    const sizeName = currentSize.name;

    const newAppointment: Appointment = {
      id: `session-${Date.now()}`,
      customerName: name,
      customerPhone: phone,
      customerEmail: email,
      vehicleMakeModel,
      vehicleSize: sizeName,
      packageId: selectedPackageId,
      packageName: packageNames,
      date,
      time,
      notes,
      totalPrice: finalPrice,
      status: 'Confirmed'
    };

    const updated = [newAppointment, ...appointments];
    setAppointments(updated);
    localStorage.setItem('breezy_appointments', JSON.stringify(updated));

    // Generate WhatsApp message
    const message = `New Lead Generated:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nVehicle: ${vehicleMakeModel}\nSize: ${sizeName}\nService: ${packageNames}\nDate: ${date}\nTime: ${time}\nTotal Price: ₦${finalPrice.toLocaleString()}\nNotes: ${notes || 'None'}`;
    const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

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
    <section id="booking-section" className="scroll-mt-24 py-16 bg-gray-50 text-gray-900 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-3">
            RESERVATION SYSTEM
          </span>
          <h2 className="font-hero text-4xl md:text-5xl leading-tight tracking-tight text-gray-900">
            Lock In Your Detail
          </h2>
          <div className="w-[48px] h-[3px] bg-brand-accent mx-auto mt-4 mb-4" />
          <p className="text-gray-500 font-sans text-sm font-light">
            Secure scheduling console. Input your information and details. Immediate calendar allocation.
          </p>
        </div>

        {/* BOOKING FORM */}
        <div className="max-w-2xl mx-auto w-full">
          
          {/* Form Side */}
          <div className="bg-white border border-gray-200 shadow-2xl shadow-black/10 rounded-[2rem] p-8 md:p-12">
            
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
                    <span className="text-[10px] text-gray-400">({currentPackage.name})</span>
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
                  <h3 className="font-hero text-2xl text-gray-900 tracking-wide">RECEIPT SECURED</h3>
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
              Your details have been received and we will reach out to you very soon. A backup briefing notification was sent to <strong className="text-gray-900">{successBooking.customerEmail}</strong>.
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
