# GitHub Pages Reference

## Overview

GitHub Pages serves static files from a repository. Two publishing approaches exist:

1. **Branch-based (legacy):** Select a branch and folder (`/` or `/docs`) as the source. GitHub runs Jekyll by default.
2. **GitHub Actions (modern, recommended):** A workflow builds and deploys. Best when not using Jekyll.

To configure: **Repository Settings > Pages > Build and deployment > Source > GitHub Actions**.

## GitHub Actions Deployment

### Key Actions

| Action | Purpose |
|--------|---------|
| `actions/checkout@v4` | Check out the repo |
| `actions/configure-pages@v5` | Configure Pages settings |
| `actions/upload-pages-artifact@v4` | Package files into a deployable artifact |
| `actions/deploy-pages@v4` | Deploy the artifact to GitHub Pages |

### Required Permissions

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

### Deployment Environment

The job **must** use `environment: name: github-pages` for deployment to work.

### Minimal Workflow

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v4
        with:
          path: '.'
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Static File Serving

- GitHub Pages looks for `index.html`, `index.md`, or `README.md` as the entry file.
- Any static file in the deployed directory is accessible by its path.
- The `path` parameter in `upload-pages-artifact` controls which directory to upload.

## MIME Types & VCF Files

GitHub Pages supports **750+ MIME types** via [mime-db](https://github.com/jshttp/mime-db).

| Extension | MIME Type | Source |
|-----------|-----------|--------|
| `.vcf` | `text/x-vcard` | Apache |
| `.vcard` | `text/vcard` | IANA |

Both are recognized by most devices for contact import. Custom MIME types cannot be set per-file.

## Other Details

- **Custom domains:** Add a `CNAME` file with your domain. Configure DNS.
- **HTTPS:** Automatic for `*.github.io`.
- **Propagation:** Changes can take up to 10 minutes.
- **Artifact limits:** Max 10GB, no symbolic or hard links.
- **Environment protection:** Rules can be added to the `github-pages` environment.

## Sources

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://pages.github.com/
