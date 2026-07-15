# Portfolio Site — PRD

## Product Overview
A coded rebuild of Kurt Lee Gayao's portfolio — previously live on Framer at kurtleegayao.framer.website — as a Next.js/React site. Visual source of truth is the **Portfolio Website 2026** Figma file. Information architecture: Homepage + 6 case studies (all shipped) + Contact via footer. Visual language: **Kaisei Decol** (headings) + **Manrope** (body) + **Inria Serif** (accent/italic lines).

## Goals & Objectives
- Move off Framer's builder constraints into a codebase Kurt fully owns and can extend.
- Ship the audit-identified hero CTA fix (**View Work** / **Get in Touch**).
- Preserve the restraint-first design philosophy — minimal copy, work speaks for itself — rather than adding scope in the rebuild.
- Serve both audiences the portfolio targets: recruiters (scannable, credentialed) and direct clients (proof of process and outcomes).
- Reinforce the "designer-developer hybrid" positioning through the project grid and the About/skills strip (design tools + development tools).

## Core Features

### Shipped — Homepage
- Fixed nav with scroll-blur behavior; mobile hamburger drawer; anchors to About / Work / Contact (`/#about`, `/#work`, `/#contact` so they work from case study pages).
- Hero: name label, Kaisei headline (“Most designers hand off.” on one line) + Inria Serif accent (“*I follow through.*”), role subcopy, dual CTAs.
- Project grid: **6 equal cards** (no featured tier) linking to `/work/[slug]`.
- About section: portrait, name, “Designer who builds” tagline, bio, LinkedIn CTA → [linkedin.com/in/kurtlee1397](https://www.linkedin.com/in/kurtlee1397/).
- Skills strip: **Design** (Figma, Affinity, Illustrator, Photoshop, InDesign, After Effects) and **Development** (Framer, HTML/CSS/JS, Next.js) as 73×73 brand-icon tiles with Manrope labels. HTML/CSS/JS tile uses a black (`#000`) background.
- Footer / Contact band: closing CTA, `mailto:hello@kurtleeg.work`, social links (LinkedIn, Behance, GitHub).

### Shipped — Case Studies
- Dynamic route `app/work/[slug]/page.tsx` with `generateStaticParams`, metadata, and `notFound()` for unknown slugs.
- Shared template: `CaseStudyHero` + `CaseStudyBody` (sectioned heading/body + variable gallery counts) + shared Navbar/Footer.
- Content in `data/caseStudies.ts`; homepage cards in `data/projects.ts` (slugs must match).
- Gallery assets under `public/projects/<slug>/`; cover images remain `public/projects/<slug>.png`.

| Project | Slug | Route | Live site / extra |
|---|---|---|---|
| Zigmafy | `zigmafy` | `/work/zigmafy` | [zigmafy.com](https://zigmafy.com) |
| ARCS | `arcs` | `/work/arcs` | — |
| 36 Days of Type | `36-days-of-type` | `/work/36-days-of-type` | Challenge link → [36daysoftype.com](https://www.36daysoftype.com) |
| Vivita PH | `vivita-ph` | `/work/vivita-ph` | [vivita.ph](https://www.vivita.ph/) |
| Cornell Ingredients | `cornell-ingredients` | `/work/cornell-ingredients` | [cornellingredients.com](https://cornellingredients.com) |
| The AccountingBytes | `the-accountingbytes` | `/work/the-accountingbytes` | [theaccountingbytes.com](https://theaccountingbytes.com) |

### Planned / Optional
- Prev/next case study navigation between projects.
- Missing-image fallback for broken project assets.

## Out of Scope
- CMS or admin dashboard — content is managed by editing data files directly (`data/projects.ts`, `data/caseStudies.ts`, `data/skills.ts`).
- Blog/articles section.
- Multi-language support.
- User accounts or authentication.
- E-commerce/payment flows.
- Heavy motion design — animation stays minimal and restrained.
- Embedded contact form or calendar booking widgets (Contact stays mailto + socials in the footer).
- Stats panel / credential metrics strip (not in the Homepage Figma frame).
- Featured vs. standard project card tiers (Figma uses one equal card treatment for all six).

## Tech Stack
- **Framework:** Next.js App Router; dynamic case study routes at `/work/[slug]`
- **Styling:** Tailwind CSS v4, driven by `styles/tokens.css` (Figma DS variables)
- **Typography:** Kaisei Decol (heading), Manrope (text), Inria Serif (accent)
- **Data:** Static TypeScript modules under `data/`
- **Deployment:** GitHub Pages (static export via GitHub Actions) + custom domain `kurtleeg.work`
- **Build environment:** Cursor

## Figma Screens
| Screen | Figma Link | Status |
|---|---|---|
| Homepage | [node 1-2](https://www.figma.com/design/wccPUxDQDokA0si4PUwTVL/Portfolio-Website-2026?node-id=1-2&m=dev) | Implemented |
| The AccountingBytes | [node 15-104](https://www.figma.com/design/wccPUxDQDokA0si4PUwTVL/Portfolio-Website-2026?node-id=15-104&m=dev) | Implemented |
| ARCS | [node 17-78](https://www.figma.com/design/wccPUxDQDokA0si4PUwTVL/Portfolio-Website-2026?node-id=17-78&m=dev) | Implemented |
| 36 Days of Type | [node 17-144](https://www.figma.com/design/wccPUxDQDokA0si4PUwTVL/Portfolio-Website-2026?node-id=17-144&m=dev) | Implemented |
| Zigmafy | [node 18-216](https://www.figma.com/design/wccPUxDQDokA0si4PUwTVL/Portfolio-Website-2026?node-id=18-216&m=dev) | Implemented |
| Cornell Ingredients | [node 19-283](https://www.figma.com/design/wccPUxDQDokA0si4PUwTVL/Portfolio-Website-2026?node-id=19-283&m=dev) | Implemented |
| Vivita PH | [node 20-349](https://www.figma.com/design/wccPUxDQDokA0si4PUwTVL/Portfolio-Website-2026?node-id=20-349&m=dev) | Implemented |
| Navbar / Footer (global) | [node 7-297](https://www.figma.com/design/wccPUxDQDokA0si4PUwTVL/Portfolio-Website-2026?node-id=7-297&m=dev) | Implemented (Homepage + case studies) |

---

# Screen Specs

## Screen: Homepage — **Implemented**

**What is this page about?**
The single scannable entry point for recruiters and clients — establishes who Kurt is (designer who builds), surfaces six proof-of-work cards, then About + tool skills, then a dark contact footer.

**User flows**
- Land on page → read hero headline/CTAs → skim project grid → open a case study, OR
- Land on page → jump via nav to Work / About / Contact, OR
- Land on page → scroll to footer contact CTA / mailto / socials

**Page structure (top → bottom)**
1. `Navbar` — logo; About / Work / Contact; fixed; bottom border; scroll blur
2. `HeroSection` — “Most designers hand off.” / “*I follow through.*”; View Work + Get in Touch
3. `ProjectGrid` / `ProjectCard` — 6 projects from `data/projects.ts` → `/work/[slug]`
4. `AboutSection` + `SkillsList` — portrait, bio, LinkedIn; Design + Development icon grids from `data/skills.ts`
5. `Footer` (`#contact`) — “Let’s make something *worth building*”; email; socials

**What data is displayed?**
- Hero: name, headline + accent line, role line, CTA labels/hrefs.
- Projects (×6): title, category, summary, cover image, slug.
- About: portrait, name, tagline, bio paragraphs, LinkedIn URL.
- Skills: two groups with icon asset path + label per tool.
- Footer: CTA copy, email, social links, copyright line.

**Components**
`Navbar`, `CompanyLogo`, `HeroSection`, `ProjectGrid`, `ProjectCard`, `AboutSection`, `SkillsList`, `Button`, `Footer`.

**States & edge cases**
- Nav: default (top of page) vs. scrolled (blurred background).
- Mobile: nav collapses to hamburger drawer; project grid stacks; skills grid wraps (3 cols → 6 on `sm+` for Design).
- Project images: lazy-load; missing-image fallback still TBD.
- Long project titles: wrap within card layout (fluid type).
- Skill icons: icon-only PNGs under `public/skills/icons/` + HTML labels (do not bake labels into assets — avoids double-text / crop overlays). Brand colors preserved on Design tools; Development tiles are monochrome (Framer, Next.js) except as intentionally styled (HTML/CSS/JS bg `#000`).

---

## Screen: Case Study Template (`/work/[slug]`) — **Implemented**

**What is this page about?**
A single reusable template rendering one project's full story — overview, scope/tools/year, optional Visit Website, and sectioned gallery narrative — for any of the 6 case studies via a dynamic route.

**User flows**
- Arrive via ProjectGrid click → read case study top to bottom → optionally Visit Website (external) → return via nav to homepage anchors or drop into Contact from the footer CTA.

**Page structure (top → bottom)**
1. `Navbar` — same global nav; links use `/#…` hashes
2. `CaseStudyHero` — title, category/tagline, overview (multi-paragraph via `\n\n`), optional scope (single line or newline-separated bullets), tools + challenge link, year, Visit Website button when `websiteUrl` is set
3. `CaseStudyBody` — ordered `sections[]`: optional heading, optional body (`whitespace-pre-line`), zero or more 16:9 gallery images
4. `Footer` — same contact band as homepage

**What data is displayed?** (`data/caseStudies.ts`)
| Field | Required | Notes |
|---|---|---|
| `slug` | yes | Must match `data/projects.ts` |
| `title` | yes | Page H1 + metadata |
| `category` | yes | Accent tagline under title |
| `overview` | yes | Multi-paragraph with `\n\n` |
| `scope` | no | Single string, or `\n`-separated lines → bullet list |
| `tools` | no | e.g. 36 Days of Type |
| `year` | no | Displayed when present |
| `websiteUrl` | no | Shows Visit Website button when set |
| `challengeUrl` | no | Linked hostname next to tools |
| `sections[]` | yes | `{ heading?, body?, images[] }` — images may be empty |

**Components**
`Navbar`, `CaseStudyHero`, `CaseStudyBody`, `Button`, `Footer`.

**States & edge cases**
- Optional fields omitted → UI blocks simply don’t render (no Visit Website without `websiteUrl`).
- Variable gallery counts — body handles 0–N images per section and across studies.
- Multi-line scope (Vivita) renders as a semantic bullet list; other studies keep “Scope: …” as one line.
- Invalid/unknown slug → Next.js `notFound()` / 404.
- External Visit Website / challenge / social links open in a new tab with `rel="noopener noreferrer"`.

---

## Contact & Socials (global)

| Channel | URL |
|---|---|
| Email | `mailto:hello@kurtleeg.work` |
| LinkedIn | https://www.linkedin.com/in/kurtlee1397/ |
| Behance | https://www.behance.net/kurtleegayao |
| GitHub | https://github.com/Kurtly97 |
