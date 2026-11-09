import { useRef, useState, type KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';
import Emphasis from './ui/Emphasis';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

const tabId = (id: string) => `exp-tab-${id}`;
const panelId = (id: string) => `exp-panel-${id}`;

export default function Experience() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    const next = (index + experiences.length) % experiences.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keyMap: Record<string, () => void> = {
      ArrowDown: () => select(active + 1),
      ArrowRight: () => select(active + 1),
      ArrowUp: () => select(active - 1),
      ArrowLeft: () => select(active - 1),
      Home: () => select(0),
      End: () => select(experiences.length - 1),
    };
    const action = keyMap[e.key];
    if (action) {
      e.preventDefault();
      action();
    }
  };

  return (
    <Section id="experience" eyebrow="Experience" title="Six roles, one habit: measure the result." band>
      <Reveal className="grid gap-8 lg:grid-cols-[15rem_1fr] lg:gap-12">
        <div
          role="tablist"
          aria-label="Employers"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {experiences.map((exp, i) => {
            const selected = i === active;
            return (
              <button
                key={exp.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={tabId(exp.id)}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={panelId(exp.id)}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
                className={`relative flex-none rounded-xl border px-4 py-2.5 text-left transition-colors lg:py-3 ${
                  selected
                    ? 'border-ember/60 bg-ink-850 text-fg lg:border-line-strong'
                    : 'border-line bg-transparent text-muted hover:border-line-strong hover:text-fg lg:border-transparent'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="exp-active"
                    aria-hidden="true"
                    className="absolute inset-y-2 left-0 hidden w-0.5 rounded-full bg-accent lg:block"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                {selected && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent lg:hidden"
                  />
                )}
                <span className="block font-display text-base font-semibold">{exp.shortName}</span>
                <span className="hidden font-mono text-xs text-muted lg:block">{exp.period}</span>
              </button>
            );
          })}
        </div>

        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            id={panelId(exp.id)}
            role="tabpanel"
            aria-labelledby={tabId(exp.id)}
            tabIndex={0}
            hidden={i !== active}
            className="min-w-0 max-w-[38rem] rounded-2xl"
          >
            <div className="border-b border-line pb-5">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{exp.role}</h3>
              <p className="mt-1 text-lg font-medium text-ember">{exp.company}</p>
              <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm text-muted">
                <span>{exp.period}</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} aria-hidden="true" />
                  {exp.location}
                </span>
              </p>
            </div>
            <ul className="mt-6 space-y-4">
              {exp.highlights.map((point) => (
                <li key={point.text} className="flex gap-4 text-base leading-relaxed text-body">
                  <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 flex-none rotate-45 bg-accent" />
                  <span>
                    {point.lead && <span className="font-display font-semibold text-fg">{point.lead}. </span>}
                    <Emphasis text={point.text} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
