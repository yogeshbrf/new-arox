/**
 * AROX TECH - Comprehensive Course Details Dataset
 * Contains rich curriculum, interactive module topics, real-time projects,
 * student testimonials, and domain-specific FAQs for all courses and internships.
 */

const deviconMap = {
    'HTML5': 'html5/html5-original.svg',
    'CSS3': 'css3/css3-original.svg',
    'JavaScript': 'javascript/javascript-original.svg',
    'JS': 'javascript/javascript-original.svg',
    'TypeScript': 'typescript/typescript-original.svg',
    'TS': 'typescript/typescript-original.svg',
    'React': 'react/react-original.svg',
    'Node': 'nodejs/nodejs-original.svg',
    'Node.js': 'nodejs/nodejs-original.svg',
    'MongoDB': 'mongodb/mongodb-original.svg',
    'Git': 'git/git-original.svg',
    'Figma': 'figma/figma-original.svg',
    'Sketch': 'sketch/sketch-original.svg',
    'Adobe XD': 'xd/xd-plain.svg',
    'Photoshop': 'photoshop/photoshop-original.svg',
    'Illustrator': 'illustrator/illustrator-plain.svg',
    'Python': 'python/python-original.svg',
    'R': 'r/r-original.svg',
    'SQL': 'mysql/mysql-original.svg',
    'Pandas': 'pandas/pandas-original.svg',
    'TensorFlow': 'tensorflow/tensorflow-original.svg',
    'Kali Linux': 'linux/linux-original.svg',
    'Wireshark': 'wireshark/wireshark-original.svg',
    'Metasploit': 'linux/linux-original.svg',
    'Bash': 'bash/bash-original.svg',
    'Google Ads': 'google/google-original.svg',
    'Meta Ads': 'facebook/facebook-original.svg',
    'Analytics': 'google/google-original.svg',
    'WordPress': 'wordpress/wordpress-plain.svg',
    'Mailchimp': 'mailchimp/mailchimp-original.svg',
    'C/C++': 'cplusplus/cplusplus-original.svg',
    'C++': 'cplusplus/cplusplus-original.svg',
    'Raspberry Pi': 'raspberrypi/raspberrypi-original.svg',
    'Arduino': 'arduino/arduino-original.svg',
    'AWS IoT': 'amazonwebservices/amazonwebservices-original.svg',
    'Docker': 'docker/docker-original.svg',
    'Kubernetes': 'kubernetes/kubernetes-plain.svg',
    'Jenkins': 'jenkins/jenkins-original.svg',
    'AWS': 'amazonwebservices/amazonwebservices-original.svg',
    'Java': 'java/java-original.svg',
    'Spring Boot': 'spring/spring-original.svg',
    'Spring': 'spring/spring-original.svg',
    'React Native': 'react/react-original.svg',
    'Flutter': 'flutter/flutter-original.svg',
    'Swift': 'swift/swift-original.svg',
    'Android': 'android/android-original.svg',
    'Firebase': 'firebase/firebase-plain.svg',
    'Django': 'django/django-plain.svg',
    'FastAPI': 'fastapi/fastapi-original.svg',
    'PostgreSQL': 'postgresql/postgresql-original.svg',
    'Redis': 'redis/redis-original.svg',
    'Next.js': 'nextjs/nextjs-original.svg',
    'Express': 'express/express-original.svg',
    'PyTorch': 'pytorch/pytorch-original.svg',
    'NumPy': 'numpy/numpy-original.svg',
    'Terraform': 'terraform/terraform-original.svg',
    'Dart': 'dart/dart-original.svg'
};

const coursesData = [
    // ══════════════════════════════════════════════════════════════════
    // 1. TRAINING COURSES (from flipCards in courses.html)
    // ══════════════════════════════════════════════════════════════════
    {
        slug: 'full-stack-web-development',
        id: 'full-stack-web-development',
        title: 'Full Stack Web Development',
        category: 'Development',
        badge: 'DEV PROGRAM',
        heroAccent: 'Full Stack Developer',
        desc: 'Engineer modern responsive web platforms using React, Node.js, databases, and continuous cloud deployment.',
        heroFeatures: [
            'Live Production Projects',
            'Full Stack Architecture',
            'Industry Mentorship',
            'MERN & Next.js Stack',
            'Portfolio & GitHub Reviews',
            'Job Placement Support'
        ],
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
        topics: [
            {
                title: 'HTML5, CSS3, & Modern UI Layouts',
                tool: 'HTML5',
                desc: 'Master semantic web structure, responsive layout design, CSS Flexbox & Grid, dynamic CSS variables, and fluid keyframe animations.',
                points: [
                    'Semantic HTML5 structure & accessibility standards (WCAG)',
                    'Responsive mobile-first layouts with Flexbox & CSS Grid',
                    'Custom design tokens, theme variables & dark mode systems',
                    'CSS keyframe animations, smooth micro-interactions & SVG styling'
                ],
                practicalLab: 'Build a high-performance responsive web portal with smooth animations and theme toggle.'
            },
            {
                title: 'React & Next.js Frameworks',
                tool: 'React',
                desc: 'Build reactive single-page applications and server-rendered web platforms using React Hooks and Next.js App Router.',
                points: [
                    'React Hooks (useState, useEffect, useMemo, useCallback, useRef)',
                    'Component lifecycle, state management, and reusable UI libraries',
                    'Next.js Server Side Rendering (SSR) & Static Site Generation (SSG)',
                    'Client vs Server Components and optimized data streaming'
                ],
                practicalLab: 'Develop an interactive e-commerce product catalog with real-time cart state management.'
            },
            {
                title: 'Node.js & Express API Backend',
                tool: 'Node.js',
                desc: 'Engineer fast asynchronous RESTful APIs, authentication middleware, and microservices using Node.js and Express.',
                points: [
                    'Node.js Event Loop & Non-blocking asynchronous I/O architecture',
                    'Express REST API routing, rate-limiting & custom middleware stack',
                    'JWT Authentication, Bcrypt password hashing & security headers',
                    'Robust error handling, input validation & structured request logging'
                ],
                practicalLab: 'Create a secure multi-tenant backend API with JWT authentication and role-based access control.'
            },
            {
                title: 'Database Modeling & Design',
                tool: 'MongoDB',
                desc: 'Design scalable document schemas, optimize indexes, and execute complex aggregation queries in MongoDB.',
                points: [
                    'MongoDB document schemas & Mongoose ORM data modeling',
                    'Data indexing strategies and query performance optimization',
                    'Aggregation pipelines, grouping, pagination, and multi-collection lookups',
                    'ACID transactions, data validation rules, and schema migrations'
                ],
                practicalLab: 'Design a high-volume analytics database schema with Mongoose aggregation pipelines.'
            },
            {
                title: 'Git Version Control & Deployment',
                tool: 'Git',
                desc: 'Orchestrate Git version control workflows and deploy full stack web apps to production cloud platforms.',
                points: [
                    'Git branching workflows, merge conflict resolution & pull request reviews',
                    'Continuous integration & deployment (CI/CD) pipelines',
                    'Production environment configuration & secret management',
                    'Cloud deployment to Vercel, Render, Docker & custom domain SSL'
                ],
                practicalLab: 'Deploy a full-stack MERN application live on cloud servers with automated CI/CD deployment.'
            }
        ],
        projects: [
            {
                title: 'E-Commerce Marketplace',
                subtitle: 'Full Stack Web Platform',
                icon: 'fa-solid fa-cart-shopping',
                iconColor: '#5d4cf7',
                desc: 'End-to-end shopping platform with product filtering, dynamic cart state, Stripe checkout, and admin dashboard.',
                tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
            },
            {
                title: 'Real-Time Team Chat',
                subtitle: 'WebSocket Application',
                icon: 'fa-solid fa-comment-dots',
                iconColor: '#10b981',
                desc: 'Instant messaging platform supporting channels, direct messages, read receipts, and file attachments.',
                tags: ['Socket.io', 'Express', 'React', 'Tailwind']
            },
            {
                title: 'SaaS Billing & Analytics',
                subtitle: 'Enterprise Dashboard',
                icon: 'fa-solid fa-chart-line',
                iconColor: '#3b82f6',
                desc: 'Subscription billing dashboard with interactive charts, invoice generation, and customer management.',
                tags: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js']
            },
            {
                title: 'Interactive Portfolio Portal',
                subtitle: 'Creative Web Experience',
                icon: 'fa-solid fa-laptop-code',
                iconColor: '#f97316',
                desc: 'Dynamic interactive developer showcase featuring smooth GSAP animations, 3D elements, and contact handling.',
                tags: ['HTML5', 'GSAP', 'CSS3', 'JavaScript']
            }
        ],
        reviews: [
            {
                name: 'Aravind K.',
                role: 'Full Stack Trainee',
                initials: 'AK',
                quote: 'The AROX Tech training gave me real-world experience and confidence to build live full-stack applications from scratch.',
                stars: 5
            },
            {
                name: 'Kaviya S.',
                role: 'Frontend Trainee',
                initials: 'KS',
                quote: 'The mentors are super supportive and building the Next.js e-commerce project significantly boosted my placement prospects.',
                stars: 5
            },
            {
                name: 'Vignesh R.',
                role: 'Backend Trainee',
                initials: 'VR',
                quote: 'Best training program I have taken. Learned clean REST API architecture, JWT authentication, and MongoDB indexing.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What is the duration of this training program?',
                a: 'The Full Stack Web Development program is 12 weeks long (approx. 3 months) covering both frontend and backend modules with dedicated project sprints.'
            },
            {
                q: 'Do I need prior coding experience to join?',
                a: 'Basic knowledge of HTML and JavaScript is beneficial, but the course starts from foundations and rapidly scales to advanced frameworks.'
            },
            {
                q: 'Will I work on live production projects?',
                a: 'Yes, you will develop 4 comprehensive live projects including an e-commerce platform and a real-time messaging application.'
            },
            {
                q: 'Do you provide job placement guidance?',
                a: 'Yes! We conduct resume building, mock technical interviews, GitHub portfolio polishing, and refer top trainees to our hiring partners.'
            },
            {
                q: 'Will I receive a verified certificate upon completion?',
                a: 'Yes, upon completing all modules and project evaluations, you will receive an industry-recognized certificate of completion from AROX Tech.'
            }
        ]
    },

    {
        slug: 'ui-ux-designing',
        id: 'ui-ux-designing',
        title: 'UI & UX Designing',
        category: 'Creative',
        badge: 'DESIGN PROGRAM',
        heroAccent: 'UI/UX Product Designer',
        desc: 'Master Figma, design thinking, visual hierarchy, auto-layouts, high-fidelity wireframes, and interactive product prototypes.',
        heroFeatures: [
            'Advanced Figma Systems',
            'User Research & Personas',
            'Interactive Prototyping',
            'Design Token Architecture',
            'Design Portfolio Reviews',
            'Developer Handoff Mastery'
        ],
        techStack: ['Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator'],
        topics: [
            {
                title: 'Design Systems & Figma Components',
                tool: 'Figma',
                desc: 'Create scalable design systems with atomic design principles, nested variants, component properties, and variable color tokens.',
                points: [
                    'Atomic design principles and structured component hierarchies',
                    'Figma Auto-Layout 5.0, constraints, and dynamic responsive frames',
                    'Variables for light/dark modes, spatial spacing, and typography tokens',
                    'Interactive component states (hover, pressed, disabled, error)'
                ],
                practicalLab: 'Build a production-ready design system with 25+ reusable UI components in Figma.'
            },
            {
                title: 'User Persona & UX Research',
                tool: 'Sketch',
                desc: 'Conduct empathy mapping, user interview synthesis, journey mapping, and competitive analysis to solve real user friction points.',
                points: [
                    'Qualitative and quantitative user research methodologies',
                    'Constructing actionable user personas and user journey maps',
                    'Information architecture (IA), site mapping, and card sorting',
                    'Identifying friction points and formulating UX hypothesis'
                ],
                practicalLab: 'Conduct user research and compile a complete UX discovery case study for a healthcare app.'
            },
            {
                title: 'Interactive Prototyping & Flow',
                tool: 'Figma',
                desc: 'Build high-fidelity micro-interactions, smart animations, complex conditional flows, and interactive prototypes for usability testing.',
                points: [
                    'Figma Smart Animate, interactive delays, and spring easing curves',
                    'Conditional prototyping with variables and expression logic',
                    'Mobile gestures (drag, swipe, pinch) and sticky modal overlays',
                    'Remote usability test recording and user behavior feedback loops'
                ],
                practicalLab: 'Create an interactive mobile banking app prototype with micro-interactions and smart animations.'
            },
            {
                title: 'Visual Hierarchy & Layouts',
                tool: 'Adobe XD',
                desc: 'Apply modern typography scales, contrast accessibility, color theory, 8pt grid systems, and glassmorphism styling.',
                points: [
                    '8pt / 4pt grid systems and responsive column layouts',
                    'Modern typography pairings, optical sizing, and line height rhythm',
                    'Curated color palettes, dark mode balance, and WCAG AA compliance',
                    'Visual balance, depth layering, glassmorphism, and elevation shadows'
                ],
                practicalLab: 'Design a clean SaaS web app interface complying with WCAG AA accessibility standards.'
            },
            {
                title: 'Developer Handoff Best Practices',
                tool: 'Illustrator',
                desc: 'Prepare design specifications, asset exports, design tokens, and CSS properties for seamless frontend engineer collaboration.',
                points: [
                    'Figma Dev Mode inspection and CSS property extraction',
                    'SVG icon optimization, raster sprite management, and vector exports',
                    'Annotating spacing, interactions, and responsive breakpoint rules',
                    'Collaborative design reviews and QA inspection with engineers'
                ],
                practicalLab: 'Create a comprehensive design handoff specification deck for a production engineering team.'
            }
        ],
        projects: [
            {
                title: 'FinTech Mobile Banking App',
                subtitle: 'iOS / Android UX Design',
                icon: 'fa-solid fa-wallet',
                iconColor: '#10b981',
                desc: 'Full-featured mobile wallet experience with biometric auth, peer-to-peer transfers, and interactive expense analytics.',
                tags: ['Figma', 'Mobile UX', 'Micro-Interactions']
            },
            {
                title: 'Enterprise SaaS Dashboard',
                subtitle: 'Web Application UI',
                icon: 'fa-solid fa-table-columns',
                iconColor: '#5d4cf7',
                desc: 'Complex data management portal with customizable widgets, table filtering, dark mode, and responsive layouts.',
                tags: ['Design System', 'Auto-Layout', 'Dark Mode']
            },
            {
                title: 'Healthcare Patient Portal',
                subtitle: 'Web & Tablet UX',
                icon: 'fa-solid fa-heart-pulse',
                iconColor: '#ec4899',
                desc: 'Accessible doctor appointment scheduling and telehealth interface optimized for usability and clarity.',
                tags: ['Accessibility', 'User Journey', 'Wireframing']
            },
            {
                title: 'Design System & UI Kit',
                subtitle: 'Tokenized Component Library',
                icon: 'fa-solid fa-cubes',
                iconColor: '#f59e0b',
                desc: 'Scalable design system with 50+ components, typography scales, dynamic variables, and documentation.',
                tags: ['Figma Tokens', 'Variables', 'Atomic Design']
            }
        ],
        reviews: [
            {
                name: 'Sneha M.',
                role: 'UI/UX Trainee',
                initials: 'SM',
                quote: 'The design system and Figma auto-layout modules completely upgraded the quality of my design portfolio.',
                stars: 5
            },
            {
                name: 'Gautam P.',
                role: 'Product Designer',
                initials: 'GP',
                quote: 'Learning how to communicate with developers using Figma Dev Mode made me stand out in my design interviews.',
                stars: 5
            },
            {
                name: 'Ananya R.',
                role: 'UX Researcher',
                initials: 'AR',
                quote: 'Loved the hands-on case study approach. The mentorship gave me clear direction on user-centered thinking.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'Do I need drawing or graphic art skills to join UI/UX?',
                a: 'No! UI/UX design is about digital problem-solving, layout psychology, and user interfaces, not freehand sketching.'
            },
            {
                q: 'What software will we use during the course?',
                a: 'Figma is the primary industry tool used, along with Sketch, Adobe XD, Photoshop, and Illustrator for assets.'
            },
            {
                q: 'Will I have a finished portfolio by the end of the course?',
                a: 'Yes, you will complete two in-depth case studies and a comprehensive UI design system ready for your Behance/Notion portfolio.'
            },
            {
                q: 'Is this training suitable for career switchers?',
                a: 'Absolutely! Our curriculum is designed from fundamental layout principles to advanced interaction design.'
            },
            {
                q: 'Are the sessions hands-on?',
                a: 'Yes, every module includes live practical labs, interactive critique sessions, and mentor feedback on your designs.'
            }
        ]
    },

    {
        slug: 'data-science-and-ai',
        id: 'data-science-and-ai',
        title: 'Data Science & AI',
        category: 'Data',
        badge: 'DATA & AI PROGRAM',
        heroAccent: 'Data Scientist & AI Specialist',
        desc: 'Analyze big data, train predictive machine learning models, and build cutting-edge generative AI systems with Python and PyTorch.',
        heroFeatures: [
            'Python & Pandas Analytics',
            'Supervised & Unsupervised ML',
            'Deep Neural Networks',
            'Generative AI & LLMs',
            'SQL Data Modeling',
            'End-to-End Model Deploy'
        ],
        techStack: ['Python', 'Pandas', 'TensorFlow', 'SQL', 'R'],
        topics: [
            {
                title: 'Data Analysis with Python & Pandas',
                tool: 'Python',
                desc: 'Process, clean, and manipulate massive datasets using NumPy arrays, Pandas DataFrames, and statistical data aggregation.',
                points: [
                    'NumPy vectorized operations and matrix computing',
                    'Data cleaning, missing value imputation, and anomaly detection',
                    'Grouping, merging, pivot tables, and multi-index DataFrames in Pandas',
                    'Exploratory Data Analysis (EDA) and statistical distributions'
                ],
                practicalLab: 'Clean, normalize, and analyze a 500k-row global sales dataset with automated reporting.'
            },
            {
                title: 'SQL Querying & Database Management',
                tool: 'SQL',
                desc: 'Write high-performance relational queries, window functions, CTEs, and aggregation pipelines for enterprise databases.',
                points: [
                    'Relational database architecture & normalization standards',
                    'Complex multi-table JOINs, subqueries, and Common Table Expressions (CTEs)',
                    'Analytical window functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)',
                    'Database query optimization, indexing strategies, and execution plans'
                ],
                practicalLab: 'Develop a high-performance business intelligence SQL schema with advanced analytical window queries.'
            },
            {
                title: 'Exploratory Data Visualization',
                tool: 'Pandas',
                desc: 'Translate complex datasets into intuitive interactive visual charts and executive dashboards using Matplotlib, Seaborn, and Plotly.',
                points: [
                    'Visual storytelling principles and chart selection strategies',
                    'Correlation heatmaps, violin plots, and feature distribution curves',
                    'Interactive multi-filter dashboard construction with Plotly',
                    'Exporting insights for executive and engineering stakeholders'
                ],
                practicalLab: 'Build an interactive multi-dimensional data visualization dashboard for financial trend analytics.'
            },
            {
                title: 'Machine Learning Algorithms',
                tool: 'TensorFlow',
                desc: 'Train, evaluate, and tune predictive machine learning models using Scikit-Learn for classification, regression, and clustering.',
                points: [
                    'Linear/Logistic Regression, Decision Trees, and Random Forests',
                    'Gradient boosting algorithms (XGBoost, LightGBM, CatBoost)',
                    'Hyperparameter tuning with GridSearchCV and cross-validation',
                    'Model performance evaluation: ROC-AUC, precision, recall, and F1-score'
                ],
                practicalLab: 'Train an ensemble churn prediction model achieving over 92% classification accuracy.'
            },
            {
                title: 'Deep Learning & AI Integration',
                tool: 'TensorFlow',
                desc: 'Architect neural networks, convolutional networks, transformers, and integrate generative LLMs into production APIs.',
                points: [
                    'Feedforward neural networks, backpropagation, and loss functions',
                    'Computer vision with CNNs and natural language processing with Transformers',
                    'Large Language Model (LLM) fine-tuning and RAG vector search pipelines',
                    'Deploying machine learning models as REST endpoints with FastAPI'
                ],
                practicalLab: 'Deploy a custom RAG AI assistant answering queries over enterprise documentation.'
            }
        ],
        projects: [
            {
                title: 'Customer Churn Prediction Engine',
                subtitle: 'Machine Learning Classification',
                icon: 'fa-solid fa-users-slash',
                iconColor: '#ef4444',
                desc: 'Predictive ensemble model identifying high-risk churn customers with feature importance interpretability.',
                tags: ['Python', 'XGBoost', 'Scikit-Learn', 'SHAP']
            },
            {
                title: 'Enterprise RAG AI Assistant',
                subtitle: 'Generative AI & LLM',
                icon: 'fa-solid fa-brain',
                iconColor: '#8b5cf6',
                desc: 'Semantic search and question-answering assistant indexing enterprise PDF documents using vector embeddings.',
                tags: ['LangChain', 'FastAPI', 'ChromaDB', 'OpenAI']
            },
            {
                title: 'Financial Market Forecasting',
                subtitle: 'Time-Series Analysis',
                icon: 'fa-solid fa-chart-candlestick',
                iconColor: '#10b981',
                desc: 'Deep learning time-series model predicting stock market volatility trends with rolling sentiment analysis.',
                tags: ['TensorFlow', 'Pandas', 'Plotly', 'LSTM']
            },
            {
                title: 'Automated BI Analytics Dashboard',
                subtitle: 'Business Intelligence System',
                icon: 'fa-solid fa-gauge-high',
                iconColor: '#3b82f6',
                desc: 'Automated executive metrics dashboard generating real-time SQL aggregation insights and revenue trends.',
                tags: ['SQL', 'Streamlit', 'PostgreSQL', 'Seaborn']
            }
        ],
        reviews: [
            {
                name: 'Karthik N.',
                role: 'Data Science Trainee',
                initials: 'KN',
                quote: 'The balance between statistics and modern machine learning gave me the technical edge in interviews.',
                stars: 5
            },
            {
                name: 'Divya M.',
                role: 'AI Engineer',
                initials: 'DM',
                quote: 'Building the RAG vector pipeline was the highlight of the course. Practical, state-of-the-art training!',
                stars: 5
            },
            {
                name: 'Rahul S.',
                role: 'BI Analyst',
                initials: 'RS',
                quote: 'The SQL window functions and Pandas modules made data manipulation second nature for me.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What mathematics background is required for this course?',
                a: 'Basic knowledge of high school algebra and basic probability is sufficient. We cover applied statistics step by step.'
            },
            {
                q: 'Do we learn Generative AI and LLMs?',
                a: 'Yes, modern modules cover Transformers, LangChain, vector databases, and building production RAG pipelines.'
            },
            {
                q: 'Are projects trained on real-world datasets?',
                a: 'Yes, all projects use authentic industry datasets from e-commerce, banking, and healthcare domains.'
            },
            {
                q: 'Will we learn how to deploy AI models?',
                a: 'Yes, you will learn to wrap models inside FastAPI endpoints and containerize them using Docker.'
            },
            {
                q: 'Do you help with placements in Data & AI?',
                a: 'Yes, we provide interview preparation for Data Analyst, Data Scientist, and Junior AI Engineer roles.'
            }
        ]
    },

    {
        slug: 'cyber-security',
        id: 'cyber-security',
        title: 'Cyber Security',
        category: 'Security',
        badge: 'SECURITY PROGRAM',
        heroAccent: 'Cyber Security Specialist',
        desc: 'Ethically hack, audit network traffic, secure infrastructure, execute penetration tests, and design enterprise security policies.',
        heroFeatures: [
            'Ethical Hacking Labs',
            'Network Sniffing & Auditing',
            'Vulnerability Scanning',
            'Web Application Security',
            'Cryptography & Firewalls',
            'Incident Response Protocols'
        ],
        techStack: ['Kali Linux', 'Wireshark', 'Metasploit', 'Python', 'Bash'],
        topics: [
            {
                title: 'Network Auditing & Wireshark Analysis',
                tool: 'Wireshark',
                desc: 'Inspect packets, analyze network protocols (TCP/IP, DNS, ARP), and detect malicious traffic anomalies in real time.',
                points: [
                    'TCP/IP stack internals, three-way handshakes, and subnet routing',
                    'Packet capture analysis with Wireshark and BPF filters',
                    'Detecting ARP spoofing, DNS cache poisoning, and SYN floods',
                    'Network reconnaissance using Nmap port scanning strategies'
                ],
                practicalLab: 'Capture and analyze live network traffic to identify rogue hosts and insecure unencrypted credentials.'
            },
            {
                title: 'Pentesting with Kali Linux & Metasploit',
                tool: 'Kali Linux',
                desc: 'Master Kali Linux pentesting tools, vulnerability scanning, exploit payloads, and privilege escalation techniques.',
                points: [
                    'Penetration testing methodologies (OSSTMM, OWASP, NIST)',
                    'Metasploit framework: exploits, payloads, auxiliaries, and encoders',
                    'Password cracking with John the Ripper and Hashcat',
                    'Privilege escalation on Linux and Windows target hosts'
                ],
                practicalLab: 'Execute an authorized penetration test on a vulnerable test server and compile an executive audit report.'
            },
            {
                title: 'System & Server Hardening',
                tool: 'Metasploit',
                desc: 'Implement OS hardening, firewall rules, SSH security policies, and identity access control to block intrusions.',
                points: [
                    'Linux server security hardening and CIS benchmarks',
                    'Configuring UFW / iptables firewalls and fail2ban intrusion prevention',
                    'SSH key hardening, disabling root access, and port knocking',
                    'Audit logging with Syslog and SIEM log monitoring'
                ],
                practicalLab: 'Harden a public-facing cloud Linux server against brute-force and port scanning attacks.'
            },
            {
                title: 'Cryptography Foundations',
                tool: 'Python',
                desc: 'Master symmetric and asymmetric encryption, hashing algorithms, SSL/TLS handshakes, and public key infrastructure (PKI).',
                points: [
                    'Symmetric (AES) vs Asymmetric (RSA, ECC) cryptographic systems',
                    'Cryptographic hashing functions (SHA-256, bcrypt) and salt generation',
                    'Public Key Infrastructure (PKI), digital certificates, and TLS 1.3',
                    'Preventing cryptographic vulnerabilities and replay attacks'
                ],
                practicalLab: 'Develop a secure file encryption tool utilizing AES-256 and digital signature verification.'
            },
            {
                title: 'Security Scripting with Python & Bash',
                tool: 'Bash',
                desc: 'Automate vulnerability discovery, port scanning, log parsing, and security workflows using Python and Bash scripts.',
                points: [
                    'Automating Nmap scans and parsing output with Python scripts',
                    'Building custom port scanners, banner grabbers, and brute-force tools',
                    'Bash automation for scheduled backup verification and log audits',
                    'Incident response automation and alert dispatching'
                ],
                practicalLab: 'Build an automated vulnerability scanner that emails instant alerts upon detecting open vulnerable ports.'
            }
        ],
        projects: [
            {
                title: 'Network Packet Sniffer & Analyzer',
                subtitle: 'Network Defense Tool',
                icon: 'fa-solid fa-shield-halved',
                iconColor: '#3b82f6',
                desc: 'Real-time packet inspection tool detecting abnormal traffic bursts and unauthorized protocol activity.',
                tags: ['Python', 'Scapy', 'Wireshark', 'Sockets']
            },
            {
                title: 'Automated Web Vulnerability Scanner',
                subtitle: 'AppSec Security Suite',
                icon: 'fa-solid fa-bug',
                iconColor: '#ef4444',
                desc: 'Automated security auditor scanning web apps for OWASP Top 10 vulnerabilities like SQLi and XSS.',
                tags: ['Python', 'OWASP', 'REST APIs', 'BeautifulSoup']
            },
            {
                title: 'Multi-Factor Authentication Server',
                subtitle: 'Zero-Trust Identity System',
                icon: 'fa-solid fa-key',
                iconColor: '#10b981',
                desc: 'Secure authentication backend with TOTP tokens, hardware key support, rate limiting, and bcrypt hashing.',
                tags: ['Cryptography', 'Node.js', 'Redis', 'OAuth2']
            },
            {
                title: 'Intrusion Detection & Honeypot',
                subtitle: 'Threat Intelligence Lab',
                icon: 'fa-solid fa-tower-broadcast',
                iconColor: '#f59e0b',
                desc: 'Configurable honeypot capturing attacker IP addresses, command payloads, and generating real-time SIEM alerts.',
                tags: ['Kali Linux', 'Bash', 'IPTables', 'SIEM']
            }
        ],
        reviews: [
            {
                name: 'Manoj T.',
                role: 'Cyber Security Trainee',
                initials: 'MT',
                quote: 'The hands-on Kali Linux labs and Wireshark deep dives gave me true defensive and offensive cybersecurity skills.',
                stars: 5
            },
            {
                name: 'Pooja K.',
                role: 'SOC Analyst',
                initials: 'PK',
                quote: 'The OWASP web app security and incident response modules prepared me thoroughly for my current SOC role.',
                stars: 5
            },
            {
                name: 'Suresh B.',
                role: 'Security Trainee',
                initials: 'SB',
                quote: 'Everything was taught practically in safe virtual lab environments. Excellent ethical hacking foundation!',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'Are all hacking exercises conducted legally and ethically?',
                a: 'Yes, 100%. All activities are conducted in controlled, isolated sandbox environments strictly adhering to ethical guidelines.'
            },
            {
                q: 'Do I need Linux experience prior to joining?',
                a: 'No prior Linux experience is necessary. We teach Linux command line basics and Kali tooling right from module one.'
            },
            {
                q: 'What certifications does this training help prepare for?',
                a: 'The curriculum prepares you for industry certifications such as CompTIA Security+, CEH (Certified Ethical Hacker), and Junior Pentester.'
            },
            {
                q: 'Do you cover web application penetration testing?',
                a: 'Yes, we comprehensively cover OWASP Top 10 web vulnerabilities including SQL Injection, XSS, CSRF, and broken access controls.'
            },
            {
                q: 'Is there hands-on lab access included?',
                a: 'Yes, students receive guided exercises and virtual lab images for practicing vulnerability exploitation safely.'
            }
        ]
    },

    {
        slug: 'devops-engineering',
        id: 'devops-engineering',
        title: 'DevOps Engineering',
        category: 'Operations',
        badge: 'OPERATIONS PROGRAM',
        heroAccent: 'DevOps & Cloud Engineer',
        desc: 'Deploy scalable containers, orchestrate Kubernetes clusters, configure automated CI/CD pipelines, and provision AWS cloud.',
        heroFeatures: [
            'Docker & Containerization',
            'Kubernetes Orchestration',
            'Jenkins & GitHub CI/CD',
            'AWS Cloud Architecture',
            'Infrastructure as Code',
            'Zero-Downtime Releases'
        ],
        techStack: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Git'],
        topics: [
            {
                title: 'Docker Containerization & Packaging',
                tool: 'Docker',
                desc: 'Learn to isolate applications, write efficient multi-stage Dockerfiles, manage storage volumes, and orchestrate containers with Docker Compose.',
                points: [
                    'Building optimized, lightweight Docker images & multi-stage builds',
                    'Multi-container application orchestration with Docker Compose',
                    'Virtual bridge networking, volumes & persistent cloud storage',
                    'Vulnerability scanning & container image security hardening'
                ],
                practicalLab: 'Containerize a multi-tier microservice application and configure orchestration with Docker Compose.'
            },
            {
                title: 'Kubernetes Orchestration & Scaling',
                tool: 'Kubernetes',
                desc: 'Deploy, scale, auto-heal, and manage production-grade microservices across Kubernetes clusters with zero downtime.',
                points: [
                    'Pod architecture, Deployments, ReplicaSets & StatefulSets',
                    'Service Discovery, Load Balancing & Ingress Controllers',
                    'Horizontal Pod Autoscaling (HPA) & cluster autoscaling policies',
                    'ConfigMaps, Secrets management & RBAC security controls'
                ],
                practicalLab: 'Deploy a resilient production web service on a Kubernetes cluster with automated rolling updates.'
            },
            {
                title: 'CI/CD Automation with Jenkins & Actions',
                tool: 'Jenkins',
                desc: 'Design automated continuous integration and delivery pipelines to build, test, scan, and deploy code rapidly.',
                points: [
                    'Scripted & Declarative Jenkinsfile pipeline development',
                    'GitHub Webhooks & trigger-driven build and test automation',
                    'Automated unit testing, static code analysis & Docker registry publishing',
                    'Zero-downtime deployment triggers to cloud staging and production'
                ],
                practicalLab: 'Create an automated Jenkins CI/CD pipeline triggered automatically on GitHub pull request merge.'
            },
            {
                title: 'AWS Cloud Provisioning & IAM',
                tool: 'AWS',
                desc: 'Architect and manage cloud infrastructure on Amazon Web Services using scalable, secure Cloud patterns.',
                points: [
                    'EC2 instances, Security Groups & Auto Scaling Groups',
                    'S3 Bucket management, Lifecycle policies & static hosting',
                    'Virtual Private Cloud (VPC), Subnets, NAT Gateways & Route tables',
                    'IAM Roles, User access policies & least privilege access principles'
                ],
                practicalLab: 'Provision a secure multi-tier AWS architecture with custom VPC networking and IAM controls.'
            },
            {
                title: 'Git Version Control & Branching',
                tool: 'Git',
                desc: 'Master collaborative Git workflows, branching strategies, code review standards, and automated release tagging.',
                points: [
                    'GitFlow & trunk-based development branching strategies',
                    'Resolving merge conflicts & interactive git rebasing',
                    'Pull request branch protection & automated test status checks',
                    'Semantic versioning & automated release tagging via CI'
                ],
                practicalLab: 'Set up an enterprise Git repository with protected main branch, automated checks, and release tags.'
            }
        ],
        projects: [
            {
                title: 'Automated CI/CD Pipeline Suite',
                subtitle: 'DevOps Continuous Delivery',
                icon: 'fa-solid fa-code-commit',
                iconColor: '#3b82f6',
                desc: 'Automated pipeline triggered on Git commit that runs tests, builds Docker images, scans security, and deploys.',
                tags: ['Jenkins', 'GitHub Actions', 'Docker', 'Slack Webhooks']
            },
            {
                title: 'Production Kubernetes Cluster',
                subtitle: 'Microservices Orchestration',
                icon: 'fa-solid fa-dharmachakra',
                iconColor: '#326ce5',
                desc: 'Multi-node Kubernetes architecture with Nginx Ingress, Horizontal Pod Autoscaling, and automated health checks.',
                tags: ['Kubernetes', 'Helm', 'Ingress', 'HPA']
            },
            {
                title: 'Multi-Tier AWS Cloud Architecture',
                subtitle: 'Cloud Infrastructure',
                icon: 'fa-brands fa-aws',
                iconColor: '#ff9900',
                desc: 'High-availability VPC setup with public/private subnets, Auto Scaling EC2 fleet, RDS database, and Application Load Balancer.',
                tags: ['AWS VPC', 'EC2', 'RDS', 'ALB']
            },
            {
                title: 'Prometheus & Grafana Observability',
                subtitle: 'Cloud Monitoring Stack',
                icon: 'fa-solid fa-chart-pie',
                iconColor: '#10b981',
                desc: 'Centralized cluster observability dashboard monitoring CPU, memory, error rates, and automated alert manager triggers.',
                tags: ['Prometheus', 'Grafana', 'Node Exporter', 'Alertmanager']
            }
        ],
        reviews: [
            {
                name: 'Kishore J.',
                role: 'DevOps Trainee',
                initials: 'KJ',
                quote: 'The Kubernetes deployments and Jenkins CI/CD pipeline labs gave me hands-on confidence for production environments.',
                stars: 5
            },
            {
                name: 'Sanjay V.',
                role: 'Cloud Engineer',
                initials: 'SV',
                quote: 'From Docker multi-stage builds to AWS VPC networking, the depth of this course is outstanding.',
                stars: 5
            },
            {
                name: 'Meera P.',
                role: 'Site Reliability Trainee',
                initials: 'MP',
                quote: 'Loved the observability module with Prometheus and Grafana. It directly aligned with actual cloud engineering tasks.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What are the prerequisites for learning DevOps?',
                a: 'Basic familiarity with the command line and fundamental programming concepts is helpful. We guide you through everything else.'
            },
            {
                q: 'Do we use real AWS cloud services?',
                a: 'Yes, you will work hands-on with AWS free-tier and educational cloud infrastructure throughout the provisioning modules.'
            },
            {
                q: 'Is Kubernetes taught thoroughly?',
                a: 'Yes, you will learn Pods, Deployments, Services, ConfigMaps, Ingress, and Autoscaling on local and cloud clusters.'
            },
            {
                q: 'Will this help me prepare for AWS or CKA certifications?',
                a: 'Yes, the curriculum covers core competencies tested in the AWS Solutions Architect Associate and CKA examinations.'
            },
            {
                q: 'What roles can I apply for after this course?',
                a: 'DevOps Engineer, Cloud Support Engineer, Site Reliability Engineer (SRE), and Release Management Engineer.'
            }
        ]
    },

    {
        slug: 'digital-marketing',
        id: 'digital-marketing',
        title: 'Digital Marketing',
        category: 'Marketing',
        badge: 'GROWTH PROGRAM',
        heroAccent: 'Growth & Digital Marketer',
        desc: 'Master search engine optimization (SEO), performance ads on Google & Meta, conversion rate analytics, and email campaigns.',
        heroFeatures: [
            'SEO & Keyword Research',
            'Google Ads & Search Campaigns',
            'Meta Performance Marketing',
            'Google Analytics 4 Tracking',
            'Content Marketing Strategy',
            'Conversion Rate Optimization'
        ],
        techStack: ['Google Ads', 'Meta Ads', 'Analytics', 'WordPress', 'Mailchimp'],
        topics: [
            {
                title: 'SEO Optimization & Keyword Analysis',
                tool: 'WordPress',
                desc: 'Master technical SEO, on-page optimization, backlink strategies, and keyword intent mapping to rank #1 on search engines.',
                points: [
                    'Keyword research strategies using SEMrush, Ahrefs, and Google Keyword Planner',
                    'On-page SEO: title tags, schema markup, semantic headings, and internal linking',
                    'Technical SEO: Core Web Vitals, site crawlability, sitemaps, and robots.txt',
                    'Off-page SEO: high-authority backlink building and digital PR'
                ],
                practicalLab: 'Perform a comprehensive SEO audit on a live website and rank high-intent keywords.'
            },
            {
                title: 'Paid Campaigns on Google & Meta Ads',
                tool: 'Google Ads',
                desc: 'Design, launch, and optimize high-converting search, display, and social ad campaigns with optimized ROAS.',
                points: [
                    'Google Search, Display, and Performance Max campaign architectures',
                    'Meta Ads Manager: custom audiences, lookalikes, and pixel conversion tracking',
                    'A/B creative testing, headline copywriting, and bid strategy optimization',
                    'Budget allocation, cost-per-click (CPC) reduction, and ROAS maximization'
                ],
                practicalLab: 'Set up an end-to-end multi-channel ad campaign targeting high-intent purchasers.'
            },
            {
                title: 'Email Marketing & Custom Newsletters',
                tool: 'Mailchimp',
                desc: 'Build automated email nurture funnels, segment customer lists, and optimize open rates and click-through conversions.',
                points: [
                    'Lead capture forms, lead magnets, and opt-in rate optimization',
                    'Drip campaigns, onboarding sequences, and abandoned cart automations',
                    'Email copywriting, subject line A/B testing, and deliverability rules',
                    'Audience segmentation based on purchase behavior and engagement'
                ],
                practicalLab: 'Design an automated 5-step email onboarding drip funnel with high-conversion copy.'
            },
            {
                title: 'Web Analytics & Performance Tracking',
                tool: 'Analytics',
                desc: 'Configure Google Analytics 4 (GA4) and Google Tag Manager to track user funnels, event conversions, and attribution.',
                points: [
                    'Google Tag Manager (GTM) custom event triggers and tag firing',
                    'GA4 event-based tracking models, user exploration reports, and cohorts',
                    'Conversion funnel drop-off analysis and attribution modeling',
                    'Creating interactive marketing reports in Looker Studio'
                ],
                practicalLab: 'Configure GA4 custom event tracking and build an executive Looker Studio dashboard.'
            },
            {
                title: 'CMS Systems & WordPress Customization',
                tool: 'WordPress',
                desc: 'Build high-converting landing pages, integrate payment forms, and deploy content strategies on WordPress.',
                points: [
                    'WordPress page builders, theme customizer, and responsive design',
                    'Plugin management, caching optimizations, and security hardening',
                    'E-commerce integration with WooCommerce and payment gateways',
                    'Conversion rate optimization (CRO) principles for landing pages'
                ],
                practicalLab: 'Deploy a high-converting WordPress landing page with analytics and form tracking.'
            }
        ],
        projects: [
            {
                title: 'Full-Funnel Paid Ads Campaign',
                subtitle: 'Google & Meta Marketing',
                icon: 'fa-solid fa-bullhorn',
                iconColor: '#3b82f6',
                desc: 'Multi-platform ad strategy with custom audience segmentation, A/B creative testing, and ROAS optimization.',
                tags: ['Google Ads', 'Meta Ads', 'Copywriting', 'ROAS']
            },
            {
                title: 'Comprehensive SEO Growth Strategy',
                subtitle: 'Organic Search Optimization',
                icon: 'fa-solid fa-magnifying-glass-chart',
                iconColor: '#10b981',
                desc: 'End-to-end technical, on-page, and content strategy targeting high-conversion commercial keywords.',
                tags: ['Technical SEO', 'Schema', 'Backlinks', 'Ahrefs']
            },
            {
                title: 'Automated Email Nurture Funnel',
                subtitle: 'Lifecycle Marketing',
                icon: 'fa-solid fa-envelope-open-text',
                iconColor: '#ec4899',
                desc: 'Behavioral email automation flow with customized triggers for onboarding, retention, and win-back.',
                tags: ['Mailchimp', 'Drip Funnel', 'A/B Testing']
            },
            {
                title: 'Looker Studio Marketing Dashboard',
                subtitle: 'Executive Data Reporting',
                icon: 'fa-solid fa-chart-pie',
                iconColor: '#f59e0b',
                desc: 'Consolidated performance reporting dashboard unifying Google Ads, Facebook Ads, and GA4 revenue metrics.',
                tags: ['Looker Studio', 'GA4', 'GTM', 'Attribution']
            }
        ],
        reviews: [
            {
                name: 'Anjali V.',
                role: 'Digital Marketer',
                initials: 'AV',
                quote: 'The GA4 conversion tracking and Google Ads budgeting strategies taught here were exactly what modern agencies look for.',
                stars: 5
            },
            {
                name: 'Pradeep K.',
                role: 'Growth Trainee',
                initials: 'PK',
                quote: 'I managed a live campaign budget and learned to lower CPC while doubling click-through rates. Phenomenal course!',
                stars: 5
            },
            {
                name: 'Swathi R.',
                role: 'SEO Executive',
                initials: 'SR',
                quote: 'The technical SEO and schema markup modules helped me understand how Google truly crawls modern websites.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'Do we work with real ad campaign budgets?',
                a: 'Yes, we guide you through setting up real sandbox and live ad tests to analyze real-world metric outputs.'
            },
            {
                q: 'Is coding knowledge required for Digital Marketing?',
                a: 'No coding is required! Basic familiarity with web navigation is plenty. We teach WordPress and Tag Manager visually.'
            },
            {
                q: 'Do you cover Google Analytics 4 (GA4)?',
                a: 'Yes, GA4 is covered extensively, including custom event setups, conversion funnels, and Looker Studio dashboards.'
            },
            {
                q: 'Can I apply this training to promote my own business or freelancing?',
                a: 'Definitely! Many students use these exact strategies to grow their own startups or offer high-ticket freelance marketing services.'
            },
            {
                q: 'What certifications are included?',
                a: 'You receive the AROX Tech certification and are prepared to pass Google Ads and HubSpot certifications.'
            }
        ]
    },

    {
        slug: 'embedded-systems-and-iot',
        id: 'embedded-systems-and-iot',
        title: 'Embedded Systems & IoT',
        category: 'Hardware',
        badge: 'HARDWARE PROGRAM',
        heroAccent: 'IoT & Embedded Engineer',
        desc: 'Program microcontrollers, interface hardware sensors, calibrate wireless modules, and link devices to cloud IoT dashboards.',
        heroFeatures: [
            'C/C++ Bare-Metal Programming',
            'Arduino & ESP32 Microcontrollers',
            'Raspberry Pi Linux Systems',
            'Sensor & Actuator Interfacing',
            'MQTT & Wireless Protocols',
            'AWS IoT Cloud Dashboards'
        ],
        techStack: ['C/C++', 'Raspberry Pi', 'Arduino', 'Python', 'AWS IoT'],
        topics: [
            {
                title: 'C/C++ Bare-Metal Programming',
                tool: 'C/C++',
                desc: 'Master low-level C programming, memory pointers, bitwise register manipulation, interrupts, and hardware timers.',
                points: [
                    'Pointer arithmetic, memory addressing, and volatile qualifiers',
                    'Bitwise operators and microcontroller register manipulation',
                    'Interrupt Service Routines (ISRs) and hardware timers',
                    'Low-power sleep states and clock configuration'
                ],
                practicalLab: 'Write bare-metal C firmware utilizing hardware interrupts and PWM timer signals.'
            },
            {
                title: 'Raspberry Pi & Single Board Systems',
                tool: 'Raspberry Pi',
                desc: 'Configure embedded Linux on Raspberry Pi, interact with GPIO pins via Python, and run edge computing workloads.',
                points: [
                    'Embedded Linux OS installation, headless setup, and SSH',
                    'Python GPIO programming for digital inputs and outputs',
                    'Interfacing camera modules and image processing at the edge',
                    'Daemon services, systemd scripting, and remote management'
                ],
                practicalLab: 'Build an edge surveillance node on Raspberry Pi with automated motion detection alerts.'
            },
            {
                title: 'Arduino & ESP32 Microcontrollers',
                tool: 'Arduino',
                desc: 'Develop firmware on ESP32 microcontrollers, connect to WiFi/BLE, and handle concurrent real-time tasks with FreeRTOS.',
                points: [
                    'ESP32 pinout architecture, ADC readings, and DAC conversions',
                    'Wi-Fi client/server modes and Bluetooth Low Energy (BLE) pairing',
                    'Multithreading and task prioritization with FreeRTOS on ESP32',
                    'Over-the-Air (OTA) firmware update architecture'
                ],
                practicalLab: 'Develop an ESP32 smart sensor station broadcasting real-time sensor metrics over BLE and Wi-Fi.'
            },
            {
                title: 'Sensor & Communication Protocols',
                tool: 'C/C++',
                desc: 'Interface digital and analog sensors using hardware communication protocols including I2C, SPI, UART, and CAN bus.',
                points: [
                    'UART serial communication, baud rates, and packet framing',
                    'I2C two-wire bus protocol: master/slave addressing and clock stretching',
                    'SPI high-speed synchronous protocol for displays and storage',
                    'CAN bus protocol fundamentals in automotive and industrial setups'
                ],
                practicalLab: 'Interface multi-sensor hardware (temp, pressure, accelerometer) via I2C and SPI buses.'
            },
            {
                title: 'AWS IoT Cloud Integrations',
                tool: 'AWS IoT',
                desc: 'Publish telemetry over MQTT, define cloud device shadows, configure AWS IoT Core, and build telemetry dashboards.',
                points: [
                    'MQTT protocol: publish/subscribe, QoS levels, and topics',
                    'AWS IoT Core device provisioning, X.509 security certificates, and policies',
                    'Device Shadows for remote state synchronization',
                    'Visualizing IoT telemetry using cloud dashboards and alerts'
                ],
                practicalLab: 'Connect an ESP32 hardware device securely to AWS IoT Core and visualize live telemetry.'
            }
        ],
        projects: [
            {
                title: 'Smart Home Automation Gateway',
                subtitle: 'ESP32 & MQTT System',
                icon: 'fa-solid fa-house-signal',
                iconColor: '#3b82f6',
                desc: 'Centralized IoT hub controlling relays, reading environmental sensors, and communicating via MQTT.',
                tags: ['ESP32', 'FreeRTOS', 'MQTT', 'C++']
            },
            {
                title: 'Industrial Environmental Monitor',
                subtitle: 'Cloud IoT Telemetry',
                icon: 'fa-solid fa-temperature-arrow-up',
                iconColor: '#10b981',
                desc: 'Ruggedized sensor monitoring temperature, humidity, and gas levels with live cloud graphing on AWS IoT.',
                tags: ['AWS IoT', 'Raspberry Pi', 'Python', 'I2C']
            },
            {
                title: 'Wearable Health Tracker Device',
                subtitle: 'BLE Edge Embedded',
                icon: 'fa-solid fa-heart-pulse',
                iconColor: '#ec4899',
                desc: 'Low-power wearable device capturing heart rate and step telemetry transmitting over Bluetooth Low Energy.',
                tags: ['BLE', 'Arduino', 'Low Power', 'Sensors']
            },
            {
                title: 'Automated Vehicle CAN Telemetry',
                subtitle: 'Automotive Embedded System',
                icon: 'fa-solid fa-car',
                iconColor: '#f59e0b',
                desc: 'OBD-II CAN bus reader extracting vehicle engine diagnostics and logging telemetry to an SD card.',
                tags: ['CAN Bus', 'Embedded C', 'SPI', 'OBD-II']
            }
        ],
        reviews: [
            {
                name: 'Arun M.',
                role: 'Embedded Trainee',
                initials: 'AM',
                quote: 'Learning bare-metal C and FreeRTOS on the ESP32 gave me exact hands-on skills required for firmware engineering.',
                stars: 5
            },
            {
                name: 'Kavitha R.',
                role: 'IoT Engineer',
                initials: 'KR',
                quote: 'Connecting physical hardware to AWS IoT Core with secure certificates was thrilling. Highly recommended!',
                stars: 5
            },
            {
                name: 'Naveen K.',
                role: 'Firmware Trainee',
                initials: 'NK',
                quote: 'The communication protocol labs on I2C and SPI clarified all the hardware concepts I struggled with in college.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'Do I need my own hardware components to take this course?',
                a: 'We provide guidance on affordable beginner starter kits (ESP32/Arduino) and also use virtual hardware simulators.'
            },
            {
                q: 'Is C programming experience mandatory before joining?',
                a: 'Basic C programming is helpful, but our first module specifically reviews C fundamentals and pointer concepts.'
            },
            {
                q: 'What cloud platforms are covered for IoT?',
                a: 'We focus on AWS IoT Core along with MQTT brokers like Mosquitto and open-source dashboards.'
            },
            {
                q: 'Can this lead to automotive or robotics embedded roles?',
                a: 'Yes, our modules covering CAN bus, real-time FreeRTOS, and sensor interfacing directly prepare you for those roles.'
            },
            {
                q: 'Will I receive a completion certificate?',
                a: 'Yes, an industry-recognized certificate from AROX Tech is issued upon project review.'
            }
        ]
    },

    {
        slug: 'software-development',
        id: 'software-development',
        title: 'Software Development',
        category: 'Engineering',
        badge: 'ENGINEERING PROGRAM',
        heroAccent: 'Software Development Engineer',
        desc: 'Master object-oriented design, data structures and algorithms, relational database architectures, and design patterns.',
        heroFeatures: [
            'Java, Python & C++ OOP',
            'Data Structures & Algorithms',
            'System Architecture & Design Patterns',
            'SQL Database Optimization',
            'Clean Code & Unit Testing',
            'Technical Interview Preparation'
        ],
        techStack: ['Java', 'Python', 'C++', 'SQL', 'Git'],
        topics: [
            {
                title: 'Core Object-Oriented Programming',
                tool: 'Java',
                desc: 'Master OOP pillars: encapsulation, inheritance, polymorphism, abstraction, and memory allocation across Java and C++.',
                points: [
                    'Encapsulation, access specifiers, and immutable object patterns',
                    'Polymorphism, dynamic method dispatch, and interface contracts',
                    'Memory management: Stack vs Heap, garbage collection, and pointers',
                    'Exception handling architectures and defensive programming practices'
                ],
                practicalLab: 'Develop an enterprise banking management engine applying robust OOP inheritance and encapsulation.'
            },
            {
                title: 'Data Structures & Algorithms',
                tool: 'C++',
                desc: 'Master core computing data structures: linked lists, trees, graphs, heaps, dynamic programming, and time/space complexity.',
                points: [
                    'Asymptotic analysis: Big-O notation, time and space complexity evaluation',
                    'Linked lists, stacks, queues, hash maps, and binary search trees',
                    'Graph algorithms: Breadth-First Search (BFS), Depth-First Search (DFS), and Dijkstra',
                    'Dynamic programming patterns and divide-and-conquer strategies'
                ],
                practicalLab: 'Implement a high-efficiency routing algorithm solving the shortest path problem across weighted graphs.'
            },
            {
                title: 'Design Patterns & Clean Architecture',
                tool: 'Java',
                desc: 'Implement Gang of Four design patterns, SOLID principles, and clean architectural separation of concerns.',
                points: [
                    'SOLID principles: Single Responsibility, Open-Closed, Liskov, Interface, Dependency',
                    'Creational patterns: Singleton, Factory Method, Builder',
                    'Structural & Behavioral patterns: Adapter, Decorator, Observer, Strategy',
                    'Writing self-documenting clean code and comprehensive unit tests'
                ],
                practicalLab: 'Refactor a monolithic software application using SOLID principles and GoF design patterns.'
            },
            {
                title: 'Relational Database Design & SQL',
                tool: 'SQL',
                desc: 'Design normalized database schemas, write complex joins, implement transactions, and tune indexing performance.',
                points: [
                    'Entity-relationship modeling and database normalization (1NF to 3NF)',
                    'ACID properties, transaction isolation levels, and concurrency locking',
                    'Writing complex multi-join SQL queries and subqueries',
                    'B-Tree indexes, composite indexes, and query execution plan tuning'
                ],
                practicalLab: 'Design a scalable multi-user transactional database schema with optimized indexing.'
            },
            {
                title: 'Git Workflows & Team Collaboration',
                tool: 'Git',
                desc: 'Master Git branching, rebase workflows, continuous integration, and enterprise engineering practices.',
                points: [
                    'Git internal object models: blobs, trees, commits, and refs',
                    'Interactive rebasing, cherry-picking, and resolving complex conflicts',
                    'Code review best practices and automated CI pipeline integration',
                    'Packaging software binaries and semantic release management'
                ],
                practicalLab: 'Participate in a multi-developer team repository simulation with PR code reviews.'
            }
        ],
        projects: [
            {
                title: 'High-Concurrency In-Memory Cache',
                subtitle: 'Systems Engineering Project',
                icon: 'fa-solid fa-server',
                iconColor: '#3b82f6',
                desc: 'Thread-safe LRU/LFU cache supporting atomic read/write operations, expiration timers, and data eviction policies.',
                tags: ['Java', 'Concurrency', 'Algorithms', 'Data Structures']
            },
            {
                title: 'Scalable Inventory Management System',
                subtitle: 'Enterprise Backend',
                icon: 'fa-solid fa-boxes-stacked',
                iconColor: '#10b981',
                desc: 'Relational database-backed enterprise inventory software with ACID transaction guarantees and stock auditing.',
                tags: ['SQL', 'Java', 'JDBC', 'Design Patterns']
            },
            {
                title: 'Graph-Based Navigation Engine',
                subtitle: 'Algorithmic Application',
                icon: 'fa-solid fa-route',
                iconColor: '#8b5cf6',
                desc: 'Route optimization application implementing Dijkstra and A* search over realistic road network graphs.',
                tags: ['C++', 'Graphs', 'A* Search', 'OOP']
            },
            {
                title: 'Automated Test Runner & Mocking Suite',
                subtitle: 'Developer Tooling',
                icon: 'fa-solid fa-vial-circle-check',
                iconColor: '#f59e0b',
                desc: 'Custom lightweight unit testing framework supporting assertions, test discovery, and execution reports.',
                tags: ['Python', 'Reflection', 'Testing', 'Clean Code']
            }
        ],
        reviews: [
            {
                name: 'Deepak V.',
                role: 'SDE Trainee',
                initials: 'DV',
                quote: 'The DSA and Design Patterns modules directly helped me clear my technical coding rounds at a top tech company.',
                stars: 5
            },
            {
                name: 'Sindhuja M.',
                role: 'Junior Software Engineer',
                initials: 'SM',
                quote: 'Learning clean architecture and SOLID principles transformed the way I structure my software code.',
                stars: 5
            },
            {
                name: 'Kiran T.',
                role: 'Software Trainee',
                initials: 'KT',
                quote: 'The in-memory cache project was a huge talking point during my interviews. High-quality curriculum!',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'Which programming language is predominantly used?',
                a: 'We focus on Java and C++ for algorithms and systems concepts, alongside Python for rapid scripting.'
            },
            {
                q: 'Does this course prepare me for coding interviews (LeetCode style)?',
                a: 'Yes, our DSA module covers all standard interview data structures and algorithmic patterns.'
            },
            {
                q: 'Will we learn system design and architecture?',
                a: 'Yes, we cover object-oriented system design, design patterns, and scalable database schema structuring.'
            },
            {
                q: 'Is this course suitable for non-CS graduates?',
                a: 'Yes, we begin with core programming logic and systematically progress to advanced data structures.'
            },
            {
                q: 'What certificate do I receive upon completion?',
                a: 'You receive an AROX Tech Software Development Engineer Certificate upon completing all projects.'
            }
        ]
    },

    {
        slug: 'app-development',
        id: 'app-development',
        title: 'App Development',
        category: 'Mobile',
        badge: 'MOBILE PROGRAM',
        heroAccent: 'Mobile Application Engineer',
        desc: 'Build native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and cloud backends.',
        heroFeatures: [
            'React Native & Flutter',
            'Cross-Platform UI Frameworks',
            'Native iOS & Android APIs',
            'Firebase Backend & Push Alerts',
            'App Store & Play Store Deploy',
            'Offline-First Data Storage'
        ],
        techStack: ['React Native', 'Flutter', 'Swift', 'Android', 'Firebase'],
        topics: [
            {
                title: 'React Native & Cross-Platform UI',
                tool: 'React Native',
                desc: 'Build cross-platform mobile user interfaces with React Native, flexbox styling, custom native components, and navigation.',
                points: [
                    'React Native architecture, JavaScript thread, and native bridge/Fabric',
                    'Flexbox styling optimized for multiple screen aspect ratios',
                    'React Navigation: stack, bottom tabs, and drawer navigation flows',
                    'Handling touch gestures, haptics, and responsive animations'
                ],
                practicalLab: 'Develop a responsive mobile e-commerce interface with tab navigation and cart state.'
            },
            {
                title: 'Flutter & Dart Frameworks',
                tool: 'Flutter',
                desc: 'Master Google Flutter widget trees, reactive state management, customized canvas drawing, and multi-platform compilation.',
                points: [
                    'Dart language fundamentals: typing, null safety, and async streams',
                    'Stateless vs Stateful widgets, layout trees, and Material 3 design',
                    'State management using Provider, Bloc, and Riverpod patterns',
                    'Custom painters, animated builders, and fluid micro-interactions'
                ],
                practicalLab: 'Build a high-performance Flutter food delivery app with animated menus and order tracking.'
            },
            {
                title: 'Native Android & iOS Features',
                tool: 'Android',
                desc: 'Access native device hardware APIs including Camera, GPS Location, Bluetooth, Biometrics, and local file storage.',
                points: [
                    'Camera API integration, image capture, and file compression',
                    'Real-time GPS geofencing, background location, and map rendering',
                    'Biometric authentication (Face ID / Fingerprint sensor)',
                    'Local offline storage using SQLite, WatermelonDB, and MMKV'
                ],
                practicalLab: 'Create an offline-first fitness tracking app accessing device GPS and biometric authentication.'
            },
            {
                title: 'Firebase Database & Authentication',
                tool: 'Firebase',
                desc: 'Integrate cloud authentication, Firestore real-time databases, cloud storage, and push notifications.',
                points: [
                    'Firebase Authentication: Email/password, Google sign-in, and phone OTP',
                    'Cloud Firestore real-time document sync and offline persistence',
                    'Firebase Cloud Storage for secure media uploads and caching',
                    'Push notifications with Firebase Cloud Messaging (FCM)'
                ],
                practicalLab: 'Connect a mobile app to Firebase with user authentication and real-time Firestore sync.'
            },
            {
                title: 'App Store & Play Store Publishing',
                tool: 'Android',
                desc: 'Package APK/AAB bundles, generate keystores, configure app store assets, and comply with app review guidelines.',
                points: [
                    'Android keystore signing, ProGuard code obfuscation, and AAB builds',
                    'iOS provisioning profiles, certificates, and TestFlight beta releases',
                    'Google Play Console & Apple App Store Connect setup',
                    'Crashlytics error tracking and remote performance monitoring'
                ],
                practicalLab: 'Prepare an production-signed Android App Bundle (AAB) with automated Crashlytics error logging.'
            }
        ],
        projects: [
            {
                title: 'Ride-Hailing & Delivery App',
                subtitle: 'Location-Based Mobile App',
                icon: 'fa-solid fa-map-location-dot',
                iconColor: '#3b82f6',
                desc: 'Real-time booking app with live GPS tracking on maps, driver assignment, fare calculation, and push alerts.',
                tags: ['React Native', 'Google Maps', 'Firebase', 'Sockets']
            },
            {
                title: 'Social Media & Photo Sharing',
                subtitle: 'Media-Rich Mobile Platform',
                icon: 'fa-solid fa-camera-retro',
                iconColor: '#ec4899',
                desc: 'Instagram-inspired mobile app featuring camera capture, filters, feed scrolling, comments, and direct chat.',
                tags: ['Flutter', 'Firebase', 'Cloud Storage', 'Bloc']
            },
            {
                title: 'Cryptocurrency Wallet & Tracker',
                subtitle: 'FinTech Mobile Application',
                icon: 'fa-solid fa-coins',
                iconColor: '#f59e0b',
                desc: 'Secure mobile crypto asset tracker with biometric login, live price charts, and portfolio balance alerts.',
                tags: ['React Native', 'Biometrics', 'REST APIs', 'Charts']
            },
            {
                title: 'Habit & Daily Task Tracker',
                subtitle: 'Productivity Application',
                icon: 'fa-solid fa-check-double',
                iconColor: '#10b981',
                desc: 'Offline-first productivity app with local push notification reminders, streak tracking, and dark mode.',
                tags: ['Flutter', 'SQLite', 'Local Alerts', 'Material 3']
            }
        ],
        reviews: [
            {
                name: 'Praveen S.',
                role: 'Mobile App Trainee',
                initials: 'PS',
                quote: 'Building the ride-hailing app with live maps and Firebase gave me the exact skills needed for my mobile dev role.',
                stars: 5
            },
            {
                name: 'Harini B.',
                role: 'React Native Developer',
                initials: 'HB',
                quote: 'The transition from web React to React Native was seamless thanks to the well-structured practical exercises.',
                stars: 5
            },
            {
                name: 'Abishek R.',
                role: 'Flutter Developer',
                initials: 'AR',
                quote: 'Flutter animations and state management with Bloc were taught with crystal clarity. Top tier!',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'Do I need a Mac computer to learn mobile app development?',
                a: 'You can build and test cross-platform apps on Windows or Linux using Android emulators and Expo/Flutter.'
            },
            {
                q: 'Which framework should I focus on: React Native or Flutter?',
                a: 'We cover both frameworks, allowing you to choose your primary focus based on your target career opportunities.'
            },
            {
                q: 'Will I learn how to publish apps to Google Play and Apple App Store?',
                a: 'Yes, our final module covers keystore signing, release bundles, and navigating App Store and Play Store submissions.'
            },
            {
                q: 'Do we learn how to integrate device cameras and GPS?',
                a: 'Yes, we interface directly with hardware APIs including GPS, camera, biometrics, and push notifications.'
            },
            {
                q: 'Do you offer assistance with mobile developer portfolios?',
                a: 'Yes, we help you package your GitHub repositories and provide live APK downloads to showcase to recruiters.'
            }
        ]
    },

    // ══════════════════════════════════════════════════════════════════
    // 2. PRO & EXPANDABLE COURSES (from expCourses in courses.html)
    // ══════════════════════════════════════════════════════════════════
    {
        slug: 'java-fsd',
        id: 'java-fsd',
        title: 'Java Full Stack Development',
        category: 'Development',
        badge: 'PRO DEV PROGRAM',
        heroAccent: 'Java Enterprise Engineer',
        desc: 'Master Java, Spring Boot, MySQL, REST APIs, and build scalable full stack enterprise applications with React.',
        heroFeatures: [
            'Core Java & Advanced OOP',
            'Spring Boot Microservices',
            'MySQL & Hibernate ORM',
            'RESTful API Architecture',
            'React Frontend Integration',
            'Enterprise Security & Deploy'
        ],
        techStack: ['Java', 'Spring Boot', 'HTML5', 'CSS3', 'JavaScript', 'SQL'],
        topics: [
            {
                title: 'Core Java & OOPs Architecture',
                tool: 'Java',
                desc: 'Master Java 17/21 language features, Collections framework, multithreading, and enterprise OOP design patterns.',
                points: ['Java memory model, Garbage Collection, and JVM internals', 'Java Collections (Lists, Sets, Maps) and Stream API', 'Multithreading, concurrency locks, and thread pools', 'Generics, functional interfaces, and Lambda expressions'],
                practicalLab: 'Build a multi-threaded banking transaction processor in Java.'
            },
            {
                title: 'Spring Boot & Microservices',
                tool: 'Spring Boot',
                desc: 'Build enterprise-grade microservices with Spring Boot, Spring MVC, dependency injection, and JPA/Hibernate.',
                points: ['Spring IoC container, Dependency Injection, and Bean lifecycles', 'RESTful API controllers, exception handlers, and DTOs', 'Spring Data JPA, Hibernate ORM, and database mapping', 'Spring Security with JWT authentication and role-based access'],
                practicalLab: 'Engineer a scalable e-commerce microservice with Spring Boot and JWT security.'
            },
            {
                title: 'Frontend UI Integration with React',
                tool: 'JavaScript',
                desc: 'Connect your Spring Boot backend to responsive modern web interfaces built with HTML5, CSS3, and React.',
                points: ['Modern ES6+ JavaScript, async/await, and Fetch/Axios', 'React functional components, hooks, and state management', 'Consuming Spring Boot REST APIs and handling loading states', 'Form validation, error boundaries, and notifications'],
                practicalLab: 'Build an interactive enterprise admin dashboard consuming Spring Boot APIs.'
            },
            {
                title: 'MySQL & Relational Data Architecture',
                tool: 'SQL',
                desc: 'Design relational database schemas, write optimized SQL queries, handle transactions, and index high-volume data.',
                points: ['Database normalization, foreign key constraints, and cascade rules', 'Complex joins, subqueries, and stored procedures in MySQL', 'Transaction management with ACID compliance in Spring Boot', 'Index tuning and query execution plan analysis'],
                practicalLab: 'Design and optimize an inventory database schema handling high-concurrency orders.'
            },
            {
                title: 'Enterprise Deployment & CI/CD',
                tool: 'Java',
                desc: 'Containerize Java Spring Boot applications with Docker, configure Maven builds, and deploy to cloud servers.',
                points: ['Maven build lifecycles and dependency management', 'Multi-stage Docker containerization for Java Spring applications', 'Automated unit testing with JUnit 5 and Mockito', 'Cloud deployment to AWS EC2 with RDS database integration'],
                practicalLab: 'Deploy a containerized full-stack Java application to AWS with automated CI/CD.'
            }
        ],
        projects: [
            {
                title: 'Enterprise Banking Portal',
                subtitle: 'Spring Boot Microservices',
                icon: 'fa-solid fa-building-columns',
                iconColor: '#F89820',
                desc: 'Secure banking platform supporting fund transfers, account statements, and role-based branch manager approvals.',
                tags: ['Java', 'Spring Boot', 'MySQL', 'JWT']
            },
            {
                title: 'Hospital Management System',
                subtitle: 'Full Stack Java Application',
                icon: 'fa-solid fa-hospital-user',
                iconColor: '#10b981',
                desc: 'End-to-end healthcare system managing patient records, appointment booking, doctor schedules, and billing.',
                tags: ['Spring Boot', 'React', 'Hibernate', 'REST']
            },
            {
                title: 'Corporate HR & Payroll Engine',
                subtitle: 'Enterprise Software',
                icon: 'fa-solid fa-money-check-dollar',
                iconColor: '#3b82f6',
                desc: 'Automated payroll and attendance tracking engine calculating tax deductions and generating PDF payslips.',
                tags: ['Java 21', 'Spring Data', 'MySQL', 'JasperReports']
            },
            {
                title: 'B2B Inventory Management Portal',
                subtitle: 'Supply Chain Solution',
                icon: 'fa-solid fa-truck-ramp-box',
                iconColor: '#8b5cf6',
                desc: 'High-throughput supply chain platform tracking stock across warehouses with automated re-ordering thresholds.',
                tags: ['Spring Boot', 'React', 'Docker', 'AWS']
            }
        ],
        reviews: [
            {
                name: 'Karthikeyan G.',
                role: 'Java Developer Trainee',
                initials: 'KG',
                quote: 'The Spring Boot and microservices architectural modules prepared me perfectly for my enterprise interview.',
                stars: 5
            },
            {
                name: 'Monisha S.',
                role: 'Full Stack Java Trainee',
                initials: 'MS',
                quote: 'From core OOP to Spring Security and React integration, every session was deeply practical and structured.',
                stars: 5
            },
            {
                name: 'Venkatesh R.',
                role: 'Backend Engineer',
                initials: 'VR',
                quote: 'Learning JUnit mocking and Dockerizing Spring Boot apps gave me real-world confidence.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What is the duration of the Java FSD program?',
                a: 'The program is 12 weeks long covering Core Java, Spring Boot microservices, MySQL, React integration, and AWS deployment.'
            },
            {
                q: 'Is Spring Boot taught from scratch?',
                a: 'Yes, we start with core Spring concepts and progress to enterprise Spring Boot microservices with Spring Data and Security.'
            },
            {
                q: 'Do we learn frontend development as well?',
                a: 'Yes, you will learn HTML5, CSS3, modern JavaScript, and React to connect seamlessly with your Spring Boot backend.'
            },
            {
                q: 'What projects will I build?',
                a: 'You will build 4 comprehensive enterprise projects including a Banking Portal and an HR Payroll Engine.'
            },
            {
                q: 'Do you help with Java developer placement?',
                a: 'Yes, we conduct Java mock technical rounds, LeetCode problem solving, and connect qualified trainees with hiring partners.'
            }
        ]
    },

    {
        slug: 'python-dev',
        id: 'python-dev',
        title: 'Python Development',
        category: 'Development',
        badge: 'BACKEND PROGRAM',
        heroAccent: 'Python Backend Engineer',
        desc: 'Build backend microservices, automation scripts, and scalable RESTful web applications with Python, Django, and FastAPI.',
        heroFeatures: [
            'Python 3 Advanced Features',
            'Django & FastAPI Frameworks',
            'PostgreSQL & ORM Modeling',
            'Async Tasks & Celery Workers',
            'Docker Containerization',
            'API Security & Unit Testing'
        ],
        techStack: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Git'],
        topics: [
            {
                title: 'Advanced Python & OOPs Architecture',
                tool: 'Python',
                desc: 'Master generators, decorators, context managers, async event loops, and clean design patterns in Python 3.',
                points: ['Object-oriented design patterns, dunder methods, and dataclasses', 'Decorators, custom generators, and memory-efficient iterators', 'Asynchronous programming with asyncio, coroutines, and tasks', 'Packaging Python modules, virtual environments, and Poetry'],
                practicalLab: 'Build an asynchronous web scraping and data aggregation engine using asyncio and aiohttp.'
            },
            {
                title: 'High-Speed APIs with FastAPI',
                tool: 'FastAPI',
                desc: 'Architect high-throughput asynchronous REST APIs using FastAPI, Pydantic data validation, and dependency injection.',
                points: ['FastAPI asynchronous route handlers and Pydantic schemas', 'Dependency injection system and middleware configuration', 'OAuth2 password flow, JWT authentication, and API rate limiting', 'Automated OpenAPI (Swagger) documentation generation'],
                practicalLab: 'Create a high-speed authentication and microservice API using FastAPI and Pydantic.'
            },
            {
                title: 'Enterprise Web Apps with Django',
                tool: 'Django',
                desc: 'Build robust enterprise web applications utilizing Django MVT architecture, Django ORM, and Django REST Framework.',
                points: ['Django models, migrations, relationships, and queries', 'Django REST Framework (DRF) serializers, viewsets, and routers', 'Django built-in authentication, permissions, and admin dashboard', 'Handling file uploads, media storage, and email dispatching'],
                practicalLab: 'Develop a multi-user content and subscription platform using Django and DRF.'
            },
            {
                title: 'PostgreSQL Database & Celery Queues',
                tool: 'PostgreSQL',
                desc: 'Model relational schemas, optimize queries with SQLAlchemy/Django ORM, and manage background jobs with Celery and Redis.',
                points: ['PostgreSQL indexing, transaction isolation, and query plans', 'Celery distributed task queue architecture with Redis broker', 'Scheduled cron tasks (Celery Beat) and background processing', 'Database connection pooling and performance caching'],
                practicalLab: 'Build an asynchronous report generation system utilizing Celery workers and Redis.'
            },
            {
                title: 'Docker & CI/CD Cloud Deployment',
                tool: 'Docker',
                desc: 'Containerize Python applications with Docker, write comprehensive PyTest suites, and deploy to cloud platforms.',
                points: ['Writing optimized multi-stage Dockerfiles for Python apps', 'Docker Compose orchestration for app, database, and Redis cache', 'Automated unit and integration testing with PyTest and coverage', 'Continuous deployment pipelines to cloud environments'],
                practicalLab: 'Deploy a multi-container Django/FastAPI stack using Docker Compose on cloud servers.'
            }
        ],
        projects: [
            {
                title: 'FastAPI Microservices Platform',
                subtitle: 'High-Throughput API Engine',
                icon: 'fa-solid fa-bolt-lightning',
                iconColor: '#34D399',
                desc: 'High-speed asynchronous REST API with JWT security, Pydantic validation, and Redis caching.',
                tags: ['FastAPI', 'Python', 'Redis', 'PostgreSQL']
            },
            {
                title: 'Django SaaS Platform',
                subtitle: 'Enterprise Web Application',
                icon: 'fa-solid fa-globe',
                iconColor: '#092E20',
                desc: 'Multi-tenant SaaS application with subscription tiers, admin analytics, and billing integrations.',
                tags: ['Django', 'DRF', 'PostgreSQL', 'Stripe']
            },
            {
                title: 'Asynchronous Background Job Queue',
                subtitle: 'Distributed Systems',
                icon: 'fa-solid fa-list-check',
                iconColor: '#ef4444',
                desc: 'High-volume background worker system executing bulk email dispatches and PDF invoice generation.',
                tags: ['Celery', 'Redis', 'Python', 'Docker']
            },
            {
                title: 'Real-Time Notification Server',
                subtitle: 'WebSocket Application',
                icon: 'fa-solid fa-bell',
                iconColor: '#f59e0b',
                desc: 'Live streaming notification service pushing real-time alerts to connected web clients.',
                tags: ['FastAPI', 'WebSockets', 'Python', 'Docker']
            }
        ],
        reviews: [
            {
                name: 'Ganesh P.',
                role: 'Python Trainee',
                initials: 'GP',
                quote: 'The FastAPI and Celery background workers modules were exactly what I needed to land my backend role.',
                stars: 5
            },
            {
                name: 'Priyanka N.',
                role: 'Backend Engineer',
                initials: 'PN',
                quote: 'Loved the depth of Django ORM and database optimization. The projects are authentic and production-grade.',
                stars: 5
            },
            {
                name: 'Vikram S.',
                role: 'Software Trainee',
                initials: 'VS',
                quote: 'From clean code with PyTest to Docker containerization, this course covers the entire modern Python backend.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'Do we learn both Django and FastAPI?',
                a: 'Yes, we cover both Django for full-featured web applications and FastAPI for high-performance async microservices.'
            },
            {
                q: 'Is database management included?',
                a: 'Yes, you will work deeply with PostgreSQL, ORM modeling, transaction safety, and Redis caching.'
            },
            {
                q: 'What kind of jobs does this prepare me for?',
                a: 'Python Developer, Backend Engineer, API Specialist, and Django/FastAPI Developer.'
            },
            {
                q: 'Do I need prior Python experience?',
                a: 'Basic programming knowledge is helpful, but we begin with Python foundations before scaling to advanced frameworks.'
            },
            {
                q: 'Is certificate provided?',
                a: 'Yes, an industry-recognized certificate from AROX Tech is awarded upon completing project evaluations.'
            }
        ]
    },

    {
        slug: 'mern-stack',
        id: 'mern-stack',
        title: 'MERN Stack Web Development',
        category: 'Development',
        badge: 'MERN PROGRAM',
        heroAccent: 'MERN Stack Developer',
        desc: 'Engineer modern responsive web platforms using MongoDB, Express, React, and Node.js with state management and cloud hosting.',
        heroFeatures: [
            'MongoDB NoSQL Databases',
            'Express.js RESTful APIs',
            'React 19 & Next.js Frameworks',
            'Node.js Async Services',
            'State Management (Zustand/Redux)',
            'Full Stack Cloud Deployment'
        ],
        techStack: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Docker'],
        topics: [
            {
                title: 'Advanced React & Modern UI Architecture',
                tool: 'React',
                desc: 'Build dynamic reactive applications using React 19, custom hooks, context, and modern component systems.',
                points: ['React component lifecycles, hooks, and performance memoization', 'Global state management with Zustand and Redux Toolkit', 'Responsive styling with TailwindCSS and custom design systems', 'Form handling, client validation, and routing with React Router'],
                practicalLab: 'Build an interactive dashboard application with real-time state management and dark mode.'
            },
            {
                title: 'Node.js & Express REST Backend',
                tool: 'Node.js',
                desc: 'Architect robust RESTful APIs with Node.js and Express, implementing authentication and security middleware.',
                points: ['Asynchronous event loop, stream processing, and buffers', 'Express routing, custom middleware pipelines, and error handlers', 'JWT authentication, password hashing, and cookie sessions', 'CORS policies, rate limiting, and helmet security headers'],
                practicalLab: 'Create a secure REST API backend with user authentication and token refresh.'
            },
            {
                title: 'MongoDB NoSQL & Mongoose Modeling',
                tool: 'MongoDB',
                desc: 'Design document schemas, execute aggregation pipelines, and manage database performance with Mongoose.',
                points: ['MongoDB document structure and schema design principles', 'Mongoose models, validation, middleware, and virtuals', 'Complex aggregation pipelines, filtering, and pagination', 'Indexing strategies and query optimization for high throughput'],
                practicalLab: 'Design a high-volume database schema for an e-commerce platform with Mongoose.'
            },
            {
                title: 'Real-Time Features with WebSockets',
                tool: 'JavaScript',
                desc: 'Implement live real-time bidirectional communication using Socket.io for chat, alerts, and live updates.',
                points: ['WebSocket handshake protocol and bidirectional connections', 'Socket.io rooms, namespaces, and event broadcasting', 'Integrating WebSocket events with React state', 'Handling disconnections, reconnections, and state sync'],
                practicalLab: 'Build a live multi-room collaborative workspace with real-time updates.'
            },
            {
                title: 'Docker & Cloud Deployment',
                tool: 'Docker',
                desc: 'Containerize MERN stack applications with Docker and deploy to production cloud hosting platforms.',
                points: ['Writing Dockerfiles for React frontend and Node backend', 'Orchestrating multi-container apps with Docker Compose', 'Deploying frontend to Vercel/Netlify and backend to Render/AWS', 'Configuring custom domains, SSL certificates, and CI/CD'],
                practicalLab: 'Deploy a complete production MERN application live on cloud infrastructure.'
            }
        ],
        projects: [
            {
                title: 'Full Stack E-Commerce Platform',
                subtitle: 'MERN Web Application',
                icon: 'fa-solid fa-cart-shopping',
                iconColor: '#5d4cf7',
                desc: 'Comprehensive shopping experience with catalog filtering, cart state, payment processing, and admin orders portal.',
                tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
            },
            {
                title: 'Real-Time Collaboration Workspace',
                subtitle: 'Socket.io Application',
                icon: 'fa-solid fa-users-viewfinder',
                iconColor: '#10b981',
                desc: 'Live team collaboration tool with shared task boards, presence indicators, and instant messaging.',
                tags: ['React', 'Socket.io', 'Express', 'Tailwind']
            },
            {
                title: 'SaaS Subscription Dashboard',
                subtitle: 'Multi-Tenant Portal',
                icon: 'fa-solid fa-chart-pie',
                iconColor: '#3b82f6',
                desc: 'Business management tool with interactive data visualization, customer accounts, and subscription tiers.',
                tags: ['MERN', 'Chart.js', 'JWT', 'MongoDB']
            },
            {
                title: 'Social Networking Platform',
                subtitle: 'Media & Community App',
                icon: 'fa-solid fa-hashtag',
                iconColor: '#ec4899',
                desc: 'Social feed application supporting user profiles, media uploads, likes, comments, and notifications.',
                tags: ['React', 'Express', 'Cloudinary', 'Mongoose']
            }
        ],
        reviews: [
            {
                name: 'Dinesh K.',
                role: 'MERN Trainee',
                initials: 'DK',
                quote: 'Building the real-time collaboration tool gave me exact talking points for my successful full stack interviews.',
                stars: 5
            },
            {
                name: 'Lavanya M.',
                role: 'Frontend Developer',
                initials: 'LM',
                quote: 'The deep dive into React state with Zustand and connecting to MongoDB backends was phenomenal.',
                stars: 5
            },
            {
                name: 'Surya R.',
                role: 'Full Stack Trainee',
                initials: 'SR',
                quote: 'I learned clean REST architectural patterns, JWT auth, and deployed live projects to production.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What is the MERN stack?',
                a: 'MERN stands for MongoDB, Express.js, React, and Node.js — the most popular full-stack JavaScript technology stack.'
            },
            {
                q: 'Do I need prior experience in JavaScript?',
                a: 'Basic familiarity with HTML, CSS, and JavaScript is helpful. We cover advanced JavaScript and React thoroughly.'
            },
            {
                q: 'Will my projects be hosted live?',
                a: 'Yes, you will deploy your projects live to production cloud platforms with your own live URLs.'
            },
            {
                q: 'Is state management included?',
                a: 'Yes, we cover modern state management techniques using Zustand and Redux Toolkit.'
            },
            {
                q: 'Do you offer placement support for MERN developers?',
                a: 'Yes, we provide resume polishing, portfolio reviews, mock technical interviews, and placement referrals.'
            }
        ]
    },

    {
        slug: 'cloud-aws',
        id: 'cloud-aws',
        title: 'Cloud Computing with AWS',
        category: 'Cloud',
        badge: 'CLOUD PROGRAM',
        heroAccent: 'AWS Cloud Solutions Architect',
        desc: 'Architect resilient cloud networks, automate serverless infrastructure, and manage scalable cloud operations on Amazon Web Services.',
        heroFeatures: [
            'AWS Core (EC2, S3, IAM, VPC)',
            'Serverless (Lambda & API Gateway)',
            'Terraform Infrastructure as Code',
            'Docker & Container Services (ECS)',
            'High Availability & Disaster Recovery',
            'Cost Optimization & Security'
        ],
        techStack: ['AWS', 'Docker', 'Kubernetes', 'Python', 'Git'],
        topics: [
            {
                title: 'AWS Foundations & IAM Security',
                tool: 'AWS',
                desc: 'Master AWS global infrastructure, root security, Identity & Access Management (IAM), and least-privilege security policies.',
                points: ['AWS Global Infrastructure: Regions, Availability Zones, and Edge Locations', 'IAM Users, Groups, Roles, Policies, and Multi-Factor Authentication', 'Service Control Policies (SCPs) and security governance', 'Billing alerts, AWS Cost Explorer, and AWS Budgets setup'],
                practicalLab: 'Configure an enterprise IAM security framework with least-privilege roles and MFA enforcement.'
            },
            {
                title: 'Virtual Private Cloud (VPC) Networking',
                tool: 'AWS',
                desc: 'Design secure isolated virtual cloud networks, public/private subnets, NAT Gateways, Route Tables, and Security Groups.',
                points: ['IPv4 CIDR block allocation and subnet segmentation', 'Internet Gateways, NAT Gateways, and Route Table routing', 'Security Groups vs Network Access Control Lists (NACLs)', 'VPC Peering, Transit Gateways, and VPN connections'],
                practicalLab: 'Architect a production-grade multi-tier VPC network spanning multiple Availability Zones.'
            },
            {
                title: 'Compute & Storage Architecture (EC2 & S3)',
                tool: 'AWS',
                desc: 'Deploy resilient compute instances with Auto Scaling, Elastic Load Balancers, and scalable object storage on S3.',
                points: ['EC2 instance types, EBS volumes, and AMI image creation', 'Application Load Balancers (ALB) and Auto Scaling Groups (ASG)', 'Amazon S3 storage classes, bucket policies, and lifecycle management', 'Static website hosting and CloudFront CDN distribution'],
                practicalLab: 'Deploy an auto-scaling web application behind an Application Load Balancer with S3 assets.'
            },
            {
                title: 'Serverless Applications with AWS Lambda',
                tool: 'Python',
                desc: 'Build event-driven serverless architectures with AWS Lambda, API Gateway, DynamoDB, and CloudWatch.',
                points: ['AWS Lambda function development in Python/Node.js', 'Amazon API Gateway REST APIs and Lambda proxy integration', 'Amazon DynamoDB NoSQL tables, keys, and queries', 'Amazon CloudWatch logs, metrics, alarms, and SNS notifications'],
                practicalLab: 'Build a serverless REST API processing data into DynamoDB with zero server maintenance.'
            },
            {
                title: 'Infrastructure as Code with Terraform',
                tool: 'AWS',
                desc: 'Automate reproducible cloud provisioning using Terraform (HCL), managing states, modules, and CI/CD deployment.',
                points: ['Terraform providers, resources, variables, and output values', 'Managing Terraform state files remotely in S3 with DynamoDB locking', 'Reusable Terraform modules for multi-environment deployments', 'Automating cloud provisioning in CI/CD pipelines'],
                practicalLab: 'Automate the deployment of a complete AWS infrastructure stack using Terraform modules.'
            }
        ],
        projects: [
            {
                title: 'High-Availability Web Infrastructure',
                subtitle: 'Fault-Tolerant AWS Architecture',
                icon: 'fa-brands fa-aws',
                iconColor: '#ff9900',
                desc: 'Multi-AZ cloud infrastructure with Auto Scaling EC2 instances, Application Load Balancers, and multi-AZ RDS.',
                tags: ['AWS VPC', 'EC2', 'ALB', 'RDS']
            },
            {
                title: 'Serverless E-Commerce Backend',
                subtitle: 'Event-Driven Cloud Architecture',
                icon: 'fa-solid fa-cloud-bolt',
                iconColor: '#3b82f6',
                desc: 'Zero-maintenance serverless API handling orders and inventory utilizing Lambda, API Gateway, and DynamoDB.',
                tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Python']
            },
            {
                title: 'Automated Terraform Cloud Stack',
                subtitle: 'Infrastructure as Code',
                icon: 'fa-solid fa-cube',
                iconColor: '#8b5cf6',
                desc: 'Production-ready Terraform codebase provisioning complete VPC, security groups, and compute infrastructure automatically.',
                tags: ['Terraform', 'IaC', 'AWS', 'Git']
            },
            {
                title: 'Global CDN & Media Delivery Portal',
                subtitle: 'Low-Latency Content Delivery',
                icon: 'fa-solid fa-globe',
                iconColor: '#10b981',
                desc: 'Secure static web hosting on Amazon S3 distributed globally via CloudFront with SSL certificate management.',
                tags: ['CloudFront', 'S3', 'ACM', 'Route 53']
            }
        ],
        reviews: [
            {
                name: 'Madhavan T.',
                role: 'Cloud Architect Trainee',
                initials: 'MT',
                quote: 'The hands-on VPC networking and Terraform automation modules gave me true enterprise cloud architecture skills.',
                stars: 5
            },
            {
                name: 'Soundarya S.',
                role: 'AWS Solutions Trainee',
                initials: 'SS',
                quote: 'Building serverless apps on Lambda and DynamoDB was incredible. Cleared my AWS Certified Solutions Architect exam easily!',
                stars: 5
            },
            {
                name: 'Rajesh K.',
                role: 'Cloud Engineer',
                initials: 'RK',
                quote: 'Practical, well-structured, and zero-fluff cloud training. Highly recommended for anyone entering cloud computing.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'Does this prepare me for the AWS Solutions Architect exam?',
                a: 'Yes, the curriculum directly aligns with the objectives of the AWS Certified Solutions Architect Associate (SAA-C03) exam.'
            },
            {
                q: 'Do I need my own AWS account?',
                a: 'We guide you through setting up an AWS Free Tier account, which covers the vast majority of our hands-on exercises.'
            },
            {
                q: 'Is coding required for Cloud Computing with AWS?',
                a: 'Basic Python/bash scripting is helpful for Lambda and automation, but the main focus is cloud networking, security, and architecture.'
            },
            {
                q: 'What is Infrastructure as Code (IaC)?',
                a: 'IaC allows you to define and provision cloud servers using code (Terraform) rather than manual console clicking, a vital modern skill.'
            },
            {
                q: 'What roles can I apply for after this program?',
                a: 'AWS Cloud Engineer, Cloud Operations Specialist, Solutions Architect Associate, and Cloud Support Engineer.'
            }
        ]
    },

    // ══════════════════════════════════════════════════════════════════
    // 3. INTERNSHIP TRACKS (from flipInternships in courses.html)
    // ══════════════════════════════════════════════════════════════════
    {
        slug: 'full-stack-internship',
        id: 'full-stack-internship',
        title: 'Full Stack Web Development Internship',
        category: 'Internship',
        badge: 'CORP INTERNSHIP',
        heroAccent: 'Full Stack Engineering Intern',
        desc: 'Build real production-ready web platforms using React, Node.js, and databases inside an agile corporate software team.',
        heroFeatures: [
            'Agile Sprints & Standups',
            'Production Codebase Contributions',
            'Full Stack Architecture',
            'Git Flow & Code Reviews',
            'Real-Time Client Deliverables',
            'Internship Experience Certificate'
        ],
        techStack: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
        topics: [
            {
                title: 'Corporate Agile Workflows & Git Collaboration',
                tool: 'Git',
                desc: 'Work in sprint cycles, write clean commits, open pull requests, and participate in peer code reviews.',
                points: ['Agile sprint planning, backlog grooming, and daily standups', 'Git branching conventions, squashing, and PR templates', 'Navigating large corporate monorepos and codebase standards', 'Setting up local development environments and linters'],
                practicalLab: 'Fork a corporate repository, create a feature branch, and pass automated CI checks.'
            },
            {
                title: 'Production Frontend Development with React & TS',
                tool: 'React',
                desc: 'Build enterprise UI features using React, TypeScript, reusable design systems, and state management.',
                points: ['TypeScript interfaces, generics, and strict type safety', 'Building accessible responsive components from design specs', 'State management patterns and optimized rendering', 'Writing unit tests with Vitest / React Testing Library'],
                practicalLab: 'Develop a responsive customer dashboard feature with full TypeScript typing.'
            },
            {
                title: 'Backend API Engineering & Middleware',
                tool: 'Node.js',
                desc: 'Develop secure REST endpoints, database integration, authentication, and error handling.',
                points: ['Asynchronous Node.js microservices and Express routing', 'Token authentication, RBAC authorization, and validation', 'Database querying with Mongoose and schema validations', 'API documentation and integration testing with Supertest'],
                practicalLab: 'Build a secure multi-role administrative API endpoint with comprehensive unit tests.'
            },
            {
                title: 'Database Performance & Optimization',
                tool: 'MongoDB',
                desc: 'Optimize database queries, design efficient indexes, and ensure data integrity under load.',
                points: ['MongoDB indexing best practices and query explain plans', 'Handling transactions across multiple collections', 'Database connection pooling and caching strategies', 'Data migration scripts and automated backups'],
                practicalLab: 'Optimize a slow database query reducing response time by over 70%.'
            },
            {
                title: 'Production CI/CD & Cloud Deployment',
                tool: 'Docker',
                desc: 'Deploy code to staging and production environments using automated CI/CD pipelines.',
                points: ['Building Docker container images for microservices', 'Configuring continuous deployment on GitHub Actions', 'Monitoring error logs in production using Sentry', 'Zero-downtime releases and rollback procedures'],
                practicalLab: 'Deploy a tested feature live to the staging server with automated notifications.'
            }
        ],
        projects: [
            {
                title: 'Corporate Customer Portal',
                subtitle: 'Production Web App',
                icon: 'fa-solid fa-briefcase',
                iconColor: '#5d4cf7',
                desc: 'Client-facing enterprise portal with invoice history, support ticket submission, and profile settings.',
                tags: ['React', 'TypeScript', 'Node.js', 'MongoDB']
            },
            {
                title: 'Internal Admin CRM Tool',
                subtitle: 'Enterprise Operations',
                icon: 'fa-solid fa-users-gear',
                iconColor: '#10b981',
                desc: 'Operational management tool for tracking customer leads, communication logs, and sales stages.',
                tags: ['Node.js', 'React', 'REST APIs', 'Tailwind']
            },
            {
                title: 'Automated Document Processing API',
                subtitle: 'Backend Microservice',
                icon: 'fa-solid fa-file-invoice',
                iconColor: '#3b82f6',
                desc: 'High-speed backend service parsing uploaded documents, extracting data, and updating database records.',
                tags: ['Express', 'Node.js', 'MongoDB', 'Docker']
            },
            {
                title: 'Real-Time Notification Hub',
                subtitle: 'WebSocket Service',
                icon: 'fa-solid fa-bell',
                iconColor: '#f59e0b',
                desc: 'Live notification service pushing system events and user alerts instantly across open sessions.',
                tags: ['Socket.io', 'Node.js', 'TypeScript', 'Redis']
            }
        ],
        reviews: [
            {
                name: 'Abinaya T.',
                role: 'Full Stack Intern',
                initials: 'AT',
                quote: 'This internship gave me true corporate development experience. Writing production TypeScript made all the difference.',
                stars: 5
            },
            {
                name: 'Kishore M.',
                role: 'Software Intern',
                initials: 'KM',
                quote: 'I worked on live client tickets, participated in daily standups, and received an offer letter before my college graduation!',
                stars: 5
            },
            {
                name: 'Deepa V.',
                role: 'Web Engineering Intern',
                initials: 'DV',
                quote: 'The senior developer mentorship helped me write clean, maintainable code adhering to industry standards.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What is the format of the internship?',
                a: 'The internship is conducted remotely or in hybrid format with structured daily standups, sprint reviews, and mentor pairing.'
            },
            {
                q: 'Will I receive an experience letter?',
                a: 'Yes! Upon successful completion, you receive an official AROX Tech Internship Experience Certificate and Letter of Recommendation.'
            },
            {
                q: 'Do high-performing interns receive full-time placement offers?',
                a: 'Yes, top-performing interns are actively considered for junior engineering openings at AROX Tech and client partner companies.'
            },
            {
                q: 'Can college students apply for this internship?',
                a: 'Yes, students in pre-final and final years with basic full-stack coding foundations are welcome to apply.'
            },
            {
                q: 'What is the duration of the internship?',
                a: 'Internships are flexible between 1 to 3 months depending on academic scheduling and track requirements.'
            }
        ]
    },

    {
        slug: 'python-backend-internship',
        id: 'python-backend-internship',
        title: 'Python Backend Engineering Internship',
        category: 'Internship',
        badge: 'CORP INTERNSHIP',
        heroAccent: 'Python Backend Intern',
        desc: 'Engineer scalable backend microservices, REST APIs, and automated data processing jobs in a fast-paced engineering team.',
        heroFeatures: [
            'FastAPI & Django Microservices',
            'PostgreSQL Schema Design',
            'Redis Caching Architectures',
            'Docker Containerization',
            'Automated Unit Test Suites',
            'Corporate Agile Development'
        ],
        techStack: ['Python', 'Django', 'PostgreSQL', 'Docker'],
        topics: [
            {
                title: 'High-Throughput FastAPI Services',
                tool: 'Python',
                desc: 'Build asynchronous microservices with FastAPI, Pydantic data validation, and dependency injection.',
                points: ['FastAPI asynchronous route handlers and schema design', 'Token security with OAuth2 and JWT', 'Input validation, sanitization, and error responses', 'Unit testing async endpoints with pytest-asyncio'],
                practicalLab: 'Build an async microservice handling high-concurrency requests with Pydantic validation.'
            },
            {
                title: 'PostgreSQL Architecture & ORM Optimization',
                tool: 'PostgreSQL',
                desc: 'Model relational schemas, write optimized SQL queries, and handle database performance.',
                points: ['PostgreSQL schema design and foreign key relationships', 'SQLAlchemy / Django ORM query optimization', 'Preventing N+1 queries using prefetch and select_related', 'Database migrations and rollback management'],
                practicalLab: 'Optimize backend database queries to handle large dataset queries efficiently.'
            },
            {
                title: 'Redis Caching & Background Task Workers',
                tool: 'Python',
                desc: 'Accelerate response times using Redis caching and handle asynchronous background tasks with Celery.',
                points: ['Redis in-memory caching strategies and TTL expiration', 'Celery worker queues for asynchronous background tasks', 'Task monitoring and retry handling with Celery Flower', 'Message brokers and Redis pub/sub channels'],
                practicalLab: 'Implement Redis caching reducing API response times under 50ms.'
            },
            {
                title: 'Docker Containerization & Environments',
                tool: 'Docker',
                desc: 'Isolate services, manage multi-container environments, and ensure reproducible deployments.',
                points: ['Multi-stage Dockerfile creation for Python microservices', 'Docker Compose orchestration for databases and caches', 'Environment variables and secrets management', 'Container health checks and volume management'],
                practicalLab: 'Containerize an entire backend service with PostgreSQL and Redis dependencies.'
            },
            {
                title: 'Corporate CI/CD Pipelines & Testing',
                tool: 'Python',
                desc: 'Write automated PyTest test suites and configure GitHub Actions for continuous integration.',
                points: ['Unit testing, integration testing, and test fixtures with PyTest', 'Code coverage reporting and linting with Flake8/Black', 'GitHub Actions workflow configuration for automated tests', 'Staging deployment automation and release tagging'],
                practicalLab: 'Set up an automated GitHub Actions pipeline enforcing 80%+ test coverage.'
            }
        ],
        projects: [
            {
                title: 'High-Throughput Analytics API',
                subtitle: 'Microservice Architecture',
                icon: 'fa-solid fa-chart-line',
                iconColor: '#34D399',
                desc: 'Asynchronous API collecting and aggregating live user activity metrics with Redis caching.',
                tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker']
            },
            {
                title: 'Automated Background Task Worker',
                subtitle: 'Distributed Queue',
                icon: 'fa-solid fa-gears',
                iconColor: '#3b82f6',
                desc: 'Celery worker system processing scheduled PDF generation and automated notification dispatches.',
                tags: ['Celery', 'Redis', 'Python', 'PostgreSQL']
            },
            {
                title: 'Secure Authentication & RBAC Service',
                subtitle: 'Security Microservice',
                icon: 'fa-solid fa-lock',
                iconColor: '#8b5cf6',
                desc: 'Multi-tenant auth service issuing JWT tokens, refresh tokens, and managing role permissions.',
                tags: ['Python', 'FastAPI', 'JWT', 'OAuth2']
            },
            {
                title: 'Database Migration & Sync Tool',
                subtitle: 'Data Engineering Tool',
                icon: 'fa-solid fa-database',
                iconColor: '#f59e0b',
                desc: 'Automated data synchronization script migrating legacy records into optimized PostgreSQL schemas.',
                tags: ['Python', 'SQLAlchemy', 'PostgreSQL', 'Alembic']
            }
        ],
        reviews: [
            {
                name: 'Aakash V.',
                role: 'Python Intern',
                initials: 'AV',
                quote: 'Writing asynchronous FastAPI microservices and setting up Redis caching was deeply practical and rewarding.',
                stars: 5
            },
            {
                name: 'Ramya S.',
                role: 'Backend Intern',
                initials: 'RS',
                quote: 'The emphasis on writing clean PyTest suites and Dockerizing services gave me genuine professional engineering skills.',
                stars: 5
            },
            {
                name: 'Saravanan K.',
                role: 'Software Intern',
                initials: 'SK',
                quote: 'Loved working with Celery queues and PostgreSQL optimization. Outstanding mentorship throughout.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What projects will I work on during the internship?',
                a: 'You will contribute to real backend microservices, write clean API endpoints, build caching layers, and automate workflows.'
            },
            {
                q: 'Is this internship remote?',
                a: 'Yes, this internship is fully remote with structured online daily standups and weekly sprint reviews.'
            },
            {
                q: 'Will I receive an official certificate and letter?',
                a: 'Yes, you receive an official Internship Completion Certificate and performance recommendation letter.'
            },
            {
                q: 'What are the required qualifications?',
                a: 'Basic knowledge of Python syntax and fundamental database concepts. We train you on framework specifics.'
            },
            {
                q: 'How long is the internship?',
                a: 'Duration is typically 1 to 3 months tailored to your availability and academic schedule.'
            }
        ]
    },

    {
        slug: 'ui-ux-design-internship',
        id: 'ui-ux-design-internship',
        title: 'UI/UX Product Design Internship',
        category: 'Internship',
        badge: 'CORP INTERNSHIP',
        heroAccent: 'UI/UX Design Intern',
        desc: 'Prototype enterprise-grade digital products and master complete product design systems within an active product team.',
        heroFeatures: [
            'Figma Auto-Layout & Design Systems',
            'User Journey Mapping & Research',
            'Interactive High-Fidelity Prototypes',
            'Design Review Presentations',
            'Developer Handoff Specifications',
            'Experience Certificate & Portfolio'
        ],
        techStack: ['Figma', 'HTML5', 'CSS3', 'React'],
        topics: [
            {
                title: 'Advanced Figma Component Systems',
                tool: 'Figma',
                desc: 'Build scalable design systems with nested components, dynamic variables, and auto-layout.',
                points: ['Figma variables for color, spacing, and multi-brand theming', 'Component variants and interactive states', 'Auto-layout responsive scaling for mobile and desktop', 'Design token organization for developer handoff'],
                practicalLab: 'Create a multi-screen product UI library with responsive auto-layout components.'
            },
            {
                title: 'UX Research & User Journey Mapping',
                tool: 'Figma',
                desc: 'Conduct user research, synthesize user feedback, and map customer journeys.',
                points: ['User research interviews and empathy mapping', 'Defining core user personas and pain points', 'Information architecture and wireframe wireflows', 'Competitor benchmarking and UX heuristics'],
                practicalLab: 'Conduct a UX audit on an existing web application and present redesign recommendations.'
            },
            {
                title: 'High-Fidelity Interactive Prototyping',
                tool: 'Figma',
                desc: 'Create realistic interactive micro-interactions, smart animations, and user test prototypes.',
                points: ['Smart animation transitions and spring curves', 'Interactive prototype variables and conditionals', 'Mobile gestures and scroll triggers', 'Conducting usability testing sessions with stakeholders'],
                practicalLab: 'Build a clickable high-fidelity prototype simulating a complex checkout flow.'
            },
            {
                title: 'Design Handoff & Developer Collaboration',
                tool: 'HTML5',
                desc: 'Prepare clear developer documentation, inspect properties, and understand frontend implementation constraints.',
                points: ['Figma Dev Mode annotations and measurements', 'Understanding CSS Flexbox and Grid layout behavior', 'SVG icon export optimization and asset management', 'Design QA testing against live developed web pages'],
                practicalLab: 'Create an exhaustive design handoff document annotated for frontend engineering.'
            },
            {
                title: 'Portfolio Case Study Development',
                tool: 'Figma',
                desc: 'Synthesize your internship projects into polished, recruiter-ready case studies.',
                points: ['Structuring storytelling in design case studies', 'Highlighting business impact and user problem solving', 'Creating high-impact mockups and device presentations', 'Publishing your design case study to Behance or personal portfolio'],
                practicalLab: 'Complete and publish a full product design case study from your internship project.'
            }
        ],
        projects: [
            {
                title: 'Enterprise SaaS Dashboard UI',
                subtitle: 'Web Application Design',
                icon: 'fa-solid fa-table-columns',
                iconColor: '#5d4cf7',
                desc: 'Complete responsive dashboard interface with data tables, chart widgets, and light/dark modes.',
                tags: ['Figma', 'Auto-Layout', 'Design System']
            },
            {
                title: 'Mobile Banking Experience',
                subtitle: 'iOS / Android UX',
                icon: 'fa-solid fa-wallet',
                iconColor: '#10b981',
                desc: 'Clean mobile wallet application featuring biometric security and instant transaction history.',
                tags: ['Mobile UX', 'Figma', 'Prototyping']
            },
            {
                title: 'Design System & Component Library',
                subtitle: 'Tokenized Library',
                icon: 'fa-solid fa-cubes',
                iconColor: '#f59e0b',
                desc: 'Comprehensive design system with over 40 tokenized components and full documentation.',
                tags: ['Variables', 'Figma Tokens', 'Components']
            },
            {
                title: 'E-Commerce Checkout Redesign',
                subtitle: 'Conversion Optimization',
                icon: 'fa-solid fa-cart-shopping',
                iconColor: '#ec4899',
                desc: 'Streamlined multi-step checkout flow reducing friction and cart abandonment.',
                tags: ['UX Research', 'CRO', 'Wireframes']
            }
        ],
        reviews: [
            {
                name: 'Nandhini K.',
                role: 'UI/UX Intern',
                initials: 'NK',
                quote: 'Designing real product interfaces and having my work reviewed by senior designers accelerated my growth tremendously.',
                stars: 5
            },
            {
                name: 'Tarun M.',
                role: 'Product Design Intern',
                initials: 'TM',
                quote: 'The case study I built during this internship helped me secure multiple design interviews!',
                stars: 5
            },
            {
                name: 'Varshini S.',
                role: 'Design Intern',
                initials: 'VS',
                quote: 'Figma variables and auto-layout became second nature to me. Fantastic corporate learning experience.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What tools will I use in this design internship?',
                a: 'Figma is the primary design and prototyping tool used throughout all sprint projects.'
            },
            {
                q: 'Will I have real case studies for my portfolio?',
                a: 'Yes, you will develop two complete, in-depth design case studies with mentor feedback.'
            },
            {
                q: 'Do I need prior graphic design skills?',
                a: 'No freehand drawing or art skills are needed. We focus on digital product layout, usability, and design systems.'
            },
            {
                q: 'Is this internship remote?',
                a: 'Yes, you can participate remotely with scheduled design review and critique meetings.'
            },
            {
                q: 'Will I receive an official certificate?',
                a: 'Yes, an official Internship Experience Certificate is provided upon completing project deliverables.'
            }
        ]
    },

    {
        slug: 'ai-agent-internship',
        id: 'ai-agent-internship',
        title: 'AI Agent Engineering Internship',
        category: 'Internship',
        badge: 'CORP INTERNSHIP',
        heroAccent: 'AI Agent & LLM Intern',
        desc: 'Orchestrate LLMs, build retrieval-augmented generation (RAG) pipelines, and deploy autonomous AI agents.',
        heroFeatures: [
            'LLM Orchestration & Prompting',
            'Vector Databases (Chroma / Pinecone)',
            'Semantic Search & RAG Systems',
            'Autonomous AI Agent Chains',
            'FastAPI Model Serving',
            'Live Production AI Projects'
        ],
        techStack: ['Python', 'PostgreSQL', 'Docker', 'Git'],
        topics: [
            {
                title: 'LLM Orchestration & Prompt Engineering',
                tool: 'Python',
                desc: 'Master prompt architectures, function calling, structured outputs, and token optimization.',
                points: ['Zero-shot, few-shot, and Chain-of-Thought prompting strategies', 'Structured JSON outputs using Pydantic schemas', 'LLM function calling and tool execution workflows', 'Token cost estimation and latency optimizations'],
                practicalLab: 'Build an automated LLM extraction agent extracting structured financial data from raw reports.'
            },
            {
                title: 'Vector Databases & Semantic Search',
                tool: 'PostgreSQL',
                desc: 'Generate vector embeddings, store high-dimensional vectors, and execute semantic similarity searches.',
                points: ['Embedding models (OpenAI, HuggingFace, sentence-transformers)', 'Vector indexing with ChromaDB and pgvector in PostgreSQL', 'Cosine similarity and nearest neighbor search strategies', 'Hybrid search combining full-text SQL and semantic vectors'],
                practicalLab: 'Implement a semantic document search engine with pgvector and similarity thresholds.'
            },
            {
                title: 'Retrieval-Augmented Generation (RAG) Architectures',
                tool: 'Python',
                desc: 'Design end-to-end RAG pipelines with document chunking, re-ranking, and hallucination guardrails.',
                points: ['Document parsing, semantic chunking, and metadata tagging', 'Retrieval re-ranking using Cross-Encoders', 'Prompt injection defense and hallucination evaluation metrics', 'Conversational memory management across multi-turn chats'],
                practicalLab: 'Develop a production RAG assistant answering domain queries with source citations.'
            },
            {
                title: 'Autonomous Multi-Agent Systems',
                tool: 'Python',
                desc: 'Build multi-agent collaboration workflows with LangGraph and CrewAI for automated research and execution.',
                points: ['Agent loops, planning steps, and self-correction cycles', 'Multi-agent orchestration and role delegation', 'Equipping agents with custom search, calculation, and API tools', 'Managing agent state and infinite loop safeguards'],
                practicalLab: 'Create an autonomous market research agent that scrapes web data and produces executive summaries.'
            },
            {
                title: 'Production AI Deployment & Monitoring',
                tool: 'Docker',
                desc: 'Deploy AI agents via FastAPI endpoints, containerize with Docker, and track LLM observability.',
                points: ['FastAPI asynchronous streaming endpoints for LLM responses', 'Containerizing AI workflows with Docker Compose', 'LLM observability and tracing with LangSmith / Phoenix', 'Rate limiting and graceful error handling on API outages'],
                practicalLab: 'Deploy a containerized AI agent API with streaming responses and token tracking.'
            }
        ],
        projects: [
            {
                title: 'Enterprise Document RAG Assistant',
                subtitle: 'Knowledge Retrieval System',
                icon: 'fa-solid fa-brain',
                iconColor: '#8b5cf6',
                desc: 'Intelligent assistant indexing technical manuals and generating accurate answers with highlighted citations.',
                tags: ['RAG', 'Python', 'ChromaDB', 'FastAPI']
            },
            {
                title: 'Autonomous Market Research Agent',
                subtitle: 'Multi-Agent Workflow',
                icon: 'fa-solid fa-robot',
                iconColor: '#10b981',
                desc: 'Autonomous agent that searches the web, analyzes competitor pricing, and compiles structured market reports.',
                tags: ['LangGraph', 'Python', 'Agents', 'Scraping']
            },
            {
                title: 'Customer Support AI Triage Agent',
                subtitle: 'Automated Ticket Resolution',
                icon: 'fa-solid fa-headset',
                iconColor: '#3b82f6',
                desc: 'Real-time support agent resolving customer queries and escalating complex tickets with summarized context.',
                tags: ['LLM', 'FastAPI', 'PostgreSQL', 'WebSockets']
            },
            {
                title: 'SQL Query Assistant Agent',
                subtitle: 'Text-to-SQL Engine',
                icon: 'fa-solid fa-database',
                iconColor: '#f59e0b',
                desc: 'Natural language interface translating English questions into safe, optimized PostgreSQL queries.',
                tags: ['Text-to-SQL', 'Python', 'PostgreSQL', 'Pydantic']
            }
        ],
        reviews: [
            {
                name: 'Bhuvanesh R.',
                role: 'AI Engineering Intern',
                initials: 'BR',
                quote: 'Building RAG systems and autonomous multi-agent pipelines with LangGraph was thrilling and future-proof.',
                stars: 5
            },
            {
                name: 'Kavitha M.',
                role: 'LLM Intern',
                initials: 'KM',
                quote: 'The hands-on experience with vector embeddings and pgvector gave me real cutting-edge engineering skills.',
                stars: 5
            },
            {
                name: 'Nithish S.',
                role: 'AI Intern',
                initials: 'NS',
                quote: 'I deployed a live AI agent that answers queries over corporate PDFs with zero hallucinations. Incredible internship!',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What skills are required for the AI Agent Internship?',
                a: 'Proficiency in Python programming and basic understanding of REST APIs is required. We teach LLM tooling.'
            },
            {
                q: 'Do we work with real LLMs and APIs?',
                a: 'Yes, you work hands-on with leading OpenAI, Anthropic, and open-source HuggingFace models.'
            },
            {
                q: 'What is a RAG pipeline?',
                a: 'RAG (Retrieval-Augmented Generation) connects LLMs to custom private data to give accurate answers with source citations.'
            },
            {
                q: 'Is this internship remote?',
                a: 'Yes, this internship is 100% remote with regular code reviews and online sprint meetings.'
            },
            {
                q: 'Will I receive an official certificate?',
                a: 'Yes, you receive an official AROX Tech AI Engineering Internship Certificate and reference letter.'
            }
        ]
    },

    {
        slug: 'cloud-devops-internship',
        id: 'cloud-devops-internship',
        title: 'Cloud & DevOps Engineering Internship',
        category: 'Internship',
        badge: 'CORP INTERNSHIP',
        heroAccent: 'Cloud & DevOps Intern',
        desc: 'Deploy serverless cloud architectures, automate infrastructure with Terraform, and configure production CI/CD pipelines.',
        heroFeatures: [
            'AWS Cloud Infrastructure',
            'Docker Containerization',
            'Kubernetes Cluster Management',
            'CI/CD Pipeline Automation',
            'Terraform Infrastructure as Code',
            'Real-World Production Deploys'
        ],
        techStack: ['AWS', 'Docker', 'Python', 'Git'],
        topics: [
            {
                title: 'AWS Cloud Networking & Security',
                tool: 'AWS',
                desc: 'Configure AWS VPC networks, security groups, IAM access policies, and serverless compute.',
                points: ['VPC subnet architecture and NAT Gateway routing', 'IAM roles, security policies, and permission boundaries', 'Deploying EC2 fleets behind Application Load Balancers', 'Monitoring infrastructure with Amazon CloudWatch alarms'],
                practicalLab: 'Provision a secure multi-tier AWS VPC network with private database subnets.'
            },
            {
                title: 'Docker Microservices Packaging',
                tool: 'Docker',
                desc: 'Containerize microservices, write optimized multi-stage Dockerfiles, and orchestrate with Docker Compose.',
                points: ['Building lightweight multi-stage Docker images', 'Managing container volumes and virtual networks', 'Docker Compose orchestration for multi-tier applications', 'Container vulnerability scanning and best practices'],
                practicalLab: 'Build a production Dockerfile reducing container image size by over 60%.'
            },
            {
                title: 'CI/CD Automation with GitHub Actions',
                tool: 'Git',
                desc: 'Build continuous integration and delivery pipelines that test, build, scan, and deploy code automatically.',
                points: ['Writing declarative GitHub Actions workflow YAML files', 'Running automated unit test matrices across Node/Python', 'Publishing Docker images automatically to Docker Hub / ECR', 'Zero-downtime deployment triggers to cloud servers'],
                practicalLab: 'Create an automated pipeline triggered on Git tag release that deploys to AWS.'
            },
            {
                title: 'Infrastructure as Code with Terraform',
                tool: 'AWS',
                desc: 'Automate reproducible cloud deployments using Terraform HCL scripts and remote state locking.',
                points: ['Writing Terraform resource blocks, variables, and outputs', 'Managing remote Terraform state in S3 with DynamoDB locking', 'Creating modular reusable infrastructure components', 'Planning and applying automated infrastructure changes'],
                practicalLab: 'Write a Terraform module provisioning an AWS web cluster with load balancing.'
            },
            {
                title: 'Observability & Incident Management',
                tool: 'Python',
                desc: 'Implement application logging, health alerts, and automated recovery procedures.',
                points: ['Centralized logging and metrics aggregation', 'Setting up health check probes and auto-recovery triggers', 'Incident response runbooks and automated alerts', 'Cloud cost monitoring and resource optimization'],
                practicalLab: 'Configure automated Slack alerts triggered on high server CPU or error rate spikes.'
            }
        ],
        projects: [
            {
                title: 'Automated Cloud CI/CD Pipeline',
                subtitle: 'DevOps Automation Suite',
                icon: 'fa-solid fa-code-merge',
                iconColor: '#3b82f6',
                desc: 'End-to-end GitHub Actions pipeline that lints, tests, builds Docker images, and deploys to AWS.',
                tags: ['GitHub Actions', 'Docker', 'AWS', 'Python']
            },
            {
                title: 'Terraform AWS Infrastructure Stack',
                subtitle: 'Infrastructure as Code',
                icon: 'fa-solid fa-cubes-stacked',
                iconColor: '#ff9900',
                desc: 'Reproducible Terraform codebase provisioning a complete VPC, auto-scaling compute, and security groups.',
                tags: ['Terraform', 'AWS', 'VPC', 'IaC']
            },
            {
                title: 'Containerized Microservice Fleet',
                subtitle: 'Docker Orchestration',
                icon: 'fa-brands fa-docker',
                iconColor: '#0db7ed',
                desc: 'Multi-service architecture running frontend, backend, database, and caching containers in harmony.',
                tags: ['Docker', 'Compose', 'Nginx', 'PostgreSQL']
            },
            {
                title: 'Cloud Infrastructure Health Monitor',
                subtitle: 'Site Reliability Engineering',
                icon: 'fa-solid fa-heart-pulse',
                iconColor: '#10b981',
                desc: 'Automated monitoring tool capturing cloud performance metrics and dispatching incident alerts.',
                tags: ['CloudWatch', 'Python', 'Alerts', 'Slack']
            }
        ],
        reviews: [
            {
                name: 'Karthik B.',
                role: 'Cloud DevOps Intern',
                initials: 'KB',
                quote: 'Configuring automated GitHub Actions pipelines and writing Terraform modules gave me exact enterprise DevOps experience.',
                stars: 5
            },
            {
                name: 'Divakar P.',
                role: 'Cloud Intern',
                initials: 'DP',
                quote: 'I learned Docker multi-stage builds and AWS VPC networking from scratch. Very supportive senior mentorship.',
                stars: 5
            },
            {
                name: 'Anitha R.',
                role: 'DevOps Intern',
                initials: 'AR',
                quote: 'The real-world focus on zero-downtime deployments and infrastructure automation made this internship stand out.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What cloud platforms will I work with?',
                a: 'You will work with Amazon Web Services (AWS) alongside Docker containerization and Terraform.'
            },
            {
                q: 'Do I need prior Linux experience?',
                a: 'Basic familiarity with the command line is helpful. We guide you through cloud Linux environments step-by-step.'
            },
            {
                q: 'Will I work on live deployments?',
                a: 'Yes, you will write automated CI/CD pipelines and provision real cloud resources.'
            },
            {
                q: 'Is this internship remote?',
                a: 'Yes, this internship is fully remote with regular mentor check-ins and code reviews.'
            },
            {
                q: 'Will I receive an official certificate?',
                a: 'Yes, an official AROX Tech Cloud & DevOps Internship Certificate and recommendation letter are issued upon completion.'
            }
        ]
    },

    {
        slug: 'mobile-app-internship',
        id: 'mobile-app-internship',
        title: 'Mobile App Engineering Internship',
        category: 'Internship',
        badge: 'CORP INTERNSHIP',
        heroAccent: 'Mobile Application Intern',
        desc: 'Build native and cross-platform mobile apps for iOS and Android using React Native, TypeScript, and cloud APIs.',
        heroFeatures: [
            'React Native & Expo Ecosystem',
            'Cross-Platform Mobile UI',
            'Native Device API Integration',
            'Offline-First Data Storage',
            'App Store & Play Store Builds',
            'Corporate Agile Development'
        ],
        techStack: ['Android', 'React Native', 'TypeScript', 'Git'],
        topics: [
            {
                title: 'React Native & TypeScript Architecture',
                tool: 'React Native',
                desc: 'Build robust cross-platform mobile apps with React Native, TypeScript typing, and clean state architecture.',
                points: ['Strict TypeScript typing for components, props, and API models', 'React Navigation: stack, tab, and drawer navigation flows', 'Custom reusable component libraries with mobile-first styling', 'State management with Zustand and Context API'],
                practicalLab: 'Develop a typed mobile application interface with multi-tab navigation.'
            },
            {
                title: 'Native Hardware APIs & Device Features',
                tool: 'Android',
                desc: 'Access native device hardware APIs including Camera, GPS location, push alerts, and biometrics.',
                points: ['Camera photo capture, compression, and media permissions', 'Real-time GPS geofencing and background location tracking', 'Biometric authentication (Face ID and Fingerprint unlock)', 'Handling native app permissions gracefully across Android and iOS'],
                practicalLab: 'Build a mobile feature accessing device GPS location and camera capture.'
            },
            {
                title: 'Offline Storage & API Integration',
                tool: 'TypeScript',
                desc: 'Integrate RESTful backends, handle offline caching, and sync data when connection is restored.',
                points: ['Connecting mobile frontends to REST APIs with Axios/React Query', 'Offline data persistence with MMKV and SQLite', 'Optimistic UI updates and network reconnect synchronization', 'Error boundary handling and friendly offline banners'],
                practicalLab: 'Implement offline-first data caching with automatic background synchronization.'
            },
            {
                title: 'Push Notifications & Real-Time Sync',
                tool: 'React Native',
                desc: 'Configure push notifications with Firebase Cloud Messaging (FCM) and implement live updates.',
                points: ['Firebase Cloud Messaging (FCM) token registration', 'Handling foreground, background, and quit-state push notifications', 'WebSocket integration for live mobile chat and status updates', 'Deep linking from push notifications into specific app screens'],
                practicalLab: 'Configure push notifications with deep linking into specific mobile views.'
            },
            {
                title: 'Mobile App Release Packaging & QA',
                tool: 'Android',
                desc: 'Generate signed release bundles, optimize app bundle sizes, and prepare for store deployment.',
                points: ['Android Keystore generation and AAB release bundle compilation', 'ProGuard code obfuscation and assets optimization', 'Setting up Crashlytics for real-time mobile crash reporting', 'Participating in sprint QA and device testing matrices'],
                practicalLab: 'Compile and sign a production-ready Android App Bundle (AAB).'
            }
        ],
        projects: [
            {
                title: 'On-Demand Service Booking App',
                subtitle: 'Location-Based Mobile App',
                icon: 'fa-solid fa-map-pin',
                iconColor: '#3b82f6',
                desc: 'Mobile application allowing users to find local service providers, view live location, and book appointments.',
                tags: ['React Native', 'TypeScript', 'Google Maps', 'REST']
            },
            {
                title: 'Offline-First Expense Tracker',
                subtitle: 'Personal Finance Tool',
                icon: 'fa-solid fa-receipt',
                iconColor: '#10b981',
                desc: 'Personal finance tracker with receipt photo capture, offline caching, and visual category spending charts.',
                tags: ['React Native', 'MMKV', 'Charts', 'TypeScript']
            },
            {
                title: 'Team Messaging Mobile Client',
                subtitle: 'Real-Time Communication',
                icon: 'fa-solid fa-comments',
                iconColor: '#8b5cf6',
                desc: 'Mobile team messaging client supporting channels, direct chats, read receipts, and push notifications.',
                tags: ['React Native', 'WebSockets', 'FCM', 'Zustand']
            },
            {
                title: 'Health & Fitness Companion App',
                subtitle: 'Native Hardware Integration',
                icon: 'fa-solid fa-person-running',
                iconColor: '#f59e0b',
                desc: 'Fitness tracker logging daily step metrics, tracking running paths via GPS, and biometrics security.',
                tags: ['React Native', 'GPS', 'Biometrics', 'TypeScript']
            }
        ],
        reviews: [
            {
                name: 'Koushik V.',
                role: 'Mobile App Intern',
                initials: 'KV',
                quote: 'Building real cross-platform mobile apps with TypeScript and native GPS integration prepared me for my career.',
                stars: 5
            },
            {
                name: 'Bhavani R.',
                role: 'React Native Intern',
                initials: 'BR',
                quote: 'From offline storage with MMKV to compiling signed Android bundles, every sprint was thoroughly engaging.',
                stars: 5
            },
            {
                name: 'Madhesh S.',
                role: 'Mobile Intern',
                initials: 'MS',
                quote: 'The guidance from senior mobile developers helped me write clean component code and master navigation patterns.',
                stars: 5
            }
        ],
        faqs: [
            {
                q: 'What framework is used during the internship?',
                a: 'We primarily focus on React Native with TypeScript and Expo for cross-platform iOS and Android engineering.'
            },
            {
                q: 'Can I participate if I only have a Windows computer?',
                a: 'Yes, you can build, run, and test cross-platform apps using Windows with Android emulators or physical Android/iOS devices.'
            },
            {
                q: 'Will I learn how to build signed APKs and bundles?',
                a: 'Yes, you will learn keystore signing and compiling production Android App Bundles (AAB).'
            },
            {
                q: 'Is this internship remote?',
                a: 'Yes, this internship is fully remote with structured online daily standups and weekly sprint reviews.'
            },
            {
                q: 'Will I receive an official certificate?',
                a: 'Yes, an official Internship Experience Certificate and recommendation letter are awarded upon completion.'
            }
        ]
    }
];

// ══════════════════════════════════════════════════════════════════
// Slug Alias Mapping (allows alternative URLs and other-project IDs to resolve seamlessly)
// ══════════════════════════════════════════════════════════════════
const courseSlugAliases = {
    'full-stack-web-engineering': 'full-stack-web-development',
    'python-backend-microservices': 'python-dev',
    'data-science-ai-systems': 'data-science-and-ai',
    'data-science-ai': 'data-science-and-ai',
    'cyber-security-pentesting': 'cyber-security',
    'cloud-devops-engineering': 'devops-engineering',
    'cross-platform-mobile-dev': 'app-development',
    'ui-ux-product-design': 'ui-ux-designing',
    'ui-ux-design': 'ui-ux-designing',
    'embedded-systems-iot': 'embedded-systems-and-iot',
    'mern-stack-cloud-engineering': 'mern-stack'
};

// Helper function to find a course by slug, id, or alias
function getCourseBySlug(slug) {
    if (!slug) return coursesData[0];
    const cleanSlug = String(slug).toLowerCase().trim();
    
    // Check direct slug/id match
    let match = coursesData.find(c => c.slug.toLowerCase() === cleanSlug || (c.id && c.id.toLowerCase() === cleanSlug));
    if (match) return match;

    // Check aliases
    const aliasedSlug = courseSlugAliases[cleanSlug];
    if (aliasedSlug) {
        match = coursesData.find(c => c.slug.toLowerCase() === aliasedSlug || (c.id && c.id.toLowerCase() === aliasedSlug));
        if (match) return match;
    }

    // Fallback: match partial
    match = coursesData.find(c => cleanSlug.includes(c.slug.toLowerCase()) || c.slug.toLowerCase().includes(cleanSlug));
    return match || coursesData[0];
}
