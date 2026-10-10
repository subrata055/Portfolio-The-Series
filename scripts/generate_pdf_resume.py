import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

pdf_path = os.path.join("public", "assets", "Subrata_Sikdar_Resume.pdf")
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=40,
    rightMargin=40,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=20,
    leading=24,
    alignment=1, # Center
    textColor=colors.HexColor('#111827')
)

subtitle_style = ParagraphStyle(
    'DocSubtitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10,
    leading=14,
    alignment=1,
    textColor=colors.HexColor('#374151')
)

contact_style = ParagraphStyle(
    'DocContact',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=13,
    alignment=1,
    textColor=colors.HexColor('#4B5563')
)

section_heading = ParagraphStyle(
    'SecHeading',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=15,
    textColor=colors.HexColor('#111827')
)

body_style = ParagraphStyle(
    'Body',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=13,
    textColor=colors.HexColor('#1F2937')
)

bullet_style = ParagraphStyle(
    'Bullet',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=12,
    leftIndent=14,
    firstLineIndent=-10,
    textColor=colors.HexColor('#374151')
)

story = []

# Header
story.append(Paragraph("Subrata Sikdar", title_style))
story.append(Spacer(1, 4))
story.append(Paragraph("Cloud and DevSecOps Engineer &nbsp;|&nbsp; AWS Solutions Architect &nbsp;|&nbsp; CKA Certified", subtitle_style))
story.append(Spacer(1, 4))
story.append(Paragraph("Kolkata, India &nbsp;|&nbsp; +91-6290721443 &nbsp;|&nbsp; subratasikdar2021@gmail.com &nbsp;|&nbsp; linkedin.com/in/subrata-sikdar &nbsp;|&nbsp; github.com/subrata055", contact_style))
story.append(Spacer(1, 10))

def add_heading(text):
    story.append(Paragraph(text, section_heading))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#9CA3AF'), spaceAfter=5, spaceBefore=2))

# Professional Summary
add_heading("Professional Summary")
story.append(Paragraph(
    "Cloud and DevSecOps Engineer with 5.6 years building cloud-native infrastructure on AWS and Azure. "
    "Expert in CI/CD pipelines, Kubernetes, Terraform, and containerization. Delivered $136K in annual cloud savings, "
    "cut deployment time by 35%, and achieved 99.95% uptime. Strong in DevSecOps, observability, and mentoring teams. "
    "Proven with microservices, GitOps, and cloud-native deployments.",
    body_style
))
story.append(Spacer(1, 8))

# Technical Skills
add_heading("Technical Skills")
skills_data = [
    ("Cloud Platforms", "AWS (EC2, EKS, ECS, Lambda, CloudFront, CodePipeline, Elastic Beanstalk, S3, RDS, IAM, VPC), Azure (AKS, DevOps, App Services, Blob Storage)"),
    ("Containers & Orchestration", "Docker, Kubernetes, Helm, Docker Compose, ECS/EKS, containerization, microservices orchestration"),
    ("CI/CD & GitOps", "Jenkins, GitHub Actions, GitLab CI, ArgoCD, Azure DevOps, GitOps"),
    ("Infrastructure as Code", "Terraform, AWS CloudFormation"),
    ("Monitoring & Observability", "Prometheus, Grafana, CloudWatch, Datadog, logging, APM, alerting, dashboards"),
    ("Security & Compliance", "DevSecOps, Trivy, SonarQube, OWASP, vulnerability scanning, compliance automation"),
    ("AI & Vibe Coding", "Claude Code, Vibe Coding, AI Agents, Prompt Engineering"),
    ("Scripting & Languages", "Python, Bash, YAML, Groovy, PowerShell"),
    ("Version Control", "Git, GitHub, GitLab, branching strategies, code review"),
    ("Databases", "MS-SQL, MySQL, MongoDB, PostgreSQL, Elasticsearch"),
    ("Operating Systems", "Linux (CentOS, Ubuntu), system administration")
]
for cat, sk in skills_data:
    story.append(Paragraph(f"<b>{cat}:</b> {sk}", body_style))
    story.append(Spacer(1, 2))
story.append(Spacer(1, 6))

# Professional Experience
add_heading("Professional Experience")

# Job 1
story.append(Paragraph("<b>Navigator Software Pvt Ltd</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>on-site / Kolkata, India</i>", body_style))
story.append(Paragraph("<i>DevOps Engineer</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>December 2023 – Present</i>", body_style))
story.append(Spacer(1, 2))
bullets1 = [
    "Migrated 15+ microservices to AWS EKS with zero downtime and 99.95% uptime.",
    "Architected CI/CD pipelines with Jenkins, GitHub Actions, and ArgoCD for 12+ microservices. Cut deployment failures by 60%. Reduced deployment time by 35%.",
    "Managed Kubernetes clusters on AWS EKS and Azure AKS via Terraform and Helm. Ran 50+ containers at 99.9% uptime.",
    "Built observability with Prometheus, Grafana, and CloudWatch. Cut MTTR by 40%.",
    "Integrated SonarQube, Trivy, and OWASP into CI pipelines. Hit 100% pre-production compliance. Eliminated production security incidents.",
    "Mentored 2 junior engineers on Kubernetes and Terraform. Boosted team productivity by 40%.",
    "Ran vulnerability scans with Lynis, Chkrootkit, and AWS ScoutSuite audits. Found and fixed security misconfigurations.",
    "Secured a 98 Percent client satisfaction rate by leading weekly technical alignment calls and translating complex infrastructure milestones into clear business value."
]
for b in bullets1:
    story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 1.5))
story.append(Spacer(1, 4))

# Job 2
story.append(Paragraph("<b>Unified Infotech Pvt Ltd</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Kolkata, India</i>", body_style))
story.append(Paragraph("<i>System Administrator (L2)</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>October 2021 – February 2023</i>", body_style))
story.append(Spacer(1, 2))
bullets2 = [
    "Automated AWS and Azure provisioning with Terraform modules. Managed 200+ infrastructure components with zero drift.",
    "Implemented blue-green and canary deployments. Cut rollback frequency by 75%.",
    "Migrated legacy apps to Docker containers. Reduced setup time from days to hours.",
    "Automated database backups and recovery with Bash and Python scripts. Achieved under 15-minute RTO.",
    "Led security assessments with Lynis, Chkrootkit, and ScoutSuite. Found and fixed vulnerabilities across on-prem and AWS environments. Reduced risk by 85%.",
    "Maintained Linux servers (CentOS, Ubuntu). Supported Dev, UAT, and Prod for 10+ applications."
]
for b in bullets2:
    story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 1.5))
story.append(Spacer(1, 4))

# Job 3
story.append(Paragraph("<b>Addicor Technologies Pvt Ltd</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Remote</i>", body_style))
story.append(Paragraph("<i>Junior Cloud Engineer</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>February 2020 – September 2021</i>", body_style))
story.append(Spacer(1, 2))
bullets3 = [
    "Configured AWS EC2, S3, EBS, ELB, and RDS using Terraform IaC.",
    "Delivered secure, scalable microservices architecture with Dev, QA, and security teams. Improved resilience by 30%.",
    "Maintained Linux servers (CentOS, Ubuntu). Supported environments for 10+ applications.",
    "Set up monitoring alerts. Reduced incident response time."
]
for b in bullets3:
    story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 1.5))
story.append(Spacer(1, 6))

# Certifications
add_heading("Certifications & Verified Credentials")
story.append(Paragraph("<b>Certified Kubernetes Administrator (CKA)</b> &nbsp;|&nbsp; CNCF & Linux Foundation &nbsp;|&nbsp; ID: LF-njy40vtj44 &nbsp;|&nbsp; <i>Verify: https://training.linuxfoundation.org/certification/verify</i>", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>AWS Certified Solutions Architect – Associate</b> &nbsp;|&nbsp; Amazon Web Services &nbsp;|&nbsp; ID: FMRFZTPLK1V4119V &nbsp;|&nbsp; <i>Verify: https://aws.amazon.com/verification</i>", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>Google IT Automation with Python Specialization (6-Course)</b> &nbsp;|&nbsp; Google & Coursera &nbsp;|&nbsp; ID: 3ZSW6VTJMTN7 &nbsp;|&nbsp; <i>Verify: https://coursera.org/verify/professional-cert/3ZSW6VTJMTN7</i>", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>Advanced Certification in DevOps & Cloud Computing</b> &nbsp;|&nbsp; CODE, IIT Madras & Intellipaat &nbsp;|&nbsp; ID: DSA05356048", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>5-Day AI Agents Intensive Course with Google</b> &nbsp;|&nbsp; Google & Kaggle", body_style))
story.append(Spacer(1, 6))

# Achievements
add_heading("Achievements")
story.append(Paragraph("<b>Cloud Cost Optimization & Infrastructure Modernization</b>", body_style))
story.append(Paragraph("• Saved $136K annually with Reserved Instances and Savings Plans on AWS.", bullet_style))
story.append(Paragraph("• Moved legacy apps to Docker containers. Cut environment setup from days to hours.", bullet_style))
story.append(Spacer(1, 6))

# Featured Projects
add_heading("Key GitOps & Cloud Projects (GitHub: github.com/subrata055)")
projects_pdf = [
    ("Production-Grade GitOps Microservices", "AWS EKS, ArgoCD, Helm, Go, GitHub Actions", "https://github.com/subrata055/Production-Grade_GitOps-Driven_Microservices"),
    ("3-Tier DevSecOps Mega-Project", "SonarQube, Trivy, OWASP, Docker, Node.js, React", "https://github.com/subrata055/3-Tier-DevSecOps-Mega-Project"),
    ("AWS EKS Infrastructure with Terraform", "HCL, AWS EKS v1.30, VPC, Spot Instances", "https://github.com/subrata055/eks-terraform"),
    ("Zero-Downtime Blue-Green Deployment", "AWS, Docker, Nginx, Bash, FinOps", "https://github.com/subrata055/Blue-Green-Deployment"),
    ("10-Microservice Kubernetes Service Mesh", "Kubernetes, Istio, gRPC, Docker, Envoy", "https://github.com/subrata055/10-MicroService-Appliction"),
]
for p_title, p_stack, p_url in projects_pdf:
    story.append(Paragraph(f"• <b>{p_title}</b> ({p_stack}) &nbsp;—&nbsp; <i>{p_url}</i>", bullet_style))
    story.append(Spacer(1, 1.5))
story.append(Spacer(1, 6))

# Education & Training
add_heading("Education & Professional Training")
story.append(Paragraph("<b>Advanced Certification in DevOps & Cloud Computing</b> — CCE, IIT Madras & Intellipaat", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>B.A. (Bachelor of Arts)</b>, 2017 — West Bengal State University", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>AWS Solutions Architect & Python</b> — Adroit Information Technology Academy", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>Azure DevOps Engineer Expert (AZ-400)</b> — Adroit Information Technology Academy", body_style))

doc.build(story)
print("Subrata_Sikdar_Resume.pdf generated successfully!")
