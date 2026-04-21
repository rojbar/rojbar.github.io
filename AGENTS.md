# AGENTS.md

## Project

Hugo static site for `rojbar.com`. No JavaScript build tooling — content is Markdown, config is TOML.

## Essential commands

```sh
# Local dev server (hot-reload)
hugo server

# Production build → ./public/
hugo --minify
```

No `npm`, `make`, or test commands exist.

## Theme

`themes/hugo-theme-console/` is a **Git submodule**. After cloning:

```sh
git submodule update --init --recursive
```

CI uses `actions/checkout` with `submodules: true` — locally you must do this manually or the theme will be missing and the build will fail.

## Deployment

- CI builds on every push and PR.
- Deploy to GitHub Pages happens **only on `main`** via `peaceiris/actions-gh-pages`.
- Never manually commit to or edit `public/` — it is generated output.

## Content

All site content lives in `content/projects/`. There are no blog posts. New content sections require a corresponding layout in `layouts/` or the theme.

## Hugo version

CI installs the **latest** Hugo (unpinned in `.github/workflows/gh-pages.yml`). If a build breaks unexpectedly after a Hugo release, that is the likely cause.
