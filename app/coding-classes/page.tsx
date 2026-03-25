import CodingClassesPage from '@/src/features/coding-classes/CodingClassesPage';

export { metadata } from '@/src/features/coding-classes/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
    return <CodingClassesPage />;
}
