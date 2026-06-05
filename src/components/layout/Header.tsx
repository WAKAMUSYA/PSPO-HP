'use client';
import React from 'react';
import Image from 'next/image';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center w-full">
      {/* Top Logo Container */}
      <div 
        className="bg-[#3587c6] px-6 md:px-16 pt-3 md:pt-4 pb-4 md:pb-8 flex items-start justify-center shadow-lg w-[220px] md:w-[400px]" 
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)'
        }}
      >
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
