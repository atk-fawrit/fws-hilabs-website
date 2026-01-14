import { Metadata } from 'next';
import OutcomesPage from '@/src/features/outcomes/OutcomesPage';

export const metadata: Metadata = {
  title: 'Outcomes & Evidence - HI Labs',
  description: 'Documented evidence of program effectiveness through evaluation rubrics, performance summaries, and deployment feedback.',
  alternates: {
    canonical: '/outcomes/',
  },
};

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <OutcomesPage />;
}