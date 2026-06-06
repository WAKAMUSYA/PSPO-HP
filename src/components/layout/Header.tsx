'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center w-full">
      {/* Top Logo Container */}
      <div className="px-6 md:px-16 pt-4 md:pt-8 flex items-start justify-center w-[220px] md:w-[400px]">
        <Image
          src="/image/logotoumei.png"
          alt="P-SPO Logo"
          width={240}
          height={70}
          className="w-32 md:w-56 h-auto"
          priority
        />
      </div>
    </header>
  );
}
