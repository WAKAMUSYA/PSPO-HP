import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { pricingPlans } from '../../data/dummyData';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4">料金プラン</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            シンプルでわかりやすい料金体系。あなたのライフスタイルに合わせてお選びください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              hoverEffect 
              className={`relative flex flex-col h-full ${plan.recommended ? 'md:-mt-8 md:mb-8 border-2 border-brand-mint shadow-2xl z-10' : 'border border-slate-200'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-mint text-brand-navy font-bold px-6 py-1.5 rounded-full text-sm shadow-md whitespace-nowrap">
                  1番人気！おすすめ
                </div>
              )}
              
              <div className={`p-8 text-center border-b border-slate-100 ${plan.theme === 'navy' ? 'bg-brand-navy text-white' : plan.theme === 'mint' ? 'bg-gradient-to-b from-teal-50 to-white' : 'bg-slate-100'}`}>
                <h3 className={`text-xl font-bold mb-2 ${plan.theme === 'navy' ? 'text-white' : 'text-brand-navy'}`}>
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className={`text-5xl font-black tracking-tight ${plan.theme === 'navy' ? 'text-white' : plan.theme === 'gray' ? 'text-slate-700' : 'text-brand-navy'}`}>
                    {plan.price !== '都度払い' ? `¥${plan.price}` : plan.price}
                  </span>
                  {plan.price !== '都度払い' && (
                    <span className={`ml-1 text-xl font-semibold ${plan.theme === 'navy' ? 'text-blue-200' : 'text-slate-500'}`}>/月</span>
                  )}
                </div>
                {plan.priceTax !== '-' && (
                  <p className={`text-sm mt-1 ${plan.theme === 'navy' ? 'text-blue-300' : 'text-slate-500'}`}>
                    (税込 ¥{plan.priceTax})
                  </p>
                )}
              </div>
              
              <div className="p-8 flex-grow flex flex-col bg-white">
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="flex-shrink-0 text-brand-mint mt-1 mr-3" size={18} />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.recommended ? 'primary' : 'outline'} 
                  className="w-full"
                >
                  このプランで入会する
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
