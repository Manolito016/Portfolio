export interface HostedProject {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export const hostedProjects: HostedProject[] = [
  {
    name: 'AI SaaS Landing Page',
    description: 'AI-powered intelligence platform for modern teams. Features autonomous agents, predictive analytics, and SaaS landing page.',
    url: 'https://ai-saas-landing.pages.dev/',
    tags: ['AI', 'SaaS', 'Next.js'],
  },
];
