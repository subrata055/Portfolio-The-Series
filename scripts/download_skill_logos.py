import os
import urllib.request

DEST_DIR = os.path.abspath(os.path.join("public", "assets", "skills"))
os.makedirs(DEST_DIR, exist_ok=True)

SKILL_LOGOS = {
    "aws.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg",
    "azure.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    "aws-eks.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazoneks.svg",
    "aws-ecs.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonecs.svg",
    "aws-lambda.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/awslambda.svg",
    "aws-s3-rds.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazons3.svg",
    "aws-iam-vpc.png": "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/SecurityIdentityCompliance/IdentityandAccessManagement.png",
    "azure-aks.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    "kubernetes.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "docker.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "helm.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg",
    "docker-compose.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "container-security.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/falco.svg",
    "argocd.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg",
    "jenkins.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    "github-actions.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
    "gitlab.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    "git.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "terraform.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    "cloudformation.png": "https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/main/dist/ManagementGovernance/CloudFormation.png",
    "prometheus.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    "grafana.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    "cloudwatch.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazoncloudwatch.svg",
    "datadog.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/datadog.svg",
    "apm-logging.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/opentelemetry.svg",
    "trivy.svg": "https://raw.githubusercontent.com/aquasecurity/trivy/main/docs/imgs/logo-white.svg",
    "sonarqube.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg",
    "owasp.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/owasp.svg",
    "lynis-scoutsuite.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/securityscorecard.svg",
    "chkrootkit.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kalilinux.svg",
    "python.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "bash.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    "yaml.svg": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/yaml.svg",
    "groovy.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg",
    "powershell.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
    "linux.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "postgresql.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "mongodb.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "mysql.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "elasticsearch.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    "mssql.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
}

print(f"Downloading {len(SKILL_LOGOS)} tool logos to {DEST_DIR}...")
for fname, url in SKILL_LOGOS.items():
    dest_path = os.path.join(DEST_DIR, fname)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
        with urllib.request.urlopen(req, timeout=15) as res:
            content = res.read()
            with open(dest_path, "wb") as f:
                f.write(content)
            print(f"[OK] {fname} ({len(content)} bytes)")
    except Exception as e:
        print(f"[FAIL] {fname} from {url}: {e}")

print("Download script finished!")
