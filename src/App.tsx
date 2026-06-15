/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesEstimator from './components/ServicesEstimator';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  // Transferred configuration state from Interactive Pricing Estimator to Booking Form
  const [prefilledConfig, setPrefilledConfig] = useState<{
    packageId: string;
    vehicleSizeId: string;
    addOnIds: string[];
    totalCalculated: number;
  } | null>(null);

  const scrollToBooking = () => {
    const section = document.getElementById('booking-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEstimatorConfig = (config: {
    packageId: string;
    vehicleSizeId: string;
    addOnIds: string[];
    totalCalculated: number;
  }) => {
    setPrefilledConfig(config);
  };

  const handleClearPrefilled = () => {
    setPrefilledConfig(null);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-dark font-sans selection:bg-brand-accent selection:text-white">
      {/* NAVIGATION BAR */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* HERO BANNER ENTRY */}
      <Hero onOpenBooking={scrollToBooking} />

      {/* PHILOSOPHY & ABOUT STORY */}
      <About />

      {/* PRICING MENU & TACTILE ESTIMATOR */}
      <ServicesEstimator onSelectConfiguration={handleSelectEstimatorConfig} />

      {/* BEFORE/AFTER WIPER SHOWCASE */}
      <BeforeAfterGallery />

      {/* ONLINE RESERVATION ENGINE */}
      <BookingForm
        prefilledConfig={prefilledConfig}
        onClearPrefilled={handleClearPrefilled}
      />

      {/* CUSTOMER ACCLAIMS */}
      <Testimonials />

      {/* FAQ ACCORDIONS */}
      <FAQ />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
