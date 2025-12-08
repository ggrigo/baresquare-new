# Baresquare Website Content

All homepage content in one place. Edit the corresponding `.ts` file to update.

---

## Hero Section
**File:** `src/content/home/hero.ts`

**Headline:** Agents that work *for you.*

---

## Featured Work
**File:** `src/content/home/features.ts`

**Section Headline:** Faster, more confident decisions.

| Brand | Title | Description |
|-------|-------|-------------|
| VOGUE | +4% Incremental Revenue | What took 5 hours now takes 5 minutes. |
| SONY | 40% Reduction in SEO Budget | 90% fewer 404 errors. Live since 2018. |
| adidas | 30,000 Employees | On our AI coach. Global. On-premise. |

---

## About Section
**File:** `src/content/home/about.ts`

**Badge:** About Baresquare

**Headline:** We partner with science-led businesses that are shaping what's next.

**Description:** Baresquare's role is to shape the invisible structures—data, tools, thinking—that power visible breakthroughs. More possible. Focused, and flexible.

---

## Approach Section
**File:** `src/content/home/approach.ts`

**Badge:** Our Approach

**Headline:** Only ask us what strategy should happen. We'll tell you what should happen next.

**Description:** We transform complex challenges into actionable strategies through rigorous analysis and creative problem-solving.

---

## Services Section
**File:** `src/content/home/services.ts`

**Headline:** Four ways we turn AI into business outcomes.

**Subheadline:** Not demos. Not pilots. Real automation running at scale today.

| Service | Description |
|---------|-------------|
| **Revenue Performance** | Don't leave money on the table. Intelligent automation that forecasts, explains, and optimizes—capturing value you're currently missing. |
| **AI Search & Marketing** | Be found in the AI era. Adapt to AI-driven discovery, agentic commerce, and win the citation war against competitors. |
| **Data & Operations** | Automation that eliminates manual processes and fixes friction. Connecting your existing infrastructure to unlock efficiency. |
| **Learning & Development** | Empower every employee. AI-powered learning matched to roles, skill gaps, and career paths—deployed on enterprise infrastructure. |

---

## How We Work
**File:** `src/content/home/process.ts`

**Badge:** Our Process

**Headline:** How we work

| Step | Title | Description |
|------|-------|-------------|
| 01 | Human intelligence first | Human intelligence maps the problem first. |
| 02 | AI where it matters | AI automates what humans already understand. |
| 03 | Metrics that move the business | Metrics the business actually cares about. |

---

## Testimonial (in CTA section)
**File:** `src/content/home/cta.ts`

> "Baresquare transformed how we approach strategic decisions. Their insights helped us navigate a complex market landscape and achieve results that exceeded our expectations."

— **Sarah Chen**, Chief Strategy Officer, Meridian Health Systems

---

## Final CTA
**File:** `src/content/home/cta.ts`

**Headline:** Ready to shape the *future?*

**Description:** Let's discuss how Baresquare can help accelerate your vision.

**Button:** Contact us

---

## Footer
**File:** `src/config/site.config.ts` → `navigation.footer`

| Company | Services | Featured Work |
|---------|----------|---------------|
| About | Revenue Performance | VOGUE |
| Contact | AI Search & Marketing | SONY |
| | Data & Operations | adidas |
| | Learning & Development | |

---

## Notes

- **Testimonial mismatch:** The standalone testimonial file (`testimonial.ts`) has Stephanie White/SONY, but the CTA section shows Sarah Chen. Need to sync these.
- **Hero badge:** Code has "Meet Tywin" but it's not displayed on live site.
