import React from 'react';
import { Button as UIButton } from '@/components/ui/button';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  as?: 'a' | 'button';
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: React.MouseEventHandler;
  pulse?: boolean;
}

const variantToUi: Record<Variant, 'default' | 'secondary' | 'ghost' | 'outline'> = {
  primary: 'default',
  secondary: 'outline',
  ghost: 'ghost',
};

export default function Button({ as = 'button', href, children, variant = 'primary', className = '', onClick, pulse = false }: ButtonProps) {
  const pulseClass = pulse ? 'animate-pulse-shadow' : '';
  
  if (as === 'a' && href) {
    return (
      <UIButton 
        asChild
        variant={variantToUi[variant]}
        className={`px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 font-medium hover:bg-foreground hover:text-background ${pulseClass} ${className}`}
      >
        <a href={href} onClick={onClick}>{children}</a>
      </UIButton>
    )
  }
  return (
    <UIButton 
      variant={variantToUi[variant]} 
      className={`px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 font-medium hover:bg-foreground hover:text-background ${pulseClass} ${className}`} 
      onClick={onClick}
    >
      {children}
    </UIButton>
  );
}
