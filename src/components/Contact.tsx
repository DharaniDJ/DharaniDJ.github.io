import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Mail, ExternalLink, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'text-red-400',
    bg: 'bg-red-500/10 hover:bg-red-500/20 border-red-500/20 hover:border-red-500/40',
    external: false,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/DharaniDJ',
    href: personalInfo.github,
    color: 'text-gray-300',
    bg: 'bg-gray-700/30 hover:bg-gray-700/50 border-gray-700/50 hover:border-gray-500/50',
    external: true,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dharani-chinta',
    href: personalInfo.linkedin,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20 hover:border-blue-500/40',
    external: true,
  },
  {
    icon: SiLeetcode,
    label: 'LeetCode',
    value: 'leetcode.com/u/dharani56525',
    href: personalInfo.leetcode,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10 hover:bg-yellow-500/20 border-yellow-500/20 hover:border-yellow-500/40',
    external: true,
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="py-24 bg-gray-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm font-medium mb-2 tracking-widest uppercase">Let's connect</p>
          <h2 className="section-heading">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-base max-w-xl mx-auto">
            I'm currently open to new opportunities anywhere in the United States. Whether you have a role in mind,
            a project to discuss, or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary text-base px-8 py-4"
          >
            <Send size={18} />
            Say Hello
          </a>
        </motion.div>

        {/* Links grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {links.map(({ icon: Icon, label, value, href, color, bg, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${bg}`}
            >
              <Icon size={22} className={color} />
              <div className="min-w-0">
                <p className="text-gray-500 text-xs">{label}</p>
                <p className="text-gray-300 text-sm font-medium truncate">{value}</p>
              </div>
              <ExternalLink size={14} className="text-gray-600 ml-auto flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
