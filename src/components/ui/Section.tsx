import type { ReactNode } from 'react';
import { navLinks } from '../../data/portfolio';
import SectionHeading from './SectionHeading';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  band?: boolean;
  children: ReactNode;
}

const sectionIndex = (id: string) => String(navLinks.findIndex((l) => l.id === id) + 1).padStart(2, '0');

export default function Section({ id, eyebrow, title, intro, band = false, children }: SectionProps) {
  const titleId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`py-20 md:py-24 ${band ? 'border-y border-line/60 bg-ink-900' : ''}`}
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading id={titleId} index={sectionIndex(id)} eyebrow={eyebrow} title={title} intro={intro} />
        {children}
      </div>
    </section>
  );
}
