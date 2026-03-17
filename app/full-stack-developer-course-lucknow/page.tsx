import FullStackCoursePage from '@/src/features/seo-pages/full-stack/FullStackCoursePage';

export { metadata } from '@/src/features/seo-pages/full-stack/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
    return <FullStackCoursePage />;
}
