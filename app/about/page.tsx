import { Metadata } from 'next';
import AboutPage from '@/features/about/AboutPage';

export const metadata: Metadata = {
  title: 'About - HI Labs',
  description: 'Institutional charter, operating principles, and governance structure of Human Intelligence Laboratories Private Limited.',
  alternates: {
    canonical: '/about/',
  },
};

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <AboutPage />;
}