import React from 'react';
import Image from 'next/image';

export function Concept() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1d70b8]/5 skew-x-12 translate-x-32 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1d70b8]/10 border border-[#1d70b8]/20 text-[#1d70b8] font-bold tracking-widest text-sm mb-2 shadow-sm">
              CONCEPT
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              THIS IS<br />
              <span className="text-[#3587c6] drop-shadow-sm">P・SPO</span>
            </h2>
            
            <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
              ただのジムじゃない。<br />
              あなたの「やりたい」が<br className="hidden md:block" />
              すべて叶うサードプレイス。
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
              24時間の本格フィットネスはもちろん、仕事に集中できるカフェスペース、心身を癒やすサウナ・温泉、そしてシミュレーションゴルフからカラオケまで。
              <br /><br />
              月額定額で、これらすべての施設が使い放題。P・SPOは、あなたの毎日のライフスタイルを拡張し、新しい可能性を引き出す「大人のための複合エンターテインメント空間」です。
            </p>
            
            {/* Stats / Features */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-200">
              <div className="border-l-4 border-[#e60012] pl-4">
                <p className="text-4xl font-black text-slate-900 tracking-tighter">83<span className="text-xl text-slate-500 font-bold ml-1">店舗</span></p>
                <p className="text-sm text-slate-600 font-bold mt-1">県内最大級のネットワーク</p>
              </div>
              <div className="border-l-4 border-[#f39800] pl-4">
                <p className="text-4xl font-black text-slate-900 tracking-tighter">24<span className="text-xl text-slate-500 font-bold ml-1">時間</span></p>
                <p className="text-sm text-slate-600 font-bold mt-1">いつでも好きな時に</p>
              </div>
            </div>
          </div>

          {/* Visual Grid (Overlapping Images) */}
          <div className="lg:w-1/2 relative h-[500px] md:h-[650px] w-full mt-12 lg:mt-0">
            {/* Soft glowing blob behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#3587c6]/10 rounded-full blur-3xl z-0" />
            
            <div className="absolute top-0 right-4 md:right-10 w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl z-20 hover:-translate-y-2 transition-transform duration-500">
              <Image src="/image/zimu2.jpg" alt="P-SPO Training" fill className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            
            <div className="absolute top-32 left-0 md:left-4 w-56 h-48 md:w-72 md:h-64 rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white hover:-translate-y-2 transition-transform duration-500">
              <Image src="/image/zimu3.jpg" alt="P-SPO Facilities" fill className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            
            <div className="absolute bottom-4 right-12 md:bottom-10 md:right-24 w-56 h-40 md:w-80 md:h-56 rounded-2xl overflow-hidden shadow-xl z-10 hover:-translate-y-2 transition-transform duration-500">
              {/* Optional overlay color for aesthetic */}
              <div className="absolute inset-0 bg-brand-navy/10 z-10 mix-blend-overlay" />
              <Image src="/image/zimu4.jpg" alt="P-SPO Relax" fill className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
