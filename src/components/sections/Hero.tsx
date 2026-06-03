import React from 'react';
import { Button } from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-navy min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/zimu1.jpg"
          alt="P-SPO Gym Background"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold tracking-wider text-sm">
            24H FITNESS & MORE
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight text-balance">
            ジムだけじゃない。<br className="hidden md:block" />
            毎日をもっと<span className="text-brand-orange">自由</span>にするP・SPO。
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
            24時間ジム、カフェ、カラオケ、ゴルフ、温泉・サウナまで。
            あなたの生活に合わせて使える、新しいカタチの複合型サービス施設。
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="primary" size="lg" className="w-full sm:w-auto group">
              料金プランを見る
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-brand-navy backdrop-blur-sm bg-white/10">
              店舗を探す
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-transparent" />
          <path d="M1200 120L0 16.48 0 120 1200 120z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
}
