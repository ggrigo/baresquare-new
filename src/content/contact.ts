/**
 * Contact Page Content
 *
 * Content for the /contact page.
 * Uses Netlify Forms for submission.
 */

import type { ContactPageContent } from '../config/types';

export const contactContent: ContactPageContent = {
  headline: "Let's find out.",
  description: "Tell us about your challenge. We'll tell you if AI can help.",
  formFields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      placeholder: 'Your name',
    },
    {
      name: 'email',
      label: 'Work Email',
      type: 'email',
      required: true,
      placeholder: 'you@company.com',
    },
    {
      name: 'company',
      label: 'Company',
      type: 'text',
      required: true,
      placeholder: 'Company name',
    },
    {
      name: 'message',
      label: 'How can we help?',
      type: 'textarea',
      required: true,
      placeholder: 'Tell us about your challenge...',
    },
  ],
  submitText: 'Send Message',
};
