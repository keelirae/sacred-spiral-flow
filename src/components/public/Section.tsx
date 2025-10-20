import React from 'react';

interface Props {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  background?: 'default' | 'ivory' | 'sand';
}

export default function Section({ id, title, eyebrow, children, background = 'default' }: Props) {
  const bg = background === 'ivory' ? 'bg-ivory' : background === 'sand' ? 'bg-sand-200/60' : '';
  return (
    <section id={id} className={`${bg}`}>
      <div className="mx-auto max-w-6xl px-4 py-16">
        {(eyebrow || title) && (
          <header className="mb-8">
            {eyebrow && <p className="text-sm tracking-wide text-muted-foreground uppercase">{eyebrow}</p>}
            {title && <h2 className="mt-2 text-3xl font-serif">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
