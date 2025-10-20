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
      return { border: 'border-sage-600', bg: 'bg-background', Icon: Leaf, iconColor: 'text-sage-600', emoji: '🏋️‍♀️' };
    case 'mental':
      return { border: 'border-clay-600', bg: 'bg-background', Icon: Moon, iconColor: 'text-clay-600', emoji: '🧠' };
    case 'spiritual':
      return { border: 'border-ink-900', bg: 'bg-muted/20', Icon: Spiral, iconColor: 'text-ink-900', emoji: '🕯️' };
    case 'integration':
      return { border: 'border-accent', bg: 'bg-accent/10', Icon: null, iconColor: 'text-accent', emoji: '✨' };
    case 'final':
      return { border: 'border-accent', bg: 'bg-accent/10', Icon: null, iconColor: 'text-accent', emoji: '🌿' };
    default:
      return { border: 'border-sand-200', bg: 'bg-sand-200', Icon: null, iconColor: '', emoji: '⟳' };
  }
}

export default function JourneyTimeline({ stages = defaultStages }: Props) {
  return (
    <ol className="space-y-4">
      {stages.map((s, i) => {
        const { border, bg, Icon, iconColor, emoji } = getAccent(s.type);
        return (
          <li key={i} className={`flex items-start gap-4 p-5 rounded-xl border-l-4 ${border} ${bg} shadow-sm`}>
            <div className="flex-shrink-0">
              {Icon ? (
                <Icon className={`w-8 h-8 ${iconColor}`} />
              ) : (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconColor} bg-background border`}>
                  {emoji}
                </div>
              )}
            </div>
            <div>
              <h3 className="font-serif text-xl mb-1 text-foreground">{s.title}</h3>
              <p className="text-foreground/80">{s.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
