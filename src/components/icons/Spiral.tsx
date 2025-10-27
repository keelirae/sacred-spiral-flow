import React from 'react';

export const Spiral: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path 
      d="M 100 100 
         C 100 80, 110 70, 120 70
         C 130 70, 140 80, 140 90
         C 140 105, 130 115, 115 115
         C 95 115, 80 100, 80 85
         C 80 65, 95 50, 115 50
         C 140 50, 160 70, 160 95
         C 160 125, 135 150, 105 150
         C 70 150, 45 120, 45 85
         C 45 45, 75 15, 115 15
         C 160 15, 190 50, 190 95
         C 190 145, 155 180, 105 180
         C 50 180, 10 140, 10 85" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default Spiral;
