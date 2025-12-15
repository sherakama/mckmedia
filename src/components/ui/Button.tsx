'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const MotionLink = motion.create(Link);

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = "cursor-pointer inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:from-pink-400 hover:to-orange-300 focus:ring-pink-500 shadow-lg shadow-pink-500/20",
    secondary: "bg-white/10 text-white hover:bg-white/20 focus:ring-white/50",
    outline: "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 focus:ring-white/50",
    ghost: "text-pink-500 hover:text-pink-400 hover:bg-white/5 px-4 py-2",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const animationProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 }
  };

  if (href) {
    return (
      <MotionLink href={href} className={combinedClassName} {...animationProps}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      {...animationProps}
    >
      {children}
    </motion.button>
  );
}
