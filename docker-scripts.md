
# Docker Scripts for package.json

Add these scripts to your package.json file in the "scripts" section:

```json
"docker:build": "docker build -t p4-companies-web .",
"docker:run": "docker run -p 8080:80 p4-companies-web",
"docker:compose": "docker-compose up -d",
"docker:compose:build": "docker-compose up -d --build"
```
