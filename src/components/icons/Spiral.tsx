import React from 'react';

export const Spiral: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
    {...props}
  >
    <path d="M50 50c10 0 18-8 18-18S60 14 50 14 32 22 32 32c0 12 10 22 22 22 14 0 26-12 26-26S68 2 54 2 30 12 30 26c0 16 14 30 30 30 18 0 34-16 34-34S78-12 60-12" />
  </svg>
);

export default Spiral;
