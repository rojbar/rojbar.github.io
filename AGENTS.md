# AGENTS.md

Serves `rojbar.com` and `www.rojbar.com` from GitHub Pages only to redirect them, over HTTPS, to
the profile at `https://www.rojbar.online/`, which the templaterojbar platform serves (`front`).
Namecheap's URL redirect cannot do this: its redirect servers do not answer on port 443.

- `index.html` and `404.html` are the same page, so every path redirects. Pages cannot send a 301,
  so it is `window.location.replace` in `redirect.js`, with a `meta refresh` for browsers without
  JavaScript.
- `redirect.js` sends the old demo paths (`/caldep-solver/`, `/chicken-rescue/`,
  `/Elementary-cellular-automaton/`, any case) to the same path under
  `https://templaterojbar.github.io`, where those repositories moved. Everything else goes to the
  profile.
- `CNAME` holds the custom domain. In Namecheap, `@` is an ALIAS and `www` a CNAME to
  `rojbar.github.io.`. The mail records (MX, SPF, DKIM, DMARC) live beside them and are not
  this repository's.
- No build: Pages publishes `main` as it is.
