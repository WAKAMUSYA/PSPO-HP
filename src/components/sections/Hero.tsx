import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy pt-24 pb-20">
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
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-12 md:mt-24">
        <p className="text-white font-bold text-lg md:text-3xl tracking-widest mb-2 drop-shadow-md">
          EVERYDAY MATCHING FOR YOUR LIFE
        </p>
        <h1 className="text-white font-black text-6xl md:text-[8rem] leading-none tracking-tight mb-4 drop-shadow-lg" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.5)' }}>
          NEVER STOP
        </h1>
        <p className="text-white font-bold text-sm md:text-2xl tracking-widest mb-16 drop-shadow-md">
          PUSH THE LIMITS OF THE IMPOSSIBLE
        </p>

        {/* Pricing */}
        <div className="flex items-end justify-center text-white drop-shadow-lg mb-10">
          <div className="flex flex-col items-center mr-2 md:mr-4 mb-2 md:mb-6">
            <span className="text-2xl md:text-5xl font-bold leading-tight">月</span>
            <span className="text-2xl md:text-5xl font-bold leading-tight">額</span>
          </div>
          <span className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.5)' }}>4,980</span>
          <div className="flex flex-col text-left ml-3 md:ml-6 mb-2 md:mb-6">
            <span className="text-sm md:text-xl font-bold mb-1">(税込5,478円)〜</span>
            <span className="text-4xl md:text-7xl font-black leading-none">円で</span>
          </div>
        </div>

        {/* Store count */}
        <div className="text-white font-bold mb-8 drop-shadow-md bg-black/40 px-8 py-5 rounded-2xl backdrop-blur-sm">
          <p className="text-xl md:text-3xl mb-3">愛媛県内79店舗、愛知県3店舗、北海道1店舗の</p>
          <p className="text-3xl md:text-5xl tracking-wide">83店舗 使い放題</p>
        </div>

        {/* Disclaimer */}
        <p className="text-white text-[10px] md:text-sm font-medium mt-4 max-w-3xl drop-shadow-md leading-relaxed">
          ※BEAUTY:中央通り店、ダイノ店、東温店、鷹子店、北条店、今治店、ラウンジ&ビューティー(2階)をご利用の場合は、<br className="hidden md:block" />
          ビューティー登録+らくらくプランへのご加入が必要です。
        </p>
      </div>
    </section>
  );
}
