import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { emailLink, profileLinks } from './socialLinks';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

type CopyState = 'idle' | 'copied' | 'failed';

const RESET_MS: Record<Exclude<CopyState, 'idle'>, number> = { copied: 2500, failed: 4000 };

const STATUS_TEXT: Record<CopyState, string> = {
  idle: '',
  copied: 'Email address copied to clipboard',
  failed: `Couldn’t copy. The address is ${personalInfo.email}`,
};

export default function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const emailRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (copyState === 'idle') return;
    const timer = window.setTimeout(() => setCopyState('idle'), RESET_MS[copyState]);
    return () => window.clearTimeout(timer);
  }, [copyState]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyState('copied');
    } catch {
      if (emailRef.current) window.getSelection()?.selectAllChildren(emailRef.current);
      setCopyState('failed');
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s talk about your next system.">
      <Reveal>
        <div className="rounded-3xl bg-accent p-px">
          <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-ink-900 px-5 py-9 sm:px-12 sm:py-14">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose/15 blur-[100px]"
            />
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
              <div className="min-w-0">
                <p className="text-base leading-relaxed text-body sm:text-lg">
                  I’m open to opportunities across the U.S. If you have a role in mind, or a system that needs to be
                  faster or more trustworthy, my inbox is open.
                </p>
                <a
                  ref={emailRef}
                  href={emailLink.href}
                  className="mt-6 block break-all font-display text-[clamp(1.375rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-fg underline decoration-ember/60 decoration-2 underline-offset-8 transition-colors hover:text-ember"
                >
                  {personalInfo.email}
                </a>
                <button type="button" onClick={copyEmail} className="btn-outline mt-8">
                  {copyState === 'copied' ? (
                    <Check size={16} aria-hidden="true" />
                  ) : (
                    <Copy size={16} aria-hidden="true" />
                  )}
                  {copyState === 'copied' ? 'Copied' : 'Copy email'}
                </button>
                <p role="status" className={copyState === 'failed' ? 'mt-3 break-all text-sm text-body' : 'sr-only'}>
                  {STATUS_TEXT[copyState]}
                </p>
              </div>

              <ul className="grid min-w-0 grid-cols-1 gap-3">
                {profileLinks.map(({ label, display, href, icon: Icon }) => (
                  <li key={label} className="min-w-0">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-ink-850 px-4 py-4 transition hover:-translate-y-0.5 hover:border-line-strong sm:px-5"
                    >
                      <Icon size={20} aria-hidden={true} className="flex-none text-ember" />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-fg">{label}</span>
                        <span className="block truncate font-mono text-xs text-muted">{display}</span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="ml-auto flex-none text-muted transition-colors group-hover:text-ember"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
