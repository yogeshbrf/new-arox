/**
 * AROX TECH - Training & Internship Data & Interactive Engine
 * Powers course cards, dynamic category filtering, syllabus drawer modal,
 * and the 4-step registration submission flow.
 */

(function () {
  'use strict';

  // ─────────────────────────────────────────────────────────────
  // 1. DATASETS
  // ─────────────────────────────────────────────────────────────
  const TRAINING_COURSES = [
    {
      id: 'full-stack-web-engineering',
      number: '01',
      category: 'web',
      badge: 'POPULAR',
      badgeColor: '#38BDF8',
      title: 'Full Stack Web Engineering',
      desc: 'Master the modern web stack. Build reactive user interfaces with React & Next.js, and scale asynchronous API backends with Node.js and MongoDB.',
      level: 'Beginner to Advanced',
      duration: '12 Weeks',
      students: '240+',
      highlights: [
        'React 19, Next.js App Router, & TailwindCSS',
        'Node.js & Express RESTful Microservices',
        'PostgreSQL & MongoDB Database Schema Modeling',
        'State Management (Zustand / Redux Toolkit)',
        'CI/CD Deployment to Vercel & AWS Lightsail'
      ],
      techStack: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
      ],
      modules: [
        { title: 'Week 1-3: Modern Web Foundations & TypeScript', desc: 'Semantic HTML5, CSS Grid/Flexbox, JavaScript ES2024, TypeScript typing and tooling.' },
        { title: 'Week 4-6: Advanced React & Next.js Ecosystem', desc: 'Server vs Client Components, App Router, SSR, streaming hydration, and responsive styling.' },
        { title: 'Week 7-9: Backend Services, Auth & Databases', desc: 'Express APIs, JWT token security, Prisma ORM, MongoDB aggregation pipelines, and Redis caching.' },
        { title: 'Week 10-12: Production Capstone & Cloud Deploy', desc: 'Full-featured SaaS platform development, payment gateway integration, Docker containerization, and deployment.' }
      ]
    },
    {
      id: 'python-backend-microservices',
      number: '02',
      category: 'web',
      badge: 'HIGH DEMAND',
      badgeColor: '#34D399',
      title: 'Python Backend & Microservices',
      desc: 'Architect high-throughput backend systems. Design RESTful and asynchronous services with FastAPI and Django, managed by PostgreSQL and Docker.',
      level: 'Project-Based',
      duration: '12 Weeks',
      students: '190+',
      highlights: [
        'FastAPI Asynchronous Endpoints & Pydantic',
        'Django Enterprise Framework & ORM',
        'Relational Schema Design & SQL Optimization',
        'Redis Caching & Celery Background Workers',
        'Unit Testing, PyTest & GitHub Actions CI/CD'
      ],
      techStack: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ],
      modules: [
        { title: 'Week 1-3: Advanced Python & Clean Code', desc: 'Data structures, generators, decorators, async/await event loops, and OOP architectural patterns.' },
        { title: 'Week 4-6: High-Speed APIs with FastAPI', desc: 'Dependency injection, OpenAPI documentation, Pydantic schemas, and authentication with OAuth2.' },
        { title: 'Week 7-9: Relational Databases & ORM Mastery', desc: 'PostgreSQL performance indexing, transactions, Alembic migrations, and SQLAlchemy.' },
        { title: 'Week 10-12: Distributed Queues & Containerization', desc: 'Celery background tasks, Redis message brokers, Docker Compose deployment, and Nginx reverse proxies.' }
      ]
    },
    {
      id: 'data-science-ai-systems',
      number: '03',
      category: 'ai',
      badge: 'FLAGSHIP',
      badgeColor: '#A855F7',
      title: 'Data Science & AI Systems',
      desc: 'Analyze massive datasets, train machine learning models, and engineer custom LLM generative AI agents using Python and PyTorch.',
      level: 'Intermediate to Advanced',
      duration: '16 Weeks',
      students: '210+',
      highlights: [
        'Exploratory Data Analysis with Pandas & NumPy',
        'Supervised & Unsupervised Machine Learning',
        'Deep Learning & Neural Networks with PyTorch',
        'Generative AI, LangChain, & Vector Search',
        'Model Deployment via Docker & FastAPI'
      ],
      techStack: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' }
      ],
      modules: [
        { title: 'Week 1-4: Applied Data Wrangling & Math', desc: 'Linear algebra, statistical testing, multivariate analysis, data cleaning pipelines, and Matplotlib/Seaborn visualization.' },
        { title: 'Week 5-8: Classical Machine Learning', desc: 'Regression, Decision Trees, Random Forests, XGBoost, Cross-validation, and Scikit-Learn pipelines.' },
        { title: 'Week 9-12: Deep Learning & Computer Vision/NLP', desc: 'PyTorch tensors, CNNs, RNNs/LSTMs, Transformers, and transfer learning with Hugging Face.' },
        { title: 'Week 13-16: LLM Agents, RAG & Vector Databases', desc: 'Retrieval Augmented Generation, embeddings with Pinecone/Chroma, LangChain agents, and model serving.' }
      ]
    },
    {
      id: 'cyber-security-pentesting',
      number: '04',
      category: 'security',
      badge: 'HANDS-ON',
      badgeColor: '#EF4444',
      title: 'Cyber Security & Ethical Hacking',
      desc: 'Master defense and offensive security. Audit computer networks, test system vulnerabilities, and implement zero-trust protocols.',
      level: 'Security Labs',
      duration: '14 Weeks',
      students: '130+',
      highlights: [
        'Network Packet Analysis with Wireshark',
        'Penetration Testing with Kali Linux & Metasploit',
        'Web Security Auditing (OWASP Top 10)',
        'Cryptography, PKI, & Identity Management',
        'Linux Server Hardening & Security Policies'
      ],
      techStack: [
        { name: 'Kali Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
        { name: 'Wireshark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/network/network-original.svg' || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ],
      modules: [
        { title: 'Week 1-3: Networking Essentials & Traffic Inspection', desc: 'TCP/IP, subnetting, DNS, routing protocols, firewalls, and Wireshark capture forensics.' },
        { title: 'Week 4-7: Vulnerability Assessment & Pentesting', desc: 'Reconnaissance with Nmap, scanning tools, exploitation frameworks with Metasploit, and Burp Suite.' },
        { title: 'Week 8-10: Web Application Security (OWASP)', desc: 'SQL Injection, XSS, CSRF, insecure deserialization, and authentication bypass mitigations.' },
        { title: 'Week 11-14: SOC Operations & Defensive Hardening', desc: 'SIEM logging, intrusion detection (Snort), cryptography implementations, and compliance audits.' }
      ]
    },
    {
      id: 'cloud-devops-engineering',
      number: '05',
      category: 'cloud',
      badge: 'ENTERPRISE',
      badgeColor: '#F59E0B',
      title: 'Cloud & DevOps Engineering',
      desc: 'Automate build pipelines and deploy resilient infrastructure. Master Amazon Web Services, Docker containers, Kubernetes, and Terraform.',
      level: 'AWS Certified Track',
      duration: '12 Weeks',
      students: '180+',
      highlights: [
        'AWS Architecture (EC2, S3, IAM, VPC, ECS)',
        'Docker Containerization & Multi-Stage Builds',
        'Kubernetes Cluster Orchestration & Pod Scaling',
        'Infrastructure as Code with Terraform',
        'Automated CI/CD Pipelines with GitHub Actions'
      ],
      techStack: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
      ],
      modules: [
        { title: 'Week 1-3: Cloud Fundamentals & Core AWS Services', desc: 'Virtual private clouds, security groups, EC2 instances, S3 storage classes, and IAM least-privilege.' },
        { title: 'Week 4-6: Docker & Modern Container Workflows', desc: 'Writing production Dockerfiles, image caching, container networking, and local Compose orchestration.' },
        { title: 'Week 7-9: Kubernetes Deployment & Scaling', desc: 'Pods, deployments, services, ingress controllers, ConfigMaps, and cluster autoscaling.' },
        { title: 'Week 10-12: Infrastructure as Code & CI/CD', desc: 'Declarative Terraform modules, remote state management, and end-to-end GitHub Actions deployment pipelines.' }
      ]
    },
    {
      id: 'cross-platform-mobile-dev',
      number: '06',
      category: 'mobile',
      badge: 'MOBILE',
      badgeColor: '#EC4899',
      title: 'Cross-Platform Mobile App Dev',
      desc: 'Build fluid native apps for iOS and Android using Flutter & React Native. Integrate offline-first databases, real-time push, and publish to app stores.',
      level: 'App Store Ready',
      duration: '12 Weeks',
      students: '160+',
      highlights: [
        'Flutter & Dart Reactive UI Architecture',
        'React Native & Expo Ecosystem',
        'State Management (Riverpod / Zustand)',
        'Firebase Auth, Cloud Firestore & Push Notifications',
        'App Store & Google Play Release Pipelines'
      ],
      techStack: [
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' }
      ],
      modules: [
        { title: 'Week 1-3: Mobile UI Foundations & Component Trees', desc: 'Widget hierarchies, flexible layouts, typography, navigation stacks, and custom animations.' },
        { title: 'Week 4-6: State Management & Local Storage', desc: 'Riverpod/Provider patterns, SQLite offline caching, secure token storage, and REST consumption.' },
        { title: 'Week 7-9: Native Device Hardware Integration', desc: 'Camera, GPS geolocation, biometric authentication, and background sync services.' },
        { title: 'Week 10-12: Real-time Cloud Services & Release', desc: 'Firebase real-time synchronization, push messaging, code signing, and Play Store submission.' }
      ]
    },
    {
      id: 'ui-ux-product-design',
      number: '07',
      category: 'design',
      badge: 'DESIGN',
      badgeColor: '#F43F5E',
      title: 'UI/UX Product Design & Systems',
      desc: 'Craft intuitive digital experiences. Master Figma auto-layout, design tokens, interactive prototyping, and design-to-code engineering handoffs.',
      level: 'Design Thinking',
      duration: '10 Weeks',
      students: '140+',
      highlights: [
        'Figma Auto-Layout & Component Variants',
        'Design Systems & Global Style Tokens',
        'User Journey Mapping & Wireframing',
        'Micro-Interactions & Interactive Prototypes',
        'Production Handoff with Dev Tokens'
      ],
      techStack: [
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' }
      ],
      modules: [
        { title: 'Week 1-2: UX Research & Information Architecture', desc: 'User personas, card sorting, competitive auditing, and wireframing user flows.' },
        { title: 'Week 3-5: Visual Hierarchy & Figma Mastery', desc: 'Spacing grids, typography scales, contrast ratios, and component variant sets.' },
        { title: 'Week 6-8: Design Systems at Scale', desc: 'Creating design tokens, documentation, accessibility (WCAG) checks, and theme modes.' },
        { title: 'Week 9-10: Prototyping & Developer Handoff', desc: 'Interactive motion prototypes, usability testing, and token export for frontend engineers.' }
      ]
    },
    {
      id: 'embedded-systems-iot',
      number: '08',
      category: 'cloud',
      badge: 'HARDWARE',
      badgeColor: '#0EA5E9',
      title: 'Embedded Systems & IoT Architectures',
      desc: 'Bridge hardware and cloud platforms. Program microcontrollers in C/C++, wire sensors, and telemetry-connect devices to AWS IoT Core.',
      level: 'Hardware + Cloud',
      duration: '12 Weeks',
      students: '90+',
      highlights: [
        'C/C++ Embedded Bare-Metal Programming',
        'Arduino & ESP32 Microcontrollers',
        'Raspberry Pi Linux Edge Computing',
        'MQTT & WebSocket Device Protocols',
        'AWS IoT Core & Real-Time Dashboards'
      ],
      techStack: [
        { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Raspberry Pi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' },
        { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
      ],
      modules: [
        { title: 'Week 1-3: Embedded C & Circuit Foundations', desc: 'Microcontroller architectures, GPIO control, ADC/DAC, interrupts, and serial UART communication.' },
        { title: 'Week 4-6: Sensor Interfacing & SPI/I2C Protocols', desc: 'Interfacing temperature, motion, and environmental sensors with ESP32 microcontrollers.' },
        { title: 'Week 7-9: Edge Computing on Raspberry Pi', desc: 'Embedded Linux, Python hardware interfaces, video stream processing, and local caching.' },
        { title: 'Week 10-12: Cloud Telemetry & AWS IoT Core', desc: 'MQTT secure publish/subscribe, device shadows, rule engines, and cloud analytics dashboards.' }
      ]
    },
    {
      id: 'mern-stack-cloud-engineering',
      number: '09',
      category: 'web',
      badge: 'PROJECT-FIRST',
      badgeColor: '#10B981',
      title: 'MERN Stack Cloud Engineering',
      desc: 'Build scalable full-stack applications with MongoDB, Express, React, and Node.js. Learn JWT authentication, WebSockets, and cloud deployment.',
      level: 'Hands-on Projects',
      duration: '12 Weeks',
      students: '175+',
      highlights: [
        'Full React & Express CRUD Architecture',
        'NoSQL Data Modeling with Mongoose',
        'Real-time Chat with Socket.io',
        'Secure Authentication & Role-Based Access',
        'Automated Deployment & Nginx Reverse Proxy'
      ],
      techStack: [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
      ],
      modules: [
        { title: 'Week 1-3: React Components & Modern Hooks', desc: 'Building responsive interfaces, context state management, and optimized rendering.' },
        { title: 'Week 4-6: Node & Express Backend Architecture', desc: 'Routing, middleware pipelines, error handling, and MongoDB schema design.' },
        { title: 'Week 7-9: Real-time Communication & Security', desc: 'WebSockets, Socket.io bidirectional events, cookie-based sessions, and CORS protection.' },
        { title: 'Week 10-12: Full Stack Production Deployment', desc: 'Building a production ERP dashboard, Dockerization, and cloud server deployment.' }
      ]
    }
  ];

  const INTERNSHIP_TRACKS = [
    {
      id: 'full-stack-internship',
      number: '01',
      category: 'web',
      badge: 'LIVE CLIENT SPRINT',
      badgeColor: '#38BDF8',
      title: 'Full Stack Developer Internship',
      desc: 'Join active client feature sprints. Merge production pull requests, participate in daily standups, and deploy full-stack features using React, Node.js, and SQL.',
      level: '1–6 Months Placement',
      duration: 'Flexible (1-6 Mo)',
      students: '120+ Placed',
      highlights: [
        'Daily Agile Sprints & Pull Request Code Reviews',
        'Enterprise Next.js & Node.js Codebases',
        'Production Database Migrations & Testing',
        'Weekly 1:1 Senior Architect Mentorship',
        'Verified Experience Letter & Recommendations'
      ],
      techStack: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
      ],
      modules: [
        { title: 'Phase 1: Codebase Onboarding & Architecture', desc: 'Setting up local containers, code style guidelines, and shipping your first pull request.' },
        { title: 'Phase 2: Core Feature Implementation', desc: 'Developing authenticated modules, REST endpoints, and responsive client interfaces.' },
        { title: 'Phase 3: Integration & Testing', desc: 'Writing automated test suites, handling edge cases, and conducting performance benchmarks.' },
        { title: 'Phase 4: Client Release & Deployment', desc: 'Deploying approved features to staging and production cloud servers.' }
      ]
    },
    {
      id: 'python-backend-internship',
      number: '02',
      category: 'web',
      badge: 'BACKEND FOCUS',
      badgeColor: '#34D399',
      title: 'Python Backend & API Internship',
      desc: 'Build high-performance backend microservices. Engineer secure RESTful APIs, database transactions, and caching layers for enterprise applications.',
      level: '1–6 Months Placement',
      duration: 'Flexible (1-6 Mo)',
      students: '95+ Placed',
      highlights: [
        'FastAPI & Django Production Services',
        'PostgreSQL Query Tuning & Indexing',
        'Redis Caching & Asynchronous Queue Workers',
        'API Security & OAuth2 Implementations',
        'Official Internship Certificate & Letter'
      ],
      techStack: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ],
      modules: [
        { title: 'Phase 1: Schema Modeling & API Design', desc: 'Defining relational entities, migrations, and clean RESTful API standards.' },
        { title: 'Phase 2: Business Logic & Microservices', desc: 'Developing business logic services, validation routines, and authentication.' },
        { title: 'Phase 3: Optimization & Caching', desc: 'Database indexing, slow-query auditing, and Redis in-memory caching.' },
        { title: 'Phase 4: Production Packaging', desc: 'Packaging microservices with Docker and configuring automated CI pipelines.' }
      ]
    },
    {
      id: 'ai-agent-internship',
      number: '03',
      category: 'ai',
      badge: 'INNOVATION LAB',
      badgeColor: '#A855F7',
      title: 'AI Agent & LLM Engineering Internship',
      desc: 'Build next-generation generative AI solutions. Construct RAG pipelines, manage vector embeddings, and deploy autonomous LLM agents.',
      level: '1–6 Months Placement',
      duration: 'Flexible (1-6 Mo)',
      students: '70+ Placed',
      highlights: [
        'LangChain & LlamaIndex Vector Pipelines',
        'Pinecone & Chroma Vector Database Search',
        'Fine-Tuning & Prompt Optimization Techniques',
        'Enterprise Knowledge Retrieval Implementations',
        'Live Client AI Integration Projects'
      ],
      techStack: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ],
      modules: [
        { title: 'Phase 1: Knowledge Ingestion & Embeddings', desc: 'Ingesting PDFs, databases, and generating dense vector embeddings.' },
        { title: 'Phase 2: RAG Pipeline Construction', desc: 'Implementing similarity search, context compression, and accurate generation.' },
        { title: 'Phase 3: Multi-Agent Coordination', desc: 'Building tool-calling agents with autonomous reasoning capabilities.' },
        { title: 'Phase 4: Evaluation & Model Deployment', desc: 'Benchmarking hallucination rates, latency, and cloud API serving.' }
      ]
    },
    {
      id: 'cloud-devops-internship',
      number: '04',
      category: 'cloud',
      badge: 'INFRASTRUCTURE',
      badgeColor: '#F59E0B',
      title: 'Cloud Infrastructure & DevOps Internship',
      desc: 'Manage live cloud clusters. Automate deployments with GitHub Actions, provision cloud networks with Terraform, and orchestrate containers with Kubernetes.',
      level: '1–6 Months Placement',
      duration: 'Flexible (1-6 Mo)',
      students: '85+ Placed',
      highlights: [
        'AWS Cloud Infrastructure Administration',
        'Docker & Kubernetes Cluster Orchestration',
        'Automated CI/CD Pipeline Configuration',
        'Prometheus & Grafana Monitoring Setups',
        'Verifiable Cloud Experience Credentials'
      ],
      techStack: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
      ],
      modules: [
        { title: 'Phase 1: Cloud Network & IAM Setup', desc: 'Provisioning VPCs, subnets, routing tables, and IAM permission boundaries.' },
        { title: 'Phase 2: Container Pipelines', desc: 'Building automated multi-architecture Docker container build and push pipelines.' },
        { title: 'Phase 3: Kubernetes Orchestration', desc: 'Deploying high-availability pods, ingress TLS certificates, and health probes.' },
        { title: 'Phase 4: Reliability & Monitoring', desc: 'Configuring metrics alerts, log aggregation, and automated zero-downtime rollouts.' }
      ]
    },
    {
      id: 'mobile-app-internship',
      number: '05',
      category: 'mobile',
      badge: 'APP RELEASES',
      badgeColor: '#EC4899',
      title: 'Mobile Application Internship',
      desc: 'Develop client mobile applications for iOS and Android. Implement responsive UI screens, state management, offline sync, and app store deployment.',
      level: '1–6 Months Placement',
      duration: 'Flexible (1-6 Mo)',
      students: '80+ Placed',
      highlights: [
        'Flutter & React Native Cross-Platform Dev',
        'REST & WebSocket Client Implementations',
        'Offline-First Local Database Architecture',
        'Real-time Push Notifications & Analytics',
        'Formal Experience Letter & Recommendation'
      ],
      techStack: [
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' }
      ],
      modules: [
        { title: 'Phase 1: UI Implementation & Navigation', desc: 'Converting design tokens into pixel-perfect mobile screen components.' },
        { title: 'Phase 2: State & API Integration', desc: 'Connecting state providers, managing offline caching, and error states.' },
        { title: 'Phase 3: Testing & Device Profiling', desc: 'Performance profiling, memory leak detection, and device testing.' },
        { title: 'Phase 4: App Store Build & Release', desc: 'Creating signed app bundles and submitting builds to review pipelines.' }
      ]
    },
    {
      id: 'ui-ux-design-internship',
      number: '06',
      category: 'design',
      badge: 'PRODUCT DESIGN',
      badgeColor: '#F43F5E',
      title: 'UI/UX Digital Product Internship',
      desc: 'Design high-fidelity digital products and design systems in Figma. Conduct user research, create interactive wireframes, and hand off specs to engineers.',
      level: '1–6 Months Placement',
      duration: 'Flexible (1-6 Mo)',
      students: '75+ Placed',
      highlights: [
        'Enterprise Design Systems & Style Tokens',
        'High-Fidelity Interactive Wireframing',
        'Usability Audits & User Feedback Synthesis',
        'Developer Specification & Asset Exporting',
        'Client Portfolio Projects & Verifiable Certificate'
      ],
      techStack: [
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ],
      modules: [
        { title: 'Phase 1: Research & Problem Framing', desc: 'Conducting stakeholder interviews, personas, and competitor bench audits.' },
        { title: 'Phase 2: Wireframing & Information Architecture', desc: 'Rapid prototyping user journeys and low-fidelity structural blueprints.' },
        { title: 'Phase 3: High-Fidelity UI & Components', desc: 'Building responsive desktop and mobile design layouts with Figma auto-layout.' },
        { title: 'Phase 4: Design System Handoff', desc: 'Documenting design token variables, states, and developer handoff guidelines.' }
      ]
    }
  ];

  // ─────────────────────────────────────────────────────────────
  // 2. STATE MANAGEMENT
  // ─────────────────────────────────────────────────────────────
  let currentTrackType = 'training'; // Default is Training!
  let currentCategory = 'all';

  // ─────────────────────────────────────────────────────────────
  // 3. RENDER CARDS
  // ─────────────────────────────────────────────────────────────
  function renderCourseCards() {
    const grid = document.getElementById('courses-grid');
    if (!grid) return;

    const sourceData = currentTrackType === 'training' ? TRAINING_COURSES : INTERNSHIP_TRACKS;
    const filtered = sourceData.filter(item => {
      if (currentCategory === 'all') return true;
      return item.category === currentCategory;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-12 text-[var(--muted)]">
          <p class="text-base font-semibold">No programs found in this category.</p>
          <button class="btn-secondary text-xs mt-4" onclick="filterCoursesByCategory('all', null)">View All Programs</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(course => {
      const techPillsHTML = course.techStack.map(t => `
        <span class="tech-icon-pill" title="${t.name}">
          <img src="${t.icon}" alt="${t.name}" onerror="this.style.display='none'" />
          <span>${t.name}</span>
        </span>
      `).join('');

      const highlightsHTML = course.highlights.slice(0, 4).map(h => `
        <div class="syllabus-item-tick">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${h}</span>
        </div>
      `).join('');

      return `
        <div class="course-card-pro group" id="card-${course.id}">
          <div class="card-top-bar" style="background: linear-gradient(90deg, ${course.badgeColor || 'var(--primary)'}, var(--accent))"></div>
          
          <div>
            <!-- Header Row -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-xs font-mono font-extrabold text-[var(--muted)]">${course.number}</span>
              <span class="card-tag-pill" style="color: ${course.badgeColor || 'var(--primary)'}; background: ${course.badgeColor ? course.badgeColor + '18' : 'rgba(56, 189, 248, 0.12)'};">
                ${course.badge}
              </span>
            </div>

            <!-- Title & Description -->
            <h3 class="text-xl font-bold text-[var(--heading)] font-display tracking-tight mb-2 group-hover:text-[var(--primary)] transition-colors">
              ${course.title}
            </h3>
            <p class="text-xs md:text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
              ${course.desc}
            </p>

            <!-- Duration & Level Pills -->
            <div class="flex flex-wrap items-center gap-2 mb-4 text-xs font-semibold">
              <span class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                ${course.level}
              </span>
              <span class="px-2.5 py-1 rounded-full bg-[var(--background)] text-[var(--muted)] border border-[var(--border)]">
                ⏱ ${course.duration}
              </span>
            </div>

            <!-- Tech Stack List -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              ${techPillsHTML}
            </div>

            <!-- Key Curriculum Highlights -->
            <div class="pt-3 border-t border-[var(--border)] mb-5">
              <div class="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)] mb-2">Key Competencies</div>
              ${highlightsHTML}
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="flex items-center gap-2.5 pt-4 border-t border-[var(--border)] mt-auto">
            <button class="btn-secondary text-xs px-3.5 py-2.5 flex-1 text-center justify-center" onclick="openCurriculumModal('${course.id}')">
              View Syllabus
            </button>
            <button class="btn-primary text-xs px-4 py-2.5 flex-1 text-center justify-center font-bold" onclick="openEnrollmentModal('${course.title.replace(/'/g, "\\'")}')">
              Enroll Now &rarr;
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // ─────────────────────────────────────────────────────────────
  // 4. TAB & FILTER CONTROLLERS
  // ─────────────────────────────────────────────────────────────
  window.switchTrackType = function(type) {
    currentTrackType = type;

    const btnTraining = document.getElementById('tab-btn-training');
    const btnIntern = document.getElementById('tab-btn-internship');

    if (type === 'training') {
      btnTraining.classList.add('active');
      btnTraining.setAttribute('aria-selected', 'true');
      btnIntern.classList.remove('active');
      btnIntern.setAttribute('aria-selected', 'false');
    } else {
      btnIntern.classList.add('active');
      btnIntern.setAttribute('aria-selected', 'true');
      btnTraining.classList.remove('active');
      btnTraining.setAttribute('aria-selected', 'false');
    }

    renderCourseCards();
  };

  window.filterCoursesByCategory = function(category, btnEl) {
    currentCategory = category;

    document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
    if (btnEl) {
      btnEl.classList.add('active');
    } else {
      const first = document.querySelector('.category-pill');
      if (first) first.classList.add('active');
    }

    renderCourseCards();
  };

  // ─────────────────────────────────────────────────────────────
  // 5. CURRICULUM SYLLABUS MODAL
  // ─────────────────────────────────────────────────────────────
  window.openCurriculumModal = function(courseId) {
    const allCourses = [...TRAINING_COURSES, ...INTERNSHIP_TRACKS];
    const course = allCourses.find(c => c.id === courseId);
    if (!course) return;

    document.getElementById('curr-modal-badge').textContent = course.badge + ' • ' + course.duration;
    document.getElementById('curr-modal-title').textContent = course.title;
    document.getElementById('curr-modal-desc').textContent = course.desc;

    // Render Modules
    const modulesWrap = document.getElementById('curr-modal-modules');
    modulesWrap.innerHTML = course.modules.map((m, i) => `
      <div class="border border-[var(--border)] rounded-xl p-3.5 bg-[var(--surface)]">
        <div class="font-bold text-xs md:text-sm text-[var(--heading)] flex items-center gap-2">
          <span class="w-5 h-5 rounded-full bg-[var(--primary)] text-white text-[10px] flex items-center justify-center font-mono">${i + 1}</span>
          <span>${m.title}</span>
        </div>
        <p class="text-xs text-[var(--muted)] mt-1.5 leading-relaxed pl-7">${m.desc}</p>
      </div>
    `).join('');

    // Render Tech Stack
    const techWrap = document.getElementById('curr-modal-tech');
    techWrap.innerHTML = course.techStack.map(t => `
      <span class="tech-icon-pill">
        <img src="${t.icon}" alt="${t.name}" onerror="this.style.display='none'" />
        <span>${t.name}</span>
      </span>
    `).join('');

    // Wire Enroll Button
    const enrollBtn = document.getElementById('curr-modal-enroll-btn');
    enrollBtn.onclick = () => {
      closeCurriculumModal();
      openEnrollmentModal(course.title);
    };

    document.getElementById('curriculumModalBackdrop').classList.add('open');
  };

  window.closeCurriculumModal = function() {
    document.getElementById('curriculumModalBackdrop').classList.remove('open');
  };

  // ─────────────────────────────────────────────────────────────
  // 6. 4-STEP ENROLLMENT / REGISTRATION MODAL
  // ─────────────────────────────────────────────────────────────
  let currentStep = 1;
  let selectedCourseName = 'Full Stack Web Engineering';

  window.openEnrollmentModal = function(courseName) {
    selectedCourseName = courseName || 'Full Stack Web Engineering';
    document.getElementById('reg-selected-program').value = selectedCourseName;

    // Set default preferred date to next Monday
    const today = new Date();
    today.setDate(today.getDate() + 7);
    const dateInput = document.getElementById('reg-start-date');
    if (dateInput && !dateInput.value) {
      dateInput.value = today.toISOString().split('T')[0];
    }

    setEnrollmentStep(1);
    document.getElementById('registrationModalBackdrop').classList.add('open');
  };

  window.closeEnrollmentModal = function() {
    document.getElementById('registrationModalBackdrop').classList.remove('open');
  };

  function setEnrollmentStep(step) {
    currentStep = step;

    // Toggle views
    for (let i = 1; i <= 4; i++) {
      const stepEl = document.getElementById(`reg-step-${i}`);
      if (stepEl) {
        if (i === step) stepEl.classList.remove('hidden');
        else stepEl.classList.add('hidden');
      }
    }
    document.getElementById('reg-step-success').classList.add('hidden');
    document.getElementById('reg-nav-actions').classList.remove('hidden');

    // Indicator & progress bar
    document.getElementById('reg-modal-step-indicator').textContent = `Step ${step} of 4`;
    document.getElementById('reg-progress-fill').style.width = `${step * 25}%`;

    // Back button visibility
    const backBtn = document.getElementById('reg-btn-back');
    if (step === 1) backBtn.classList.add('invisible');
    else backBtn.classList.remove('invisible');

    // Next button label
    const nextBtn = document.getElementById('reg-btn-next');
    if (step === 4) {
      nextBtn.textContent = 'Submit Registration ✓';
      // Populate review screen
      document.getElementById('rev-name').textContent = document.getElementById('reg-name').value;
      document.getElementById('rev-email').textContent = document.getElementById('reg-email').value;
      document.getElementById('rev-phone').textContent = document.getElementById('reg-phone').value;
      document.getElementById('rev-college').textContent = document.getElementById('reg-college').value;
      document.getElementById('rev-program').textContent = selectedCourseName;
      document.getElementById('rev-date').textContent = document.getElementById('reg-start-date').value;
    } else {
      nextBtn.textContent = 'Next →';
    }
  }

  window.navigateEnrollmentStep = async function(dir) {
    if (dir === -1) {
      if (currentStep > 1) setEnrollmentStep(currentStep - 1);
      return;
    }

    // Validation per step
    if (currentStep === 1) {
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const phone = document.getElementById('reg-phone').value.trim();

      let valid = true;
      if (!name) { document.getElementById('err-name').classList.remove('hidden'); valid = false; }
      else document.getElementById('err-name').classList.add('hidden');

      if (!email || !email.includes('@')) { document.getElementById('err-email').classList.remove('hidden'); valid = false; }
      else document.getElementById('err-email').classList.add('hidden');

      if (!phone || phone.length < 10) { document.getElementById('err-phone').classList.remove('hidden'); valid = false; }
      else document.getElementById('err-phone').classList.add('hidden');

      if (!valid) return;
      setEnrollmentStep(2);
      return;
    }

    if (currentStep === 2) {
      const college = document.getElementById('reg-college').value.trim();
      if (!college) {
        document.getElementById('err-college').classList.remove('hidden');
        return;
      }
      document.getElementById('err-college').classList.add('hidden');
      setEnrollmentStep(3);
      return;
    }

    if (currentStep === 3) {
      setEnrollmentStep(4);
      return;
    }

    if (currentStep === 4) {
      const agree = document.getElementById('reg-agree').checked;
      if (!agree) {
        document.getElementById('err-agree').classList.remove('hidden');
        return;
      }
      document.getElementById('err-agree').classList.add('hidden');

      // Submit registration
      const nextBtn = document.getElementById('reg-btn-next');
      nextBtn.disabled = true;
      nextBtn.textContent = 'Submitting...';

      const fullName = document.getElementById('reg-name').value.trim();
      const nameParts = fullName.split(' ');
      const firstName = nameParts[0] || fullName;
      const lastName = nameParts.slice(1).join(' ') || firstName;

      const randomId = 'AROX-2026-' + Math.floor(10000 + Math.random() * 90000);

      try {
        const payload = new FormData();
        payload.append('first_name', firstName);
        payload.append('last_name', lastName);
        payload.append('email', document.getElementById('reg-email').value.trim());
        payload.append('phone', document.getElementById('reg-phone').value.trim());
        payload.append('gender', document.getElementById('reg-gender').value);
        payload.append('college', document.getElementById('reg-college').value.trim());
        payload.append('degree', document.getElementById('reg-degree').value);
        payload.append('department', document.getElementById('reg-dept').value.trim());
        payload.append('graduation_year', document.getElementById('reg-grad-year').value);
        payload.append('course', selectedCourseName);
        payload.append('course_duration', document.getElementById('reg-duration').value);
        payload.append('course_start_date', document.getElementById('reg-start-date').value);

        const res = await fetch('/api/registrations/apply', {
          method: 'POST',
          body: payload
        });
        const data = await res.json();
        const studentId = (data && data.data && data.data.studentId) ? data.data.studentId : randomId;

        document.getElementById('success-reg-id').textContent = studentId;
      } catch (err) {
        document.getElementById('success-reg-id').textContent = randomId;
      }

      // Show success screen
      for (let i = 1; i <= 4; i++) {
        document.getElementById(`reg-step-${i}`).classList.add('hidden');
      }
      document.getElementById('reg-nav-actions').classList.add('hidden');
      document.getElementById('reg-step-success').classList.remove('hidden');
      document.getElementById('reg-modal-step-indicator').textContent = 'Completed';
      document.getElementById('reg-progress-fill').style.width = '100%';
      nextBtn.disabled = false;
    }
  };

  // ─────────────────────────────────────────────────────────────
  // 7. FAQ ACCORDION
  // ─────────────────────────────────────────────────────────────
  window.toggleFaq = function(btn) {
    const answer = btn.nextElementSibling;
    const arrow = btn.querySelector('svg');
    if (!answer) return;

    if (answer.classList.contains('hidden')) {
      answer.classList.remove('hidden');
      if (arrow) arrow.style.transform = 'rotate(180deg)';
    } else {
      answer.classList.add('hidden');
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    }
  };

  // Close modals on overlay backdrop click
  document.addEventListener('click', (e) => {
    if (e.target.id === 'curriculumModalBackdrop') closeCurriculumModal();
    if (e.target.id === 'registrationModalBackdrop') closeEnrollmentModal();
  });

  // Check URL params for ?tab=internship or ?tab=training
  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam === 'internship') {
      switchTrackType('internship');
    } else {
      switchTrackType('training');
    }
  });

})();
