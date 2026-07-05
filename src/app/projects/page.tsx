import type { Metadata } from 'next';
import { ProjectsPageClient } from './projects-client';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Live applications and projects I\'ve built and deployed',
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
