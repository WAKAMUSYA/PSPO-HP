import React from 'react';
import { features } from '../../data/dummyData';
import { CheckCircle2 } from 'lucide-react';

export function Features() {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-mint opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">P・SPOが選ばれる理由</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            地域最大級の複合型施設として、多くのお客様にご支持いただいています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-brand-mint" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
