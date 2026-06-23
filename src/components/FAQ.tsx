/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQS } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faqs" className="py-24 bg-white text-gray-900 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent tracking-[0.2em] font-bold text-xs uppercase block mb-3">
            TECHNICAL SUPPORT
          </span>
          <h2 className="font-hero text-4xl md:text-5xl uppercase italic tracking-tight text-gray-900">
            Detailing FAQ
          </h2>
          <div className="w-[48px] h-[3px] bg-brand-accent mx-auto mt-4 mb-4" />
          <p className="text-gray-500 font-sans text-sm font-light">
            Answers to our most popular questions regarding chemical safety coatings and timespans.
          </p>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300 rounded-2xl"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="font-sans font-bold text-sm md:text-base text-gray-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full shrink-0 ml-4 transition-colors">
                    {isOpen ? <Minus className="h-4 w-4 text-brand-accent" /> : <Plus className="h-4 w-4 text-gray-500" />}
                  </div>
                </button>

                {/* Content body with responsive height animation */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-gray-100 p-6 bg-gray-50' : 'max-h-0 opacity-0 pointer-events-none'
                  } overflow-hidden`}
                >
                  <p className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
