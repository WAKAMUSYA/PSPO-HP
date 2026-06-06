import React from 'react';
import Image from 'next/image';

export function Concept() {
  const sliderImages = [
    '/image/zimu7.jpg',
    '/image/golf/golf5.jpg',
    '/image/study1.jpg',
    '/image/cafe/cafe8.jpg',
    '/image/パーソナル/pt1.jpg',
    '/image/p-yoga/yoga5.jpg'
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#3587c6]/60 overflow-hidden relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mb-10 md:mb-16 relative z-10">
        <h2
          className="text-3xl md:text-6xl font-black mb-4 md:mb-8 tracking-widest drop-shadow-md"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          THIS IS P・SPO
        </h2>
        <p className="text-xl md:text-4xl font-bold mb-4 md:mb-8 leading-snug drop-shadow-sm">
          あなたの「やりたい」が<br />
          すべて叶うサードプレイス。
        </p>
        <p className="text-xs md:text-base font-medium max-w-2xl mx-auto leading-relaxed opacity-90 drop-shadow-sm">
          24時間の本格フィットネスから、勉強・仕事に集中できるカフェ＆自習室、<br className="hidden md:block" />
          心身を癒やすサウナやシミュレーションゴルフまで。<br />
          定額ですべてが使い放題の「複合エンターテインメント空間」です。
        </p>
      </div>

      {/* Infinite Image Slider */}
      <div className="relative w-full mt-8 md:mt-12 flex overflow-hidden">
        <div className="flex animate-marquee space-x-3 md:space-x-6 px-1 md:px-3">
          {[...sliderImages, ...sliderImages].map((src, idx) => (
            <div key={idx} className="relative w-[200px] h-[150px] md:w-[400px] md:h-[280px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={src}
                alt={`P-SPO image ${idx}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (min-width: 768px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1.5rem)); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
          }
        }
        `
      }} />
    </section>
  );
}
