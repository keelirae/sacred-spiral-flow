import React from 'react';

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-16 border-t bg-gradient-to-b from-muted/40 to-transparent">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)),hsl(var(--accent)))]" aria-hidden="true" />
            <p className="font-semibold">The Sacred Spiral</p>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A cyclical path of embodiment through the Physical, Mental, and Spiritual realms.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-primary" href="/journey">Journey</a></li>
            <li><a className="hover:text-primary" href="/physical-realm">Physical Realm</a></li>
            <li><a className="hover:text-primary" href="/mental-realm">Mental Realm</a></li>
            <li><a className="hover:text-primary" href="/spiritual-realm">Spiritual Realm</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-3">Community</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-primary" href="/initiates">For Initiates</a></li>
            <li><a className="hover:text-primary" href="/auth">Sign In</a></li>
            <li><a className="hover:text-primary" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <div className="relative h-10 w-10">
            <span aria-hidden className="absolute inset-0 rounded-full border border-dashed border-muted-foreground/40 animate-slow-spin motion-reduce:animate-none" />
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} The Sacred Spiral</p>
          <div className="flex gap-4 text-sm">
            <a href="/privacy" className="hover:text-primary">Privacy</a>
            <a href="mailto:hello@example.com" className="hover:text-primary">Email</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
