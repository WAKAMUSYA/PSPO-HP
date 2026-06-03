'use client';
import React, { useState } from 'react';
import { faqs } from '../../data/dummyData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4">よくある質問</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-mint shadow-md' : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => toggleOpen(index)}
                >
                  <span className="font-bold text-slate-800 pr-8">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="text-brand-mint flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 pb-6 text-slate-600 text-sm leading-relaxed ${isOpen ? 'block' : 'hidden'}`}
                >
                  <div className="pt-2 border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
