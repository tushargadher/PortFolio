import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  href,
  onClick,
  icon: Icon,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105';
  
  const variants = {
    primary: 'bg-primary text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:bg-opacity-90',
    outline: 'border-2 border-white/20 text-white hover:border-primary hover:text-primary hover:bg-primary/10',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10'
  };

  const classes = twMerge(clsx(baseStyles, variants[variant], className));

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <motion.a 
        href={href}
        className={classes}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={classes}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
