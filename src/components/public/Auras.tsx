import React from 'react'

interface AurasProps {
  variant?: 'hero' | 'section'
}

export default function Auras({ variant = 'section' }: AurasProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      {/* soft sage aura */}
      <div
        className={
          variant === 'hero'
            ? 'absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-[0.12]'
            : 'absolute -top-10 -left-10 h-48 w-48 rounded-full opacity-[0.10]'
        }
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, hsl(var(--primary)) 0%, transparent 70%)',
          filter: 'blur(6px)'
        }}
      />
      {/* soft clay aura */}
      <div
        className={
          variant === 'hero'
            ? 'absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-[0.14]'
            : 'absolute -bottom-10 -right-10 h-56 w-56 rounded-full opacity-[0.12]'
        }
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, hsl(var(--secondary)) 0%, transparent 70%)',
          filter: 'blur(8px)'
        }}
      />
    </div>
  )
}
