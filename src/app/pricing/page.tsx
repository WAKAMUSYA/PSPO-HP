import React from 'react';
import { Card } from '@/components/ui/Card';
import { Check, Minus, Info, Sparkles, Box, Shirt, UserPlus, Cpu } from 'lucide-react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: '料金・オプション | P・SPO',
  description: 'P・SPOの料金プランとオプションサービスの詳細をご案内します。',
};

export default function PricingPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-brand-navy pt-32 pb-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/image/zimu1.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            料金・オプション
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            あなたにぴったりの使い方を見つけてください。<br />
            迷った方は、まずはBASICプランからのスタートがおすすめです。
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-24">
        
        {/* Plan Comparison */}
        <section>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="p-8 md:p-10 text-center border-b border-slate-100">
              <h2 className="text-2xl font-black text-brand-navy mb-3">プラン比較</h2>
              <p className="text-slate-500 text-sm">各プランで利用できるサービスの一覧です。</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 md:p-6 font-bold text-slate-500 w-1/3">サービス・特典</th>
                    <th className="p-4 md:p-6 font-black text-brand-navy text-center w-1/3 border-l border-slate-200">BASIC PLAN</th>
                    <th className="p-4 md:p-6 font-black text-brand-mint text-center w-1/3 border-l border-brand-mint/30 bg-teal-50/50">SPA P・SPO PLAN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="p-4 md:p-6 font-bold text-slate-700">月額料金（税込）</td>
                    <td className="p-4 md:p-6 text-center font-black text-xl text-brand-navy border-l border-slate-100">5,478円</td>
                    <td className="p-4 md:p-6 text-center font-black text-xl text-brand-mint border-l border-brand-mint/30 bg-teal-50/30">6,578円</td>
                  </tr>
                  {[
                    { name: '24時間ジム利用', basic: true, spa: true },
                    { name: 'カフェ利用', basic: true, spa: true },
                    { name: '自習室利用', basic: true, spa: true },
                    { name: 'シミュレーションゴルフ', basic: true, spa: true },
                    { name: 'カラオケ利用', basic: true, spa: true },
                    { name: 'スタジオ利用', basic: true, spa: true },
                    { name: 'サウナ利用', basic: '一部店舗', spa: '全対象店舗' },
                    { name: '温泉優待特典', basic: '一部割引', spa: '特別割引（100円〜）' },
                    { name: 'ホットヨガ特典', basic: false, spa: true },
                    { name: '北条店（キッズパーク等）利用', basic: false, spa: true },
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 md:p-6 text-slate-600 font-medium">{item.name}</td>
                      <td className="p-4 md:p-6 text-center border-l border-slate-100 font-bold text-slate-700">
                        {item.basic === true ? <Check className="inline-block text-brand-navy" size={24} /> : 
                         item.basic === false ? <Minus className="inline-block text-slate-300" size={24} /> : 
                         <span className="text-sm">{item.basic}</span>}
                      </td>
                      <td className="p-4 md:p-6 text-center border-l border-brand-mint/30 bg-teal-50/30 font-bold text-brand-mint">
                        {item.spa === true ? <Check className="inline-block text-brand-mint" size={24} /> : 
                         item.spa === false ? <Minus className="inline-block text-slate-300" size={24} /> : 
                         <span className="text-sm">{item.spa}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-center gap-4 flex-wrap">
               <Link href="/join" className="px-8 py-3 bg-brand-navy text-white rounded-full font-bold shadow-md hover:bg-brand-navy/90 transition-colors">
                 BASICプランで入会
               </Link>
               <Link href="/join" className="px-8 py-3 bg-brand-mint text-brand-navy rounded-full font-bold shadow-md hover:bg-brand-mint/90 transition-colors">
                 SPAプランで入会
               </Link>
            </div>
          </div>
        </section>

        {/* Initial Fees */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-brand-navy mb-4">初期費用</h2>
            <p className="text-slate-600">ご入会時に必要となる費用です。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="p-8 text-center border-2 border-rose-400 bg-rose-50/50 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm animate-pulse">
                キャンペーン適用！
              </div>
              <h3 className="text-lg font-bold text-slate-600 mb-2 mt-4">入会金</h3>
              <div className="text-4xl font-black text-rose-500 mb-1">0<span className="text-xl">円</span></div>
              <p className="text-sm text-slate-500 line-through">通常 5,500円</p>
            </Card>
            <Card className="p-8 text-center border border-slate-200">
              <h3 className="text-lg font-bold text-slate-600 mb-2">事務手数料</h3>
              <div className="text-4xl font-black text-brand-navy mb-1">3,300<span className="text-xl">円</span></div>
              <p className="text-sm text-slate-500">初回のみ</p>
            </Card>
          </div>
        </section>

        {/* Options */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand-navy mb-4">オプションサービス</h2>
            <p className="text-slate-600">あなたの目的に合わせて、さらに便利にお使いいただけます。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card className="p-8 border border-slate-200 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Shirt className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800">らくらくプラン</h3>
              </div>
              <div className="text-2xl font-black text-brand-navy mb-4">
                1,650円<span className="text-sm font-bold text-slate-500 ml-1">/月</span>
              </div>
              <p className="text-sm text-slate-600 mb-6 flex-grow">シューズとシェイカーだけ持参すれば利用可能。いつでも気軽にトレーニングできます。</p>
              <ul className="space-y-2 text-sm text-slate-700 bg-slate-50 p-4 rounded-xl">
                <li className="flex items-start gap-2"><Check size={16} className="text-blue-500 shrink-0 mt-0.5" /> タオル貸出</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-blue-500 shrink-0 mt-0.5" /> ウェア貸出</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-blue-500 shrink-0 mt-0.5" /> ウォーターサーバー利用可能</li>
              </ul>
            </Card>

            <Card className="p-8 border border-slate-200 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Box className="text-amber-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800">契約ロッカー</h3>
              </div>
              <p className="text-sm text-slate-600 mb-6">マイシューズやアメニティを置いておける専用ロッカーです。</p>
              <div className="space-y-3 mt-auto">
                <div className="flex justify-between items-center p-3 border border-slate-100 rounded-lg">
                  <span className="font-bold text-slate-700">小</span>
                  <span className="font-bold text-brand-navy text-lg">330円<span className="text-xs text-slate-500">/月</span></span>
                </div>
                <div className="flex justify-between items-center p-3 border border-slate-100 rounded-lg">
                  <span className="font-bold text-slate-700">中</span>
                  <span className="font-bold text-brand-navy text-lg">770円<span className="text-xs text-slate-500">/月</span></span>
                </div>
                <div className="flex justify-between items-center p-3 border border-slate-100 rounded-lg">
                  <span className="font-bold text-slate-700">大</span>
                  <span className="font-bold text-brand-navy text-lg">1,100円<span className="text-xs text-slate-500">/月</span></span>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-slate-200 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-purple-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800">ビューティー</h3>
              </div>
              <div className="text-xl font-black text-purple-600 mb-4">
                11,000円<span className="text-sm font-normal text-slate-500 ml-1">（初回のみ）</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 mb-6 flex-grow">
                <li className="flex items-start gap-2"><Check size={16} className="text-purple-500 shrink-0 mt-0.5" /> セルフエステ利用</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-purple-500 shrink-0 mt-0.5" /> 美容機器利用</li>
              </ul>
              <div className="space-y-2 text-xs text-slate-500 bg-slate-50 p-4 rounded-xl">
                <p>※らくらくプランへの加入が必須です。</p>
                <p>※利用店舗：中央通り、DAINO、東温、その他対象店舗</p>
              </div>
            </Card>

            <Card className="p-8 border border-slate-200 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-indigo-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800">メンズビューティー</h3>
              </div>
              <div className="text-xl font-black text-indigo-600 mb-4">
                5,500円<span className="text-sm font-normal text-slate-500 ml-1">（初回のみ）</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 mb-6 flex-grow">
                <li className="flex items-start gap-2"><Check size={16} className="text-indigo-500 shrink-0 mt-0.5" /> セルフエステ利用</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-indigo-500 shrink-0 mt-0.5" /> タンニングマシン利用</li>
              </ul>
              <div className="space-y-2 text-xs text-slate-500 bg-slate-50 p-4 rounded-xl">
                <p>※脱毛は別料金です。</p>
                <p>※メンズビューティー登録不要で利用可能です。</p>
              </div>
            </Card>

            <Card className="p-8 border border-slate-200 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <UserPlus className="text-rose-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800">ホットヨガ追加チケット</h3>
              </div>
              <p className="text-sm text-slate-600 mb-6">ホットヨガを追加で受講したい方向けのチケットです。</p>
              <div className="space-y-3 mt-auto">
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-700">1回</span>
                  <span className="font-bold text-brand-navy">500円</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-700">3回</span>
                  <span className="font-bold text-brand-navy">1,400円</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-700">5回</span>
                  <span className="font-bold text-brand-navy">2,200円</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-700">10回</span>
                  <span className="font-bold text-brand-navy">4,000円</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-slate-200 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800">バイオサーキット</h3>
              </div>
              <p className="text-sm text-slate-600 mb-6 flex-grow">AIによる自動負荷設定。約30分で完了するサーキットトレーニングです。</p>
              <div className="text-xs text-slate-500 bg-slate-50 p-4 rounded-xl mt-auto">
                ※本町店のみでの提供となります。
              </div>
            </Card>

          </div>
        </section>
        
        {/* Additional Info Link */}
        <div className="mt-8 text-center">
          <Link href="/pricing/details" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-sm font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-200">
            各種優待・チケット枚数・利用条件の詳細を見る
          </Link>
        </div>

        {/* Help */}
        <section className="text-center pb-12 mt-12">
          <p className="text-slate-500 mb-4">ご不明な点は、よくあるご質問をご覧いただくかお問い合わせください。</p>
          <div className="flex justify-center gap-4">
             <Link href="/faq" className="text-brand-navy font-bold hover:underline inline-flex items-center">
               よくあるご質問 <ChevronRight size={16} />
             </Link>
             <Link href="/contact" className="text-brand-navy font-bold hover:underline inline-flex items-center">
               お問い合わせ <ChevronRight size={16} />
             </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
