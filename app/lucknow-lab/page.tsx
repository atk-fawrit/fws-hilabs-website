import LucknowLabPage from '@/src/features/lucknow-lab/LucknowLabPage';

export { metadata } from '@/src/features/lucknow-lab/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <LucknowLabPage />;
}