import type { Experience, Education, Skill, Project, Certification } from '../types';

export const personalInfo = {
  name: 'Dharani Chinta',
  fullName: 'Naga Venkata Dharani Viswanadh Chinta',
  title: 'Full-Stack Software Engineer',
  tagline: 'Building AI-powered systems, event-driven microservices, and real-time streaming infrastructure.',
  email: 'dharani56525@gmail.com',
  location: 'Bellevue, WA',
  github: 'https://github.com/DharaniDJ',
  linkedin: 'https://linkedin.com/in/dharani-chinta/',
  leetcode: 'https://leetcode.com/u/dharani56525/',
  summary:
    'Full-stack software engineer with 4+ years of experience building AI-powered systems, event-driven microservices, and real-time streaming infrastructure. I have led development of an enterprise GenAI assistant serving 500+ users — spanning LLM integration, retrieval-augmented generation (RAG) pipelines, automated quality evaluation, and real-time response streaming for long-running agentic tools.',
};

export const experiences: Experience[] = [
  {
    company: 'Amazon.com',
    role: 'Software Development Engineer',
    period: 'Mar 2025 – Present',
    location: 'Bellevue, WA',
    color: 'from-orange-500 to-orange-600',
    initials: 'AMZ',
    highlights: [
      'Engineered real-time streaming infrastructure for an enterprise GenAI assistant (500+ users), eliminating 15–30s of frozen UI during long-running agentic tool executions through response streaming — without modifying existing serverless backend code.',
      'Built an automated LLM evaluation pipeline using a critic-model framework, enforcing an answer-correctness threshold across 30+ benchmark queries as a mandatory quality gate before every production release.',
      'Architected an event-driven document ingestion pipeline (S3 → SQS → Lambda → Step Functions → vector knowledge base) enabling cross-organizational teams to contribute domain-specific content with zero platform-team intervention.',
      'Delivered a self-service knowledge base portal with async pre-signed S3 uploads, real-time ingestion-status polling, and role-based access control — removing engineering dependency for internal content contributions.',
    ],
  },
  {
    company: 'Rheem Manufacturing',
    role: 'Systems Software Engineer',
    period: 'Jun 2024 – Dec 2024',
    location: 'Montgomery, AL',
    color: 'from-blue-500 to-blue-600',
    initials: 'RHM',
    highlights: [
      'Designed and implemented a CI/CD integration service connecting build pipelines to a test-management system via event-driven REST callbacks — cutting manual QA workflow time by 85% and reducing test-status update latency by 60%.',
      'Built an end-to-end test automation framework processing multi-source test data across mobile apps, cloud integrations, and IoT devices — improving test accuracy by 70% and enabling QA teams to scale coverage without additional headcount.',
      'Expanded automated regression suites across hardware and cloud release pipelines — accelerating release cycles by standardizing test execution through CI/CD.',
    ],
  },
  {
    company: 'Arizona State University',
    role: 'Software Engineer',
    period: 'Aug 2023 – May 2024',
    location: 'Tempe, AZ',
    color: 'from-amber-500 to-red-700',
    initials: 'ASU',
    highlights: [
      'Leveraged a distributed search and analytics stack to improve data accessibility by 30% and reduce query latency by 25%.',
      'Optimized database queries and schema through indexing and query tuning, improving data retrieval by 40% and reducing API response time by 20%.',
      'Implemented a batch-processing pipeline, achieving a 72% performance improvement when processing 1,000+ records.',
      'Estimated development components and coordinated design efforts using SDLC methodologies, ensuring smooth migrations and streamlined release planning.',
    ],
  },
  {
    company: 'SuperPe (previously Mewt)',
    role: 'Software Engineer',
    period: 'May 2022 – Nov 2022',
    location: 'Bengaluru, India',
    color: 'from-purple-500 to-purple-600',
    initials: 'SPE',
    highlights: [
      'Resolved the top 4 user-reported defects in a high-traffic financial microservice through root-cause analysis, improving reliability for the platform\'s most-used feature.',
      'Pioneered a publish-subscribe architecture using AWS SNS/SQS for the onboarding microservice, reducing API response times by 50% and contributing to a redesigned flow that increased install conversions by 200% and cut CAC by 80%.',
      'Architected an in-house log ingestion pipeline (CloudWatch → Kinesis Firehose → S3 → Glue → Athena) to replace a costly third-party solution — reducing logging costs by 63% and cutting log query time to seconds.',
      'Introduced AWS SAM for serverless IaC, cutting environment provisioning time by over 50% and standardizing deployment across the backend monorepo.',
    ],
  },
  {
    company: 'Infor (India) Pvt. Ltd',
    role: 'Associate Software Engineer',
    period: 'Jun 2021 – May 2022',
    location: 'Hyderabad, India',
    color: 'from-green-500 to-green-600',
    initials: 'INF',
    highlights: [
      'Architected resilient microservices with a service registry and API-gateway routing; implemented a Kafka-based transactional outbox pattern guaranteeing reliable event delivery across 5 distributed services during outages.',
      'Diagnosed and resolved 6 critical scheduling/forecasting defects in a workforce-management module for a Fortune 500 client, expanding automated test coverage by 30% and reducing regression failures by 40%.',
      'Developed RESTful APIs for ERP integration, implementing automated testing and deployment through CI/CD pipelines.',
      'Optimized frontend performance by introducing concurrent background processing for API calls, eliminating UI blocking on data-heavy dashboard views.',
    ],
  },
  {
    company: 'Zaggle Prepaid Pvt. Ltd',
    role: 'Backend Developer',
    period: 'Aug 2020 – Dec 2020',
    location: 'Hyderabad, India',
    color: 'from-teal-500 to-cyan-600',
    initials: 'ZAG',
    highlights: [
      'Developed and tested a core savings product module, achieving 90% test coverage through unit and API testing — enhancing product quality and reducing post-release issues.',
      'Built a test codebase from scratch using an object-oriented model spanning the full production code base, incorporating core business logic within a couple of months.',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    icon: '💻',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'Ruby', 'SQL', 'Shell'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['ReactJS', 'React Native', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Spring Boot', 'FastAPI', 'Django', 'Node.js', 'Ruby on Rails', 'REST APIs', 'Microservices', 'Kafka', 'WebSocket'],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    items: ['RAG', 'LLM Integration', 'Vector Search', 'Prompt Engineering', 'Automated Evaluation', 'Agentic Tools'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: '☁️',
    items: ['AWS Lambda', 'S3', 'SQS', 'SNS', 'API Gateway', 'Step Functions', 'AWS CDK', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'DynamoDB', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Security & Observability',
    icon: '🔐',
    items: ['OAuth2', 'Keycloak', 'JWT', 'Spring Security', 'CloudWatch', 'Kibana', 'Grafana'],
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
  {
    name: 'AWS Certified Generative AI Developer – Professional',
    issuer: 'Amazon Web Services',
    icon: '🏆',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    icon: '☁️',
  },
  {
    name: 'Advanced Technical Interview Prep',
    issuer: 'CodePath',
    icon: '📚',
  },
  {
    name: 'Problem Solving (Intermediate) Certificate',
    issuer: 'HackerRank',
    icon: '🧩',
  },
];

export const projects: Project[] = [
  {
    title: 'Enterprise GenAI Assistant – Real-Time Streaming',
    description:
      'Real-time streaming infrastructure for an enterprise GenAI assistant serving 500+ users. Eliminated 15–30s of frozen UI by implementing response streaming for long-running agentic tools — without modifying existing serverless backend code.',
    tech: ['LLM Integration', 'AWS Lambda', 'Streaming Gateway', 'Python', 'SSE', 'RAG'],
    highlights: ['500+ active users', 'Eliminated frozen UI', 'Zero backend changes'],
  },
  {
    title: 'Self-Service Knowledge Base Portal',
    description:
      'Full-stack portal enabling cross-org teams to independently contribute documents to a centralized knowledge base. Features async pre-signed S3 uploads, real-time ingestion status polling via Step Functions, and role-based access control.',
    tech: ['React', 'TypeScript', 'AWS S3', 'SQS', 'Step Functions', 'DynamoDB', 'AWS CDK'],
    highlights: ['Zero engineering dependency', 'Full document lifecycle', 'RBAC implementation'],
  },
  {
    title: 'Automated LLM Evaluation Pipeline',
    description:
      'Automated quality-gate pipeline built on a critic-model evaluation framework. Enforces an answer-correctness threshold across 30+ benchmark queries before every production release of the GenAI assistant.',
    tech: ['LLM Evaluation', 'Python', 'AWS Lambda', 'CI/CD'],
    highlights: ['Correctness threshold', '30+ evaluation queries', 'Mandatory quality gate'],
  },
  {
    title: 'CI/CD Integration Service',
    description:
      'Service connecting CI/CD build pipelines to a test-management system via event-driven REST callbacks, cutting manual QA workflow time by 85% and reducing test status update latency by 60%.',
    tech: ['Python', 'Jenkins', 'REST APIs', 'Event-driven Architecture'],
    highlights: ['85% less manual QA time', '60% lower latency', 'Multi-source test data'],
  },
  {
    title: 'Log Ingestion Pipeline',
    description:
      'In-house log ingestion pipeline replacing a costly third-party solution. Built an end-to-end data flow from CloudWatch through Kinesis Firehose, S3, Glue, to Athena — reducing logging costs by 63%.',
    tech: ['AWS CloudWatch', 'Kinesis Firehose', 'S3', 'Glue', 'Athena'],
    highlights: ['63% cost reduction', 'Sub-second query time', 'Delivered in 3 weeks'],
  },
  {
    title: 'MediStreamPACS',
    description:
      'A DICOM server and parser for secure, efficient medical image management. Engineered robust backend services — authentication, authorization, and 300+ test cases — ensuring data integrity and compliance with medical imaging standards.',
    tech: ['Python', 'Django', 'DICOM', 'PostgreSQL'],
    highlights: ['300+ test cases', 'Secure image management', 'Standards-compliant'],
  },
];
