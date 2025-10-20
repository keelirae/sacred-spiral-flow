import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#realms', label: 'The Spiral' },
  { href: '/journey', label: 'Journey' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
  { href: '/initiates', label: 'For Initiates' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-br from-primary to-accent" aria-hidden="true" />
          <span className="font-semibold tracking-wide">The Sacred Spiral</span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-expanded={open} aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <nav className="mt-8 grid gap-4">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="text-base" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
