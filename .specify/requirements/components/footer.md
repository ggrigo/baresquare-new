# Footer Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | Footer |
| File | `src/components/Footer.astro` |
| Priority | Medium |
| Complexity | Medium |
| Estimated Lines | ~120 |

---

## Description

Site-wide footer with logo, social links, navigation columns, and copyright. Dark background variant with border separation.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| Logo SVG | Asset | Yes |
| Social icons | Asset | Yes |

---

## Props Specification

```typescript
interface FooterProps {
  /**
   * Navigation columns
   */
  navigation: NavColumn[];

  /**
   * Social links
   */
  socials: SocialLink[];

  /**
   * Copyright text
   */
  copyright: string;

  /**
   * Additional CSS class
   */
  class?: string;
}

interface NavColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface SocialLink {
  platform: 'x' | 'linkedin' | 'instagram' | 'bluesky';
  href: string;
}
```

---

## HTML Structure

```html
<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <!-- Logo and social -->
      <div class="footer-brand">
        <a href="/" class="footer-logo">
          <img src="/images/scion-logo.svg" alt="Scion" width="138" height="16">
        </a>
        <div class="footer-socials">
          <a href="..." class="social-link" aria-label="X (Twitter)">
            <svg>...</svg>
          </a>
          <!-- More social links -->
        </div>
      </div>

      <!-- Navigation columns -->
      <nav class="footer-nav" aria-label="Footer navigation">
        <div class="footer-nav-column">
          <h3 class="footer-nav-title">Company</h3>
          <ul class="footer-nav-list">
            <li><a href="...">About</a></li>
            <li><a href="...">Careers</a></li>
          </ul>
        </div>
        <!-- More columns -->
      </nav>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; 2024 Scion. All rights reserved.</p>
      <div class="footer-legal">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
```

---

## CSS Implementation

```css
.footer {
  background: var(--bg-dark);
  padding: 72px 0 36px;
}

.footer-top {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--border-light);
}

.footer-logo {
  display: inline-block;
  margin-bottom: 24px;
}

.footer-logo img {
  width: 138px;
  height: 16px;
}

.footer-socials {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: background-color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 36px;
}

.footer-nav-title {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-subtle);
  margin-bottom: 18px;
}

.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav-list li {
  margin-bottom: 12px;
}

.footer-nav-list a {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s ease;
}

.footer-nav-list a:hover {
  opacity: 0.7;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
}

.footer-copyright {
  color: var(--text-subtle);
  font-size: 13px;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal a {
  color: var(--text-subtle);
  font-size: 13px;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.footer-legal a:hover {
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 991px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 479px) {
  .footer-bottom {
    flex-direction: column;
    gap: 18px;
    text-align: center;
  }
}
```

### Critical CSS Values

| Property | Value |
|----------|-------|
| Background | rgb(18, 18, 18) |
| Border | rgba(255,255,255,0.1) |
| Social button size | 40px |
| Logo size | 138x16px |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Static footer | Initial |
| link-hover | Opacity 0.7 | Mouse on link |
| social-hover | Background lightens | Mouse on social |

---

## Accessibility Checklist

- [x] Uses semantic `<footer>` element
- [x] Navigation has aria-label
- [x] Social links have aria-label
- [x] Logo has alt text
- [x] Proper heading hierarchy (h3 for column titles)
- [x] Focus visible on all links

---

## Acceptance Criteria

```gherkin
Scenario: Footer layout
  GIVEN Footer renders on desktop
  WHEN viewed
  THEN logo/socials on left (300px)
  AND navigation columns on right

Scenario: Social links
  GIVEN Footer renders
  WHEN user hovers on social icon
  THEN background lightens
  AND transition is 200ms

Scenario: Mobile layout
  GIVEN viewport ≤ 991px
  THEN stacks vertically
  AND copyright and legal stack on mobile (≤479px)
```
