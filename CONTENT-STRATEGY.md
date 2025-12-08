# Baresquare Content Strategy

## Purpose

This document is the "autocompact" for content decisions. When context is lost, this file preserves:
- What content goes on which page
- How pages reference each other
- Which metrics belong to which project/client
- The overall narrative arc

---

## Site Architecture

```
/                           Homepage (hub)
├── /contact                Contact form
├── /about                  Company story [PENDING]
├── /services/
│   ├── revenue-performance     Pillar 1 [PENDING]
│   ├── ai-search-marketing     Pillar 2 [PENDING]
│   ├── data-operations         Pillar 3 [LIVE]
│   └── learning-development    Pillar 4 [PENDING]
└── /work/
    ├── vogue               Revenue case study [PENDING]
    ├── sony                Efficiency case study [LIVE - NEEDS FIX]
    └── adidas              Scale case study [PENDING]
```

---

## Content Relationships Matrix

| From Page | Should Reference | How |
|-----------|-----------------|-----|
| Homepage | All services, all case studies | Feature cards link to case studies; Services section links to service pages |
| Contact | None | Standalone conversion page |
| About | Services (our capabilities), Case studies (our work) | "See what we do" → services; "See our work" → case studies |
| Service: Revenue Performance | VOGUE case study | "See how we delivered +4% for VOGUE" |
| Service: AI Search & Marketing | None yet | Future: SEO case study |
| Service: Data & Operations | SONY case study | "See how we cut costs 40% for SONY" |
| Service: Learning & Development | adidas case study | "See how we scaled to 30,000 employees for adidas" |
| Case Study: VOGUE | Revenue Performance service | "Learn about Revenue Performance" |
| Case Study: SONY | Data & Operations service | "Learn about Data & Operations" |
| Case Study: adidas | Learning & Development service | "Learn about Learning & Development" |

---

## CRITICAL: Client Project Breakdown

### SONY - 3 Programs (CLARIFIED)

| # | Program | Description | Key Metric | Quote Source |
|---|---------|-------------|------------|--------------|
| 1 | 404 Monitoring & Resolution | Detect 404 errors, auto-resolve with redirects | TBD | TBD |
| 2 | SEO Optimization | AI-powered SEO management | **40% SEO budget cut** | TBD |
| 3 | Data Accuracy | Campaign data monitoring & diagnostics | **85% faster resolution**, **10x action multiplier** | **Stephanie White** |

**Current page (`/work/sony`) should focus on Program 3 (Data Accuracy)** since that's where the Stephanie White quote comes from. The 40% metric is from Program 2 (SEO), so we should either:
- Option A: Focus page on Data Accuracy, mention SEO as secondary
- Option B: Frame as "SONY Partnership" with multiple wins
- **Recommended**: Option B - show breadth of partnership

### Condé Nast (VOGUE) - 2 Programs (CLARIFIED)

| # | Program | Description | Key Metric | Quote Source |
|---|---------|-------------|------------|--------------|
| 1 | Revenue Optimization | Increase online revenues | **+4% incremental revenue** | TBD |
| 2 | Process Automation | Automate manual workflows | **5 hours → 5 minutes** | TBD |

**Questions to resolve:**
- [ ] Who is the quote source for VOGUE/Condé Nast?
- [ ] Which program should the case study focus on? (Recommend: Revenue, with automation as supporting proof)

### adidas

| Project | Description | Key Metric | Quote Source |
|---------|-------------|------------|--------------|
| GenAI HR Coach | AI learning & development platform | 30,000 employees globally | TBD |

**Questions to resolve:**
- [ ] Who is the quote source for adidas?
- [ ] Is this on-premise deployment the key differentiator?
- [ ] What specific outcomes beyond scale?

---

## Page Content Specifications

### Homepage (`/`)

**Purpose**: Hub page that introduces all capabilities and proof points

**Content blocks that reference other pages:**

| Section | References | Link Destination |
|---------|-----------|------------------|
| Featured Work: Revenue | VOGUE story | `/work/vogue` |
| Featured Work: Efficiency | SONY story | `/work/sony` |
| Featured Work: Scale | adidas story | `/work/adidas` |
| Services: Revenue Performance | Service detail | `/services/revenue-performance` |
| Services: AI Search & Marketing | Service detail | `/services/ai-search-marketing` |
| Services: Data & Operations | Service detail | `/services/data-operations` |
| Services: Learning & Development | Service detail | `/services/learning-development` |
| CTA Quote | SONY/Stephanie White | Could link to `/work/sony` |
| About Section | Full about page | `/about` |
| All CTAs | Contact page | `/contact` |

### Service Pages (`/services/*`)

**Purpose**: Deep-dive on one capability with related case study

**Required content blocks:**
1. Hero (badge, title, description)
2. Problem Statement
3. Solution Overview
4. Features (3-4 capabilities)
5. **Related Case Study** ← MISSING FROM CURRENT IMPLEMENTATION
6. CTA

**Related Case Study Block (to add):**

| Service Page | Related Case Study | Teaser Text |
|--------------|-------------------|-------------|
| Revenue Performance | VOGUE | "How we delivered +4% incremental revenue for VOGUE" |
| AI Search & Marketing | None yet | Skip this block |
| Data & Operations | SONY | "How we reduced costs 40% for SONY" |
| Learning & Development | adidas | "How we scaled to 30,000 employees for adidas" |

### Case Study Pages (`/work/*`)

**Purpose**: Client story with metrics, challenge, solution, results

**Required content blocks:**
1. Hero (brand, headline metric)
2. Challenge
3. Solution
4. Results (metrics grid)
5. Quote
6. **Related Service** ← MISSING FROM CURRENT IMPLEMENTATION
7. CTA

**Related Service Block (to add):**

| Case Study | Related Service | Link Text |
|------------|-----------------|-----------|
| VOGUE | Revenue Performance | "Learn about our Revenue Performance service" |
| SONY | Data & Operations | "Learn about our Data & Operations service" |
| adidas | Learning & Development | "Learn about our Learning & Development service" |

### Contact Page (`/contact`)

**Purpose**: Conversion page, standalone

**No cross-references needed** (keep focus on form submission)

### About Page (`/about`) [PENDING]

**Purpose**: Company story, credibility, team philosophy

**Should reference:**
- Services section: "What we do" → link to individual services
- Case studies: "Who we've helped" → link to case studies
- Contact: CTA at bottom

---

## Internal Linking Rules

1. **Every service page** links to its related case study
2. **Every case study page** links to its related service
3. **Homepage** links to all services and case studies
4. **About page** links to services overview
5. **All pages** have CTA linking to `/contact`
6. **Footer** provides navigation to all major sections

---

## Content Gaps to Fill

### Missing Cross-References (to implement)

- [ ] `/services/data-operations` → Add "See the SONY case study" block
- [ ] `/work/sony` → Add "Learn about Data & Operations" block
- [ ] Homepage Feature cards → Verify links work

### Missing Content (to research)

- [ ] VOGUE: Challenge, solution details, quote source
- [ ] SONY: Clarify which metrics belong to which program
- [ ] adidas: Challenge, solution details, quote source

### Missing Pages (Phase 2+)

- [ ] `/about`
- [ ] `/services/revenue-performance`
- [ ] `/services/ai-search-marketing`
- [ ] `/services/learning-development`
- [ ] `/work/vogue`
- [ ] `/work/adidas`

---

## Narrative Arc

The site tells one story across all pages:

```
Homepage: "AI that works. Proof: VOGUE, SONY, adidas."
    ↓
Service Pages: "Here's how we do [specific capability]"
    ↓
Case Studies: "Here's the proof for [specific client]"
    ↓
Contact: "Let's find out if we can help you"
```

Each page is a chapter, not a standalone document.

---

## Version History

| Date | Change | Author |
|------|--------|--------|
| 2024-12-08 | Initial content strategy | Claude |
| | TODO: Clarify SONY project breakdown | |
| | TODO: Add cross-reference blocks to pages | |
