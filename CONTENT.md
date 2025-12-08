# Baresquare Website Content

All homepage content in one place. Edit the corresponding `.ts` file to update.

---

## Hero Section
**File:** `src/content/home/hero.ts`

| Field | Content |
|-------|---------|
| Badge | Meet Tywin |
| Headline | Agents that work |
| Accent Word | for you. |
| Info Badge | Autonomous eCommerce Agent |
| Info Description | AI that monitors your campaigns, inventory, pricing, and competitors—then takes action automatically. |

---

## Featured Work
**File:** `src/content/home/features.ts`

### VOGUE
- **Title:** +4% Incremental Revenue
- **Description:** What took 5 hours now takes 5 minutes.

### SONY
- **Title:** 40% Reduction in SEO Budget
- **Description:** 90% fewer 404 errors. Live since 2018.

### adidas
- **Title:** 30,000 Employees
- **Description:** On our AI coach. Global. On-premise.

---

## About Section
**File:** `src/content/home/about.ts`

| Field | Content |
|-------|---------|
| Badge | About Baresquare |
| Headline | We partner with science-led businesses that are shaping what's next. |
| Description | Baresquare's role is to shape the invisible structures—data, tools, thinking—that power visible breakthroughs. |
| Faded Text | More possible. Focused, and flexible. |

---

## Approach Section
**File:** `src/content/home/approach.ts`

| Field | Content |
|-------|---------|
| Badge | Our Approach |
| Headline | Only ask us what strategy should happen. We'll tell you what should happen next. |
| Description | We transform complex challenges into actionable strategies through rigorous analysis and creative problem-solving. |

---

## Services Section
**File:** `src/content/home/services.ts`

**Intro:**
- **Headline:** Four ways we turn AI into business outcomes.
- **Description:** Not demos. Not pilots. Real automation running at scale today.

### 1. Revenue Performance
Don't leave money on the table. Intelligent automation that forecasts, explains, and optimizes—capturing value you're currently missing.

### 2. AI Search & Marketing
Be found in the AI era. Adapt to AI-driven discovery, agentic commerce, and win the citation war against competitors.

### 3. Data & Operations
Automation that eliminates manual processes and fixes friction. Connecting your existing infrastructure to unlock efficiency.

### 4. Learning & Development
Empower every employee. AI-powered learning matched to roles, skill gaps, and career paths—deployed on enterprise infrastructure.

### (Disabled) Regulatory Guidance
Our consultants guide product teams through scientific, technical, and regulatory alignment—so nothing stalls in translation.

### (Disabled) Collaborative Ops
We facilitate coordination between R&D, engineering, and leadership—helping complex teams think clearly and build cohesively.

---

## How We Work (Process)
**File:** `src/content/home/process.ts`

| Step | Title | Description |
|------|-------|-------------|
| 01 | Human intelligence first | Human intelligence maps the problem first. |
| 02 | AI where it matters | AI automates what humans already understand. |
| 03 | Metrics that move the business | Metrics the business actually cares about. |

---

## Testimonial
**File:** `src/content/home/testimonial.ts`

> "A human action triggers 10 AI-driven actions. The time to identify and resolve issues dropped by 85%."

— **Stephanie White**, Strategy & Operations, SONY

---

## CTA Sections
**File:** `src/content/home/cta.ts`

### Mid-Page CTA (currently disabled)
- **Headline:** From insight to *impact.*
- **Description:** Consulting that translates innovation into outcomes.
- **Button:** Get Started

### Final CTA
- **Headline:** Ready to shape the *future?*
- **Description:** Let's discuss how Baresquare can help accelerate your vision.
- **Button:** Contact us

**Quote Panel (inside Final CTA):**
> "Baresquare transformed how we approach strategic decisions. Their insights helped us navigate a complex market landscape and achieve results that exceeded our expectations."

— **Sarah Chen**, Chief Strategy Officer, Meridian Health Systems

---

## Footer
**File:** `src/config/site.config.ts` → `navigation.footer`

### Company
- About
- Contact

### Services
- Revenue Performance
- AI Search & Marketing
- Data & Operations
- Learning & Development

### Featured Work
- VOGUE
- SONY
- adidas

---

## Quick Edit Guide

1. Find the section above
2. Note the **File** path
3. Edit the `.ts` file
4. Content updates on next build

**Example:**
```typescript
// src/content/home/hero.ts
export const heroContent: HeroContent = {
  badge: 'Meet Tywin',
  headline: 'Agents that work',
  accentWord: 'for you.',
  // ...
};
```
