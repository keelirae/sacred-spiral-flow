import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#spiral', label: 'The Spiral' },
  { href: '/journey', label: 'Journey' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/initiates', label: 'For Initiates' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b ${elevated ? 'shadow-sm' : ''}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-background border px-3 py-2 rounded-md">Skip to main content</a>
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)),hsl(var(--accent)))] shadow-sm" aria-hidden="true" />
          <span className="font-semibold tracking-wide">The Sacred Spiral</span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            if (l.label === 'The Spiral') {
              return (
                <DropdownMenu key={l.href}>
                  <DropdownMenuTrigger className="text-sm hover:text-primary transition-colors flex items-center gap-1 focus:outline-none focus:text-primary">
                    {l.label}
                    <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border-border">
                    <DropdownMenuItem asChild>
                      <a href="/physical-realm" className="cursor-pointer">Physical Realm</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="/mental-realm" className="cursor-pointer">Mental Realm</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="/spiritual-realm" className="cursor-pointer">Spiritual Realm</a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <a
                key={l.href}
                href={l.href}
                className="text-sm hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
              >
                {l.label}
              </a>
            );
          })}
        </nav>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-expanded={open} aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80" aria-label="Mobile menu">
              <nav className="mt-8 grid gap-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-base px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => setOpen(false)}
                  >
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
