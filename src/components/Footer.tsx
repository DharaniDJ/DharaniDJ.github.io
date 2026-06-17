import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} <span className="text-gray-400">Dharani Chinta</span>. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-gray-600 hover:text-white transition-colors">
            <FaGithub size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-gray-600 hover:text-white transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email"
            className="text-gray-600 hover:text-white transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
