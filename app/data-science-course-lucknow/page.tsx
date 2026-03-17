import DataScienceCoursePage from '@/src/features/seo-pages/data-science/DataScienceCoursePage';

export { metadata } from '@/src/features/seo-pages/data-science/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
    return <DataScienceCoursePage />;
}
