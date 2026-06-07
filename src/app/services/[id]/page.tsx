import { serviceTabs } from '@/data/dummyData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

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
    exercise: { theme: 'bg-[#e60012]', text: 'text-[#e60012]', light: 'bg-red-50' },
    work: { theme: 'bg-[#3587c6]', text: 'text-[#3587c6]', light: 'bg-blue-50' },
    condition: { theme: 'bg-[#10b981]', text: 'text-[#10b981]', light: 'bg-green-50' },
    relax: { theme: 'bg-[#1d70b8]', text: 'text-[#1d70b8]', light: 'bg-indigo-50' },
  };
  const conf = configMap[category.id] || configMap.exercise;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center pt-20">
        <Image src={category.image} alt={category.title} fill className="object-cover brightness-[0.5]" priority />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-widest">{category.title}</h1>
          <p className="text-lg md:text-xl font-medium opacity-90">P・SPOの{category.title}サービス一覧</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-navy flex items-center transition-colors">
            <Home size={16} className="mr-1" />
            トップ
          </Link>
          <ChevronRight size={16} className="mx-2 opacity-50" />
          <span className={`font-bold ${conf.text}`}>{category.title}</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${conf.text}`}>
            {category.title}の充実設備
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            定額料金内で、以下のすべての設備・サービスが使い放題。あなたの目的に合わせて自由に組み合わせてご利用いただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {category.services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-slate-100 hover:-translate-y-2">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className={`absolute top-4 left-4 ${conf.theme} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                  {category.title}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className={`text-xl md:text-2xl font-bold mb-4 ${conf.text}`}>
                  {service.name}
                </h3>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line flex-grow">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Back Button */}
        <div className="mt-24 text-center">
          <Link href="/#services" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl">
            トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
