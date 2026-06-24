/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQS } from '../data';
import { Plus, X, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // 1 to have the second one open like the image

  const toggleIndex = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faqs" className="py-24 bg-gradient-to-br from-red-50 via-white to-[#F5E6D0]/60 px-4 md:px-12 lg:px-24">
      <div className="max-w-[900px] mx-auto bg-[#F2F2F4] rounded-[3rem] px-6 py-16 md:px-16 md:py-20 shadow-[0_0_80px_rgba(0,0,0,0.15)] border border-white">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-500 mb-6 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
            <span className="text-gray-400">010</span>
            <span>•</span>
            <span className="font-bold text-gray-900">FAQS</span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
            Common Questions
          </h2>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border border-[#C7D2FE] rounded-[2rem] shadow-sm' 
                    : 'bg-[#E4E4E5] border border-transparent rounded-full hover:bg-[#DCDCDC]'
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-2 text-left cursor-pointer"
                >
                  <div className="flex items-center space-x-4 pl-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono shrink-0 transition-colors ${isOpen ? 'bg-gray-50 text-gray-600' : 'bg-white text-gray-600'}`}>
                      {index + 1}
                    </div>
                    <span className="font-sans font-medium text-[15px] md:text-base text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-white border border-gray-200 text-gray-900' : 'bg-[#111118] text-white'}`}>
                    {isOpen ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-8 pt-2 pl-[4.5rem] pr-6 md:pr-12">
                    <p className="font-sans text-[14px] text-gray-500 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CONTACT LINK */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-2">Have any other questions?</p>
          <a href="#contact" className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-black transition-colors underline decoration-gray-400 underline-offset-4 hover:decoration-black">
            Contact Us <ArrowRight className="w-4 h-4 ml-1.5 bg-gray-200 rounded-full p-0.5 text-gray-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
