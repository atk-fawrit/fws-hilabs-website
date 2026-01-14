import { Metadata } from 'next';
import AdmissionsPage from '@/src/features/admissions/AdmissionsPage';

export const metadata: Metadata = {
  title: 'Admissions - HI Labs',
  description: 'Transparent selection system for the HI Labs engineering talent production program with clear eligibility criteria and evaluation stages.',
  alternates: {
    canonical: '/admissions/',
  },
};

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <AdmissionsPage />;
}