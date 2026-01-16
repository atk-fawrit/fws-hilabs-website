import FlagshipProgramPage from '@/src/features/flagship-program/FlagshipProgramPage';

export { metadata } from '@/src/features/flagship-program/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <FlagshipProgramPage />;
}