import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTION_IDS = ['hero', ...navLinks.map((l) => l.id)] as const;
const MOBILE_MENU_ID = 'mobile-menu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS, 'hero');
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      {menuOpen && (
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-ink-950/75 backdrop-blur-sm lg:hidden"
        />
      )}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? 'border-b border-line/70 bg-ink-950/90 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[var(--nav-height)] max-w-content items-center justify-between px-5 sm:px-8"
        >
          <a href="#hero" className="group flex items-center gap-2.5 rounded-lg">
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-sm font-bold text-ink-950 transition-transform group-hover:-rotate-6"
            >
              DC
            </span>
            <span className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-fg">
              {personalInfo.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                        transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="#contact" className="btn-primary hidden whitespace-nowrap px-5 py-2.5 lg:inline-flex">
            Get in touch
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-line text-fg lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </nav>

        <div id={MOBILE_MENU_ID} hidden={!menuOpen} className="border-t border-line/70 bg-ink-950 lg:hidden">
          <ul className="flex flex-col px-5 py-4">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 font-display text-xl font-medium ${
                      isActive ? 'bg-ink-850 text-fg' : 'text-body'
                    }`}
                  >
                    {link.label}
                    {isActive && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />}
                  </a>
                </li>
              );
            })}
            <li className="mt-3">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
