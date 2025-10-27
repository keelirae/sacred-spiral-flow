import React from 'react';
import Spiral from '@/components/icons/Spiral';

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-16 border-t">
      <div className="mx-auto max-w-[960px] px-4 py-10 text-center">
        <div className="mx-auto mb-2 flex items-center justify-center gap-2">
          <Spiral className="h-6 w-6 text-[#C87550]" aria-hidden="true" />
          <p className="font-semibold">The Sacred Spiral</p>
        </div>
        <p className="text-xs text-muted-foreground">© 2025 The Sacred Spiral</p>
        <div className="mt-3 flex justify-center gap-4 text-sm">
          <a href="/privacy" className="hover:text-primary">Privacy</a>
          <a href="mailto:hello@example.com" className="hover:text-primary">Email</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
