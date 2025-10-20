import React from 'react';

const Leaf: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path d="M5 21c8-1 14-7 15-15-8 1-14 7-15 15z" />
  </svg>
);

export default Leaf;
