import CodingClassesPage from '@/src/features/seo-pages/coding-classes/CodingClassesPage';

export { metadata } from '@/src/features/seo-pages/coding-classes/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
    return <CodingClassesPage />;
}
