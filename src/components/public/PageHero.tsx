import React from 'react';
import Button from './Button';

interface Props {
  title: string;
  subtitle?: string;
  imageAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function PageHero({ title, subtitle, imageAlt = 'decorative', ctaHref, ctaLabel }: Props) {
  return (
    <section className="w-full bg-gradient-to-br from-ivory to-sand-200/60">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 md:pr-4">
          <p className="text-sm tracking-wide text-accent uppercase">✨ The Sacred Spiral</p>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1]">{title}</h1>
          {subtitle && <p className="text-base md:text-lg text-foreground/80">{subtitle}</p>}
          {ctaHref && ctaLabel && <Button as="a" href={ctaHref} className="mt-2">{ctaLabel}</Button>}
        </div>
        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 border border-border/70 shadow-sm" aria-hidden="true" role="img" aria-label={imageAlt} />
      </div>
    </section>
  );
}
