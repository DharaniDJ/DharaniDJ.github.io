import type { ComponentType } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export interface SocialLink {
  label: string;
  display: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>;
  external: boolean;
}

export const emailLink: SocialLink = {
  label: 'Email',
  display: personalInfo.email,
  href: `mailto:${personalInfo.email}`,
  icon: Mail,
  external: false,
};

export const profileLinks: SocialLink[] = [
  { label: 'GitHub', display: 'github.com/DharaniDJ', href: personalInfo.github, icon: FaGithub, external: true },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/dharani-chinta',
    href: personalInfo.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    label: 'LeetCode',
    display: 'leetcode.com/u/dharani56525',
    href: personalInfo.leetcode,
    icon: SiLeetcode,
    external: true,
  },
];

export const allLinks: SocialLink[] = [...profileLinks, emailLink];
