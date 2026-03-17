import { PageLayout, SimpleHero } from '@/src/shared/components/layout';
import JsonLd from '@/src/shared/components/JsonLd';
import Link from 'next/link';

export interface SEOPageSection {
    title: string;
    content: string;
    items?: string[];
}

export interface SEOPageFAQ {
    question: string;
    answer: string;
}

export interface SEOLandingPageProps {
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    heroImageAlt: string;
    badgeText: string;
    sections: SEOPageSection[];
    highlights: string[];
    faqs: SEOPageFAQ[];
    ctaTitle: string;
    ctaDescription: string;
    courseName: string;
    courseDescription: string;
    courseUrl: string;
}

export default function SEOLandingPage({
    heroTitle,
    heroDescription,
    heroImage,
    heroImageAlt,
    badgeText,
    sections,
    highlights,
    faqs,
    ctaTitle,
    ctaDescription,
    courseName,
    courseDescription,
    courseUrl,
}: SEOLandingPageProps) {
    return (
        <PageLayout>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Course",
                    "name": courseName,
                    "description": courseDescription,
                    "provider": {
                        "@type": "EducationalOrganization",
                        "name": "HI Labs - Human Intelligence Labs",
                        "url": "https://www.thehilabs.com",
                    },
                    "url": courseUrl,
                    "educationalCredentialAwarded": "Certificate of Completion",
                    "locationCreated": {
                        "@type": "Place",
                        "name": "HI Labs Lucknow",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Lucknow",
                            "addressRegion": "Uttar Pradesh",
                            "addressCountry": "IN",
                        },
                    },
                }}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map((faq) => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer,
                        },
                    })),
                }}
            />

            <SimpleHero
                image={heroImage}
                imageAlt={heroImageAlt}
                title={heroTitle}
                description={heroDescription}
                overlayOpacity="light"
                badge={{
                    icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    ),
                    text: badgeText,
                }}
            />

            <main className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 space-y-12 sm:space-y-16">
                {/* Course Overview Sections */}
                {sections.map((section, index) => (
                    <section key={index} className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            {section.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                            {section.content}
                        </p>
                        {section.items && section.items.length > 0 && (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}

                {/* Why HI Labs Highlights */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        Why Choose HI Labs in Lucknow?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                            >
                                <p className="text-gray-800 font-medium">{highlight}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors font-medium text-gray-900">
                                    {faq.question}
                                    <svg
                                        className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="p-4 sm:p-5 text-gray-700 leading-relaxed bg-white">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Internal Links */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Explore More at HI Labs
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link
                            href="/courses"
                            className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
                        >
                            <p className="font-semibold text-gray-900">All Courses</p>
                            <p className="text-sm text-gray-500 mt-1">Browse programs</p>
                        </Link>
                        <Link
                            href="/flagship-program"
                            className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
                        >
                            <p className="font-semibold text-gray-900">Flagship Program</p>
                            <p className="text-sm text-gray-500 mt-1">12-month intensive</p>
                        </Link>
                        <Link
                            href="/outcomes"
                            className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
                        >
                            <p className="font-semibold text-gray-900">Outcomes</p>
                            <p className="text-sm text-gray-500 mt-1">Placement records</p>
                        </Link>
                        <Link
                            href="/admissions"
                            className="p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
                        >
                            <p className="font-semibold text-gray-900">Apply Now</p>
                            <p className="text-sm text-gray-500 mt-1">Start your journey</p>
                        </Link>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-4xl mx-auto text-center py-12 px-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{ctaTitle}</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
                    <Link
                        href="/admissions"
                        className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
                    >
                        Apply Now
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </section>
            </main>
        </PageLayout>
    );
}
