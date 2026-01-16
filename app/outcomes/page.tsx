import OutcomesPage from '@/src/features/outcomes/OutcomesPage';

export { metadata } from '@/src/features/outcomes/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <OutcomesPage />;
}