import AdmissionsPage from '@/src/features/admissions/AdmissionsPage';

export { metadata } from '@/src/features/admissions/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <AdmissionsPage />;
}