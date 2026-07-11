/* eslint-disable react/prop-types */
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
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-md shadow-accent-blue/15 hover:shadow-lg hover:shadow-accent-blue/25 border border-transparent',
    outline: 'border border-border text-primary hover:bg-surface hover:border-accent-blue/30',
    ghost: 'text-secondary hover:text-accent-blue hover:bg-surface'
  };
  
  const classes = twMerge(clsx(baseStyles, variants[variant], className));

  const content = (
    <>
      {children}
      {Icon && (
        <motion.span
          className="inline-flex items-center justify-center"
          variants={{
            hover: { x: 3 },
            initial: { x: 0 }
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Icon className="w-5 h-5 transition-colors" />
        </motion.span>
      )}
    </>
  );

  const hoverAnimation = props.disabled ? undefined : { y: -2, scale: 1.01 };
  const tapAnimation = props.disabled ? undefined : { scale: 0.95 };

  if (href) {
    return (
      <motion.a 
        href={href}
        className={classes}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        initial="initial"
        animate="initial"
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
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      initial="initial"
      animate="initial"
      {...props}
    >
      {content}
    </motion.button>
  );
}
