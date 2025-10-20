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
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight">{title}</h1>
          {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          {ctaHref && ctaLabel && <Button as="a" href={ctaHref}>{ctaLabel}</Button>}
        </div>
        <div className="aspect-[4/3] rounded-2xl bg-muted/40" aria-hidden="true" role="img" aria-label={imageAlt} />
      </div>
    </section>
  );
}
