import { personalInfo } from '../data/portfolio';
import { allLinks } from './socialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} <span className="text-fg">{personalInfo.name}</span> · Built with React,
          TypeScript & Tailwind CSS
        </p>
        <ul className="flex items-center gap-2">
          {allLinks.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={external ? `${label} (opens in a new tab)` : label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-ink-850 hover:text-ember"
              >
                <Icon size={18} aria-hidden={true} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
