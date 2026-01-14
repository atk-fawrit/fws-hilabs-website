import { Metadata } from 'next';
import CoursesPage from '@/src/features/courses/CoursesPage';

export const metadata: Metadata = {
  title: 'Short Programs - HI Labs',
  description: 'Weekend skill-focused modules for working professionals seeking specific technical capabilities, separate from the flagship program.',
  alternates: {
    canonical: '/courses/',
  },
};

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <CoursesPage />;
}