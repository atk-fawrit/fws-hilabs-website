import EmployersPage from '@/src/features/employers/EmployersPage';

export { metadata } from '@/src/features/employers/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <EmployersPage />;
}