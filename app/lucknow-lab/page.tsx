import { Metadata } from 'next';
import LucknowLabPage from '@/features/lucknow-lab/LucknowLabPage';

export const metadata: Metadata = {
  title: 'Lucknow Lab - HI Labs',
  description: 'Physical location details, operating model, and access policies for the HI Labs engineering talent production facility in Lucknow.',
  alternates: {
    canonical: '/lucknow-lab/',
  },
};

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <LucknowLabPage />;
}