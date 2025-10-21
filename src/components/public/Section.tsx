import React from 'react';
import Auras from './Auras';

interface Props {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  background?: 'default' | 'ivory' | 'sand';
  spiralAccent?: boolean;
}

export default function Section({ id, title, eyebrow, children, background = 'default', spiralAccent = false }: Props) {
  const bg = background === 'ivory' ? 'bg-ivory' : background === 'sand' ? 'bg-sand-200/60' : '';
  const anchorOffset = id ? 'scroll-mt-24' : '';
  return (
    <section id={id} className={`relative ${bg} ${anchorOffset}`}>
      {/* soft paper texture using subtle noise */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(2px_2px_at_20px_20px,hsl(var(--foreground)/.12)_1px,transparent_1px)] [background-size:32px_32px]" aria-hidden="true" />
      <Auras />
      <div className="relative mx-auto max-w-3xl md:max-w-4xl lg:max-w-[960px] px-4 py-10 md:py-14 lg:py-20 text-center">
        {(eyebrow || title) && (
          <header className="relative mb-8">
            {spiralAccent && (
              <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-10">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden>
                  <path d="M60 12c26.5 0 48 21.5 48 48s-21.5 48-48 48S12 86.5 12 60" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M60 26a34 34 0 1 1-34 34" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="60" cy="60" r="2" fill="currentColor" opacity=".45"/>
                </svg>
              </div>
            )}
            {eyebrow && <p className="text-sm tracking-wide text-accent uppercase">{eyebrow}</p>}
            {title && <h2 className="mt-2 text-3xl md:text-4xl font-serif tracking-tight text-foreground">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
