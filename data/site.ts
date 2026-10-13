import type { SiteConfig } from '@/interface';

export const site: SiteConfig = {
  name: 'Kastro',
  legalName: 'Kastro Labs',
  url: 'https://kastro.vercel.app',
  title: 'Kastro - Know the moment before it passes',
  description:
    'Kairo reads your metrics, tickets and calls, then tells your team what changed, why it matters and who should act.',
  email: 'hello@kairo.app',
  careersEmail: 'careers@kairo.app',
  accent: '#ff5b1f',
  cta: {
    primary: { label: 'Get Into It', href: '/pricing#sales' },
    secondary: { label: 'Demo', href: '/pricing?intent=demo#sales' },
  },
  socials: [
    { label: 'Mastadon', href: 'https://x.com', icon: 'x' },
    { label: 'Bluesky', href: 'https://www.linkedin.com', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  ],
};
