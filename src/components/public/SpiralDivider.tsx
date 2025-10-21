import React from 'react'

interface SpiralDividerProps {
  className?: string
}

export default function SpiralDivider({ className = '' }: SpiralDividerProps) {
  return (
    <div className={`relative my-10 md:my-14 lg:my-20 ${className}`} aria-hidden="true">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-[1px] ring-1 ring-foreground/10 flex items-center justify-center transition-[filter,opacity] duration-300 hover:opacity-95 hover:[filter:brightness(1.05)]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9S3 16.97 3 12" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.25" strokeLinecap="round"/>
            <path d="M12 6a6 6 0 1 1-6 6" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.25" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="1.2" fill="currentColor" opacity=".45"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
