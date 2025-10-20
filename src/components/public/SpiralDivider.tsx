import React from 'react';

export default function SpiralDivider() {
  return (
    <div className="my-10 flex justify-center" aria-hidden="true">
      <svg width="120" height="20" viewBox="0 0 120 20" fill="none">
        <path d="M0 10 Q 30 0, 60 10 T 120 10" stroke="currentColor" strokeOpacity=".2" strokeWidth="2" />
      </svg>
    </div>
  );
}
