import React from 'react';
import { initialFees, options } from '../../data/dummyData';

export function Options() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">初期費用</h3>
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-8 border border-slate-100">
            <table className="w-full text-left border-collapse">
              <tbody>
                {initialFees.map((fee, index) => (
                  <tr key={index} className="border-b border-slate-200 last:border-0">
                    <th className="py-4 px-2 sm:px-4 text-slate-700 font-medium w-1/2">{fee.name}</th>
                    <td className="py-4 px-2 sm:px-4 text-brand-navy font-bold text-right sm:text-left">{fee.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">オプションサービス</h3>
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-8 border border-slate-100">
            <table className="w-full text-left border-collapse">
              <tbody>
                {options.map((option, index) => (
                  <tr key={index} className="border-b border-slate-200 last:border-0">
                    <th className="py-4 px-2 sm:px-4 text-slate-700 font-medium w-1/2 sm:w-2/3">{option.name}</th>
                    <td className="py-4 px-2 sm:px-4 text-brand-navy font-bold text-right sm:text-left">{option.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
