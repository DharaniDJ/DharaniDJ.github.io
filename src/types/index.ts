export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  color: string;
  initials: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  icon: string;
}
