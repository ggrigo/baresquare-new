/**
 * Visual Implementation Verification Script
 * Run in browser console to verify CSS is actually applied
 *
 * Usage: Copy/paste into console, or load via script tag during development
 */

const VerifyStyles = {
  results: [],

  /**
   * Verify a single element's computed styles
   * @param {string} selector - CSS selector
   * @param {Object} expectedStyles - { property: expectedValue }
   * @returns {Object} - { selector, status, failures }
   */
  verifyElement(selector, expectedStyles) {
    const el = document.querySelector(selector);

    if (!el) {
      const result = { selector, status: 'MISSING', element: null, failures: [] };
      this.results.push(result);
      return result;
    }

    const computed = window.getComputedStyle(el);
    const failures = [];

    for (const [prop, expected] of Object.entries(expectedStyles)) {
      const actual = computed[prop];

      // Normalize values for comparison
      const normalizedExpected = this.normalizeValue(prop, expected);
      const normalizedActual = this.normalizeValue(prop, actual);

      if (normalizedActual !== normalizedExpected) {
        failures.push({
          property: prop,
          expected: expected,
          actual: actual,
          normalizedExpected,
          normalizedActual
        });
      }
    }

    const result = {
      selector,
      status: failures.length ? 'FAIL' : 'PASS',
      element: el.tagName.toLowerCase(),
      failures
    };

    this.results.push(result);
    return result;
  },

  /**
   * Normalize CSS values for comparison
   */
  normalizeValue(prop, value) {
    if (value === undefined || value === null) return '';

    // Convert to string
    let str = String(value).trim().toLowerCase();

    // Normalize colors to rgb format
    if (prop.includes('color') || prop.includes('background')) {
      // Already rgb/rgba - normalize spacing
      str = str.replace(/\s+/g, ' ');
    }

    // Normalize 0 values
    if (str === '0px' || str === '0em' || str === '0rem') {
      str = '0';
    }

    return str;
  },

  /**
   * Verify multiple elements at once
   * @param {Array} specs - Array of { selector, styles }
   */
  verifyAll(specs) {
    this.results = [];

    for (const spec of specs) {
      this.verifyElement(spec.selector, spec.styles);
    }

    return this.report();
  },

  /**
   * Generate a formatted report
   */
  report() {
    const passed = this.results.filter(r => r.status === 'PASS').length;
    const failed = this.results.filter(r => r.status === 'FAIL').length;
    const missing = this.results.filter(r => r.status === 'MISSING').length;

    console.log('\n========== STYLE VERIFICATION REPORT ==========\n');
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`⚠️  Missing: ${missing}`);
    console.log(`📊 Total: ${this.results.length}`);
    console.log('\n');

    // Show failures in detail
    const failures = this.results.filter(r => r.status !== 'PASS');

    if (failures.length > 0) {
      console.log('---------- ISSUES ----------\n');

      for (const result of failures) {
        if (result.status === 'MISSING') {
          console.log(`⚠️  MISSING: ${result.selector}`);
        } else {
          console.log(`❌ FAIL: ${result.selector}`);
          for (const f of result.failures) {
            console.log(`   ${f.property}:`);
            console.log(`     Expected: ${f.expected}`);
            console.log(`     Actual:   ${f.actual}`);
          }
        }
        console.log('');
      }
    }

    return {
      summary: { passed, failed, missing, total: this.results.length },
      results: this.results
    };
  },

  /**
   * Quick check for common CSS scope issues
   * (position, z-index, opacity on slotted content)
   */
  checkScopeIssues(selector) {
    const el = document.querySelector(selector);
    if (!el) {
      console.log(`❌ Element not found: ${selector}`);
      return null;
    }

    const styles = window.getComputedStyle(el);

    const report = {
      selector,
      position: styles.position,
      zIndex: styles.zIndex,
      opacity: styles.opacity,
      display: styles.display,
      visibility: styles.visibility
    };

    console.log(`\n🔍 Scope Check: ${selector}`);
    console.log(`   position: ${report.position}`);
    console.log(`   z-index: ${report.zIndex}`);
    console.log(`   opacity: ${report.opacity}`);
    console.log(`   display: ${report.display}`);
    console.log(`   visibility: ${report.visibility}`);

    // Flag common issues
    if (report.position === 'static' && report.zIndex !== 'auto') {
      console.log(`   ⚠️  z-index won't work with position: static`);
    }
    if (report.opacity === '0') {
      console.log(`   ⚠️  Element is invisible (opacity: 0)`);
    }
    if (report.display === 'none') {
      console.log(`   ⚠️  Element is hidden (display: none)`);
    }

    return report;
  }
};

// Hero section verification preset
const HERO_SPECS = [
  {
    selector: '.hero-section [style*="opacity: 0.3"]',
    styles: { opacity: '0.3', position: 'absolute' }
  },
  {
    selector: '.hero-section h1',
    styles: { color: 'rgb(255, 255, 255)' }
  }
];

// Export for use
if (typeof window !== 'undefined') {
  window.VerifyStyles = VerifyStyles;
  window.HERO_SPECS = HERO_SPECS;
  console.log('VerifyStyles loaded. Use VerifyStyles.checkScopeIssues(selector) or VerifyStyles.verifyAll(specs)');
}
