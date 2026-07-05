'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { cn } from '@/lib/utils';
import { mainNavItems } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/shared/theme-toggle';

/** Main site header with glassmorphic navigation */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'glass-card border-b border-white/10 shadow-lg shadow-black/5'
          : 'bg-transparent'
      )}
      style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none' }}
    >
      {/* Gradient bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-[var(--gradient-start)] to-transparent opacity-30" />
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg group">
          <SiGithub className="h-6 w-6 text-[var(--gradient-start)] group-hover:text-[var(--gradient-end)] transition-colors" />
          <span className="gradient-text">{siteConfig.displayName}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-full transition-all duration-200',
                pathname === item.href
                  ? 'bg-[var(--accent)] text-[var(--accent-foreground)] shadow-sm'
                  : 'text-muted-foreground hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-[var(--accent)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 overflow-hidden glass-card"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'px-4 py-3 text-sm font-medium rounded-full transition-all duration-200',
                    pathname === item.href
                      ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                      : 'text-muted-foreground hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
