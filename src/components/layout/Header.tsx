'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center w-full">
      {/* Top Logo Container with Light Blue Trapezoid Background */}
      <div className="bg-sky-400/90 px-8 md:px-16 pt-4 md:pt-8 pb-4 md:pb-6 flex items-start justify-center w-[260px] md:w-[450px] [clip-path:polygon(0_0,100%_0,85%_100%,15%_100%)]">
        <Image
          src="/image/logotoumei.png"
          alt="P-SPO Logo"
          width={240}
          height={70}
          className="w-36 md:w-64 h-auto drop-shadow-md"
          priority
        />
      </div>
    </header>
  );
}
