'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-black text-white tracking-tighter mb-6 block">
              P・SPO
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              ジム、カフェ、カラオケ、ゴルフ、温泉。あなたの毎日に、もっと自由な選択肢を。
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
                X
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
                IG
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
                LINE
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">サービス</h3>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">24時間ジム</a></li>
              <li><a href="#" className="hover:text-white transition-colors">無人カフェ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">カラオケ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">シミュレーションゴルフ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">温泉・サウナ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">インフォメーション</h3>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li><a href="#pricing" className="hover:text-white transition-colors">料金プラン</a></li>
              <li><a href="#stores" className="hover:text-white transition-colors">店舗を探す</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">よくある質問</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お知らせ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">企業情報</h3>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">運営会社</a></li>
              <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-800 text-center text-blue-300 text-xs">
          &copy; {new Date().getFullYear()} P-SPO24. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
