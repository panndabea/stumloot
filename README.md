# stumloot

> **A configuration that passes validation but fails reality.**

[![Status: Experimental](https://img.shields.io/badge/status-experimental-orange)](https://github.com/panndabea/stumloot)
[![RFC-SL-0001](https://img.shields.io/badge/RFC--SL--0001-informational-blue)](https://github.com/panndabea/stumloot)

---

## What is stumloot?

**stumloot** is an invented technical slang term for a specific, frustrating failure mode
that every SRE, DevOps engineer, platform engineer, and network admin has encountered:

> A system state in which a component, route, certificate, service, or configuration
> appears syntactically valid or operationally healthy, yet yields no meaningful
> end-to-end outcome.

The defining characteristic of a stumloot condition is its **plausible appearance of health**.
Dashboards stay green. Monitors don't alert. CI passes. It is only when someone actually
tries to use the system — or waits for a user to report that they cannot — that the
stumloot condition becomes visible.

---

## Why this term was invented

Existing language fails to describe this specific failure class precisely:

- **"broken"** — too broad; implies obvious failure. Stumloot is the opposite.
- **"misconfigured"** — describes cause, not effect.
- **"no-op"** — usually intentional and harmless. Stumloot wastes debugging time.
- **"false positive"** — monitoring-domain term; doesn't describe system state.
- **"blackhole"** — network-specific; doesn't cover TLS, DNS, or service mesh variants.
- **"it's up but not working"** — accurate but five words long and not searchable.

Stumloot fills the gap: a single word for the confident-looking non-function.

---

## Site Structure

The site (`index.html`) is a single-page layout with the following sections:

1. **Hero** — title, subtitle, badges, CTA buttons, live status ticker
2. **Why This Word Exists** — linguistic and technical motivation
3. **The Definition** — Urban Dictionary–style parody entry
4. **The RFC** — RFC-SL-0001 formal mini specification
5. **Technical Use Cases** — cards for Cloudflare Tunnel, TLS, DNS, Kubernetes, reverse proxy, health checks
6. **Word Family** — stumloot, to stumloot, stumlooted, stumlooting, stumlooty, stumlooter
7. **Why the Existing Terms Miss** — comparison table
8. **Incident Report** — fictional but realistic postmortem
9. **Adopt the Term** — usage examples for PRs, issues, Slack, runbooks, alerts, postmortems
10. **Footer** — appropriately fatalistic

---

## File Structure

```
stumloot/
├── index.html    — Single-page site (all sections, semantic HTML)
├── styles.css    — Dark-mode-first responsive stylesheet (no external deps)
├── script.js     — Smooth scroll, clipboard copy, rotating status ticker
└── README.md     — This file
```

---

## Deployment (GitHub Pages)

1. Fork or clone this repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select the branch (e.g. `main`) and root (`/`) as the directory.
4. Click **Save**. GitHub Pages will publish the site.

The site is entirely static — no build step, no dependencies, no framework.
It can be opened directly from the filesystem or served from any static host.

---

## Customization

- **Ticker phrases**: edit the `phrases` array in `script.js`.
- **Color palette**: CSS custom properties are defined in the `:root` block at the top of `styles.css`.
- **RFC content**: edit the RFC section in `index.html` to add or adjust subsections.
- **Use case cards**: copy an existing `.usecase-card` block and update the content.

---

## Suggested Repo Names

- `stumloot`
- `stumloot-rfc`
- `stumloot.pages`
- `operational-slang-stumloot`
- `rfc-sl-0001`

---

## Disclaimer

This is a joke concept with suspiciously real usefulness.

The term "stumloot" is invented. The failure mode it describes is not.
If you have spent more than 20 minutes debugging a system where everything looked healthy
and nothing was working, you have personally experienced stumloot.

This site exists to give that experience a name.

---

*Not an official standard. Yet.*  
*Drafted under emotional distress during infrastructure debugging.*  
*Apparently healthy. Functionally useless.*