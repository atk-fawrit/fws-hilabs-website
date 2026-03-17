import { Metadata } from 'next';
import HomePage from '@/src/features/home/HomePage';

export const metadata: Metadata = {
  title: 'HI Labs - Best Software Development Training Institute in Lucknow | Human Intelligence Labs',
  description: 'HI Labs (Human Intelligence Labs Lucknow) is the best software development training institute in Lucknow offering 100% placement IT training, professional IT courses for working professionals, and coding classes for beginners.',
  keywords: [
    'Human Intelligence Labs Lucknow',
    'Hi Labs',
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
