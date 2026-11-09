import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { headlineMetrics, personalInfo } from '../data/portfolio';
import type { HeadlineMetric } from '../types';
import CountUp from './ui/CountUp';
import Metric from './ui/Metric';
import Reveal from './ui/Reveal';

const formatMetric = (m: HeadlineMetric) => `${m.prefix ?? ''}${m.value.toFixed(m.decimals ?? 0)}${m.suffix ?? ''}`;

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex items-center overflow-hidden pb-16 pt-[calc(var(--nav-height)+1.25rem)] sm:pt-[calc(var(--nav-height)+2.5rem)] md:min-h-[min(100svh,60rem)] md:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgb(var(--line)/0.55)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--line)/0.55)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_70%_35%,black,transparent)]" />
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-rose/20 blur-[140px]" />
        <div className="absolute -left-20 bottom-0 h-[24rem] w-[24rem] rounded-full bg-ember/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="relative mx-auto grid w-full max-w-content gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-medium text-mint sm:px-3.5 sm:py-1.5 sm:text-sm">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-mint motion-safe:animate-pulse" />
              {personalInfo.status}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-5 flex flex-wrap gap-x-2 font-mono text-xs leading-relaxed text-muted sm:mt-8 sm:text-sm">
              <span className="whitespace-nowrap">
                {personalInfo.title}
                <span aria-hidden="true"> ·</span>
              </span>
              <span className="whitespace-nowrap">
                {personalInfo.currentRoleShort} <span className="text-ember">@ {personalInfo.currentCompany}</span>
                <span aria-hidden="true"> ·</span>
              </span>
              <span className="whitespace-nowrap">{personalInfo.location}</span>
            </p>
            <h1
              id="hero-title"
              tabIndex={-1}
              className="mt-3 text-[clamp(3.25rem,10vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.045em] outline-none"
            >
              <span className="block">{personalInfo.firstName}</span>
              <span className="block pb-2 text-accent">{personalInfo.lastName}</span>
            </h1>
            <p className="mt-3 text-balance font-display text-xl font-medium leading-snug text-fg sm:mt-5 sm:text-2xl">
              {personalInfo.valueLine}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:hidden">
            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-line py-4">
              {headlineMetrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <dt className="order-2 mt-0.5 text-[0.7rem] leading-tight text-muted">{m.shortLabel}</dt>
                  <dd className="order-1 whitespace-nowrap font-mono text-xl font-semibold leading-tight text-accent">
                    {formatMetric(m)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">{personalInfo.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
              <a href="#projects" className="btn-primary">
                View work
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-outline">
                Get in touch
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
                className="btn-outline px-3 sm:px-6"
              >
                <FaGithub size={18} aria-hidden="true" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="hidden lg:block">
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-accent" />
            <h2 className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <span>By the numbers</span>
              <span className="text-ember">4+ yrs</span>
            </h2>
            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-8">
              {headlineMetrics.map((m) => (
                <Metric
                  key={m.label}
                  size="lg"
                  label={m.label}
                  value={
                    m.countUp === false ? (
                      formatMetric(m)
                    ) : (
                      <CountUp value={m.value} decimals={m.decimals} prefix={m.prefix} suffix={m.suffix} />
                    )
                  }
                />
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
