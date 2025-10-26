import React from 'react';
import Button from './Button';
import Auras from './Auras';
import heroHome from '@/assets/hero-home.jpg';

interface Props {
  title: string;
  subtitle?: string;
  imageAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
}

export default function PageHero({ title, subtitle, imageAlt = 'decorative', ctaHref, ctaLabel, imageSrc }: Props) {
  return (
    <section className="relative w-full overflow-hidden">
      <Auras variant="hero" />
      {/* Hero background image */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-[960px] px-4 py-16 md:py-20 text-center">
        <p className="text-sm tracking-wide text-secondary uppercase mb-2 flex items-center justify-center gap-2">
          <span className="text-secondary">✨</span>
          The Sacred Spiral
        </p>
        <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.05] text-foreground">{title}</h1>
        {subtitle && <p className="mt-4 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">{subtitle}</p>}
        {ctaHref && ctaLabel && (
          <div className="mt-6">
            <Button as="a" href={ctaHref}>{ctaLabel}</Button>
          </div>
        )}
      </div>
    </section>
  );
}
