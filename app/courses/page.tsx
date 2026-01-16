import CoursesPage from '@/src/features/courses/CoursesPage';

export { metadata } from '@/src/features/courses/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <CoursesPage />;
}