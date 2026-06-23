/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, MapPin, Clock, Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-900 pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 text-left pb-16 border-b border-gray-200">
          
          {/* Column 1: Brand & Bio (5 cells wide) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="p-1 bg-brand-accent rounded-sm">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="font-hero text-2xl tracking-tight text-gray-900 uppercase italic">
                Luxuriös<span className="text-brand-accent"> Detail</span>
              </span>
            </Link>
            
            <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed font-light">
              We provide world-grade, master-level detailing directly to our private clientele. Our operations bypass high-production tunnel tunnels in favor of bespoke paint conservation, luxury hand care, and advanced chemical defense coatings.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="p-2.5 bg-gray-100 hover:bg-brand-accent hover:text-white transition-all text-gray-600 rounded-full"
                aria-label="Instagram link"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-gray-100 hover:bg-brand-accent hover:text-white transition-all text-gray-600 rounded-full"
                aria-label="Facebook link"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Hours & Location (4 cells wide) */}
          <div className="md:col-span-4 space-y-5 font-sans font-light text-xs md:text-sm text-gray-600">
            <h4 className="font-hero text-lg uppercase italic text-gray-900 tracking-wider pb-1 border-b border-gray-200">
              Operations Center
            </h4>

            <div className="flex items-start space-x-3.5">
              <MapPin className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Detallist Workshop HQ</p>
                <p className="text-gray-500 mt-0.5">840 Detailing Dr, Suite 100, West Los Angeles, CA 90025</p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <Clock className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">Active Calibrated Hours</p>
                <p className="text-gray-500 mt-0.5">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-400 text-[10px] uppercase font-mono mt-0.5">Sunday: Private Reserve Appointments only</p>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Channels (3 cells wide) */}
          <div className="md:col-span-3 space-y-5 font-sans font-light text-xs md:text-sm text-gray-600">
            <h4 className="font-hero text-lg uppercase italic text-gray-900 tracking-wider pb-1 border-b border-gray-200">
              Communication Care
            </h4>

            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-brand-accent shrink-0" />
              <a href="tel:+1555273399" className="hover:text-brand-accent transition-colors font-mono font-bold text-xs">
                (555) LUXURIOS
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-brand-accent shrink-0" />
              <a href="mailto:concierge@luxuriosdetail.com" className="hover:text-brand-accent transition-colors">
                concierge@luxuriosdetail.com
              </a>
            </div>

            <button
              onClick={scrollUp}
              className="mt-4 flex items-center space-x-2 bg-gray-100 hover:bg-black hover:text-white transition-all text-gray-900 text-xs font-bold uppercase tracking-widest px-4 py-2.5 cursor-pointer rounded-full"
            >
              <span>Scroll to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Legal Row */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-400">
          <p>© 2026 LUXURIÖS DETAIL CORP. ALL CONCOURSE RESTORATION RIGHTS RESERVED.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-brand-accent transition-colors">PRIVACY CODE</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-accent transition-colors">TERMS OF CALIBRATION</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
