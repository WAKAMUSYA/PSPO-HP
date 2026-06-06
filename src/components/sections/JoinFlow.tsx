import React from 'react';
import { Button } from '../ui/Button';

export function JoinFlow() {
  const steps = [
    { num: '01', title: '会員情報入力', desc: 'お名前、ご連絡先などの基本情報をご入力ください。' },
    { num: '02', title: 'プラン、オプション選択', desc: 'ご希望の料金プランとオプションをお選びください。' },
    { num: '03', title: 'お支払方法登録', desc: 'クレジットカード等の決済情報をご登録ください。' },
    { num: '04', title: 'クーポンコード入力', desc: 'キャンペーンなどのクーポンコードがあればご入力ください。' },
    { num: '05', title: 'ご利用開始', desc: '登録完了！顔認証システムで「手ぶら」ですぐに施設を利用開始できます。' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4">入会までの流れ</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            ご来店不要。スマホひとつで、たったの5分で手続きが完了します。
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-blue-100 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto bg-white border-4 border-brand-mint text-brand-navy rounded-full flex items-center justify-center font-black text-2xl mb-4 shadow-lg relative z-10">
                  {step.num}
                </div>
                <h3 className="font-bold text-base md:text-sm lg:text-base mb-2 text-brand-navy">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="primary" size="lg" className="w-full sm:w-auto px-12">
            今すぐWEB入会する
          </Button>
        </div>
      </div>
    </section>
  );
}
