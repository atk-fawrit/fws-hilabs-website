import WebDevelopmentCoursePage from '@/src/features/seo-pages/web-development/WebDevelopmentCoursePage';

export { metadata } from '@/src/features/seo-pages/web-development/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
    return <WebDevelopmentCoursePage />;
}
