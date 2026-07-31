'use client';

import { useRouter } from 'next/navigation';
import { Footer } from '@/src/shared/components/layout';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 flex flex-col">
      <main className="flex-grow">
        {/* Top Section with message */}
        <div className="relative overflow-hidden bg-white pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex flex-col">
          {/* Faint background elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent opacity-70 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <Link 
              href="/flagship-program"
              className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold text-gray-800 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm w-max"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl md:text-7xl lg:text-8xl">🎉</span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-gray-900 leading-tight">
                  <span className="font-light">Application Submitted</span><br/>
                  <span className="font-bold">Successfully!</span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 mt-8 max-w-3xl leading-relaxed">
                Thank you for Applying to the AI Native Software Engineer Fellowship. Our Admission Team will review Your application and contact you within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Dark About Section */}
        <div className="bg-[#161a23] text-white py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-start gap-8">
              <div className="max-w-3xl w-full">
                <div className="flex items-center mb-4">
                  <div className="uppercase tracking-[0.2em] text-[10px] font-bold text-gray-400">
                    KNOW MORE
                  </div>
                  <div className="ml-4 h-px bg-gray-700 flex-grow max-w-[200px]"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight text-white">
                  About <span className="font-bold">Human Intelligence Labs</span>
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl font-light mb-8">
                  Hi Labs is an AI-native engineering lab founded by alumni of IISc Bangalore and IE Business School, Spain. We help students become industry-ready by building real products, working with modern AI technologies, and learning through hands-on engineering.
                </p>

                <Link href="/about" className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-[#232836] hover:bg-[#2d3446] rounded-full border border-gray-700 transition-colors shadow-sm">
                  View More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Ventures Section */}
        <VenturesSection />
      </main>
      
      <Footer />
    </div>
  );
}

function VenturesSection() {
  const ventures = [
    {
      flagUrl: 'https://flagcdn.com/w80/es.png',
      country: 'Spain',
      company: 'Eje Technologies SL',
      address: 'Calle Antonio Lopez, 70, 1D, Madrid - 28019'
    },
    {
      flagUrl: 'https://flagcdn.com/w80/in.png',
      country: 'India',
      company: 'Fawrit Technologies Pvt Ltd',
      address: 'South Kalamassery, Kochi, Kerala - 682033'
    },
    {
      flagUrl: 'https://flagcdn.com/w80/sa.png',
      country: 'Saudi Arabia',
      company: 'Al-Majal Al-Fawrieh',
      address: '249 Dasman, Al Qusur Dist., Dhahran - 34247'
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 tracking-tight">
            Venture Backed by International Tech Companies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-6xl mx-auto">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className={`relative bg-white p-8 ${index !== ventures.length - 1 ? 'md:border-r border-gray-200' : ''
                }`}
            >
              <div className="text-center space-y-4">
                {/* Flag */}
                <div className="flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={venture.flagUrl}
                    alt={`${venture.country} flag`}
                    className="w-16 h-12 object-cover rounded shadow-md"
                  />
                </div>

                {/* Country */}
                <div className="text-xs uppercase tracking-[0.2em] text-blue-600 font-bold">
                  {venture.country}
                </div>

                {/* Company Name */}
                <h3 className="text-lg font-bold text-black leading-tight px-4">
                  {venture.company}
                </h3>

                {/* Divider */}
                <div className="w-12 h-px bg-gray-300 mx-auto"></div>

                {/* Address */}
                <p className="text-sm text-gray-600 leading-relaxed font-light px-2">
                  {venture.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
          <Link href="/about" className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-800 border border-gray-200 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm text-sm tracking-wide text-center">
            View More
          </Link>
          <a href="/images/AI Native Flagship program.pdf" download className="w-full sm:w-auto px-8 py-3.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-sm tracking-wide">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Brochure
          </a>
        </div>

      </div>
    </section>
  );
}
