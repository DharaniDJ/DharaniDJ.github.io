import { FaGithub } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo, projects } from '../data/portfolio';
import Metric from './ui/Metric';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import TagList from './ui/TagList';

function GitHubLink({ className, description }: { className?: string; description?: string }) {
  return (
    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={className}>
      <FaGithub size={description ? 24 : 16} aria-hidden="true" />
      <span className="inline-flex items-center gap-2">
        More on GitHub
        <ArrowUpRight size={16} aria-hidden="true" />
      </span>
      {description && <span className="text-sm font-normal text-muted">{description}</span>}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export default function Projects() {
  const gridCardCount = projects.filter((p) => !p.featured).length;
  const fillLastCell = gridCardCount % 2 === 1;

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Problems solved, with the receipts."
      intro="Each card states the problem, the measured outcome and the stack that delivered it."
      band
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={project.title}
            delay={(i % 2) * 0.06}
            className={project.featured ? 'md:col-span-2' : undefined}
          >
            <article
              className={`card card-hover group relative flex h-full flex-col overflow-hidden p-6 sm:p-7 ${
                project.featured ? 'md:p-10' : ''
              }`}
            >
              {project.featured && <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-accent" />}
              {project.context && (
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">{project.context}</p>
              )}
              <h3
                className={`font-semibold leading-snug tracking-tight ${
                  project.featured ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mt-2 leading-relaxed text-body ${project.featured ? 'text-base sm:text-lg' : 'text-[0.95rem]'}`}
              >
                {project.problem}
              </p>

              <dl
                className={`mt-5 grid border-y border-line ${
                  project.featured
                    ? 'grid-cols-2 gap-4 py-6 sm:grid-cols-3 sm:gap-8'
                    : 'grid-cols-3 gap-3 py-4 sm:gap-4'
                }`}
              >
                {project.metrics.map((m) => (
                  <Metric key={m.label} value={m.value} label={m.label} size={project.featured ? 'lg' : 'sm'} />
                ))}
              </dl>

              {project.detail && <p className="mt-4 text-sm leading-relaxed text-body">{project.detail}</p>}

              {project.myPart && (
                <p className="mt-4 rounded-xl border border-rose/30 bg-rose/[0.06] px-4 py-3 text-sm leading-relaxed text-body">
                  <span className="mr-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-rose">
                    My part
                  </span>
                  {project.myPart}
                </p>
              )}

              <TagList items={project.tech} label={`${project.title} tech stack`} className="mt-auto pt-5" />
            </article>
          </Reveal>
        ))}
        {fillLastCell && (
          <Reveal as="li" delay={0.06} className="flex">
            <GitHubLink
              description="More code, side projects and experiments"
              className="card flex h-full min-h-56 w-full flex-col items-center justify-center gap-3 border-dashed border-line-strong p-6 text-center font-semibold text-fg hover:-translate-y-1 hover:border-ember hover:text-ember sm:p-7"
            />
          </Reveal>
        )}
      </ul>

      {!fillLastCell && (
        <Reveal className="mt-10 flex justify-center">
          <GitHubLink className="btn-outline" />
        </Reveal>
      )}
    </Section>
  );
}
