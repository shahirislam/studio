// src/components/layout/header.tsx
"use client";

import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, VisuallyHidden } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
            {/* Placeholder for Logo */}
            Advance Interior
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <a href="tel:01614445000">
                <Phone className="mr-2 h-4 w-4" />
                01614-445000
              </a>
            </Button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <VisuallyHidden asChild>
                  <SheetTitle>Mobile Navigation Menu</SheetTitle>
                </VisuallyHidden>
                <div className="flex flex-col space-y-6">
                  <Link href="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Advance Interior
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <a href="tel:01614445000">
                      <Phone className="mr-2 h-4 w-4" />
                      01614-445000
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
