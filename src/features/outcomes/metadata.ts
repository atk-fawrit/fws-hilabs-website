import { Metadata } from 'next';

const keywordsList = [
  '100% placement IT training in Lucknow',
  'Software development jobs in Lucknow',
  'Software development placement and Training Institute',
];

export const metadata: Metadata = {
  title: 'Placement Outcomes - 100% Placement IT Training in Lucknow',
  description: 'HI Labs delivers documented placement outcomes and evidence of program effectiveness. Software development jobs, placement records, and training institute results in Lucknow.',
  keywords: keywordsList,
  alternates: {
    canonical: '/outcomes/',
  },
  openGraph: {
    title: 'Placement Outcomes - 100% Placement IT Training in Lucknow - HI Labs',
    description: 'See real placement outcomes from HI Labs - software development jobs, placement records, and training results for graduates in Lucknow.',
    url: 'https://www.thehilabs.com/outcomes/',
  },
  other: {
    keywords: keywordsList.join(', '),
  },
};
