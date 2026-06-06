import React from 'react';
import { Card } from '@/components/ui/Card';
import { Droplets, Ticket, MapPin, Sparkles, AlertCircle, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: '優待・利用条件詳細 | P・SPO',
  description: 'P・SPOの各プランにおける温泉優待、チケット枚数、店舗ごとの利用条件などの詳細をご案内します。',
};

export default function PricingDetailsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-brand-navy pt-32 pb-16 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/image/zimu6.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            優待・利用条件詳細
          </h1>
          <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
            プランごとの特典や利用条件について詳しくご案内します。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16 relative z-20">
        
        {/* Navigation Back */}
        <div className="-mt-8 mb-4">
          <Link href="/pricing" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-brand-navy transition-colors">
            <ChevronLeft size={16} className="mr-1" />
            料金・オプションに戻る
          </Link>
        </div>

        {/* 温泉優待 */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
              <Droplets size={20} />
            </div>
            <h2 className="text-2xl font-black text-brand-navy">温泉優待特典</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-t-4 border-brand-navy">
              <h3 className="text-lg font-bold text-brand-navy mb-4">BASIC PLAN</h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">ていれぎの湯</span>
                  <span className="text-lg font-medium text-slate-800">200円引き</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">とべ温泉</span>
                  <span className="text-lg font-medium text-slate-800">300円で利用可能</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">本谷温泉</span>
                  <span className="text-lg font-medium text-slate-800">400円で利用可能</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-t-4 border-brand-mint bg-teal-50/20">
              <h3 className="text-lg font-bold text-brand-mint mb-4">SPA P・SPO PLAN</h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">ていれぎの湯</span>
                  <div className="mt-1 space-y-1">
                    <div className="flex justify-between items-center text-sm"><span className="text-slate-600">平日:</span> <span className="font-bold text-slate-800 text-base">200円</span></div>
                    <div className="flex justify-between items-center text-sm"><span className="text-slate-600">土日祝:</span> <span className="font-bold text-slate-800 text-base">300円</span></div>
                    <div className="flex justify-between items-center text-sm"><span className="text-slate-600">同伴のお子様:</span> <span className="font-bold text-slate-800 text-base">100円</span></div>
                  </div>
                </li>
                <li className="flex flex-col pt-2 border-t border-slate-100">
                  <span className="text-sm font-bold text-slate-500">とべ温泉</span>
                  <span className="text-lg font-medium text-slate-800">100円</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500">本谷温泉</span>
                  <span className="text-lg font-medium text-slate-800">100円</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* チケット枚数 */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
              <Ticket size={20} />
            </div>
            <h2 className="text-2xl font-black text-brand-navy">チケット付与枚数</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-bold text-slate-500 w-1/3">チケット種類</th>
                  <th className="p-4 font-bold text-brand-navy w-1/3">BASIC PLAN</th>
                  <th className="p-4 font-bold text-brand-mint w-1/3">SPA PLAN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-bold text-slate-700">カラオケチケット</td>
                  <td className="p-4 text-slate-800 text-sm">
                    <ul className="space-y-1">
                      <li>北条店: <span className="font-bold">5枚</span></li>
                      <li>二番町: <span className="font-bold">3枚</span></li>
                      <li>清水町: <span className="font-bold">5枚</span></li>
                    </ul>
                  </td>
                  <td className="p-4 text-slate-800 text-sm bg-teal-50/10">同左</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-700">スタジオチケット</td>
                  <td className="p-4 font-bold text-slate-800">10枚</td>
                  <td className="p-4 font-bold text-slate-800 bg-teal-50/10">10枚</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-700">ホットヨガチケット</td>
                  <td className="p-4 text-slate-400 text-sm">付与なし<br/>※追加購入可能</td>
                  <td className="p-4 font-bold text-brand-mint bg-teal-50/10">4枚付与</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 店舗ごとの利用条件 */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
              <MapPin size={20} />
            </div>
            <h2 className="text-2xl font-black text-brand-navy">店舗ごとの利用条件</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 flex gap-4 items-start">
              <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-bold text-slate-800 mb-1">北条店の利用について</h3>
                <p className="text-sm text-slate-600">
                  <span className="font-bold text-brand-navy">BASIC PLAN</span>では北条店をご利用いただけません。<br />
                  北条店をご利用いただくには、<span className="font-bold text-brand-mint">SPA P・SPO PLAN</span>へのご加入が必要です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ビューティー利用条件 */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
              <Sparkles size={20} />
            </div>
            <h2 className="text-2xl font-black text-brand-navy">ビューティー利用条件</h2>
          </div>
          
          <div className="space-y-4">
            <Card className="p-5">
              <h3 className="font-bold text-purple-700 mb-2">ビューティー（女性向け）</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-1">
                <li><span className="font-bold">らくらくプラン</span>への加入が必須となります。</li>
                <li>対象店舗：中央通り、DAINO、東温、その他対象店舗</li>
              </ul>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold text-purple-700 mb-2">メンズビューティー</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-1">
                <li>メンズビューティー登録がなくても利用可能ですが、<span className="font-bold text-rose-500">脱毛は別料金</span>となります。</li>
              </ul>
            </Card>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex gap-4 items-start">
              <AlertCircle className="text-slate-400 shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-bold text-slate-800 mb-1">東温店のビューティーエリアについて</h3>
                <p className="text-sm text-slate-600">
                  東温店のビューティーエリアは、ビューティー登録者（女性）のみご利用可能です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
