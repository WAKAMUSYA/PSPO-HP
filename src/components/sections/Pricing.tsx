import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    id: 'basic',
    name: 'BASIC PLAN',
    price: '5,478',
    features: ['24時間ジム', 'カフェ', '自習室', 'カラオケ', 'シミュレーションゴルフ', 'スタジオ'],
    recommend: ['ジムを中心に利用したい', 'コスパ重視', 'まずは気軽に始めたい'],
    theme: 'navy',
    isRecommended: false
  },
  {
    id: 'spa',
    name: 'SPA P・SPO PLAN',
    price: '6,578',
    features: ['BASICの全サービス', '温泉優待特典', 'ホットヨガ特典', '北条店利用可能'],
    recommend: ['温泉やサウナも楽しみたい', 'ホットヨガを利用したい', 'よりお得に施設を活用したい'],
    theme: 'mint',
    isRecommended: true
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4">料金プラン</h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            シンプルでわかりやすい料金体系。<br className="hidden sm:block" />
            あなたのライフスタイルに合わせて選べます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              hoverEffect 
              className="relative flex flex-col h-full border border-slate-200 mt-4"
            >
              
              <div className={`p-8 text-center border-b border-slate-100 rounded-t-2xl ${plan.theme === 'navy' ? 'bg-brand-navy text-white' : 'bg-gradient-to-b from-teal-50 to-white text-brand-navy'}`}>
                <h3 className="text-2xl font-black mb-3">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-sm font-bold mr-1">月額</span>
                  <span className={`text-5xl font-black tracking-tight ${plan.theme === 'navy' ? 'text-white' : 'text-brand-navy'}`}>
                    {plan.price}
                  </span>
                  <span className="text-lg font-bold ml-1">円</span>
                  <span className="text-sm ml-1 opacity-80">（税込）</span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col bg-white rounded-b-2xl">
                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-bold text-slate-400 mb-4 tracking-wider">利用できるもの</h4>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="flex-shrink-0 mt-0.5 mr-2 text-slate-400" size={16} />
                        <span className="text-slate-700 font-medium text-sm leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-5 rounded-xl bg-slate-50">
                    <h4 className="text-sm font-bold text-slate-500 mb-3 flex items-center gap-2">
                      こんな方におすすめ
                    </h4>
                    <ul className="space-y-2">
                      {plan.recommend.map((rec, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 bg-brand-navy" />
                          <span className="text-slate-700 font-medium">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
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

        <div className="max-w-4xl mx-auto mt-12 text-center flex flex-col items-center">
          <div className="text-xs text-slate-500 space-y-1 text-left inline-block">
            <p>※サービス内容は店舗によって異なります。</p>
            <p>※一部サービスはオプション契約が必要です。</p>
            <p>※詳細は料金ページをご確認ください。</p>
          </div>
          <div className="mt-8">
            <Link href="/pricing" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-sm font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-200">
              詳しい料金・オプションを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
