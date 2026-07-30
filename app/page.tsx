import { Metadata } from 'next';
import HomePage from '@/src/features/home/HomePage';

export const metadata: Metadata = {
  title: ' HI Labs | AI-Enriched Software Development Courses',
  description: 'HI Labs is a leading AI software engineering training institute in Lucknow. Build real projects, gain internship experience, launch your career',
  keywords: [
    'Human Intelligence Labs Lucknow',
    'HI Labs',
    'Best Software development training institute in lucknow',
    'best coding classes in Lucknow',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HI Labs - Best Software Development Training Institute in Lucknow',
    description: 'Human Intelligence Labs Lucknow - Premier IT training institute offering 100% placement, software development courses, and professional IT training for working professionals.',
    url: 'https://www.thehilabs.com/',
  },
};

export default function Page() {
  return <HomePage />;
}
