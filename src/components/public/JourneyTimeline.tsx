import React from 'react';
import Leaf from '@/components/icons/Leaf';
import Moon from '@/components/icons/Moon';
import Spiral from '@/components/icons/Spiral';

type StageType = 'physical' | 'integration' | 'mental' | 'spiritual' | 'final';

export interface Stage {
  type: StageType;
  title: string;
  description: string;
}

interface Props {
  stages?: Stage[];
}

const defaultStages: Stage[] = [
  {
    type: 'physical',
    title: 'Physical Realm — Months 1–3',
    description:
      'Fitness, nutrition, and cycle syncing. Build a foundation of body intelligence and learn to move with your natural rhythm.',
  },
  {
    type: 'integration',
    title: 'Integration Month — Month 4',
    description: 'Optional community meetups, continued guidance, gentle integration practices.',
  },
  {
    type: 'mental',
    title: 'Mental Realm — Months 5–7',
    description:
      'Shadow work, nervous system awareness, and mindset reprogramming. Turn toward the inner landscape with compassion.',
  },
  {
    type: 'integration',
    title: 'Integration Month — Month 8',
    description: 'Reflection, rest, and integration. Space to allow new patterns to settle into your being.',
  },
  {
    type: 'spiritual',
    title: 'Spiritual Realm — Months 9–11',
    description:
      'Ceremony, meditation, and embodiment. Root into spiritual practice and connect to the sacred feminine.',
  },
  {
    type: 'final',
    title: 'Completion & Integration — Month 12',
    description:
      'Honor the full cycle, celebrate transformation, and prepare for what comes next.',
  },
];

function getAccent(type: StageType) {
  switch (type) {
    case 'physical':
      return { border: 'border-sage-600/50', bg: 'bg-background', Icon: Leaf, iconColor: 'text-sage-600', emoji: null };
    case 'mental':
      return { border: 'border-clay-600/50', bg: 'bg-background', Icon: Moon, iconColor: 'text-clay-600', emoji: null };
    case 'spiritual':
      return { border: 'border-ink-900/50', bg: 'bg-muted/20', Icon: Spiral, iconColor: 'text-ink-900', emoji: null };
    case 'integration':
      return { border: 'border-accent/60', bg: 'bg-accent/10', Icon: null, iconColor: 'text-accent', emoji: '✨' };
    case 'final':
      return { border: 'border-accent/60', bg: 'bg-accent/10', Icon: null, iconColor: 'text-accent', emoji: '🌿' };
    default:
      return { border: 'border-sand-200', bg: 'bg-sand-200', Icon: null, iconColor: '', emoji: '⟳' };
  }
}

function EmojiSeparator({ symbol }: { symbol: string }) {
  return (
    <div className="my-2 flex items-center justify-center" aria-hidden="true">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background/70 ring-1 ring-foreground/10">
        <span className="text-lg leading-none">{symbol}</span>
      </div>
    </div>
  );
}

type Group = {
  primary: Stage; // physical | mental | spiritual
  integration?: Stage; // immediate next integration month
  final?: Stage; // only for the spiritual group (month 12)
};

function makeGroups(stages: Stage[]): Group[] {
  const groups: Group[] = [];
  for (let i = 0; i < stages.length; i++) {
    const s = stages[i];
    if (s.type === 'physical' || s.type === 'mental' || s.type === 'spiritual') {
      const g: Group = { primary: s };
      // pair next integration month if present
      if (stages[i + 1] && stages[i + 1].type === 'integration') {
        g.integration = stages[i + 1];
      }
      // if spiritual, also look for final following it or following the integration
      if (s.type === 'spiritual') {
        const maybeFinal = stages[i + 1]?.type === 'integration' ? stages[i + 2] : stages[i + 1];
        if (maybeFinal && maybeFinal.type === 'final') {
          g.final = maybeFinal;
        }
      }
      groups.push(g);
    }
  }
  return groups;
}

export default function JourneyTimeline({ stages = defaultStages }: Props) {
  const groups = makeGroups(stages);
  return (
    <ol className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
      {groups.map((g, i) => {
        const { Icon, iconColor } = getAccent(g.primary.type);
        const delay = `${80 + i * 80}ms`;
        const spanClass = groups.length === 3 && i === 2 ? 'md:col-span-2 lg:col-span-2 place-self-center' : '';
        return (
          <li
            key={g.primary.title}
            className={`relative ${spanClass} rounded-2xl border bg-background/70 px-6 py-6 text-center shadow-sm ring-1 ring-foreground/5 animate-slide-up`}
            style={{ animationDelay: delay } as React.CSSProperties}
          >
            {/* Realm icon badge */}
            <div className="mb-3 flex justify-center">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 ring-1 ring-foreground/10">
                {Icon ? <Icon className={`h-6 w-6 ${iconColor}`} /> : null}
              </div>
            </div>
            <h3 className="font-serif text-2xl tracking-tight text-foreground">{g.primary.title}</h3>
            <p className="mx-auto mt-2 max-w-prose text-foreground/80">{g.primary.description}</p>

            {/* Integration subpanel */}
            {g.integration && (
              <div className="mt-5 rounded-xl border bg-accent/5 p-4 text-center">
                <div className="mb-1 flex items-center justify-center gap-2 text-accent">
                  <span aria-hidden>✨</span>
                  <span className="font-medium">{g.integration.title}</span>
                </div>
                <p className="text-foreground/80">{g.integration.description}</p>
              </div>
            )}

            {/* Final subpanel, grouped with Spiritual */}
            {g.final && (
              <div className="mt-4 rounded-xl border bg-accent/5 p-4 text-center">
                <div className="mb-1 flex items-center justify-center gap-2 text-accent">
                  <span aria-hidden>🌿</span>
                  <span className="font-medium">{g.final.title}</span>
                </div>
                <p className="text-foreground/80">{g.final.description}</p>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
