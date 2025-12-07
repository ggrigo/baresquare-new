# ProcessSteps Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | ProcessSteps |
| File | `src/components/ProcessSteps.astro` |
| Priority | Medium |
| Complexity | Medium |
| Estimated Lines | ~120 |

---

## Description

A two-column layout with a sticky sidebar containing an image and metric slider, alongside numbered process steps with descriptions.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| None | - | - |

---

## Props Specification

```typescript
interface ProcessStepsProps {
  /**
   * Sidebar configuration
   */
  sidebar: {
    image: {
      src: string;
      alt: string;
    };
    metric: {
      value: string;
      label: string;
    };
  };

  /**
   * Process steps
   */
  steps: ProcessStep[];

  /**
   * Additional CSS class
   */
  class?: string;
}

interface ProcessStep {
  number: string; // "01", "02", etc.
  title: string;
  description: string;
}
```

---

## HTML Structure

```html
<section class="process-section">
  <div class="container">
    <div class="process-grid">
      <!-- Sticky sidebar -->
      <aside class="process-sidebar">
        <div class="process-sidebar-image">
          <img src="..." alt="...">
        </div>
        <div class="process-metric">
          <span class="process-metric-value">500+</span>
          <span class="process-metric-label">Projects Completed</span>
        </div>
      </aside>

      <!-- Process steps -->
      <div class="process-steps">
        <article class="process-step">
          <div class="process-step-number">01</div>
          <div class="process-step-content">
            <h3 class="process-step-title">Step Title</h3>
            <p class="process-step-description">Description...</p>
          </div>
        </article>
        <!-- More steps with borders between -->
      </div>
    </div>
  </div>
</section>
```

---

## CSS Implementation

```css
.process-grid {
  display: grid;
  grid-template-columns: 384px 1fr;
  gap: 48px;
}

.process-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.process-sidebar-image {
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 24px;
}

.process-sidebar-image img {
  width: 100%;
  height: auto;
}

.process-metric {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.process-metric-value {
  font-size: 64px;
  font-weight: 400;
  line-height: 1.1;
}

.process-metric-label {
  color: var(--text-muted);
  font-size: 16px;
}

.process-steps {
  display: flex;
  flex-direction: column;
}

.process-step {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 24px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border-light);
}

.process-step:first-child {
  padding-top: 0;
}

.process-step:last-child {
  border-bottom: none;
}

.process-step-number {
  font-size: 40px;
  font-weight: 400;
  color: var(--text-subtle);
}

.process-step-title {
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 12px;
}

.process-step-description {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 991px) {
  .process-grid {
    grid-template-columns: 1fr;
  }

  .process-sidebar {
    position: static;
    margin-bottom: 48px;
  }
}

@media (max-width: 479px) {
  .process-step {
    grid-template-columns: 60px 1fr;
    gap: 18px;
  }

  .process-step-number {
    font-size: 28px;
  }

  .process-metric-value {
    font-size: 48px;
  }
}
```

### Critical CSS Values

| Property | Value |
|----------|-------|
| Sidebar width | 384px |
| Sticky top | 100px |
| Step number size | 40px |
| Border color | rgba(255,255,255,0.1) |
| Metric value size | 64px |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Sidebar sticky, steps stacked | Initial |
| scrolled | Sidebar follows scroll | User scroll |
| mobile | Sidebar not sticky | ≤991px |

---

## Accessibility Checklist

- [x] Uses semantic `<aside>` for sidebar
- [x] Uses `<article>` for each step
- [x] Proper heading hierarchy (h3 for step titles)
- [x] Numbers are decorative (content clear without them)

---

## Acceptance Criteria

```gherkin
Scenario: Sticky sidebar
  GIVEN viewport is desktop
  WHEN user scrolls past sidebar
  THEN sidebar stays fixed at top: 100px

Scenario: Step layout
  GIVEN ProcessSteps renders
  WHEN steps are visible
  THEN numbers appear on left (80px column)
  AND content on right
  AND borders separate steps

Scenario: Mobile layout
  GIVEN viewport ≤ 991px
  WHEN ProcessSteps renders
  THEN sidebar is not sticky
  AND appears above steps
```
