import AboutPage from '@/src/features/about/AboutPage';

export { metadata } from '@/src/features/about/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <AboutPage />;
}