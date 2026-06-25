/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F5E6D0] p-4 sm:p-8 md:p-12">
      <div className="max-w-[1400px] mx-auto bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-lg">
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-100">
          
          {/* Column 1: Brand & Info */}
          <div className="md:col-span-1 lg:col-span-6 space-y-6 lg:pr-8">
            <Link to="/" className="inline-block group">
              <img 
                src="/logo.png" 
                alt="Luxuriös Detail Logo" 
                className="w-40 md:w-56 h-auto object-contain object-left transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
              />
            </Link>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              World-class automotive detailing, specializing in bespoke paint conservation, luxury hand care, and advanced chemical defense coatings.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <MapPin className="h-5 w-5 text-[#51be9b] shrink-0 mt-0.5" />
                <span>
                  Sigma Estate, I.T Igbani Street Off Obafemi Awolowo Way Jabi,<br />
                  Abuja., Abuja, Nigeria 900108
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="h-5 w-5 text-[#51be9b] shrink-0" />
                <span>08133335515</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="h-5 w-5 text-[#51be9b] shrink-0" />
                <span>info@luxuriosdetail.com</span>
              </div>
            </div>

          </div>

          {/* Column 2: Our Services */}
          <div className="md:col-span-1 lg:col-span-3 pt-2 lg:pt-4 lg:pl-8">
            <h4 className="font-bold text-gray-900 mb-6 text-sm">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Paint Correction</Link></li>
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Ceramic Coating</Link></li>
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Interior Detailing</Link></li>
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Engine Bay Care</Link></li>
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Wheel Coatings</Link></li>
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Maintenance Wash</Link></li>
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Protective Films</Link></li>
            </ul>

            <div className="pt-8">
              <h4 className="font-bold text-gray-900 mb-4 text-sm">Follow Our Journey</h4>
              <div className="flex items-center space-x-3">
                <a href="https://www.instagram.com/luxurios_detail?utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-600 hover:bg-[#51be9b] hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-600 hover:bg-[#51be9b] hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Support */}
          <div className="md:col-span-1 lg:col-span-3 pt-2 lg:pt-4">
            <h4 className="font-bold text-gray-900 mb-6 text-sm">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500 mb-8">
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Insurance Claims</Link></li>
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Booking Support</Link></li>
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">Emergency Contact</Link></li>
              <li><Link to="#" className="hover:text-[#51be9b] transition-colors">COVID-19 Info</Link></li>
            </ul>
            
            {/* Badges */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 border border-gray-100 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#1b9a78] flex items-center justify-center text-white shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="font-bold text-xs text-gray-900">IDA Certified</p>
                  <p className="text-[10px] text-gray-500">Verified Detailer</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 border border-gray-100 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-xs text-gray-900">SSL Secured</p>
                  <p className="text-[10px] text-gray-500">Safe & Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col xl:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <p>© 2026 Luxuriös Detail. All rights reserved. Made with <span className="text-red-500">❤️</span> for car lovers worldwide.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 font-medium">
            <Link to="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-gray-900 transition-colors">Cookie Policy</Link>
            <Link to="#" className="hover:text-gray-900 transition-colors">Refund Policy</Link>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-gray-600 font-medium">We accept:</span>
            {/* Payment Icons */}
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white font-bold text-[8px] italic px-2 py-1 rounded">VISA</div>
              <div className="flex space-x-0 bg-gray-100 p-1 rounded items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mix-blend-multiply opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mix-blend-multiply opacity-80 -ml-1"></div>
              </div>
              <div className="bg-blue-600 text-white font-bold text-[8px] px-2 py-1 rounded tracking-tighter">PP</div>
              <div className="bg-black text-white px-2 py-1 rounded flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05 1.8-3.08 1.8-1.06 0-1.39-.67-3.14-.67-1.74 0-2.12.65-3.12.65-1.08 0-2.18-.89-3.21-1.92-2.18-2.14-3.87-6.07-3.87-8.99 0-3.66 2.01-5.61 4.38-5.61 1.05 0 2.05.47 2.89.89.79.39 1.48.74 2.12.74.61 0 1.34-.36 2.19-.78.93-.45 2.1-.96 3.32-.96 1.48 0 2.87.52 3.92 1.5-3.25 1.77-2.73 5.92.51 7.23-.74 1.94-1.87 4-2.91 5.12zM12.03 4.34c-.16-2.11 1.77-3.9 3.8-4.34.25 2.21-1.98 4.07-3.8 4.34z"/></svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
