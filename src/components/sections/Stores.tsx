import React from 'react';
import { stores } from '../../data/dummyData';
import { MapPin, Search } from 'lucide-react';

export function Stores() {
  const getTagStyle = (tag: string) => {
    switch(tag) {
      case 'gym': return 'bg-blue-100 text-blue-800';
      case 'cafe': return 'bg-amber-100 text-amber-800';
      case 'spa': return 'bg-teal-100 text-teal-800';
      case 'golf': return 'bg-emerald-100 text-emerald-800';
      case 'karaoke': return 'bg-rose-100 text-rose-800';
      case 'kids': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTagName = (tag: string) => {
    switch(tag) {
      case 'gym': return 'ジム';
      case 'cafe': return 'カフェ';
      case 'spa': return 'サウナ';
      case 'golf': return 'ゴルフ';
      case 'karaoke': return 'カラオケ';
      case 'kids': return 'キッズ';
      default: return tag;
    }
  };

  return (
    <section id="stores" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4">店舗を探す</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            ご自宅や職場の近くなど、通いやすい店舗を見つけてください。<br className="hidden sm:block" />
            プランにご加入いただければ、複数店舗の相互利用も可能です。
          </p>
        </div>

        {/* Dummy Search UI */}
        <div className="max-w-3xl mx-auto mb-12 bg-white p-4 rounded-full shadow-md border border-slate-100 flex items-center">
          <div className="pl-4 pr-2 text-slate-400">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="エリア・現在地・設備から探す" 
            className="flex-grow bg-transparent border-none focus:ring-0 text-slate-700 px-2 outline-none"
          />
          <button className="bg-brand-navy text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors">
            検索
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div key={store.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-brand-orange bg-orange-50 px-2 py-1 rounded mb-2 inline-block">
                    {store.area}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy">{store.name}</h3>
                </div>
              </div>
              
              <div className="flex items-start text-slate-500 text-sm mb-4">
                <MapPin size={16} className="mr-1 mt-0.5 flex-shrink-0" />
                <span>{store.address}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                {store.tags.map((tag, index) => (
                  <span key={index} className={`text-xs px-2.5 py-1 rounded-full font-medium ${getTagStyle(tag)}`}>
                    {getTagName(tag)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="text-brand-navy font-bold hover:text-brand-orange underline underline-offset-4 transition-colors">
            すべての店舗を見る
          </button>
        </div>
      </div>
    </section>
  );
}
