'use client';
import React, { useRef } from 'react';
import { news } from '../../data/dummyData';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export function News() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="news" className="pt-8 pb-12 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-3xl font-black text-brand-navy">新着・キャンペーン</h2>
        </div>

        <div className="relative">
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-4 md:space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar pl-4 md:pl-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {news.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 w-[150px] sm:w-[200px] md:w-[320px] snap-start flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative h-[100px] md:h-[200px] w-full bg-slate-100">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-3 md:p-5 flex flex-col flex-grow">
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-slate-900 leading-snug mb-2 md:mb-4 flex-grow line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="text-[10px] md:text-xs text-slate-500 mb-2 md:mb-6 line-clamp-1 md:line-clamp-2">
                    {item.period}
                  </div>
                  <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors mt-auto inline-block">
                    詳しくはこちら
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Arrow */}
          <button 
            onClick={scrollRight}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full items-center justify-center shadow-lg transition-transform hover:scale-105 z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            aria-label="Next items"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Add inline style to hide scrollbar for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
