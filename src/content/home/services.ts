/**
 * Services Section Content
 */

import type { ServicesContent } from '../../config/types';

export const servicesContent: ServicesContent = {
  introHeadline: "We partner with science-led businesses that are building what's next.",
  introDescription: 'Our role is to make that work more possible, focused, and durable.',
  services: [
    {
      enabled: true,
      id: 'strategy',
      title: 'Systems Strategy',
      description: 'We design technical and organizational frameworks that help research, data, and decision-making move together—at speed and scale.',
      icon: '/icons/abstract/shape-04.svg',
      href: '/services/strategy',
    },
    {
      enabled: true,
      id: 'infrastructure',
      title: 'Infrastructure Design',
      description: 'From lab systems to computational pipelines, we architect the back-end that powers breakthroughs. Built to adapt, built to last.',
      icon: '/icons/abstract/shape-07.svg',
      href: '/services/infrastructure',
    },
    {
      enabled: true,
      id: 'execution',
      title: 'Execution Support',
      description: "Whether you're stuck at the strategy stage or mid-build, we step in to diagnose, recalibrate, and bring momentum to your mission.",
      icon: '/icons/abstract/shape-10.svg',
      href: '/services/execution',
    },
    {
      enabled: true,
      id: 'ai-data',
      title: 'AI & Data Integration',
      description: 'We help research teams harness AI responsibly—embedding intelligent tools into workflows where they actually drive impact.',
      icon: '/icons/abstract/shape-08.svg',
      href: '/services/ai-data',
    },
    {
      enabled: true,
      id: 'regulatory',
      title: 'Regulatory Guidance',
      description: 'Our consultants guide product teams through scientific, technical, and regulatory alignment—so nothing stalls in translation.',
      icon: '/icons/abstract/shape-09.svg',
      href: '/services/regulatory',
    },
    {
      enabled: true,
      id: 'ops',
      title: 'Collaborative Ops',
      description: 'We facilitate coordination between R&D, engineering, and leadership—helping complex teams think clearly and build cohesively.',
      icon: '/icons/abstract/shape-03.svg',
      href: '/services/ops',
    },
  ],
};
