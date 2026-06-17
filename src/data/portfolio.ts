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
    'Full-stack software engineer with 4+ years of experience building AI-powered systems, event-driven microservices, and real-time streaming infrastructure. At Amazon, led development of an internal GenAI chatbot powered by Amazon Bedrock and MCP/AgentCore Gateway, including LLM integration, RAG pipelines, RAGAS evaluation, and real-time SSE streaming for long-running agentic tools.',
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
      'Engineered real-time MCP streaming infrastructure for Parker (500+ users) via AgentCore Gateway\'s enableResponseStreaming, eliminating 15–30s frozen UI during long-running agentic tool executions without modifying existing Lambda code.',
      'Built RAGAS evaluation pipeline with Amazon Nova as critic model, enforcing answer correctness ≥ 0.75 across 30+ queries as a mandatory quality gate before every production release.',
      'Architected event-driven federated document ingestion pipeline (S3 → SQS → Lambda → Step Functions → Bedrock KB) enabling cross-organizational teams to contribute domain-specific content to Parker KB with zero platform-team intervention.',
      'Delivered Federated KB self-service portal in React/TypeScript, async pre-signed S3 upload, real-time ingestion status polling, and role-based access control, eliminating engineering dependency for internal document contributions.',
    ],
  },
  {
    company: 'Rheem Manufacturing',
    role: 'Systems Software Engineering Intern',
    period: 'Jun 2024 – Dec 2024',
    location: 'Montgomery, AL',
    color: 'from-blue-500 to-blue-600',
    initials: 'RHM',
    highlights: [
      'Designed and implemented a Python CI/CD integration service connecting Jenkins pipelines to Jama test management via event-driven REST callbacks — cutting manual QA workflow time by 85% and reducing test status update latency by 60%.',
      'Built end-to-end test automation framework processing multi-source test data for mobile apps, cloud integrations, and IoT water heaters — improving test accuracy by 70% and enabling QA teams to scale coverage without additional headcount.',
      'Expanded automated regression test suites across hardware and cloud release pipelines — accelerating release cycles by standardizing test execution through Jenkins CI/CD.',
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
      'Resolved the top 4 user-reported defects in the Bank Statements microservice through root cause analysis, improving service reliability for the platform\'s highest-traffic financial feature.',
      'Pioneered publish-subscribe architecture using AWS SNS/SQS for the Onboarding microservice, reducing API response times by 50% and contributing to a redesigned onboarding flow that increased install conversions by 200% and cut CAC by 80%.',
      'Architected an in-house log ingestion pipeline (CloudWatch → Kinesis Firehose → S3 → Glue → Athena) to replace a costly third-party logging solution — reducing AWS logging costs by 63% and cutting log query time to seconds.',
      'Initiated AWS SAM for serverless IaC, cutting environment provisioning time by over 50% and standardizing deployment across the backend monorepo.',
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
      'Architected resilient microservices with Eureka service registry and API gateway routing; implemented Kafka-based transactional outbox pattern guaranteeing reliable event delivery across 5 distributed services during outages.',
      'Diagnosed and resolved 6 critical scheduling/forecasting defects in the WFM LFSO module for a Fortune 500 client, expanding JUnit test coverage by 30% and reducing regression failures by 40%.',
      'Developed RESTful APIs for ERP integration, implementing automated testing and deployment through Jenkins CI/CD pipelines.',
      'Optimized frontend performance by implementing web workers for concurrent API calls, eliminating UI blocking on data-heavy dashboard views.',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    icon: '💻',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Shell'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['ReactJS', 'React Native', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Spring Boot', 'FastAPI', 'Django', 'Node.js', 'REST APIs', 'Microservices', 'Kafka', 'WebSocket'],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    items: ['RAG', 'LLM Integration', 'Amazon Bedrock', 'RAGAS', 'Vector Search', 'Prompt Engineering', 'MCP Protocol'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: '☁️',
    items: ['AWS Lambda', 'S3', 'SQS', 'SNS', 'API Gateway', 'Step Functions', 'Bedrock', 'AWS CDK', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
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
    title: 'Parker – GenAI Chatbot (MCP Streaming)',
    description:
      'Real-time MCP streaming infrastructure for Parker, Amazon\'s internal GenAI assistant serving 500+ users. Eliminated 15–30s frozen UI by implementing AgentCore Gateway\'s enableResponseStreaming for long-running agentic tools.',
    tech: ['Amazon Bedrock', 'MCP Protocol', 'AWS Lambda', 'AgentCore Gateway', 'Python', 'SSE'],
    highlights: ['500+ active users', 'Eliminated frozen UI', 'Zero Lambda code changes'],
  },
  {
    title: 'Federated KB Self-Service Portal',
    description:
      'Full-stack portal enabling cross-org teams to independently contribute documents to Parker KB. Features async pre-signed S3 uploads, real-time ingestion status polling via Step Functions, and role-based access control.',
    tech: ['React', 'TypeScript', 'AWS S3', 'SQS', 'Step Functions', 'DynamoDB', 'AWS CDK'],
    highlights: ['Zero engineering dependency', 'Full document lifecycle', 'RBAC implementation'],
  },
  {
    title: 'RAGAS Evaluation Pipeline',
    description:
      'Automated LLM quality gate pipeline using RAGAS framework with Amazon Nova as critic model. Enforces answer correctness ≥ 0.75 across 30+ queries before every production release of the Parker chatbot.',
    tech: ['RAGAS', 'Amazon Nova', 'Python', 'Amazon Bedrock', 'AWS Lambda'],
    highlights: ['≥0.75 correctness threshold', '30+ evaluation queries', 'Mandatory quality gate'],
  },
  {
    title: 'CI/CD Integration Service – Rheem',
    description:
      'Python service connecting Jenkins CI/CD pipelines to Jama test management via event-driven REST callbacks, cutting manual QA workflow time by 85% and reducing test status update latency by 60%.',
    tech: ['Python', 'Jenkins', 'REST APIs', 'Jama', 'Event-driven Architecture'],
    highlights: ['85% less manual QA time', '60% lower latency', 'Multi-source test data'],
  },
  {
    title: 'Log Ingestion Pipeline – SuperPe',
    description:
      'In-house log ingestion pipeline replacing costly third-party solution. Built end-to-end data flow from CloudWatch through Kinesis Firehose, S3, Glue, to Athena — reducing logging costs by 63%.',
    tech: ['AWS CloudWatch', 'Kinesis Firehose', 'S3', 'Glue', 'Athena'],
    highlights: ['63% cost reduction', 'Sub-second query time', 'Delivered in 3 weeks'],
  },
  {
    title: 'Microservices Platform – Infor',
    description:
      'Resilient microservices architecture with Eureka service registry and Kafka-based transactional outbox pattern guaranteeing reliable event delivery across 5 distributed services during outages.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Eureka', 'Jenkins', 'JUnit'],
    highlights: ['5 distributed services', '30% more test coverage', '40% fewer regressions'],
  },
];
