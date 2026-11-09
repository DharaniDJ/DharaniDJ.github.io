import { Fragment } from 'react';
import { facts, glossary, personalInfo } from '../data/portfolio';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

const ABBR_PATTERN = new RegExp(`\\b(${Object.keys(glossary).join('|')})\\b`, 'g');

function WithAbbreviations({ text }: { text: string }) {
  return (
    <>
      {text.split(ABBR_PATTERN).map((part, i) =>
        part in glossary ? (
          <abbr key={i} title={glossary[part]} className="cursor-help no-underline">
            {part}
          </abbr>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export default function About() {
  const [lead, ...rest] = personalInfo.summary;

  return (
    <Section id="about" eyebrow="About" title="Config-driven forms, gated releases, events that don’t get lost.">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <Reveal className="space-y-5">
          <p className="font-display text-xl leading-snug text-fg sm:text-2xl">{lead}</p>
          {rest.map((p) => (
            <p key={p} className="text-base leading-relaxed text-body sm:text-lg">
              <WithAbbreviations text={p} />
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="card divide-y divide-line">
            {facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[7rem_1fr] gap-4 px-6 py-4">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{fact.label}</dt>
                <dd className="text-sm font-medium text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted">
            Full name: <span className="text-body">{personalInfo.fullName}</span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
