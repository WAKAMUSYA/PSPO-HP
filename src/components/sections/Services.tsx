'use client';
import React, { useRef } from 'react';
import { serviceTabs } from '../../data/dummyData';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const sectionConfig: Record<string, any> = {
  exercise: { 
    bg: 'bg-[#FAF9F6]', 
    textColor: 'text-[#e60012]', 
    svgColor: 'text-[#FAF9F6]',
    cardBg: 'bg-white',
    descColor: 'text-slate-600',
    titleColor: 'text-slate-800',
    buttonClass: 'border-[#e60012] text-[#e60012] hover:bg-[#e60012] hover:text-white',
  },
  work: { 
    bg: 'bg-[#E6F3FF]', 
    textColor: 'text-[#3587c6]', 
    svgColor: 'text-[#E6F3FF]',
    cardBg: 'bg-white',
    descColor: 'text-slate-600',
    titleColor: 'text-slate-800',
    buttonClass: 'border-[#3587c6] text-[#3587c6] hover:bg-[#3587c6] hover:text-white',
  },
  condition: { 
    bg: 'bg-[#F0FFF4]', 
    textColor: 'text-[#10b981]', 
    svgColor: 'text-[#F0FFF4]',
    cardBg: 'bg-white',
    descColor: 'text-slate-600',
    titleColor: 'text-slate-800',
    buttonClass: 'border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white',
  },
  relax: { 
    bg: 'bg-[#1d70b8]', 
    textColor: 'text-white', 
    svgColor: 'text-[#1d70b8]',
    cardBg: 'bg-white/10 backdrop-blur-md border border-white/20',
    descColor: 'text-blue-100',
    titleColor: 'text-white',
    buttonClass: 'border-white text-white hover:bg-white hover:text-[#1d70b8]',
  },
};

// Stylish diagonal divider generator
const SharpDivider = ({ color, flip = false }: { color: string, flip?: boolean }) => (
  <div className={`absolute left-0 w-full z-10 -translate-y-[99%] ${color}`} style={{ top: 0, height: '6vw', minHeight: '40px' }}>
    <div className="w-full h-full bg-current" style={{ 
      clipPath: flip ? 'polygon(100% 0, 0 100%, 100% 100%)' : 'polygon(0 0, 0 100%, 100% 100%)'
    }} />
  </div>
);

function CategorySection({ category, index }: { category: typeof serviceTabs[0], index: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const conf = sectionConfig[category.id] || sectionConfig.exercise;
  const isEven = index % 2 === 0;

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative pt-20 md:pt-32 pb-24 ${conf.bg}`}>
      {/* Add sharp diagonal divider if it's not the first section */}
      {index > 0 && <SharpDivider color={conf.svgColor} flip={isEven} />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Category Header */}
        <div className={`flex flex-col gap-8 mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className="w-full md:w-2/3 h-64 md:h-[400px] relative rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src={category.image} 
              alt={category.title} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* The overlapping title tab (シャープでスタイリッシュ) */}
            <div className={`absolute bottom-0 ${isEven ? 'left-0' : 'right-0'} ${conf.bg} px-8 md:px-12 py-4 md:py-6 shadow-[-10px_-10px_20px_rgba(0,0,0,0.05)]`}>
              <h3 className={`text-4xl md:text-6xl font-black ${conf.textColor} tracking-tight`} style={{ transform: 'skewX(-5deg)' }}>
                {category.title}
              </h3>
            </div>
          </div>
          
          <div className={`w-full md:w-1/3 flex flex-col justify-center ${isEven ? 'items-start md:pl-4' : 'items-end md:pr-4'}`}>
            <button className={`inline-flex items-center px-8 py-3 rounded-none border-2 ${conf.buttonClass} transition-all duration-300 font-bold group shadow-sm hover:shadow-md mt-4 md:mt-0`} style={{ transform: 'skewX(-5deg)' }}>
              <span style={{ transform: 'skewX(5deg)' }} className="flex items-center">
                {category.title}の施設一覧
                <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* Horizontal Carousel for Services */}
        <div className="relative group/carousel mt-8">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory hide-scrollbar pl-4 md:pl-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {category.services.map((service, idx) => (
              <a 
                key={idx} 
                href="#"
                className={`flex-shrink-0 w-[280px] sm:w-[320px] snap-start flex flex-col rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${conf.cardBg}`}
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
                  <h4 className={`text-xl font-bold mb-3 ${conf.titleColor}`}>
                    {service.name}
                  </h4>
                  <p className={`text-sm leading-relaxed whitespace-pre-line flex-grow mb-6 line-clamp-3 ${conf.descColor}`}>
                    {service.desc}
                  </p>
                  
                  {/* Link action */}
                  <div className={`mt-auto flex items-center text-sm font-bold ${conf.textColor} ${conf.titleColor === 'text-white' ? 'text-white' : ''}`}>
                    詳しくはこちら <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right Scroll Arrow */}
          <button 
            onClick={scrollRight}
            className={`hidden md:flex opacity-0 group-hover/carousel:opacity-100 absolute -right-6 top-[40%] -translate-y-1/2 w-14 h-14 bg-white border border-slate-200 text-slate-600 hover:text-brand-navy hover:border-brand-navy rounded-full items-center justify-center shadow-xl transition-all hover:scale-105 z-10 focus:outline-none`}
            aria-label="Next items"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="overflow-hidden">
      <div className="bg-[#FAF9F6] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight">P・SPOでできること</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              ジムでのトレーニングはもちろん、カフェでの仕事、サウナでのリラックスまで。<br className="hidden sm:block" />
              あなたのライフスタイルに合わせて、自由に組み合わせてご利用いただけます。
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {serviceTabs.map((category, index) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
