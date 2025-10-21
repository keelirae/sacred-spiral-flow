import React from 'react';
import Button from './Button';

export interface RealmCardProps {
  title: 'Physical Realm' | 'Mental Realm' | 'Spiritual Realm';
  description: string;
  href: string;
  imageSrc?: string;
  accent: 'sage' | 'clay' | 'ink';
  icon?: React.ReactNode;
}

export default function RealmCard({ title, description, href, imageSrc, accent, icon }: RealmCardProps) {
  const ring = accent === 'sage' ? 'ring-sage-600' : accent === 'clay' ? 'ring-clay-600' : 'ring-ink-900';
  const aura =
    accent === 'sage'
      ? 'from-sage-600/25'
      : accent === 'clay'
      ? 'from-clay-600/25'
      : 'from-ink-900/20';
  return (
    <article className={`group relative rounded-2xl overflow-hidden bg-card/90 backdrop-blur-sm border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 focus-within:shadow-md hover:ring-2 ${ring} hover:ring-offset-2 hover:ring-offset-background`}> 
      {/* Aura overlay */}
      <div className={`pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,var(--tw-gradient-from),transparent_60%)] ${aura} opacity-0 transition-opacity duration-300 group-hover:opacity-25`} aria-hidden="true" />
      <a href={href} className="block focus:outline-none" aria-label={`Learn more about ${title}`}>
        <div className={`aspect-[4/3] bg-muted/60 transition-transform duration-500 group-hover:scale-[1.02]`} aria-hidden="true" />
      </a>
      <div className="p-6 space-y-4 text-center">
        <div className={`inline-flex items-center justify-center gap-2 rounded-full px-3 py-1 text-xs ring-1 ${ring} bg-background/70`}> 
          {icon}
          <span>{title}</span>
        </div>
        <p className="text-muted-foreground max-w-sm mx-auto">{description}</p>
        <Button as="a" href={href} className="focus:outline-none focus:ring-2 focus:ring-primary">Learn More</Button>
      </div>
    </article>
  );
}
