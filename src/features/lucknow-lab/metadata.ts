import { Metadata } from 'next';

const keywordsList = [
  'IT training center in Gomti Nagar Lucknow',
  'coding institute near me Lucknow',
];

export const metadata: Metadata = {
  title: 'IT Training Center in Gomti Nagar Lucknow - HI Labs Lucknow Lab',
  description: 'Visit HI Labs IT training center in Gomti Nagar, Lucknow. Best coding institute near you in Lucknow offering software development, data science, AI courses & professional IT training.',
  keywords: keywordsList,                                                                                                                                                                                                                                                                                                                                                            
 alternates: {
    canonical: '/lucknow-lab/',
  },
  openGraph: {
    title: 'IT Training Center in Gomti Nagar Lucknow - HI Labs',
    description: 'HI Labs engineering talent production facility in Gomti Nagar, Lucknow. Best coding institute offering software development & IT courses.',
    url: 'https://www.thehilabs.com/lucknow-lab/',
  },
  other: {
    keywords: keywordsList.join(', '),
  },
};
