import React from 'react'

interface SpiralDividerProps {
  className?: string
}

export default function SpiralDivider({ className = '' }: SpiralDividerProps) {
  return (
    <div className={`relative my-10 md:my-14 lg:my-20 ${className}`} aria-hidden="true">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full bg-background flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 100 100" fill="none" className="text-primary" aria-hidden>
            <path 
              d="M50 50c10 0 18-8 18-18S60 14 50 14 32 22 32 32c0 12 10 22 22 22 14 0 26-12 26-26S68 2 54 2 30 12 30 26c0 16 14 30 30 30 18 0 34-16 34-34S78-12 60-12" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
