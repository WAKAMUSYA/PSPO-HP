'use client';
import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  image: string;
  period: string;
}

export function News({ initialNews = [] }: { initialNews?: NewsItem[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="news" className="pt-8 pb-12 md:py-20 bg-black/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-14">
          <div className="inline-block px-8 py-3 md:py-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-widest drop-shadow-md flex items-baseline justify-center gap-3">
              <span style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>NEWS</span>
              <span className="text-sm md:text-lg font-bold text-white/90 tracking-wider">/ 新着お知らせ</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-4 md:space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar pl-4 md:pl-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {initialNews.map((item) => (
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
                  <div className="text-[10px] md:text-xs text-slate-500 line-clamp-1 md:line-clamp-2 mt-auto">
                    {item.period}
                  </div>
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
