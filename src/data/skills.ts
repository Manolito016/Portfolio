import type { SkillCategory } from '@/lib/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: 'code',
    skills: [
      { name: 'TypeScript', level: 80, category: 'Languages' },
      { name: 'JavaScript', level: 85, category: 'Languages' },
      { name: 'Python', level: 70, category: 'Languages' },
      { name: 'HTML5', level: 90, category: 'Languages' },
      { name: 'CSS3', level: 85, category: 'Languages' },
      { name: 'SQL', level: 65, category: 'Languages' },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    icon: 'layers',
    skills: [
      { name: 'Next.js', level: 80, category: 'Frameworks & Libraries' },
      { name: 'React', level: 85, category: 'Frameworks & Libraries' },
      { name: 'Node.js', level: 75, category: 'Frameworks & Libraries' },
      { name: 'Tailwind CSS', level: 85, category: 'Frameworks & Libraries' },
      { name: 'Express.js', level: 70, category: 'Frameworks & Libraries' },
      { name: 'Framer Motion', level: 65, category: 'Frameworks & Libraries' },
    ],
  },
  {
    name: 'AI & Machine Learning',
    icon: 'brain',
    skills: [
      { name: 'Prompt Engineering', level: 85, category: 'AI & Machine Learning' },
      { name: 'Agentic AI Workflows', level: 80, category: 'AI & Machine Learning' },
      { name: 'RAG Architecture', level: 70, category: 'AI & Machine Learning' },
      { name: 'LLM Integration', level: 75, category: 'AI & Machine Learning' },
      { name: 'Generative AI', level: 80, category: 'AI & Machine Learning' },
    ],
  },
  {
    name: 'Tools & Platforms',
    icon: 'wrench',
    skills: [
      { name: 'Git & GitHub', level: 85, category: 'Tools & Platforms' },
      { name: 'VS Code', level: 90, category: 'Tools & Platforms' },
      { name: 'Docker', level: 60, category: 'Tools & Platforms' },
      { name: 'Vercel', level: 75, category: 'Tools & Platforms' },
      { name: 'Cloudflare', level: 65, category: 'Tools & Platforms' },
      { name: 'Figma', level: 60, category: 'Tools & Platforms' },
    ],
  },
  {
    name: 'Databases',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 70, category: 'Databases' },
      { name: 'PostgreSQL', level: 65, category: 'Databases' },
      { name: 'MongoDB', level: 60, category: 'Databases' },
      { name: 'Firebase', level: 75, category: 'Databases' },
    ],
  },
];

export const techStackItems = [
  { name: 'TypeScript', category: 'language', color: '#3178c6' },
  { name: 'JavaScript', category: 'language', color: '#f1e05a' },
  { name: 'Python', category: 'language', color: '#3572A5' },
  { name: 'React', category: 'framework', color: '#61dafb' },
  { name: 'Next.js', category: 'framework', color: '#000000' },
  { name: 'Node.js', category: 'runtime', color: '#339933' },
  { name: 'Tailwind CSS', category: 'styling', color: '#06b6d4' },
  { name: 'Framer Motion', category: 'animation', color: '#ff0055' },
  { name: 'PostgreSQL', category: 'database', color: '#4169e1' },
  { name: 'MySQL', category: 'database', color: '#4479a1' },
  { name: 'MongoDB', category: 'database', color: '#47a248' },
  { name: 'Firebase', category: 'backend', color: '#ffca28' },
  { name: 'Docker', category: 'devops', color: '#2496ed' },
  { name: 'Git', category: 'vcs', color: '#f05032' },
  { name: 'Vercel', category: 'deployment', color: '#000000' },
  { name: 'Cloudflare', category: 'deployment', color: '#f38020' },
];
