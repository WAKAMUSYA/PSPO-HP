'use client';
import React, { useRef } from 'react';
import { enjoyColumns } from '../../data/dummyData';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Enjoy() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-orange font-bold text-sm tracking-widest mb-3">もっと楽しむ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-orange tracking-tight">お得情報・コラム</h2>
        </div>

        <div className="relative">
          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {enjoyColumns.map((column) => (
              <a 
                key={column.id} 
                href="#"
                className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] h-[260px] snap-start relative rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <Image 
                  src={column.image} 
                  alt={column.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-brand-orange transition-colors">{column.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2 leading-relaxed font-medium">
                    {column.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 border-t border-slate-100 pt-8">
            {/* Progress Indicator (UI Mockup) */}
            <div className="flex space-x-2">
              <div className="w-10 h-1.5 bg-brand-orange rounded-full"></div>
              <div className="w-10 h-1.5 bg-slate-200 rounded-full"></div>
              <div className="w-10 h-1.5 bg-slate-200 rounded-full"></div>
            </div>

            {/* Arrows */}
            <div className="flex space-x-4">
              <button onClick={scrollLeft} className="p-3 text-slate-400 hover:text-brand-orange hover:bg-orange-50 rounded-full transition-all focus:outline-none">
                <ArrowLeft size={24} strokeWidth={2} />
              </button>
              <button onClick={scrollRight} className="p-3 text-slate-400 hover:text-brand-orange hover:bg-orange-50 rounded-full transition-all focus:outline-none">
                <ArrowRight size={24} strokeWidth={2} />
              </button>
            </div>
          </div>
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
