import { Metadata } from 'next';

const keywordsList = [
  'AI Native Software Engineer Fellowship',
  '6 month software training with internship in Lucknow',
  'Software development internship in Lucknow',
  'full stack developer course in Lucknow',
  'guaranteed internship program',
  'software engineer training Lucknow',
];

export const metadata: Metadata = {
  title: 'AI Native Software Engineer Fellowship - 6 Months Training + Guaranteed Internship | HI Labs',
  description: 'Become a job-ready software engineer in 6 months with 100% guaranteed internship at real startups. Full-time, in-person program in Lucknow. Learn MERN stack, AI-assisted development, and real-world engineering.',
  keywords: keywordsList,
  alternates: {
    canonical: '/flagship-program/',
  },
  openGraph: {
    title: 'AI Native Software Engineer Fellowship - HI Labs Lucknow',
    description: 'Transform into a job-ready software engineer in 6 months + guaranteed 6-month internship. Full-time training in Lucknow with real projects and industry exposure.',
    url: 'https://www.thehilabs.com/flagship-program/',
  },
  other: {
    keywords: keywordsList.join(', '),
  },
};