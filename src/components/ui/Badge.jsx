import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Badge({ children, className, variant = 'default' }) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md';
  
  const variants = {
    default: 'bg-primary/20 text-primary border border-primary/30',
    secondary: 'bg-secondary/20 text-secondary border border-secondary/30',
    outline: 'bg-white/5 text-gray-300 border border-white/10'
  };

  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], className))}>
      {children}
    </span>
  );
}
