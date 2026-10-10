import os

d = os.path.join("public", "assets", "skills")

brand_colors = {
    "aws.svg": "#FF9900",
    "aws-eks.svg": "#FF9900",
    "aws-ecs.svg": "#FF9900",
    "aws-lambda.svg": "#FF9900",
    "aws-s3-rds.svg": "#FF9900",
    "cloudwatch.svg": "#FF4F8B",
    "datadog.svg": "#632CA6",
    "owasp.svg": "#FFFFFF",
    "yaml.svg": "#CB171E",
    "apm-logging.svg": "#46E3A8",
    "container-security.svg": "#00A4C8",
    "lynis-scoutsuite.svg": "#38EF7D",
    "chkrootkit.svg": "#557C94",
}

for fname in os.listdir(d):
    if not fname.endswith(".svg"):
        continue
    p = os.path.join(d, fname)
    with open(p, "r", encoding="utf-8") as f:
        content = f.read()

    # If it is a simple-icons style svg without fill in path or svg
    if "<path d=" in content and "fill=" not in content:
        color = brand_colors.get(fname, "#FFFFFF")
        new_content = content.replace("<path ", f'<path fill="{color}" ')
        with open(p, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Added fill={color} to {fname}")

print("All monochrome SVGs verified and colored!")
