import type {
  Certification,
  Education,
  Experience,
  Fact,
  HeadlineMetric,
  NavLink,
  PersonalInfo,
  Project,
  SkillGroup,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Dharani Chinta',
  firstName: 'Dharani',
  lastName: 'Chinta',
  fullName: 'Naga Venkata Dharani Viswanadh Chinta',
  title: 'Full-Stack Software Engineer',
  currentRole: 'Software Development Engineer',
  currentRoleShort: 'SDE',
  currentCompany: 'Amazon.com',
  valueLine: 'GenAI platforms and distributed systems at Amazon.',
  tagline:
    'I build config-driven platforms, LLM evaluation gates and event-driven AWS pipelines that keep AI products fast and trustworthy.',
  status: 'Open to opportunities across the U.S.',
  email: 'dharani56525@gmail.com',
  location: 'Bellevue, WA',
  github: 'https://github.com/DharaniDJ',
  linkedin: 'https://linkedin.com/in/dharani-chinta/',
  leetcode: 'https://leetcode.com/u/dharani56525/',
  summary: [
    'Full-stack software engineer with 4+ years of experience, currently at Amazon. I own features end to end, from design doc to production.',
    'I build scalable, event-driven services (Java, Python, AWS), React/TypeScript front-ends and LLM applications on Amazon Bedrock: a config-driven requirements (BRD) rendering platform, an automated RAGAS release gate, and a federated knowledge-base pipeline and portal.',
    'Before Amazon: CI/CD and test-automation platforms at Rheem, AWS serverless backends and a log analytics pipeline at a fintech startup, and Spring Boot microservices with a Kafka transactional outbox at Infor.',
  ],
};

export const glossary: Record<string, string> = {
  BRD: 'Business Requirements Document',
};

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const headlineMetrics: HeadlineMetric[] = [
  {
    value: 52,
    label: 'features onboarded with zero per-feature UI code',
    shortLabel: 'features, zero per-feature UI',
  },
  {
    value: 75,
    suffix: '×',
    label: 'knowledge corpus growth, to ~174K documents',
    shortLabel: 'knowledge corpus growth',
  },
  {
    value: 0.75,
    decimals: 2,
    label: 'minimum answer correctness to ship to prod',
    shortLabel: 'min. correctness to ship',
    countUp: false,
  },
  {
    value: 63,
    suffix: '%',
    label: 'logging cost cut with a serverless analytics pipeline',
    shortLabel: 'logging cost cut',
  },
];

export const facts: Fact[] = [
  { label: 'Now', value: 'SDE at Amazon.com' },
  { label: 'Based in', value: 'Bellevue, WA' },
  { label: 'Experience', value: '4+ years' },
  { label: 'Focus', value: 'LLM apps on Amazon Bedrock · event-driven AWS services · React/TypeScript' },
];

export const experiences: Experience[] = [
  {
    id: 'amazon',
    company: 'Amazon.com',
    shortName: 'Amazon',
    role: 'Software Development Engineer',
    period: 'Mar 2025 – Present',
    location: 'Bellevue, WA',
    highlights: [
      {
        lead: 'Config-driven forms',
        text: 'Engineered a config-driven requirements (BRD) rendering platform for a self-service feature-adoption portal, translating managed config-store schemas into versioned React forms tied to workflows, and onboarded **52 features with zero per-feature UI code** at **sub-500 ms P99** server latency.',
      },
      {
        lead: 'Release gate',
        text: 'Implemented an automated RAGAS release gate on AWS Lambda, wired into the CI/CD pipeline as an approval step, that uses an LLM judge to score **15 golden RAG queries** on 5 metrics and block prod releases below **0.75 answer correctness**.',
      },
      {
        lead: 'Ingestion pipeline',
        text: 'Architected an event-driven ingestion pipeline (S3 → SQS → Lambda → Step Functions → Amazon Bedrock knowledge base) that tracks document index status in DynamoDB, integrating 56 cross-account S3 buckets and expanding the GenAI assistant’s corpus **75× to ~174K documents**.',
      },
      {
        lead: 'Self-service portal',
        text: 'Built a React/TypeScript self-service portal with pre-signed direct-to-S3 uploads, status tracking and tenant-scoped access control, enabling **52 teams to onboard 55 knowledge bases** across 23 domains.',
      },
    ],
  },
  {
    id: 'rheem',
    company: 'Rheem Manufacturing',
    shortName: 'Rheem',
    role: 'Systems Software Engineer',
    period: 'Jun 2024 – Dec 2024',
    location: 'Montgomery, AL',
    highlights: [
      {
        lead: 'Jenkins → Jama sync',
        text: 'Designed a Spring Boot service linking 45 Jenkins jobs to Jama Connect via event-driven REST callbacks, cutting QA’s manual reporting time by **85%** and status delay from next day to **~3 minutes**.',
      },
      {
        lead: 'End-to-end testing',
        text: 'Architected an Appium/REST/MQTT end-to-end framework testing the EcoNet app, cloud and water heaters in one flow, cutting false alarms by **70%** and test-writing time by **75%**.',
      },
      {
        lead: 'Regression at scale',
        text: 'Doubled automated regression coverage and consolidated **45 Jenkins jobs into 12** on one shared library with automatic test-bench locking, cutting firmware regression time by **60%**.',
      },
    ],
  },
  {
    id: 'asu',
    company: 'Arizona State University',
    shortName: 'ASU',
    role: 'Software Engineer',
    period: 'Aug 2023 – May 2024',
    location: 'Tempe, AZ',
    highlights: [
      {
        text: 'Leveraged a distributed search and analytics stack to improve data accessibility by **30%** and reduce query latency by **25%**.',
      },
      {
        text: 'Optimized database queries and schema through indexing and query tuning, improving data retrieval by **40%** and reducing API response time by **20%**.',
      },
      {
        text: 'Implemented a batch-processing pipeline, achieving a **72%** performance improvement when processing 1,000+ records.',
      },
      {
        text: 'Estimated development components and coordinated design efforts using SDLC methodologies, ensuring smooth migrations and streamlined release planning.',
      },
    ],
  },
  {
    id: 'superpe',
    company: 'SuperPe (formerly Mewt)',
    shortName: 'SuperPe',
    role: 'Software Engineer',
    period: 'May 2022 – Nov 2022',
    location: 'Bengaluru, India',
    highlights: [
      {
        lead: 'PDF defects',
        text: 'Resolved four high-impact bank-statement PDF defects, cutting generation time by **40%** and weekly support tickets by **72%** via a lighter renderer and real-world regression tests.',
      },
      {
        lead: 'Credit checks',
        text: 'Introduced SNS/SQS event-driven credit checks in the onboarding flow, **halving registration latency and full onboarding time** while isolating registration from credit-vendor failures.',
      },
      {
        lead: 'Log analytics',
        text: 'Architected an in-house log ingestion pipeline using CloudWatch, Kinesis Firehose, S3, Glue and Athena to replace a third-party log tool, reducing monthly logging spend by **63%** and cutting investigation latency **86%**.',
      },
      {
        lead: 'Infrastructure as code',
        text: 'Initiated AWS SAM across 5 backend services in the monorepo, cutting provisioning by **60%** and fresh developer setup by **62%**.',
      },
    ],
  },
  {
    id: 'infor',
    company: 'Infor (India) Pvt. Ltd',
    shortName: 'Infor',
    role: 'Associate Software Engineer',
    period: 'Jun 2021 – May 2022',
    location: 'Hyderabad, India',
    highlights: [
      {
        lead: 'Kafka outbox',
        text: 'Engineered a Kafka transactional outbox for a 5-service Spring Boot event flow, preventing data loss across **~45K events** in a 15-minute Kafka outage drill.',
      },
      {
        lead: 'Forecasting fixes',
        text: 'Resolved 6 critical forecasting and scheduling defects in Infor WFM’s LFSO module for a Fortune 500 retailer, raising JUnit line coverage from **42% to 72%** and cutting regression defects by **40%**.',
      },
      {
        lead: 'ERP integration',
        text: 'Developed RESTful APIs for ERP integration, implementing automated testing and deployment through Jenkins CI/CD pipelines.',
      },
      {
        lead: 'Web Worker dashboard',
        text: 'Eliminated **95% of main-thread blocking** (~3 s to ~150 ms) by offloading fetch, parse and aggregation of ~650K labor values to a Web Worker pool.',
      },
    ],
  },
  {
    id: 'zaggle',
    company: 'Zaggle Prepaid Pvt. Ltd',
    shortName: 'Zaggle',
    role: 'Backend Developer Intern',
    period: 'Aug 2020 – Dec 2020',
    location: 'Hyderabad, India',
    highlights: [
      {
        text: 'Developed and tested a core savings product module, achieving **90% test coverage** through unit and API testing — enhancing product quality and reducing post-release issues.',
      },
      {
        text: 'Built a test codebase from scratch using an object-oriented model spanning the full production code base, incorporating core business logic within a couple of months.',
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: 'GenAI & ML',
    items: ['Amazon Bedrock', 'RAG', 'LLM Integration', 'RAGAS', 'Vector Search', 'Prompt Engineering', 'MCP Protocol'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      'AWS Lambda',
      'S3',
      'SQS',
      'SNS',
      'API Gateway',
      'Step Functions',
      'Kinesis Data Firehose',
      'Glue',
      'Athena',
      'AWS CDK',
      'AWS SAM',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'Kafka', 'REST APIs', 'Microservices', 'WebSocket', 'MQTT', 'FastAPI', 'Django', 'Node.js'],
  },
  {
    category: 'Languages',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'C++', 'SQL'],
  },
  {
    category: 'CI/CD & Testing',
    items: ['Jenkins', 'GitHub Actions', 'JUnit', 'Appium'],
  },
  {
    category: 'Databases',
    items: ['DynamoDB', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Security & Observability',
    items: ['OAuth2', 'Keycloak', 'JWT', 'Spring Security', 'CloudWatch', 'Kibana', 'Grafana'],
  },
  {
    category: 'Frontend',
    items: ['ReactJS', 'React Native', 'HTML', 'CSS', 'Tailwind CSS', 'Web Workers'],
  },
];

export const projects: Project[] = [
  {
    title: 'Config-Driven BRD Rendering Platform',
    context: 'Amazon',
    featured: true,
    problem:
      'Dozens of features in a self-service launch portal each needed their own requirements (BRD) form; one hand-built React page per feature would not scale.',
    metrics: [
      { value: '52', label: 'features onboarded' },
      { value: '0', label: 'per-feature UI code' },
      { value: '<500\u2009ms', label: 'P99 server latency' },
    ],
    detail:
      'Managed config-store schemas are translated into versioned React forms tied to workflows, so a new feature is a config change rather than a deploy.',
    tech: ['React', 'TypeScript', 'Java', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'Step Functions'],
  },
  {
    title: 'RAGAS Release Gate (LLM-as-judge)',
    context: 'Amazon',
    problem: 'RAG answer quality could regress between releases without anyone noticing.',
    metrics: [
      { value: '15', label: 'golden queries' },
      { value: '5', label: 'RAGAS metrics' },
      { value: '0.75', label: 'correctness threshold' },
    ],
    detail:
      'Runs on AWS Lambda as a required CI/CD approval step; an LLM judge scores every query and blocks the release when any falls below the threshold.',
    tech: ['Python', 'RAGAS', 'Amazon Bedrock', 'AWS Lambda', 'CI/CD approval step'],
  },
  {
    title: 'Federated Knowledge Base Platform',
    context: 'Amazon',
    problem:
      'Teams across the company had useful documents the GenAI assistant could not see, and no self-service way to add them.',
    metrics: [
      { value: '55', label: 'knowledge bases' },
      { value: '52', label: 'teams onboarded' },
      { value: '75×', label: 'corpus growth, to ~174K docs' },
    ],
    detail:
      'Event-driven ingestion (S3 → SQS → Lambda → Step Functions → Bedrock KB) tracking index status in DynamoDB across 56 cross-account buckets, plus a React/TypeScript portal with pre-signed uploads and tenant-scoped access.',
    tech: ['React', 'TypeScript', 'S3', 'SQS', 'AWS Lambda', 'Step Functions', 'DynamoDB', 'Amazon Bedrock', 'AWS CDK'],
  },
  {
    title: 'Jenkins → Jama Sync Service',
    context: 'Rheem',
    problem: 'QA compiled test status from 45 Jenkins jobs by hand, a day late.',
    metrics: [
      { value: '45', label: 'Jenkins jobs linked' },
      { value: '85%', label: 'less manual reporting' },
      { value: '~3 min', label: 'status delay, down from next day' },
    ],
    tech: ['Spring Boot', 'Jenkins', 'Jama Connect REST', 'Webhooks'],
  },
  {
    title: 'Log Analytics Pipeline',
    context: 'SuperPe',
    problem: 'A third-party log tool was expensive to run and slow to search during investigations.',
    metrics: [
      { value: '63%', label: 'lower monthly logging spend' },
      { value: '86%', label: 'faster investigations' },
    ],
    detail: 'In-house pipeline: CloudWatch → Kinesis Firehose → S3 → Glue → Athena, replacing the third-party tool.',
    tech: ['CloudWatch', 'Kinesis Data Firehose', 'S3', 'Glue', 'Athena'],
  },
  {
    title: 'Kafka Transactional Outbox',
    context: 'Infor',
    problem: 'Events could be lost between a database write and Kafka during an outage.',
    metrics: [
      { value: '0 / ~45K', label: 'events lost' },
      { value: '15 min', label: 'outage drill' },
      { value: '5', label: 'services' },
    ],
    tech: ['Spring Boot', 'Spring Cloud', 'Kafka'],
  },
  {
    title: 'MediStreamPACS',
    problem: 'A DICOM server and parser for secure, efficient medical image management.',
    metrics: [{ value: '300+', label: 'test cases' }],
    detail:
      'Engineered robust backend services (authentication and authorization) ensuring data integrity and compliance with medical imaging standards.',
    tech: ['Python', 'Django', 'DICOM', 'PostgreSQL'],
  },
];

export const education: Education[] = [
  {
    institution: 'Arizona State University',
    degree: 'Master of Science in Computer Software Engineering',
    period: '2023 – 2025',
    location: 'Tempe, AZ',
    gpa: '4.0 / 4.0',
  },
  {
    institution: 'BITS Pilani',
    degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
    period: '2017 – 2021',
    location: 'Pilani, India',
    gpa: '7.83 / 10',
  },
];

export const certifications: Certification[] = [
  { name: 'AWS Certified Generative AI Developer – Professional', issuer: 'Amazon Web Services' },
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services' },
  { name: 'Advanced Technical Interview Prep', issuer: 'CodePath' },
  { name: 'Problem Solving (Intermediate) Certificate', issuer: 'HackerRank' },
];
