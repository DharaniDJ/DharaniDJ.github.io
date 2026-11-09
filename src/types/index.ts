export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  currentRole: string;
  currentRoleShort: string;
  currentCompany: string;
  valueLine: string;
  tagline: string;
  status: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  leetcode: string;
  summary: string[];
}

export interface HeadlineMetric {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  shortLabel: string;
  countUp?: boolean;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Highlight {
  lead?: string;
  text: string;
}

export interface Experience {
  id: string;
  company: string;
  shortName: string;
  role: string;
  period: string;
  location: string;
  highlights: Highlight[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  context?: string;
  problem: string;
  metrics: ProjectMetric[];
  tech: string[];
  featured?: true;
  detail?: string;
  myPart?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface NavLink {
  id: string;
  label: string;
}
