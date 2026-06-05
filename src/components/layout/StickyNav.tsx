'use client';
import React, { useState, useEffect } from 'react';

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
    { label: 'ホーム', href: '#' },
    { label: '店舗を探す', href: '#stores' },
    { label: 'サービス', href: '#services' },
    { label: '料金', href: '#pricing' },
    { label: 'キャンペーン', href: '#news' },
    { label: '混雑状況', href: '#crowd' },
    { label: 'サポート', href: '#faq' },
    { label: '会員ページ', href: '#member' },
  ];

  return (
    <nav 
      className={`sticky top-0 z-40 w-full bg-white border-b border-gray-200 transition-shadow duration-300 ${
        isSticky ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-0 md:px-4">
        <ul className="flex items-center justify-start md:justify-center overflow-x-auto whitespace-nowrap hide-scrollbar">
          {navItems.map((item, index) => (
            <li key={index} className="flex-shrink-0">
              <a
                href={item.href}
                className="block px-4 md:px-6 py-4 text-sm md:text-base font-bold text-gray-700 hover:text-[#3587c6] hover:bg-blue-50/50 transition-colors border-b-2 border-transparent hover:border-[#3587c6]"
              >
                {item.label}
              </a>
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
