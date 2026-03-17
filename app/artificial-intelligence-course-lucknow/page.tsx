import AICoursePage from '@/src/features/seo-pages/ai-course/AICoursePage';

export { metadata } from '@/src/features/seo-pages/ai-course/metadata';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
    return <AICoursePage />;
}
