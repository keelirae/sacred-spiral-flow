import React from 'react';
import Button from './Button';
import Auras from './Auras';
import heroHome from '@/assets/hero-home.jpg';

interface Props {
  title: string;
  subtitle?: React.ReactNode;
  imageAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
}

export default function PageHero({ title, subtitle, imageAlt = 'decorative', ctaHref, ctaLabel, imageSrc }: Props) {
  return (
    <section className="relative w-full overflow-hidden">
      <Auras variant="hero" />
      {/* Hero background image with subtle organic texture */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for text legibility */}
          <div className="absolute inset-0 bg-[hsl(123_42%_16%_/_0.1)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          {/* Subtle organic texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.08]" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' seed='2' /%3E%3CfeColorMatrix values='0 0 0 0 0.8, 0 0 0 0 0.6, 0 0 0 0 0.4, 0 0 0 1 0' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' /%3E%3C/svg%3E")`,
              backgroundSize: '180px 180px'
            }}
          />
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
