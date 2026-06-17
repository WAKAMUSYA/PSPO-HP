'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function StickyNav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 少しスクロールしたら影をつけるなどの演出用
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ホーム', href: '/#' },
    { 
      label: 'サービス', 
      href: '/#services',
      subItems: [
        { label: '運動する', href: '/services/exercise' },
        { label: '学ぶ・集中する', href: '/services/work' },
        { label: '整える', href: '/services/condition' },
        { label: '楽しむ・くつろぐ', href: '/services/relax' },
      ]
    },
    { label: '料金', href: '/pricing' },
    { label: '店舗一覧', href: '/#stores' },
    { label: 'キャンペーン', href: '/#news' },
    { label: 'サポート', href: '/#faq' },
    { label: '混雑状況', href: '/#crowd' },
    { label: '会員ページ', href: '/#member' },
  ];

  return (
    <nav 
      className={`sticky top-0 z-40 w-full bg-white border-b border-gray-200 transition-shadow duration-300 ${
        isSticky ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-0 md:px-4">
        <ul className="flex items-center justify-start md:justify-center overflow-x-auto md:overflow-visible whitespace-nowrap hide-scrollbar">
          {navItems.map((item, index) => (
            <li key={index} className="flex-shrink-0 group relative">
              <Link
                href={item.href}
                className="block px-4 md:px-6 py-4 text-sm md:text-base font-bold text-gray-700 hover:text-[#3587c6] hover:bg-blue-50/50 transition-colors border-b-2 border-transparent hover:border-[#3587c6]"
              >
                {item.label}
              </Link>
              
              {/* ドロップダウンメニュー */}
              {item.subItems && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-100 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden transform origin-top scale-95 group-hover:scale-100">
                  {item.subItems.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      href={sub.href}
                      className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-[#3587c6] border-b border-gray-50 last:border-0 transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
}
