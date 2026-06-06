import React from 'react';
import { Check, ArrowRight, Plus } from 'lucide-react';
import Link from 'next/link';

export function Pricing() {
  const basicFeatures = ['24時間ジム', '無人カフェ', '自習室', 'カラオケ', 'シミュレーションゴルフ', 'スタジオレッスン'];
  const spaFeatures = ['温泉・サウナ優待', 'ホットヨガ特典', '北条店（キッズパーク等）利用可能'];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4">料金プラン</h2>
        </div>

        {/* BASIC PLAN - Main Focus */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-brand-navy overflow-hidden relative">

            {/* Header Area */}
            <div className="bg-brand-navy text-white text-center py-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('/image/zimu2.jpg')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black tracking-wider mb-2">BASIC PLAN</h3>
                <p className="text-blue-100 font-medium">P・SPOの基本サービスがすべて使い放題</p>
              </div>
            </div>

            {/* Price Area */}
            <div className="p-8 md:p-12 text-center border-b border-slate-100 bg-slate-50">
              <div className="flex items-baseline justify-center">
                <span className="text-sm font-bold mr-2 text-slate-500">月額</span>
                <span className="text-6xl md:text-7xl font-black tracking-tight text-brand-navy">
                  5,478
                </span>
                <span className="text-2xl font-bold ml-1 text-brand-navy">円</span>
                <span className="text-sm ml-2 font-bold text-slate-400">（税込）</span>
              </div>
              <p className="mt-4 text-sm font-bold text-slate-600 bg-white inline-block px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                ジム・カフェ・自習室など、複数の施設が定額で利用可能！
              </p>
            </div>

            {/* Features Area */}
            <div className="p-8 md:p-12 bg-white">
              <h4 className="text-center text-sm font-bold text-slate-400 mb-6 tracking-widest">利用できる主なサービス</h4>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center justify-center md:justify-start bg-slate-50 py-3 px-4 rounded-xl">
                    <Check className="flex-shrink-0 text-brand-navy mr-2" size={18} />
                    <span className="text-slate-700 font-bold text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SPA PLAN - Upsell Option */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-teal-50 to-white rounded-3xl shadow-md border-2 border-brand-mint overflow-hidden p-1">
            <div className="bg-white rounded-[22px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">

              <div className="flex-1 text-center md:text-left">
                <div className="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded mb-2">
                  ワンランク上の体験を
                </div>
                <h3 className="text-2xl font-black text-brand-mint mb-2 flex items-center justify-center md:justify-start gap-2">
                  SPA P・SPO PLAN
                </h3>
                <p className="text-sm text-slate-600 mb-4 font-medium">
                  BASICプランに<span className="font-bold text-brand-navy">＋1,100円</span>するだけで、温泉やホットヨガなどの特別優待が追加されます。
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {spaFeatures.map((feature, index) => (
                    <span key={index} className="flex items-center text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                      <Plus size={12} className="text-brand-mint mr-1" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-right shrink-0">
                <div className="text-sm font-bold text-slate-400 mb-1">月額（税込）</div>
                <div className="text-4xl font-black text-brand-navy mb-1">
                  6,578<span className="text-lg">円</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Lightweight Options & Fees Intro */}
        <div className="max-w-4xl mx-auto mt-16 p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <h3 className="text-center font-bold text-brand-navy mb-6">入会時の費用・主なオプション</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-sm font-bold text-slate-400 mb-3 tracking-wider">初期費用</h4>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex justify-between items-center pb-2 border-b border-slate-50">
                  <span className="font-bold">入会金</span>
                  <span className="text-rose-500 font-bold bg-rose-50 px-2 py-0.5 rounded">0円（キャンペーン適用）</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-slate-50">
                  <span className="font-bold">事務手数料</span>
                  <span>3,300円</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-400 mb-3 tracking-wider">オプション（一部）</h4>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex justify-between items-center pb-2 border-b border-slate-50">
                  <span className="font-bold">らくらくプラン<span className="text-xs text-slate-400 font-normal ml-1">（タオル・ウェア等）</span></span>
                  <span>1,650円/月</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-slate-50">
                  <span className="font-bold">契約ロッカー</span>
                  <span>330円/月〜</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-slate-50">
                  <span className="font-bold">ビューティー<span className="text-xs text-slate-400 font-normal ml-1">（エステ等）</span></span>
                  <span>11,000円（初回のみ）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="max-w-4xl mx-auto mt-12 text-center flex flex-col items-center">
          <div className="text-xs text-slate-500 space-y-1 text-left inline-block mb-8">
            <p>※サービス内容は店舗によって異なります。</p>
            <p>※一部サービスはオプション契約が必要です。</p>
            <p>※詳細は料金ページをご確認ください。</p>
          </div>
          <div>
            <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 shadow-sm text-base font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-200">
              詳しい料金・オプションを見る <ArrowRight size={18} className="ml-2 text-slate-400" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
