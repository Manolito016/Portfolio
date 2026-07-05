import type { UsesItem } from '@/lib/types';

export const usesItems: UsesItem[] = [
  {
    category: 'Editor & IDE',
    items: [
      { name: 'VS Code', description: 'Primary code editor with extensive extensions', url: 'https://code.visualstudio.com/' },
      { name: 'Cursor', description: 'AI-powered code editor for complex tasks', url: 'https://cursor.com/' },
    ],
  },
  {
    category: 'Terminal',
    items: [
      { name: 'Windows Terminal', description: 'Modern terminal with tab support' },
      { name: 'PowerShell 7', description: 'Cross-shell scripting and automation' },
    ],
  },
  {
    category: 'Hardware',
    items: [
      { name: 'Laptop', description: 'Primary development machine' },
      { name: 'Mechanical Keyboard', description: 'For comfortable long coding sessions' },
    ],
  },
  {
    category: 'Apps & Tools',
    items: [
      { name: 'GitHub Desktop', description: 'Git version control GUI' },
      { name: 'Postman', description: 'API testing and development' },
      { name: 'Figma', description: 'UI/UX design and prototyping' },
      { name: 'Notion', description: 'Notes and project management' },
    ],
  },
  {
    category: 'Browser Extensions',
    items: [
      { name: 'uBlock Origin', description: 'Ad and tracker blocker' },
      { name: 'React DevTools', description: 'React component inspector' },
      { name: 'GitHub Copilot', description: 'AI pair programmer' },
    ],
  },
];
