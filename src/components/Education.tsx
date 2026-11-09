import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '../data/portfolio';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & certifications">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <GraduationCap size={16} aria-hidden="true" className="text-ember" />
            Degrees
          </h3>
          <ul className="mt-5 space-y-4">
            {education.map((edu, i) => (
              <Reveal as="li" key={edu.institution} delay={i * 0.06}>
                <article className="card card-hover p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h4 className="text-xl font-semibold tracking-tight">{edu.institution}</h4>
                    <p className="rounded-full border border-ember/40 px-3 py-1 font-mono text-xs text-ember">
                      GPA {edu.gpa}
                    </p>
                  </div>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{edu.degree}</p>
                  <p className="mt-3 font-mono text-xs text-muted">
                    {edu.period} · {edu.location}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <Award size={16} aria-hidden="true" className="text-ember" />
            Certifications
          </h3>
          <Reveal className="mt-5">
            <ul className="card divide-y divide-line">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-start gap-4 px-6 py-5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-accent" />
                  <div>
                    <p className="font-medium leading-snug text-fg">{cert.name}</p>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
