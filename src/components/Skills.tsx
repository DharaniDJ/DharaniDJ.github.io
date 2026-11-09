import { skills } from '../data/portfolio';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import TagList from './ui/TagList';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The toolbox behind the numbers.">
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {skills.map((group, i) => (
          <Reveal as="li" key={group.category} delay={Math.floor(i / 3) * 0.06} className="mb-4 break-inside-avoid">
            <div className="card p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold">
                <span aria-hidden="true" className="h-2 w-2 rounded-sm bg-accent" />
                {group.category}
              </h3>
              <TagList items={group.items} label={group.category} className="mt-4" />
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
