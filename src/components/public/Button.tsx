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
}

const variantToUi: Record<Variant, 'default' | 'secondary' | 'ghost' | 'outline'> = {
  primary: 'default',
  secondary: 'outline',
  ghost: 'ghost',
};

export default function Button({ as = 'button', href, children, variant = 'primary', className, onClick }: ButtonProps) {
  if (as === 'a' && href) {
    return (
      <a href={href}>
        <UIButton variant={variantToUi[variant]} className={className} onClick={onClick}>
          {children}
        </UIButton>
      </a>
    );
  }
  return (
    <UIButton variant={variantToUi[variant]} className={className} onClick={onClick}>
      {children}
    </UIButton>
  );
}
