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
  return (
    <article className={`rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow`}> 
      <div className={`aspect-[4/3] bg-muted/40`} aria-hidden="true" />
      <div className="p-6 space-y-3">
        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 ${ring}`}>
          {icon}
          <span>{title}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <Button as="a" href={href}>Learn More</Button>
      </div>
    </article>
  );
}
