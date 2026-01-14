import { Metadata } from 'next';
import FlagshipProgramPage from '@/features/flagship-program/FlagshipProgramPage';

export const metadata: Metadata = {
  title: 'Flagship Program - HI Labs',
  description: '12-month engineering talent production system with enforced evaluation gates and supervised deployment phases.',
  alternates: {
    canonical: '/flagship-program/',
  },
};

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <FlagshipProgramPage />;
}