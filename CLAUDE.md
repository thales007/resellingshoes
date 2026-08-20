# ResellingShoes.com — Claude Code Instructions

This file is the single source of truth for how Claude Code operates in this repo. If a `.claude/skills/content-agent/SKILL.md` file exists in this repo, delete it — its instructions have been folded into this file. Two separate instruction files caused conflicting/incomplete behavior in the past; this is the only one that should exist now.

Full content strategy, tier definitions, and article priorities live in `content-strategy.md` in the Claude.ai Project Knowledge (not in this repo). This file covers what Claude Code specifically needs to draft and publish correctly. If the two ever conflict, `content-strategy.md` in Project Knowledge wins — update this file to match.

---

## Site architecture

- **Stack:** Astro 5, deployed via GitHub (`thales007/resellingshoes`) → Vercel auto-deploy on `main`. New work happens on the `astro-migration` branch; merge to `main` to deploy.
- **Homepage:** `src/pages/index.astro`
- **Article pages:** `src/pages/[slug].astro` + `src/layouts/ArticleLayout.astro`
- **Article markdown:** `src/content/articles/*.md`
- **Article data:** `public/js/articles-data.js`
- **Static pages:** `public/[page-name]/index.html`
- **Other pages:** `src/pages/about.astro`, `src/pages/privacy.astro`
- **Hero images:** `src/assets/hero/`

## Publishing checklist — every new article needs all three

1. `.md` file in `src/content/articles/` with correct frontmatter
2. Entry added to `public/js/articles-data.js`
3. Entry added to `sitemap.xml` at priority 0.8

GitHub Actions handle downstream automation (`article-publish.yml`, `article-validate.yml`, `index-request.yml`) — don't hand-edit what those already cover.

## Before drafting anything

- Read 2–3 existing articles in `src/content/articles/` for voice and structure consistency.
- Check content-reference/verified-examples.md and content-reference/affiliate-reference.md for real sales numbers and confirmed product links. These are periodically-synced mirrors of the master copies in Claude.ai Project Knowledge — if a needed product or number isn't in them, stop and ask, don't guess or fabricate.

## Content rules (non-negotiable, every tier)

- No hype sneakers, no StockX, GOAT, or Jordan references
- No mid-article CTAs — CTAs at the bottom only, in order: free guide → paid guide → related articles
- No "buy on sight" language for any brand
- Voice: direct, first-person, real numbers only
- Title tags under 60 characters

## Word count bands

- Tier 1 (Funnel/Beginner): 1,200–1,600 words
- Tier 2 (Process/Affiliate): 1,600–2,800 words
- Tier 3 (Reference/Authority): 1,800–3,000+ words

Length is a byproduct of complete coverage, not a target — see `content-strategy.md` if a draft runs well outside its band.

## Workflow — where each step happens

1. **Keyword research + interview** happen in Claude.ai chat, not here. Ubersuggest MCP is only connected there. By the time a task reaches Claude Code, the keyword, tier, and interview answers (including any real affiliate links) should already be provided.
2. **Draft** happens here — write the `.md` file directly into `src/content/articles/`, matching the existing Astro structure and site brand styling (DM Serif Display + DM Sans on article pages; charcoal `#1A1A1A`, green `#2F8B5C`, walnut `#C4943A`, cream `#faf8f5`).
3. **Publish** — complete the three-touch checklist above, then commit and push to GitHub **only after explicit confirmation in that session.** Never auto-push.

## Affiliate disclosure

Any article containing affiliate links must include the disclosure near the top: "This post contains affiliate links. I may earn a commission if you purchase through them at no extra cost to you."
