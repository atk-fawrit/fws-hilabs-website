import { Metadata } from 'next';
import EmployersPage from '@/src/features/employers/EmployersPage';

export const metadata: Metadata = {
  title: 'Employers - HI Labs',
  description: 'Partnership models and deployment options for organizations seeking engineering talent through structured supervision frameworks.',
  alternates: {
    canonical: '/employers/',
  },
};

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <EmployersPage />;
}