import React from 'react';
import { features } from '../../data/dummyData';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function Features() {
  const FeatureCard = ({ feature, isMobile }: { feature: any, isMobile: boolean }) => (
    <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-2xl flex flex-col items-center justify-start text-center ${isMobile ? 'w-[240px] px-6 py-5 flex-shrink-0' : 'p-8'}`}>
      <div className={`flex-shrink-0 ${isMobile ? 'mb-3' : 'mb-4'}`}>
        <CheckCircle2 className={`text-brand-mint drop-shadow-md ${isMobile ? 'w-6 h-6' : 'w-8 h-8'}`} />
      </div>
      <div className="w-full">
        <h3 className={`${isMobile ? 'text-[11px] whitespace-nowrap tracking-tighter' : 'text-xl'} font-bold mb-2 text-white`}>
          {feature.title}
        </h3>
        <p className={`text-blue-100 ${isMobile ? 'text-[10px] leading-snug whitespace-normal' : 'text-base leading-relaxed'}`}>
          {feature.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="relative pt-12 pb-4 md:py-24 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-brand-navy">
        <Image 
          src="/image/top3.jpg" 
          alt="P-SPO Background" 
          fill 
          className="object-contain object-top opacity-60 md:object-cover md:opacity-100"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-16 px-4">
          <h2 className="text-2xl md:text-5xl font-black mb-3 md:mb-6 tracking-tight">P・SPOが選ばれる理由</h2>
          <p className="text-blue-100 text-xs md:text-xl max-w-2xl mx-auto font-medium">
            地域最大級の複合型施設として、ただのフィットネスジムを超えた価値を提供し続けています。
          </p>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8 px-4 sm:px-0">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} isMobile={false} />
          ))}
        </div>

        {/* Mobile Manual Slider (Hidden on Desktop) */}
        <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-6 pt-4">
          <ul className="flex gap-4 px-6 pb-4 w-max after:content-[''] after:w-[1px]">
            {features.map((feature, index) => (
              <li key={index} className="snap-center sm:snap-start flex-shrink-0">
                <FeatureCard feature={feature} isMobile={true} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          margin: 0 24px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.6);
          border-radius: 4px;
        }
        `
      }} />
    </section>
  );
}
