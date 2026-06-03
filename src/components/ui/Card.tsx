import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className = '', hoverEffect = false }: CardProps) {
  const hoverStyles = hoverEffect ? 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300' : '';
  
  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
