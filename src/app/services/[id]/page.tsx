import { serviceTabs } from '@/data/dummyData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, CheckCircle2, ArrowDown } from 'lucide-react';

export async function generateStaticParams() {
  return serviceTabs.map((tab) => ({
    id: tab.id,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = serviceTabs.find(tab => tab.id === id);
  
  if (!category) {
    notFound();
  }

  // Visual config based on category
  const configMap: Record<string, any> = {
    exercise: { theme: 'bg-[#e60012]', text: 'text-[#e60012]', light: 'bg-red-50', border: 'border-[#e60012]', gradient: 'from-[#e60012]/20 to-transparent' },
    work: { theme: 'bg-[#3587c6]', text: 'text-[#3587c6]', light: 'bg-blue-50', border: 'border-[#3587c6]', gradient: 'from-[#3587c6]/20 to-transparent' },
    condition: { theme: 'bg-[#10b981]', text: 'text-[#10b981]', light: 'bg-green-50', border: 'border-[#10b981]', gradient: 'from-[#10b981]/20 to-transparent' },
    relax: { theme: 'bg-[#1d70b8]', text: 'text-[#1d70b8]', light: 'bg-indigo-50', border: 'border-[#1d70b8]', gradient: 'from-[#1d70b8]/20 to-transparent' },
  };
  const conf = configMap[category.id] || configMap.exercise;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-slate-200">
      {/* Hero section with parallax feel */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={category.image} 
            alt={category.title} 
            fill 
            className="object-cover brightness-[0.4] transform scale-105" 
            priority 
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-16">
          <span className={`inline-block px-4 py-1 mb-6 border border-white/40 rounded-full text-sm font-bold tracking-widest backdrop-blur-sm`}>
            SERVICE DETAIL
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-widest drop-shadow-lg" style={{ transform: 'skewX(-5deg)' }}>
            {category.title}
          </h1>
          <p className="text-lg md:text-2xl font-medium opacity-90 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            P・SPOが提供する「{category.title}」の<br className="md:hidden" />充実した設備とサービス一覧
          </p>
          
          <div className="mt-16 animate-bounce text-white/70">
            <ArrowDown size={32} />
          </div>
        </div>
        
        {/* Bottom decorative gradient */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white sticky top-0 z-40 border-b border-slate-100 shadow-sm/50 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-slate-500 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <Link href="/" className="hover:text-brand-navy flex items-center transition-colors">
            <Home size={16} className="mr-1" />
            トップ
          </Link>
          <ChevronRight size={16} className="mx-2 opacity-50 flex-shrink-0" />
          <Link href="/#services" className="hover:text-brand-navy transition-colors">
            サービス
          </Link>
          <ChevronRight size={16} className="mx-2 opacity-50 flex-shrink-0" />
          <span className={`font-bold ${conf.text}`}>{category.title}</span>
        </div>
      </div>

      {/* Services List - Alternating Layout */}
      <div className="py-12 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 text-center">
          <h2 className={`text-3xl md:text-5xl font-black mb-6 ${conf.text} tracking-tight`}>
            LINEUP
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            定額料金内で、以下のすべての設備・サービスが使い放題。<br className="hidden md:block"/>
            あなたの目的に合わせて自由に組み合わせてご利用いただけます。
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-32">
          {category.services.map((service: any, idx: number) => {
            const isEven = idx % 2 === 0;
            return (
              <section 
                key={idx} 
                className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 group`}
              >
                {/* Background decorative blob (visible on md+) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none -z-10 ${isEven ? '-left-20' : '-right-20'} ${conf.light}`}></div>

                {/* Image Side */}
                <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl flex-shrink-0">
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  {/* Category badge over image */}
                  <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} ${conf.theme} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm bg-opacity-90`}>
                    {category.title}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center py-8 md:py-0 ${isEven ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-6xl md:text-8xl font-black opacity-10 text-slate-300 -ml-2 select-none tracking-tighter`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-3xl md:text-4xl font-bold ${conf.text} leading-tight`} style={{ transform: 'skewX(-2deg)' }}>
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-xl md:text-2xl font-bold text-slate-800 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <p className="text-slate-600 mb-8 leading-loose text-base md:text-lg">
                    {service.longDesc || '詳細な説明がここに入ります。最新の設備を整えた環境で、最高の体験を提供します。'}
                  </p>

                  {/* Features List */}
                  {(service.features && service.features.length > 0) && (
                    <div className={`bg-slate-50 rounded-xl p-6 md:p-8 border-l-4 ${conf.border}`}>
                      <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                        <span className={`w-2 h-6 ${conf.theme} rounded-full mr-3 inline-block`}></span>
                        おすすめポイント
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature: string, fIdx: number) => (
                          <li key={fIdx} className="flex items-start text-slate-700">
                            <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${conf.text}`} />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* CTA / Back Button */}
      <div className={`relative py-24 md:py-32 bg-slate-900 overflow-hidden`}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            さあ、新しい体験を始めよう
          </h2>
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            P・SPOの多様なサービスは、あなたの日常をより豊かにします。<br className="hidden md:block" />
            今すぐ登録して、すべてのサービスをご体感ください。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/#services" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-800 border border-slate-700 text-white font-bold hover:bg-slate-700 transition-all hover:-translate-y-1"
            >
              サービス一覧に戻る
            </Link>
            <Link 
              href="/#pricing" 
              className={`w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full ${conf.theme} text-white font-bold hover:brightness-110 transition-all shadow-lg shadow-${conf.theme}/30 hover:shadow-xl hover:-translate-y-1`}
            >
              料金プランを見る
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hide scrollbar utility class */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}

