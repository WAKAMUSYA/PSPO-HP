'use client';
import React, { useRef } from 'react';
import { serviceTabs } from '../../data/dummyData';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// Theme configuration for each category
const categoryThemes: Record<string, { text: string; border: string; buttonBg: string; buttonText: string }> = {
  exercise: { text: 'text-brand-orange', border: 'border-brand-orange', buttonBg: 'hover:bg-brand-orange', buttonText: 'hover:text-white' },
  work: { text: 'text-blue-600', border: 'border-blue-600', buttonBg: 'hover:bg-blue-600', buttonText: 'hover:text-white' },
  condition: { text: 'text-teal-600', border: 'border-teal-600', buttonBg: 'hover:bg-teal-600', buttonText: 'hover:text-white' },
  relax: { text: 'text-rose-500', border: 'border-rose-500', buttonBg: 'hover:bg-rose-500', buttonText: 'hover:text-white' },
};

function CategorySection({ category, index }: { category: typeof serviceTabs[0], index: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = categoryThemes[category.id] || categoryThemes.exercise;
  const isEven = index % 2 === 0;

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-24 last:mb-0">
      {/* Category Header (Huis Ten Bosch Style) */}
      <div className={`flex flex-col gap-8 mb-10 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="w-full md:w-2/3 h-64 md:h-[400px] relative rounded-3xl overflow-hidden shadow-lg">
          <Image 
            src={category.image} 
            alt={category.title} 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center items-start px-4">
          <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>
            {category.title}
          </h3>
          <button className={`inline-flex items-center px-6 py-2.5 rounded-full border-2 ${theme.border} ${theme.text} ${theme.buttonBg} ${theme.buttonText} transition-all duration-300 font-bold group`}>
            {category.title}の施設一覧
            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel for Services */}
      <div className="relative group/carousel">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory hide-scrollbar pl-4 md:pl-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {category.services.map((service, idx) => (
            <a 
              key={idx} 
              href="#"
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  fill 
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Text Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-bold text-slate-800 mb-3">
                  {service.name}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line flex-grow mb-6 line-clamp-3">
                  {service.desc}
                </p>
                
                {/* Link action */}
                <div className={`mt-auto flex items-center text-sm font-bold ${theme.text}`}>
                  詳しくはこちら <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Right Scroll Arrow */}
        <button 
          onClick={scrollRight}
          className="hidden md:flex opacity-0 group-hover/carousel:opacity-100 absolute -right-6 top-[40%] -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 text-slate-600 hover:text-brand-navy hover:border-brand-navy rounded-full items-center justify-center shadow-lg transition-all hover:scale-105 z-10 focus:outline-none"
          aria-label="Next items"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4">P・SPOでできること</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            ジムでのトレーニングはもちろん、カフェでの仕事、サウナでのリラックスまで。<br className="hidden sm:block" />
            あなたのライフスタイルに合わせて、自由に組み合わせてご利用いただけます。
          </p>
        </div>

        <div>
          {serviceTabs.map((category, index) => (
            <CategorySection key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
