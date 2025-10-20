import React from 'react';

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6 items-center">
        <p className="text-sm text-muted-foreground">© The Sacred Spiral 2025</p>
        <div className="flex justify-center">
          <span
            aria-hidden="true"
            className="h-8 w-8 rounded-full border border-dashed border-muted-foreground/40"
            style={{ animation: 'spin 16s linear infinite' }}
          />
        </div>
        <div className="flex md:justify-end gap-4 text-sm">
          <a href="/privacy" className="hover:text-primary">Privacy</a>
          <a href="mailto:hello@example.com" className="hover:text-primary">Email</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
        </div>
      </div>
      <style>{`@media (prefers-reduced-motion: reduce){ footer [aria-hidden="true"]{ animation: none !important; } } @keyframes spin{from{transform:rotate(0)} to{transform:rotate(360deg)}}`}</style>
    </footer>
  );
}
