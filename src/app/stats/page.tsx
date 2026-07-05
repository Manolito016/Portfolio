import type { Metadata } from 'next';
import { StatsPageClient } from './stats-client';

export const metadata: Metadata = { title: 'GitHub Statistics', description: 'My GitHub stats and language distribution' };

export default function StatsPage() { return <StatsPageClient />; }
