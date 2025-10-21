import React from 'react';
import Button from './Button';
import Auras from './Auras';

interface Props {
  title: string;
  subtitle?: string;
  imageAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function PageHero({ title, subtitle, imageAlt = 'decorative', ctaHref, ctaLabel }: Props) {
  return (
    <section className="relative w-full bg-gradient-to-br from-ivory to-sand-200/60">
      <Auras variant="hero" />
      <div className="mx-auto max-w-[960px] px-4 py-16 md:py-20 text-center">
  <p className="text-sm tracking-wide text-accent uppercase mb-2">✨ The Sacred Spiral</p>
  <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.05] bg-clip-text text-transparent bg-[linear-gradient(180deg,hsl(var(--foreground)),hsl(var(--foreground))),linear-gradient(90deg,hsl(var(--primary)),hsl(var(--secondary)))] [background-clip:text,initial] [background-blend-mode:overlay]">{title}</h1>
        {subtitle && <p className="mt-4 text-base md:text-lg text-foreground/80">{subtitle}</p>}
        {ctaHref && ctaLabel && (
          <div className="mt-6">
            <Button as="a" href={ctaHref}>{ctaLabel}</Button>
          </div>
        )}
        {/* Decorative background motif */}
        <div className="pointer-events-none relative mx-auto mt-10 h-40 w-40 rounded-full opacity-15 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/.25),transparent_60%)]" aria-hidden="true" role="img" aria-label={imageAlt} />
      </div>
    </section>
  );
}
