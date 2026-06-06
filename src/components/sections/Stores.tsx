import React from 'react';

export function Stores() {
  return (
    <section id="stores" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4">店舗を探す</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            ご自宅や職場の近くなど、通いやすい店舗を見つけてください。<br className="hidden sm:block" />
            プランにご加入いただければ、愛媛県内を中心とした全店舗を自由に相互利用いただけます。
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-2 sm:p-4 shadow-lg border border-slate-200 overflow-hidden">
          <div className="map-container w-full rounded-2xl overflow-hidden">
            <iframe 
              height="580" 
              src="https://book.ntmg.com/Dj7rP223yP1WgSyqjaZkt6KknWMNMQdm4JMEpOvi/maps/a2577052-a3e6-4e63-8284-98452513610d?lng=ja-JP" 
              width="100%"
              className="border-0"
              title="P・SPO 店舗マップ"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
