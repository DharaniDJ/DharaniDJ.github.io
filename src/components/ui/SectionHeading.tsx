import Reveal from './Reveal';

interface SectionHeadingProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
}

export default function SectionHeading({ id, index, eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 max-w-3xl md:mb-12">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:text-sm">
        <span className="font-semibold text-ember">{index}</span>
        <span className="h-px w-10 bg-accent" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className="mt-4 text-[clamp(1.875rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-body md:text-lg">{intro}</p>}
    </Reveal>
  );
}
