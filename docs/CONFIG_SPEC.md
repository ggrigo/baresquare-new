# Baresquare Configuration Specification v2

## Overview

A comprehensive configuration system that controls **everything** about the website at **build time**:
- What sections render
- What elements within sections render
- Navigation structure (header & footer)
- Social links
- Content with enable/disable flags
- CTA visibility

All decisions are made during Astro compilation—**no runtime JavaScript** for toggling.

---

## Configuration Structure

```typescript
// src/config/site.config.ts
export const siteConfig: SiteConfig = {
  sections: { ... },      // Homepage sections
  navigation: { ... },    // Header & footer
  social: { ... },        // Social media links
  routes: { ... },        // Coming Soon / available pages
  defaults: { ... },      // Default messages
};
```

---

## 1. Sections Configuration

### Schema

```typescript
sections: {
  [sectionId: string]: {
    enabled: boolean;                    // Render section?
    elements?: {                         // Sub-element visibility
      [elementId: string]: { enabled: boolean };
    };
    limit?: number;                      // Max items to show (for lists)
    content?: { ... };                   // Section-specific content
  }
}
```

### All Sections & Their Elements

#### `hero` - Hero Section
```typescript
hero: {
  enabled: true,
  elements: {
    video: { enabled: false },           // Video background
    infoBanner: { enabled: false },      // "Autonomous eCommerce Agent" banner
  },
  content: {
    badge: 'Meet Tywin',
    headline: 'Agents that work',
    accentWord: 'for you.',
    videoId: '{sample video id}',
    infoBadge: 'Autonomous eCommerce Agent',
    infoDescription: 'AI that monitors your campaigns, inventory, pricing, and competitors—then takes action automatically.',
  }
}
```

#### `featureSlider` - Featured Work
```typescript
featureSlider: {
  enabled: true,
  limit: 3,                              // Show only 3 items (4th prepared for later)
  content: {
    badge: 'Featured Work',
    headline: 'Faster, more confident decisions.',
    items: [
      {
        enabled: true,
        title: 'Unlocking new genetic insights',
        category: 'Healthcare',
        image: '/images/features/feature-1.jpg',
        href: '/work/genetic-insights',
      },
      {
        enabled: true,
        title: 'Powering breakthrough discoveries',
        // ...
      },
      {
        enabled: true,
        title: 'Accelerating clinical trials',
        // ...
      },
      {
        enabled: false,                  // Ready for future release
        title: 'Fourth case study',
        // ...
      },
    ]
  }
}
```

#### `about` - About Baresquare
```typescript
about: {
  enabled: true,
  elements: {
    ctaLink: { enabled: false },         // Hide "Learn about us" link
  },
  content: {
    badge: 'About Baresquare',
    headline: 'We partner with science-led businesses that are shaping what\'s next.',
    description: 'Baresquare\'s role is to shape the invisible structures—data, tools, thinking—that power visible breakthroughs. More possible. Focused, and flexible.',
    ctaText: 'Learn about us',
    ctaHref: '/about',
    images: ['/images/about-1.jpg', '/images/about-2.jpg'],
  }
}
```

#### `approach` - Our Approach
```typescript
approach: {
  enabled: true,
  elements: {
    ctaLink: { enabled: true },
  },
  content: {
    badge: 'Our Approach',
    headline: 'Only ask us what strategy can\'t answer alone.',
    description: 'We combine deep domain expertise with modern execution...',
    ctaText: 'Our methodology',
    ctaHref: '/approach',
    images: ['/images/approach-1.jpg'],
  }
}
```

#### `stats` - Statistics
```typescript
stats: {
  enabled: true,
  elements: {
    measurableOutcomes: { enabled: false },  // Hide "Measurable outcomes"
    clientRetention: { enabled: true },
    projectsDelivered: { enabled: true },
    avgROI: { enabled: true },
  },
  content: {
    badge: 'Consulting Impact',
    items: [
      { id: 'measurableOutcomes', value: '100%', label: 'Measurable outcomes' },
      { id: 'clientRetention', value: '95%', label: 'Client retention' },
      { id: 'projectsDelivered', value: '200+', label: 'Projects delivered' },
      { id: 'avgROI', value: '340%', label: 'Avg. ROI' },
    ]
  }
}
```

#### `services` - Services Grid
```typescript
services: {
  enabled: true,
  limit: 6,                              // Show max 6 services
  content: {
    badge: 'Our Services',
    headline: 'Capabilities that compound.',
    items: [
      { enabled: true, title: 'Strategy', description: '...', href: '/services/strategy' },
      { enabled: true, title: 'Infrastructure', description: '...', href: '/services/infrastructure' },
      // ...
    ]
  }
}
```

#### `process` - Process Steps
```typescript
process: {
  enabled: true,
  content: {
    badge: 'How We Work',
    headline: 'From complexity to clarity.',
    steps: [
      { number: '01', title: 'Discovery', description: '...' },
      { number: '02', title: 'Strategy', description: '...' },
      { number: '03', title: 'Execution', description: '...' },
      { number: '04', title: 'Optimization', description: '...' },
    ]
  }
}
```

#### `testimonial` - Customer Quote
```typescript
testimonial: {
  enabled: true,
  content: {
    quote: 'Baresquare transformed how we approach data-driven decisions...',
    author: 'Sarah Chen',
    role: 'Chief Data Officer',
    company: 'Meridian Health',
    image: '/images/testimonials/sarah-chen.jpg',
  }
}
```

#### `ctaMid` - Mid-Page CTA
```typescript
ctaMid: {
  enabled: false,                        // Disabled - only using final CTA
}
```

#### `ctaFinal` - Final CTA
```typescript
ctaFinal: {
  enabled: true,
  content: {
    headline: 'From insight to impact.',
    subheadline: 'Consulting that translates innovation into outcomes.',
    primaryCta: { label: 'Get Started', href: '/contact' },
    secondaryCta: { label: 'Get in touch', href: '/contact' },
  }
}
```

#### `blog` - Blog Grid
```typescript
blog: {
  enabled: false,                        // Disabled until content ready
  limit: 3,
  content: {
    badge: 'Latest Insights',
    headline: 'Thoughts on transformation.',
  }
}
```

---

## 2. Navigation Configuration

### Schema

```typescript
navigation: {
  header: {
    enabled: boolean;                    // Show entire header?
    logo: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    cta: {
      enabled: boolean;                  // Show "Get in touch" button?
      label: string;
      href: string;
    };
    items: NavItem[];
  };
  footer: {
    enabled: boolean;
    logo: { ... };
    tagline: string;
    columns: FooterColumn[];
    legal: LegalLink[];
  };
}
```

### Full Example

```typescript
navigation: {
  // ═══════════════════════════════════════════════════════════
  // HEADER
  // ═══════════════════════════════════════════════════════════
  header: {
    enabled: true,
    logo: {
      src: '/images/baresquare-logo.svg',
      alt: 'Baresquare',
      width: 140,
      height: 20,
    },
    cta: {
      enabled: false,                    // Hide "Get in touch" for now
      label: 'Get in touch',
      href: '/contact',
    },
    items: [
      { label: 'Home', href: '/', enabled: true },
      { label: 'About', href: '/about', enabled: true },
      {
        label: 'Services',
        href: '/services',
        enabled: true,
        children: [
          { label: 'Strategy', href: '/services/strategy', enabled: true },
          { label: 'Infrastructure', href: '/services/infrastructure', enabled: true },
          { label: 'AI & Data', href: '/services/ai-data', enabled: false },  // Hide for now
        ]
      },
      { label: 'Blog', href: '/blog', enabled: false },  // Hide until blog ready
      { label: 'Contact', href: '/contact', enabled: true },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // FOOTER
  // ═══════════════════════════════════════════════════════════
  footer: {
    enabled: true,
    logo: {
      src: '/images/baresquare-logo.svg',
      alt: 'Baresquare',
      width: 140,
      height: 20,
    },
    tagline: 'Shaping the invisible structures that power visible breakthroughs.',
    columns: [
      {
        title: 'Company',
        enabled: true,
        links: [
          { label: 'About', href: '/about', enabled: true },
          { label: 'Careers', href: '/careers', enabled: false },
          { label: 'Contact', href: '/contact', enabled: true },
        ]
      },
      {
        title: 'Services',
        enabled: true,
        links: [
          { label: 'Strategy', href: '/services/strategy', enabled: true },
          { label: 'Infrastructure', href: '/services/infrastructure', enabled: true },
          { label: 'AI & Data', href: '/services/ai-data', enabled: false },
        ]
      },
      {
        title: 'Resources',
        enabled: true,
        links: [
          { label: 'Blog', href: '/blog', enabled: false },
          { label: 'Case Studies', href: '/case-studies', enabled: true },
          { label: 'Press', href: '/press', enabled: false },
        ]
      }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy', enabled: true },
      { label: 'Terms of Service', href: '/terms', enabled: true },
    ]
  },
}
```

---

## 3. Social Links Configuration

### Schema

```typescript
social: {
  [platform: string]: {
    enabled: boolean;
    url: string;
    label?: string;                      // Accessible label
  }
}
```

### Example

```typescript
social: {
  twitter: {
    enabled: true,
    url: 'https://twitter.com/baresquare',
    label: 'Follow us on Twitter',
  },
  linkedin: {
    enabled: true,
    url: 'https://linkedin.com/company/baresquare',
    label: 'Connect on LinkedIn',
  },
  instagram: {
    enabled: false,                      // Don't show Instagram
    url: 'https://instagram.com/baresquare',
  },
  youtube: {
    enabled: false,
    url: '',
  },
}
```

---

## 4. Routes Configuration (Coming Soon)

### Schema

```typescript
routes: {
  [path: string]: {
    available: boolean;
    message?: string;                    // "Coming Soon" modal message
    redirect?: string;                   // Redirect instead of modal
    external?: boolean;                  // Open in new tab
  }
}
```

### Path Patterns

| Pattern | Matches |
|---------|---------|
| `/about` | Exact match |
| `/services/*` | `/services/strategy`, `/services/ai`, etc. |
| `/blog/**` | Any depth under `/blog/` |

### Example

```typescript
routes: {
  // Available pages
  '/': { available: true },
  '/contact': { available: true },

  // Coming Soon pages
  '/about': {
    available: false,
    message: 'Our About page is coming soon!',
  },
  '/services': {
    available: false,
    message: 'Services page launching Q1 2025!',
  },
  '/services/*': { available: false },
  '/blog': {
    available: false,
    message: 'Blog coming soon!',
  },
  '/blog/*': { available: false },

  // Legal
  '/privacy': { available: false },
  '/terms': { available: false },

  // Redirects
  '/old-page': {
    available: true,
    redirect: '/new-page',
  },
}
```

---

## 5. Defaults Configuration

```typescript
defaults: {
  comingSoonTitle: 'Coming Soon',
  comingSoonMessage: 'This page is coming soon!',
  comingSoonButtonText: 'Got it',
}
```

---

## 6. Complete Configuration Example

```typescript
// src/config/site.config.ts
import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {

  // ═══════════════════════════════════════════════════════════
  // SECTIONS
  // ═══════════════════════════════════════════════════════════
  sections: {
    hero: {
      enabled: true,
      elements: {
        video: { enabled: false },
        infoBanner: { enabled: false },
      },
      content: {
        badge: 'Meet Tywin',
        headline: 'Agents that work',
        accentWord: 'for you.',
        videoId: '{sample video id}',
        infoBadge: 'Autonomous eCommerce Agent',
        infoDescription: 'AI that monitors your campaigns, inventory, pricing, and competitors—then takes action automatically.',
      }
    },

    featureSlider: {
      enabled: true,
      limit: 3,
      content: {
        badge: 'Featured Work',
        headline: 'Faster, more confident decisions.',
        items: [
          { enabled: true, title: 'Case Study 1', /* ... */ },
          { enabled: true, title: 'Case Study 2', /* ... */ },
          { enabled: true, title: 'Case Study 3', /* ... */ },
          { enabled: false, title: 'Case Study 4 (future)', /* ... */ },
        ]
      }
    },

    about: {
      enabled: true,
      elements: {
        ctaLink: { enabled: false },
      },
      content: {
        badge: 'About Baresquare',
        headline: 'We partner with science-led businesses that are shaping what\'s next.',
        description: 'Baresquare\'s role is to shape the invisible structures—data, tools, thinking—that power visible breakthroughs. More possible. Focused, and flexible.',
        ctaText: 'Learn about us',
        ctaHref: '/about',
      }
    },

    approach: {
      enabled: true,
      elements: { ctaLink: { enabled: true } },
      content: { /* ... */ }
    },

    stats: {
      enabled: true,
      elements: {
        measurableOutcomes: { enabled: false },
        clientRetention: { enabled: true },
        projectsDelivered: { enabled: true },
        avgROI: { enabled: true },
      },
      content: {
        badge: 'Consulting Impact',
        items: [
          { id: 'measurableOutcomes', value: '100%', label: 'Measurable outcomes' },
          { id: 'clientRetention', value: '95%', label: 'Client retention' },
          { id: 'projectsDelivered', value: '200+', label: 'Projects delivered' },
          { id: 'avgROI', value: '340%', label: 'Avg. ROI' },
        ]
      }
    },

    services: { enabled: true, content: { /* ... */ } },
    process: { enabled: true, content: { /* ... */ } },
    testimonial: { enabled: true, content: { /* ... */ } },

    ctaMid: { enabled: false },

    ctaFinal: {
      enabled: true,
      content: {
        headline: 'From insight to impact.',
        subheadline: 'Consulting that translates innovation into outcomes.',
        primaryCta: { label: 'Get Started', href: '/contact' },
        secondaryCta: { label: 'Get in touch', href: '/contact' },
      }
    },

    blog: { enabled: false },
  },

  // ═══════════════════════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════════════════════
  navigation: {
    header: {
      enabled: true,
      logo: { src: '/images/baresquare-logo.svg', alt: 'Baresquare', width: 140, height: 20 },
      cta: { enabled: false, label: 'Get in touch', href: '/contact' },
      items: [
        { label: 'Home', href: '/', enabled: true },
        { label: 'About', href: '/about', enabled: true },
        { label: 'Services', href: '/services', enabled: true, children: [
          { label: 'Strategy', href: '/services/strategy', enabled: true },
        ]},
        { label: 'Blog', href: '/blog', enabled: false },
        { label: 'Contact', href: '/contact', enabled: true },
      ],
    },
    footer: {
      enabled: true,
      logo: { src: '/images/baresquare-logo.svg', alt: 'Baresquare', width: 140, height: 20 },
      tagline: 'Shaping the invisible structures that power visible breakthroughs.',
      columns: [
        { title: 'Company', enabled: true, links: [
          { label: 'About', href: '/about', enabled: true },
          { label: 'Contact', href: '/contact', enabled: true },
        ]},
      ],
      legal: [
        { label: 'Privacy Policy', href: '/privacy', enabled: true },
        { label: 'Terms of Service', href: '/terms', enabled: true },
      ]
    },
  },

  // ═══════════════════════════════════════════════════════════
  // SOCIAL
  // ═══════════════════════════════════════════════════════════
  social: {
    twitter: { enabled: true, url: 'https://twitter.com/baresquare' },
    linkedin: { enabled: true, url: 'https://linkedin.com/company/baresquare' },
    instagram: { enabled: false, url: '' },
  },

  // ═══════════════════════════════════════════════════════════
  // ROUTES
  // ═══════════════════════════════════════════════════════════
  routes: {
    '/': { available: true },
    '/contact': { available: true },
    '/about': { available: false, message: 'About page coming soon!' },
    '/services': { available: false },
    '/services/*': { available: false },
    '/blog': { available: false },
    '/blog/*': { available: false },
  },

  // ═══════════════════════════════════════════════════════════
  // DEFAULTS
  // ═══════════════════════════════════════════════════════════
  defaults: {
    comingSoonTitle: 'Coming Soon',
    comingSoonMessage: 'This page is coming soon!',
    comingSoonButtonText: 'Got it',
  },
};
```

---

## 7. Quick Reference

| What You Want | How to Configure |
|---------------|------------------|
| Hide entire section | `sectionName: { enabled: false }` |
| Hide element in section | `elements: { elementName: { enabled: false } }` |
| Limit items shown | `limit: 3` |
| Hide nav item | `items: [{ enabled: false, ... }]` |
| Hide header CTA | `header: { cta: { enabled: false } }` |
| Hide social link | `social: { platform: { enabled: false } }` |
| Coming Soon link | `routes: { '/path': { available: false, message: '...' } }` |
| Prepare for future | Set `enabled: false`, content ready |

---

## 8. Build-Time Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     BUILD TIME (Astro)                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Read site.config.ts                                     │
│                                                             │
│  2. For each section:                                       │
│     └─ enabled: false → Skip entirely (no HTML)             │
│     └─ enabled: true  → Check elements                      │
│         └─ element.enabled: false → Skip element            │
│         └─ Check limit → Slice items array                  │
│                                                             │
│  3. For navigation:                                         │
│     └─ Filter items where enabled: true                     │
│     └─ Check header.cta.enabled                             │
│                                                             │
│  4. For social links:                                       │
│     └─ Filter where enabled: true                           │
│                                                             │
│  5. For <SmartLink>:                                        │
│     └─ available: true  → <a href>                          │
│     └─ available: false → <button data-coming-soon>         │
│                                                             │
│  6. Output: Pure static HTML                                │
│     └─ No runtime config                                    │
│     └─ Only client JS: modal UX                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 9. Scenarios Covered

| Scenario | Solution |
|----------|----------|
| Hide "Measurable outcomes" in Stats | `stats.elements.measurableOutcomes.enabled: false` |
| Show 3 featured work, 4th ready for later | `featureSlider.limit: 3` + 4th item `enabled: false` |
| Hide hero video & banner for new product | `hero.elements.video.enabled: false` |
| Hide "Learn about us" link in About | `about.elements.ctaLink.enabled: false` |
| Hide header "Get in touch" CTA | `navigation.header.cta.enabled: false` |
| Use only 1 CTA section | `ctaMid.enabled: false`, `ctaFinal.enabled: true` |
| Hide menu items | `navigation.header.items[n].enabled: false` |
| Hide footer columns/links | `navigation.footer.columns[n].enabled: false` |
| Hide social links | `social.instagram.enabled: false` |
| Coming Soon modal | `routes['/path'].available: false` |
