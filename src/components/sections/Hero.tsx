import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[70svh] md:min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy pt-20 pb-12 md:pt-24 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/pspotop.jpg"
          alt="P-SPO Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Top Left Red Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-[32rem] md:h-[32rem] bg-[#e60012] opacity-90 z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
      <div className="absolute top-0 left-0 w-80 h-80 md:w-[36rem] md:h-[36rem] bg-[#e60012]/40 z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>

      {/* Bottom Right Yellow Decor */}
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-[36rem] md:h-[36rem] bg-[#f39800] opacity-90 z-10" style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 md:w-[40rem] md:h-[40rem] bg-[#f39800]/40 z-0" style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-4 md:mt-24">
        <p className="text-white font-bold text-[10px] md:text-3xl tracking-widest mb-1 md:mb-2 drop-shadow-md">
          EVERYDAY MATCHING FOR YOUR LIFE
        </p>
        <h1 className="text-white font-black text-5xl md:text-[8rem] leading-none tracking-tight mb-1 md:mb-4 drop-shadow-lg" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.5)' }}>
          NEVER STOP
        </h1>
        <p className="text-white font-bold text-[10px] md:text-2xl tracking-widest mb-6 md:mb-16 drop-shadow-md">
          PUSH THE LIMITS OF THE IMPOSSIBLE
        </p>

        {/* Pricing */}
        <div className="flex items-end justify-center text-white drop-shadow-lg mb-6 md:mb-10">
          <div className="flex flex-col items-center mr-1 md:mr-4 mb-1 md:mb-6">
            <span className="text-lg md:text-5xl font-bold leading-tight">月</span>
            <span className="text-lg md:text-5xl font-bold leading-tight">額</span>
          </div>
          <span className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.5)' }}>4,980</span>
          <div className="flex flex-col text-left ml-2 md:ml-6 mb-1 md:mb-6">
            <span className="text-[10px] md:text-xl font-bold mb-1">(税込5,478円)</span>
            <span className="text-2xl md:text-7xl font-black leading-none">円〜</span>
          </div>
        </div>

        {/* Store count */}
        <div className="text-white font-bold mb-2 md:mb-8 flex flex-col items-center justify-center">
          <p className="text-sm md:text-3xl tracking-widest mb-1 md:mb-3 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            愛媛・愛知・北海道
          </p>
          <p className="text-2xl md:text-6xl font-bold tracking-wider drop-shadow-xl" style={{ textShadow: '2px 4px 6px rgba(0,0,0,0.8)' }}>
            <span className="text-[#f39800] font-black">83</span>店舗利用可能
          </p>
        </div>
      </div>
    </section>
  );
}
