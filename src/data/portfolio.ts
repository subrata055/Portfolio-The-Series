/**
 * Central portfolio data — customized from Subrata Sikdar's resume.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Subrata Sikdar',
  displayName: 'Subrata Sikdar',
  firstName: 'SUBRATA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SIKDAR ORIGINAL',
  role: 'Senior Cloud and DevSecOps Engineer',
  tagline: ['Cloud and DevSecOps Engineer', 'AWS Solutions Architect', 'CKA Certified'],
  intro:
    'Senior Cloud and DevSecOps Engineer with 5.6 years building cloud-native infrastructure on AWS and Azure. Expert in CI/CD pipelines, Kubernetes, Terraform, and containerization. Delivered $136K in annual cloud savings, cut deployment time by 35%, and achieved 99.95% uptime.',
  location: 'Kolkata, India',
  email: 'subratasikdar2021@gmail.com',
  phone: '+91-6290721443',
  links: {
    linkedin: 'https://linkedin.com/in/subrata-sikdar',
    github: 'https://github.com/subrata055',
  },
  resumePdf: '/assets/Subrata_Sikdar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Subrata Sikdar',
  },
  interests: ['Kubernetes & GitOps', 'Cloud FinOps & Cost Governance', 'Zero-Trust DevSecOps & SRE'],
};

export const education = [
  {
    school: 'CCE, IIT Madras & Intellipaat',
    place: 'Chennai / Online',
    degree: 'Advanced Certification in DevOps & Cloud Computing',
    period: 'Completed',
    score: 'Advanced Certification',
  },
  {
    school: 'West Bengal State University',
    place: 'Kolkata, India',
    degree: 'B.A. (Bachelor of Arts)',
    period: 'Graduated 2017',
    score: 'Graduate',
  },
];

export const trainings = [
  {
    program: 'AWS Solutions Architect & Python',
    academy: 'Adroit Information Technology Academy',
  },
  {
    program: 'Azure DevOps Engineer Expert (AZ-400)',
    academy: 'Adroit Information Technology Academy',
  },
];

export const experience = [
  {
    company: 'Navigator Software Pvt Ltd',
    role: 'DevOps Engineer',
    place: 'on-site / Kolkata, India',
    period: 'December 2023 – Present',
    points: [
      'Migrated 15+ microservices to AWS EKS with zero downtime and 99.95% uptime.',
      'Architected CI/CD pipelines with Jenkins, GitHub Actions, and ArgoCD for 12+ microservices. Cut deployment failures by 60% and reduced deployment time by 35%.',
      'Managed Kubernetes clusters on AWS EKS and Azure AKS via Terraform and Helm. Ran 50+ containers at 99.9% uptime.',
      'Built observability stack with Prometheus, Grafana, and CloudWatch. Cut MTTR by 40%.',
      'Integrated SonarQube, Trivy, and OWASP into CI pipelines. Hit 100% pre-production compliance and eliminated production security incidents.',
      'Mentored 2 junior engineers on Kubernetes and Terraform, boosting team productivity by 40%.',
      'Ran vulnerability scans with Lynis, Chkrootkit, and AWS ScoutSuite audits. Found and fixed security misconfigurations.',
      'Secured a 98% client satisfaction rate by leading weekly technical alignment calls and translating complex infrastructure milestones into clear business value.',
    ],
  },
  {
    company: 'Unified Infotech Pvt Ltd',
    role: 'System Administrator (L2)',
    place: 'Kolkata, India',
    period: 'October 2021 – February 2023',
    points: [
      'Automated AWS and Azure provisioning with Terraform modules. Managed 200+ infrastructure components with zero drift.',
      'Implemented blue-green and canary deployments. Cut rollback frequency by 75%.',
      'Migrated legacy apps to Docker containers. Reduced setup time from days to hours.',
      'Automated database backups and recovery with Bash and Python scripts. Achieved under 15-minute RTO.',
      'Led security assessments with Lynis, Chkrootkit, and ScoutSuite across on-prem and AWS environments. Reduced risk by 85%.',
      'Maintained Linux servers (CentOS, Ubuntu) supporting Dev, UAT, and Prod environments for 10+ applications.',
    ],
  },
  {
    company: 'Addicor Technologies Pvt Ltd',
    role: 'Junior Cloud Engineer',
    place: 'Remote',
    period: 'February 2020 – September 2021',
    points: [
      'Configured AWS EC2, S3, EBS, ELB, and RDS using Terraform IaC.',
      'Delivered secure, scalable microservices architecture with Dev, QA, and security teams. Improved resilience by 30%.',
      'Maintained Linux servers (CentOS, Ubuntu) supporting environments for 10+ applications.',
      'Set up monitoring alerts, reducing incident response time.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'eks-gitops-platform',
    title: 'Production-Grade GitOps Microservices',
    year: '2024 – 2026',
    genre: 'Kubernetes • GitOps • Microservices',
    logline: 'Production-grade microservices deployment with ArgoCD GitOps, Helm charts, and continuous delivery on AWS EKS.',
    stack: ['Go', 'Kubernetes', 'AWS EKS', 'ArgoCD', 'Helm', 'GitHub Actions'],
    build: [
      'Architected declarative GitOps continuous delivery with ArgoCD and GitHub Actions for 15+ containerized microservices.',
      'Containerized and orchestrated multi-tier microservices on AWS EKS with horizontal pod autoscaling and zero-downtime rolling updates.',
      'Structured modular Helm charts across Dev, Staging, and Production environments, eliminating manual cluster drift.',
    ],
    features: [
      'Declarative GitOps continuous delivery with ArgoCD',
      'Production-grade microservices architecture',
      'Automated Helm charts across environments',
      'Zero-downtime deployment pipelines',
      'Horizontal Pod Autoscaling (HPA) & ingress routing',
    ],
    metrics: [
      { value: '99.95%', label: 'cluster uptime' },
      { value: '15+', label: 'microservices migrated' },
      { value: '0s', label: 'migration downtime' },
      { value: '35%', label: 'faster deployment time' },
      { value: '60%', label: 'fewer deployment failures' },
    ],
    github: 'https://github.com/subrata055/Production-Grade_GitOps-Driven_Microservices',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: '3tier-devsecops-pipeline',
    title: '3-Tier DevSecOps Mega-Project',
    year: '2023 – 2026',
    genre: 'DevSecOps • Security • SRE',
    logline: 'Full-stack three-tier application with automated SAST, container security scanning, and pre-production compliance.',
    stack: ['Node.js', 'React', 'SonarQube', 'Trivy', 'OWASP', 'Docker', 'Prometheus'],
    build: [
      'Engineered an end-to-end DevSecOps automated pipeline embedding SonarQube static code analysis and Trivy image vulnerability scanning.',
      'Integrated OWASP dependency checks into GitHub Actions CI, achieving 100% pre-production compliance.',
      'Containerized multi-tier API and React client with multi-stage Docker builds to reduce image footprints by 65%.',
    ],
    features: [
      'Automated SAST & container vulnerability scanning (Trivy, SonarQube, OWASP)',
      'Multi-stage Docker builds for minimal attack surface',
      'Centralized telemetry and Prometheus alerting',
      '100% pre-production compliance track record',
      'Automated pull request gating and quality checks',
    ],
    metrics: [
      { value: '100%', label: 'pre-prod compliance' },
      { value: '0', label: 'production security incidents' },
      { value: '65%', label: 'smaller container image sizes' },
      { value: '40%', label: 'cut in MTTR' },
      { value: '85%', label: 'vulnerability risk reduction' },
    ],
    github: 'https://github.com/subrata055/3-Tier-DevSecOps-Mega-Project',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'eks-terraform-infra',
    title: 'AWS EKS Infrastructure with Terraform',
    year: '2023 – 2025',
    genre: 'Infrastructure as Code • Cloud Architecture',
    logline: 'Production-ready Amazon EKS cluster with custom VPC, public/private subnets, and Spot instance node groups.',
    stack: ['Terraform', 'HCL', 'AWS EKS', 'AWS VPC', 'IAM', 'Spot Instances'],
    build: [
      'Provisioned a modular Amazon EKS cluster (v1.30) with custom VPC networking, public/private subnets, and NAT gateways using Terraform.',
      'Configured cost-optimized spot instance node groups with automatic failover and dynamic scaling.',
      'Automated AWS VPC-CNI, kube-proxy, and CoreDNS add-on lifecycles with zero manual intervention.',
    ],
    features: [
      'Modular Terraform code for VPC, IAM, and EKS',
      'Spot instance worker node groups for major cost savings',
      'Custom VPC with public/private subnet topology',
      'Automated EKS cluster add-on management',
      'Zero configuration drift with Terraform state locking',
    ],
    metrics: [
      { value: 'v1.30', label: 'Kubernetes version' },
      { value: '200+', label: 'managed cloud resources' },
      { value: '0', label: 'configuration drift' },
      { value: '50%+', label: 'compute cost savings via Spot' },
      { value: '100%', label: 'reproducible IaC' },
    ],
    github: 'https://github.com/subrata055/eks-terraform',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'blue-green-deployment',
    title: 'Zero-Downtime Blue-Green Deployment',
    year: '2022 – 2024',
    genre: 'Release Engineering • High Availability',
    logline: 'Automated blue-green and canary deployment strategies with rapid traffic switching and instant rollback.',
    stack: ['AWS', 'Docker', 'Nginx', 'Bash', 'CI/CD', 'FinOps'],
    build: [
      'Implemented automated blue-green traffic switching, cutting release rollback frequency by 75%.',
      'Achieved zero-downtime cutover between live and staging environments using health-checked routing.',
      'Built automated rollback triggers monitoring error rates and latency thresholds.',
    ],
    features: [
      'Automated blue-green and canary releases',
      'Zero-downtime production cutovers',
      'Instant rollback capability in under 30 seconds',
      'Health-check verified traffic switching',
      'Automated database backup & <15 min RTO recovery',
    ],
    metrics: [
      { value: '75%', label: 'cut in rollback frequency' },
      { value: '0s', label: 'cutover downtime' },
      { value: '<30s', label: 'rollback response time' },
      { value: '$136K', label: 'annual FinOps savings' },
      { value: '<15m', label: 'disaster recovery RTO' },
    ],
    github: 'https://github.com/subrata055/Blue-Green-Deployment',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'microservices-mesh',
    title: '10-Microservice Kubernetes Service Mesh',
    year: '2023 – 2024',
    genre: 'Microservices • Istio Mesh • gRPC',
    logline: 'Multi-tier cloud application decomposing 10 microservices orchestrated on Kubernetes with Istio service mesh, mutual TLS, and gRPC.',
    stack: ['Kubernetes', 'Istio', 'gRPC', 'Docker', 'Envoy', 'Prometheus'],
    build: [
      'Deconstructed monolithic architecture into 10 decoupled microservices with gRPC communication and Envoy sidecar proxies.',
      'Configured Istio service mesh for mutual TLS (mTLS) zero-trust encryption, traffic routing, and canary splitting.',
      'Established distributed tracing with Jaeger and Prometheus telemetry, achieving 100% end-to-end service observability.',
    ],
    features: [
      '10 decoupled microservices architecture',
      'Istio service mesh with mutual TLS (mTLS) security',
      'High-performance inter-service gRPC communication',
      'Distributed telemetry & Jaeger tracing',
      'Canary release traffic weighting & circuit breaking',
    ],
    metrics: [
      { value: '10', label: 'decoupled services' },
      { value: 'mTLS', label: 'zero-trust security' },
      { value: '<5ms', label: 'gRPC inter-service latency' },
      { value: '99.9%', label: 'service reliability' },
      { value: '100%', label: 'traffic observability' },
    ],
    github: 'https://github.com/subrata055/10-MicroService-Appliction',
    palette: { from: '#130826', via: '#511b85', to: '#090412', accent: '#c084fc' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
  certId?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'cloud-savings',
    title: '$136K Annual Cloud Savings',
    org: 'AWS Cost Optimization & FinOps',
    detail: 'Delivered $136,000 in annual recurring savings using Reserved Instances, Savings Plans, and architectural right-sizing on AWS.',
    laurel: 'FinOps Leader',
  },
  {
    id: 'cka-credential',
    title: 'Certified Kubernetes Administrator (CKA)',
    org: 'The Linux Foundation & CNCF',
    detail: 'Demonstrated mastery of production Kubernetes administration, cluster architecture, workload networking, and troubleshooting. Verification ID: LF-njy40vtj44.',
    laurel: 'CKA Certified',
    link: 'https://training.linuxfoundation.org/certification/verify',
    certId: 'cka',
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect – Associate',
    org: 'Amazon Web Services',
    detail: 'Certified in designing secure, resilient, high-performing, and cost-optimized architectures on AWS. Verification ID: FMRFZTPLK1V4119V.',
    laurel: 'AWS Architect',
    link: 'https://aws.amazon.com/verification',
    certId: 'aws-saa',
  },
  {
    id: 'uptime-record',
    title: '99.95% High Availability',
    org: 'AWS EKS & AKS Microservices',
    detail: 'Maintained 99.95% uptime orchestrating 50+ containerized microservices across hybrid and multi-cloud clusters.',
    laurel: 'High Availability',
  },
  {
    id: 'zero-security-incidents',
    title: '100% Pre-Production Compliance',
    org: 'DevSecOps & SRE',
    detail: 'Embedded SonarQube, Trivy, and OWASP into automated CI/CD pipelines, completely eliminating production security incidents.',
    laurel: 'Zero Incidents',
  },
];

export type Certification = {
  id: string;
  issuer: string;
  issuerBadge: string;
  name: string;
  credentialId?: string;
  date: string;
  validity?: string;
  link?: string;
  image: string;
  description: string;
  skills: string[];
  hasOnlineVerification: boolean;
};

export const certifications: Certification[] = [
  {
    id: 'cka',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    issuerBadge: 'CNCF · Linux Foundation',
    name: 'Certified Kubernetes Administrator (CKA)',
    credentialId: 'LF-njy40vtj44',
    date: 'November 07, 2023',
    link: 'https://training.linuxfoundation.org/certification/verify',
    image: '/assets/certificates/cert-cka.webp',
    description:
      'Official certification by Cloud Native Computing Foundation (CNCF) and The Linux Foundation demonstrating production competence in Kubernetes architecture, installation, networking, ingress, and troubleshooting.',
    skills: ['Kubernetes', 'Cluster Architecture', 'Networking & Ingress', 'RBAC & Security', 'Troubleshooting', 'Helm'],
    hasOnlineVerification: true,
  },
  {
    id: 'aws-saa',
    issuer: 'Amazon Web Services',
    issuerBadge: 'AWS Certified',
    name: 'AWS Certified Solutions Architect – Associate',
    credentialId: 'FMRFZTPLK1V4119V',
    date: 'June 21, 2025',
    validity: 'Valid through June 21, 2028',
    link: 'https://aws.amazon.com/verification',
    image: '/assets/certificates/cert-aws.webp',
    description:
      'Comprehensive validation by Amazon Web Services demonstrating expertise in designing resilient, high-performing, secure, and cost-optimized cloud architectures on AWS.',
    skills: ['AWS Architecture', 'EKS & ECS', 'VPC & Networking', 'IAM Security', 'S3 & RDS', 'FinOps & Cost Optimization'],
    hasOnlineVerification: true,
  },
  {
    id: 'iit-madras-devops',
    issuer: 'CODE, IIT Madras & Intellipaat',
    issuerBadge: 'IIT Madras (CODE)',
    name: 'Advanced Certification in DevOps & Cloud Computing',
    credentialId: 'DSA05356048',
    date: 'August 2022 – March 2023',
    image: '/assets/certificates/cert-iit-madras.webp',
    description:
      'Academic & industry certification conducted by Centre for Outreach and Digital Education (CODE), IIT Madras - Digital Skills Academy covering enterprise multi-cloud systems, CI/CD, and IaC.',
    skills: ['Cloud Computing', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Terraform IaC', 'Linux Systems'],
    hasOnlineVerification: false,
  },
  {
    id: 'google-it-automation',
    issuer: 'Google & Coursera',
    issuerBadge: 'Google Professional',
    name: 'Google IT Automation with Python Specialization',
    credentialId: '3ZSW6VTJMTN7',
    date: 'April 27, 2022',
    link: 'https://coursera.org/verify/professional-cert/3ZSW6VTJMTN7',
    image: '/assets/certificates/cert-google-python.webp',
    description:
      '6-course professional certificate developed by Google covering Python scripting, OS interaction, Git & GitHub version control, debugging techniques, configuration management, and cloud automation at scale.',
    skills: ['Python Automation', 'Git & GitHub', 'System Administration', 'Configuration Management', 'Debugging'],
    hasOnlineVerification: true,
  },
  {
    id: 'google-ai-agents',
    issuer: 'Google & Kaggle',
    issuerBadge: 'Google · Kaggle',
    name: '5-Day AI Agents Intensive Course with Google',
    date: 'December 18, 2025',
    image: '/assets/certificates/cert-kaggle-ai-agents.webp',
    description:
      'Specialized course completion badge from Google and Kaggle verifying hands-on competence in building, evaluating, and deploying autonomous AI Agents, tool calling, and multi-agent workflows.',
    skills: ['AI Agents', 'Autonomous Workflows', 'Google AI', 'Tool Calling', 'Agentic Systems'],
    hasOnlineVerification: false,
  },
];

export type Skill = { name: string; mono: string; icon: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    subtitle: 'AWS & Azure Architecture',
    skills: [
      { name: 'AWS', mono: 'Aw', icon: '/assets/skills/aws.svg', note: 'Primary' },
      { name: 'Azure', mono: 'Az', icon: '/assets/skills/azure.svg', note: 'Multi-Cloud' },
      { name: 'AWS EKS', mono: 'Ek', icon: '/assets/skills/aws-eks.svg', note: 'Managed K8s' },
      { name: 'AWS ECS', mono: 'Ec', icon: '/assets/skills/aws-ecs.svg', note: 'Containers' },
      { name: 'AWS EC2', mono: 'E2', icon: '/assets/skills/aws-ec2.svg', note: 'Compute Deploy' },
      { name: 'AWS Lambda', mono: 'Lb', icon: '/assets/skills/aws-lambda.svg', note: 'Serverless' },
      { name: 'AWS CloudFront & Route 53', mono: 'Cf', icon: '/assets/skills/aws-cloudfront.svg', note: 'CDN & DNS' },
      { name: 'AWS CodePipeline', mono: 'Cp', icon: '/assets/skills/aws-codepipeline.svg', note: 'CI/CD Deploy' },
      { name: 'AWS Elastic Beanstalk', mono: 'Eb', icon: '/assets/skills/aws-elastic-beanstalk.svg', note: 'PaaS Deploy' },
      { name: 'AWS S3 & RDS', mono: 'S3', icon: '/assets/skills/aws-s3-rds.svg', note: 'Storage & DB' },
      { name: 'AWS IAM & VPC', mono: 'Vp', icon: '/assets/skills/aws-iam-vpc.png', note: 'Security & Net' },
      { name: 'Azure AKS', mono: 'Ak', icon: '/assets/skills/azure-aks.svg', note: 'Managed K8s' },
      { name: 'Azure DevOps', mono: 'Ad', icon: '/assets/skills/azure-devops.svg', note: 'Pipelines & Repos' },
      { name: 'Azure App Service', mono: 'As', icon: '/assets/skills/azure-app-service.svg', note: 'PaaS Deploy' },
      { name: 'Azure Blob Storage', mono: 'Bs', icon: '/assets/skills/azure-blob-storage.svg', note: 'Cloud Storage' },
    ],
  },
  {
    id: 'containers',
    title: 'Containers & Orchestration',
    subtitle: 'Microservices & Clustering',
    skills: [
      { name: 'Kubernetes', mono: 'K8', icon: '/assets/skills/kubernetes.svg', note: 'CKA Certified' },
      { name: 'Docker', mono: 'Dk', icon: '/assets/skills/docker.svg' },
      { name: 'Helm', mono: 'Hm', icon: '/assets/skills/helm.svg' },
      { name: 'Docker Compose', mono: 'Dc', icon: '/assets/skills/docker-compose.svg' },
      { name: 'Container Security', mono: 'Cs', icon: '/assets/skills/container-security.svg' },
    ],
  },
  {
    id: 'cicd',
    title: 'CI/CD & GitOps',
    subtitle: 'Automated Delivery',
    skills: [
      { name: 'ArgoCD', mono: 'Ar', icon: '/assets/skills/argocd.svg', note: 'GitOps' },
      { name: 'Jenkins', mono: 'Jk', icon: '/assets/skills/jenkins.svg' },
      { name: 'GitHub Actions', mono: 'Ga', icon: '/assets/skills/github-actions.svg' },
      { name: 'GitLab CI', mono: 'Gl', icon: '/assets/skills/gitlab.svg' },
      { name: 'Git & Branching', mono: 'Gt', icon: '/assets/skills/git.svg' },
    ],
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    subtitle: 'Zero Drift Automation',
    skills: [
      { name: 'Terraform', mono: 'Tf', icon: '/assets/skills/terraform.svg', note: 'Modules & Drift-Free' },
      { name: 'CloudFormation', mono: 'Cf', icon: '/assets/skills/cloudformation.png' },
    ],
  },
  {
    id: 'observability',
    title: 'Monitoring & SRE',
    subtitle: 'Telemetry & Alerting',
    skills: [
      { name: 'Prometheus', mono: 'Pr', icon: '/assets/skills/prometheus.svg' },
      { name: 'Grafana', mono: 'Gf', icon: '/assets/skills/grafana.svg' },
      { name: 'CloudWatch', mono: 'Cw', icon: '/assets/skills/cloudwatch.svg' },
      { name: 'Datadog', mono: 'Dd', icon: '/assets/skills/datadog.svg' },
      { name: 'APM & Logging', mono: 'Lg', icon: '/assets/skills/apm-logging.svg' },
    ],
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    subtitle: 'DevSecOps & Audits',
    skills: [
      { name: 'Trivy', mono: 'Tv', icon: '/assets/skills/trivy.svg' },
      { name: 'SonarQube', mono: 'Sq', icon: '/assets/skills/sonarqube.svg' },
      { name: 'OWASP', mono: 'Ow', icon: '/assets/skills/owasp.svg' },
      { name: 'Lynis & ScoutSuite', mono: 'Ly', icon: '/assets/skills/lynis-scoutsuite.svg' },
      { name: 'Chkrootkit', mono: 'Cr', icon: '/assets/skills/chkrootkit.svg' },
    ],
  },
  {
    id: 'ai-vibe-coding',
    title: 'AI & Vibe Coding',
    subtitle: 'Autonomous Agents & CLI Tools',
    skills: [
      { name: 'Claude Code', mono: 'Cc', icon: '/assets/skills/claude-code.svg', note: 'Agentic CLI' },
      { name: 'Vibe Coding', mono: 'Vc', icon: '/assets/skills/vibe-coding.svg', note: 'AI-Native Dev' },
      { name: 'AI Agents', mono: 'Ag', icon: '/assets/skills/ai-agents.svg', note: 'Google Certified' },
      { name: 'Prompt Engineering', mono: 'Pe', icon: '/assets/skills/prompt-engineering.svg', note: 'LLM Systems' },
    ],
  },
  {
    id: 'scripting',
    title: 'Scripting & Automation',
    subtitle: 'Languages & Systems',
    skills: [
      { name: 'Python', mono: 'Py', icon: '/assets/skills/python.svg' },
      { name: 'Bash', mono: 'Sh', icon: '/assets/skills/bash.svg' },
      { name: 'YAML', mono: 'Ym', icon: '/assets/skills/yaml.svg' },
      { name: 'Groovy', mono: 'Gv', icon: '/assets/skills/groovy.svg' },
      { name: 'PowerShell', mono: 'Ps', icon: '/assets/skills/powershell.svg' },
      { name: 'Linux (CentOS/Ubuntu)', mono: 'Lx', icon: '/assets/skills/linux.svg' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    subtitle: 'Data & Recovery RTO',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg', icon: '/assets/skills/postgresql.svg' },
      { name: 'MongoDB', mono: 'Mg', icon: '/assets/skills/mongodb.svg' },
      { name: 'MySQL', mono: 'My', icon: '/assets/skills/mysql.svg' },
      { name: 'Elasticsearch', mono: 'Es', icon: '/assets/skills/elasticsearch.svg' },
      { name: 'MS-SQL', mono: 'Ms', icon: '/assets/skills/mssql.svg' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  AWS: ['AWS Certified Solutions Architect – Associate', '$136K Cloud Savings', 'EKS Migration'],
  Azure: ['Azure AKS & Azure DevOps Multi-Cloud Provisioning', 'Unified Infotech Multi-Cloud Provisioning'],
  'AWS EC2': ['EC2 Autoscaling Groups, Launch Templates & Multi-AZ Deployments', 'Production workloads across CentOS & Ubuntu'],
  'AWS CloudFront & Route 53': ['Global Content Delivery with Low Latency', 'DNS Failover & SSL/TLS Certificate Management'],
  'AWS CodePipeline': ['Automated Build, Test & Deploy Pipelines across AWS Services'],
  'AWS Elastic Beanstalk': ['Zero-Downtime Blue/Green Deployments & Managed Environments'],
  'Azure DevOps': ['Azure Pipelines CI/CD Automation', 'Azure Repos, Artifacts & Multi-Stage Deployment Gates'],
  'Azure App Service': ['High-Availability Web App & REST API Hosting', 'Continuous Deployment Integration with GitHub Actions'],
  'Azure Blob Storage': ['Scalable Cloud Object Storage', 'Secure Disaster Recovery & Backup Pipelines'],
  Kubernetes: ['Certified Kubernetes Administrator (CKA)', '15+ Microservices on EKS', '50+ Containers at 99.9% Uptime'],
  Docker: ['Legacy to Docker Containerization', '50+ Container Workloads'],
  Helm: ['Kubernetes Cluster Management with Helm Charts'],
  Terraform: ['200+ Infrastructure Components with Zero Drift', 'AWS & Azure Provisioning'],
  ArgoCD: ['GitOps Continuous Delivery for 12+ Microservices'],
  Jenkins: ['CI/CD Pipeline Automation', '60% Fewer Deployment Failures'],
  'GitHub Actions': ['Automated CI Pipelines with SonarQube & Trivy'],
  Prometheus: ['Observability Stack cutting MTTR by 40%'],
  Grafana: ['APM Metrics & Real-Time Production Dashboards'],
  CloudWatch: ['AWS Infrastructure & Application Monitoring'],
  Trivy: ['Container Vulnerability Scanning & 100% Pre-Prod Compliance'],
  SonarQube: ['Static Code Analysis & Security Quality Gates'],
  OWASP: ['Vulnerability Scanning in CI Pipelines'],
  'Claude Code': ['Terminal-Native AI Agent CLI', 'Autonomous Multi-File Refactoring & DevOps', 'Prompt-Driven IaC & Pipeline Generation'],
  'Vibe Coding': ['AI-Accelerated Rapid Delivery', 'Spec-Driven System Prototyping', 'Continuous Human-in-the-Loop Iteration'],
  'AI Agents': ['Google & Kaggle 5-Day Intensive Certified', 'Autonomous Tool Calling & Multi-Agent Workflows'],
  'Prompt Engineering': ['Context Distillation & Few-Shot Templates', 'System Prompt Optimization for Cloud Tasks'],
  Python: ['Automated Backup Scripts & FinOps Cost Reporting'],
  Bash: ['Disaster Recovery Automation achieving <15-min RTO'],
  'Linux (CentOS/Ubuntu)': ['System Administration across Dev, UAT, and Prod for 10+ Apps'],
  PostgreSQL: ['Database Administration & Backup Automation'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Cloud Foundation',
    period: '2020 – 2021',
    synopsis: 'Starting the cloud journey as Junior Cloud Engineer at Addicor Technologies — configuring AWS infrastructure, Linux systems and monitoring.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'First Deployments',
        description: 'Configured AWS EC2, S3, EBS, ELB and RDS with Terraform IaC, establishing foundational cloud practices.',
        tags: ['AWS', 'EC2', 'RDS', 'Terraform'],
        runtime: 'Feb 2020 – Sep 2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Microservices & Uptime',
        description: 'Delivered secure, scalable microservices infrastructure collaborating with Dev, QA and security teams; improved resilience by 30%.',
        tags: ['Microservices', 'Resilience +30%', 'Linux'],
        runtime: 'Addicor Technologies',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Scale, Automation & Multi-Cloud',
    period: '2021 – 2023',
    synopsis: 'System Administrator (L2) at Unified Infotech — automating AWS & Azure with Terraform, containerizing legacy workloads, and cutting deployment rollbacks.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Zero Drift IaC',
        description: 'Automated AWS and Azure provisioning with modular Terraform, governing 200+ infrastructure components with zero drift.',
        tags: ['Terraform', '200+ Resources', 'Zero Drift'],
        runtime: 'Oct 2021 – Feb 2023',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Blue-Green & Canary',
        description: 'Engineered blue-green and canary deployment strategies, reducing rollback frequency by 75% across production releases.',
        tags: ['Blue-Green', 'Canary', 'Rollback -75%'],
        runtime: 'Unified Infotech',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'Containerization & RTO',
        description: 'Migrated legacy apps to Docker (setup time from days to hours) and automated backups with Bash & Python to hit <15 min RTO.',
        tags: ['Docker', 'Bash', 'Python', 'RTO <15m'],
        runtime: 'Disaster Recovery',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Cloud-Native & Kubernetes Mastery',
    period: '2023 – Present',
    synopsis: 'DevOps Engineer at Navigator Software — leading zero-downtime EKS migrations, ArgoCD GitOps, DevSecOps pipelines, and achieving 99.95% uptime.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The EKS Migration',
        description: 'Migrated 15+ microservices to AWS EKS with zero downtime, maintaining 99.95% high availability for production traffic.',
        tags: ['AWS EKS', 'Kubernetes', '99.95% Uptime'],
        runtime: 'Dec 2023 – Present',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The GitOps Pipeline',
        description: 'Architected declarative CI/CD with Jenkins, GitHub Actions and ArgoCD for 12+ microservices; cut deployment failures by 60% and release time by 35%.',
        tags: ['ArgoCD', 'GitOps', 'Jenkins', 'GitHub Actions'],
        runtime: 'Navigator Software',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'DevSecOps & Observability',
        description: 'Integrated SonarQube, Trivy, and OWASP into CI pipelines for 100% pre-prod compliance; deployed Prometheus & Grafana to cut MTTR by 40%.',
        tags: ['Prometheus', 'Grafana', 'Trivy', 'SonarQube'],
        runtime: 'Observability & SRE',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Dual Credentials & FinOps Landmark',
    period: 'Production Milestones',
    synopsis: 'Earning CKA and AWS Solutions Architect credentials while driving $136,000 annual cloud savings and mentoring engineering teams.',
    episodes: [
      {
        code: 'S04 E01',
        title: '$136K Annual Cloud Savings',
        description: 'Structured cloud cost optimization with Reserved Instances and Savings Plans on AWS, delivering $136K in verified annual savings.',
        tags: ['FinOps', 'AWS Savings Plans', '$136K Saved'],
        runtime: 'Cost Governance',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'CKA & AWS Architect',
        description: 'Achieved Certified Kubernetes Administrator (CKA) and AWS Certified Solutions Architect – Associate credentials.',
        tags: ['CKA', 'AWS Solutions Architect', 'Linux Foundation'],
        runtime: 'Certified',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'Mentorship & Client Leadership',
        description: 'Mentored junior engineers on Kubernetes and Terraform (+40% productivity) and earned a 98% client satisfaction rate on technical calls.',
        tags: ['Leadership', 'Mentorship', '98% Client CSAT'],
        runtime: 'Navigator Software',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: 'Future Horizons',
    period: 'Now streaming',
    synopsis: 'Advancing cloud-native architectures with enterprise GitOps, FinOps automation, and Zero-Trust DevSecOps.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Enterprise Cloud-Native',
        description: 'Expanding cloud-native platforms with advanced Kubernetes scheduling, FinOps intelligence, and automated zero-trust security postures.',
        tags: ['GitOps', 'Zero-Trust', 'FinOps', 'Multi-Cloud'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Cloud credential', title: 'AWS Architect', detail: 'AWS Certified Solutions Architect – Associate', palette: amber },
  { label: 'Container master', title: 'CKA Certified', detail: 'Certified Kubernetes Administrator · Linux Foundation', palette: ocean },
  { label: 'FinOps champion', title: '$136K Saved', detail: 'Annual savings via Reserved Instances & Savings Plans', palette: crimson },
  { label: 'High availability', title: '99.95% Uptime', detail: '15+ microservices migrated to AWS EKS with zero downtime', palette: jade },
  { label: 'GitOps speed', title: '35% Faster', detail: 'Release cycles accelerated via ArgoCD & GitHub Actions', palette: violet },
  { label: 'Pipeline stability', title: '60% Fewer Failures', detail: 'Deployment failures cut with declarative CI/CD', palette: amber },
  { label: 'Observability', title: '40% Lower MTTR', detail: 'Built telemetry stack with Prometheus, Grafana & CloudWatch', palette: ocean },
  { label: 'DevSecOps', title: '100% Pre-Prod', detail: 'Zero prod incidents with Trivy, SonarQube & OWASP', palette: crimson },
  { label: 'IaC governance', title: '200+ Resources', detail: 'AWS & Azure infrastructure managed with zero drift', palette: jade },
  { label: 'Advanced cert', title: 'IIT Madras', detail: 'Advanced Certification in DevOps & Cloud Computing', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Overview',
    title: 'Cloud and DevSecOps Engineer',
    lines: ['5.6 Years Building Cloud-Native Infrastructure', 'Specialized in AWS, Azure, Kubernetes, and Terraform'],
    chips: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'CKA', 'GitOps'],
  },
  {
    kicker: 'Credentials',
    title: 'Industry Certified',
    lines: [
      'Certified Kubernetes Administrator (CKA) · Linux Foundation',
      'AWS Certified Solutions Architect – Associate · Amazon Web Services',
      'Advanced Certification in DevOps & Cloud Computing · CCE, IIT Madras',
    ],
    chips: ['CKA', 'AWS Solutions Architect', 'IIT Madras'],
  },
  {
    kicker: 'Production Impact',
    title: 'Landmark Results',
    lines: [
      'Delivered $136,000 in annual cloud cost savings on AWS',
      'Migrated 15+ microservices to AWS EKS with zero downtime',
      'Maintained 99.95% production uptime across containerized clusters',
    ],
    chips: ['$136K Saved', '99.95% Uptime', 'Zero Downtime'],
  },
  {
    kicker: 'Delivery & CI/CD',
    title: 'GitOps & Automation',
    lines: [
      'Architected declarative CI/CD pipelines with Jenkins, GitHub Actions, and ArgoCD',
      'Cut deployment failures by 60% and reduced release time by 35%',
      'Managed 200+ cloud infrastructure components via Terraform with zero drift',
    ],
    chips: ['ArgoCD', 'Jenkins', 'Terraform', 'GitHub Actions'],
  },
  {
    kicker: 'DevSecOps & SRE',
    title: 'Security & Observability',
    lines: [
      'Integrated SonarQube, Trivy, and OWASP: 100% pre-production compliance',
      'Centralized Prometheus & Grafana APM metrics: 40% reduction in MTTR',
      'Automated host audits with Lynis & ScoutSuite: 85% risk reduction',
    ],
  },
  {
    kicker: 'Leadership',
    title: 'Mentorship & CSAT',
    lines: [
      'Mentored junior engineers on Kubernetes and Terraform (+40% productivity)',
      'Earned a 98% client satisfaction rate on technical infrastructure alignment',
    ],
    chips: ['Mentorship', '98% CSAT'],
  },
  {
    kicker: 'GitHub Code',
    title: 'Public Repositories',
    lines: [
      'Production-Grade_GitOps-Driven_Microservices (Go · ArgoCD · EKS)',
      '3-Tier-DevSecOps-Mega-Project (Node.js · React · Trivy · SonarQube)',
      'eks-terraform (AWS EKS · Custom VPC · Spot Instances)',
      'Blue-Green-Deployment (Zero-Downtime Traffic Switching)',
    ],
    chips: ['ArgoCD', 'DevSecOps', 'Terraform', 'Blue-Green'],
  },
];

export type ProfileId = 'subrata' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'subrata',
    name: 'Subrata',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Engineer / SRE',
    blurb: 'Architecture, GitOps & stack first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Leadership',
    blurb: 'The story arc & milestones first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Experience & credentials', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Architectures', meta: `${projects.length} Landmark Platforms • 5.6 Yrs`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Key Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
