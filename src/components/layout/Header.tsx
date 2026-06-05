'use client';
import React from 'react';
import Image from 'next/image';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center w-full">
      {/* Top Logo Container */}
      <div 
        className="bg-[#3587c6] px-12 md:px-24 pt-4 pb-8 flex items-start justify-center shadow-lg" 
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
          minWidth: '320px',
          maxWidth: '500px'
        }}
      >
        <Image
          src="/image/logotoumei.png"
          alt="P-SPO Logo"
          width={280}
          height={80}
          className="w-48 md:w-64 h-auto"
          priority
        />
      </div>
    </header>
  );
}
