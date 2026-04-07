import { Metadata } from 'next';

const keywordsList = [
  '6 month software training with internship in Lucknow',
  'Software development internship in Lucknow',
  'full stack developer course in Lucknow',
];

export const metadata: Metadata = {
  title: 'Flagship Program - 6 Month Software Training with Internship in Lucknow',
  description: 'HI Labs Flagship Program - 12-month engineering talent production with 6 month software training & internship in Lucknow. Full stack developer course, backend developer training, and software development internship with guaranteed placement.',
  keywords: keywordsList,
  alternates: {
    canonical: '/flagship-program/',
  },
  openGraph: {
    title: 'Flagship Program - 6 Month Software Training with Internship in Lucknow - HI Labs',
    description: 'Join HI Labs Flagship Program for intensive software training with internship in Lucknow. Full stack, backend development & guaranteed placement.',
    url: 'https://www.thehilabs.com/flagship-program/',
  },
  other: {
    keywords: keywordsList.join(', '),
  },
};
