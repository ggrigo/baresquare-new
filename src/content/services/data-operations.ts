/**
 * Data & Operations Service Page Content
 *
 * Receives SEO redirects from:
 * - /blog/*ga4*
 * - /blog/*google-analytics*
 * - /blog/*bigquery*
 * - /solutions/analytics-leaders
 */

import type { ServicePageContent } from '../../config/types';

export const dataOperationsContent: ServicePageContent = {
  badge: 'Data & Operations',
  title: 'Automation that eliminates friction.',
  description: 'Connecting your existing infrastructure to unlock efficiency. Manual processes replaced with intelligent automation that scales.',
  problem: {
    headline: 'Manual processes are costing you.',
    description: 'Your team spends hours on repetitive tasks—pulling reports, reconciling data, monitoring dashboards. Meanwhile, real issues slip through the cracks. The data is there. The insights exist. But friction prevents action.',
  },
  solution: {
    headline: 'Infrastructure that works for you.',
    description: "We connect your existing tools and automate the workflows that drain your team. GA4, BigQuery, Looker Studio, your CRM—unified into systems that surface what matters and act on it. No rip-and-replace. Just infrastructure that finally delivers.",
  },
  features: [
    {
      title: 'Automated Monitoring',
      description: 'Real-time anomaly detection across your analytics stack. Know about issues before they become problems.',
    },
    {
      title: 'Data Pipeline Orchestration',
      description: 'Connect GA4, BigQuery, and your data warehouse with automated ETL that maintains data integrity.',
    },
    {
      title: 'Intelligent Alerting',
      description: 'Context-aware notifications that cut through noise. Only surface what requires human attention.',
    },
    {
      title: 'Workflow Automation',
      description: 'Turn manual processes into automated workflows. Reports, reconciliation, and routine tasks handled autonomously.',
    },
  ],
  cta: {
    headline: 'Ready to eliminate manual work?',
    description: 'Tell us about your data challenges.',
    buttonText: 'Get in touch',
    buttonHref: '/contact',
  },
};
