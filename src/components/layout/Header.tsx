'use client';
import React from 'react';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'P・SPOとは', href: '#about' },
    { name: 'サービス', href: '#services' },
    { name: '料金プラン', href: '#pricing' },
    { name: '店舗を探す', href: '#stores' },
    { name: 'よくある質問', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black text-brand-navy tracking-tighter">
              P・SPO
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-brand-orange font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">ログイン</Button>
            <Button variant="primary" size="sm">WEB入会はこちら</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-navy p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-orange hover:bg-slate-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3 px-3">
              <Button variant="outline" className="w-full">ログイン</Button>
              <Button variant="primary" className="w-full">WEB入会はこちら</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
