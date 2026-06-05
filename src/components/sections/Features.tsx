import React from 'react';
import { features } from '../../data/dummyData';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function Features() {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/image/top3.jpg" 
          alt="P-SPO Background" 
          fill 
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">P・SPOが選ばれる理由</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            地域最大級の複合型施設として、ただのフィットネスジムを超えた価値を提供し続けています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 shadow-2xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-brand-mint drop-shadow-md" size={28} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
