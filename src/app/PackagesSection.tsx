'use client'

import { useState } from 'react'
import { client } from '@/sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

const hardcodedPackages = {
  tabs: ['8-9 STUDENTS', '10-12 STUDENTS', 'COLLEGE GRADUATES', 'WORKING PROFESSIONALS'],
  plans: {
    '8-9 STUDENTS': [
      {
        name: 'Discover',
        price: '₹ 5,500',
        features: [
          { name: 'Psychometric assessment to measure your interests', included: true },
          { name: '1 career counselling session with Mentoria\'s expert career coaches', included: true },
          { name: 'Lifetime access to Knowledge Gateway', included: true },
          { name: 'Invites to live webinars by industry experts', included: true },
          { name: 'Customised reports after each session with education pathways', included: false },
          { name: 'Guidance on studying abroad', included: false },
          { name: 'CV building during internships/graduation', included: false },
        ]
      },
      {
        name: 'Discover plus+',
        price: '₹ 15,000',
        isPremium: true,
        features: [
          { name: 'Psychometric assessments to measure your interests, personality and abilities', included: true },
          { name: '8 career counselling sessions (1 every year) with Mentoria\'s expert career coaches until graduation', included: true },
          { name: 'Lifetime access to Knowledge Gateway', included: true },
          { name: 'Invites to live webinars by industry experts', included: true },
          { name: 'Customised reports after each session with education pathways', included: true },
          { name: 'Guidance on studying abroad', included: true },
          { name: 'CV building during internships/graduation', included: true },
        ]
      }
    ],
    '10-12 STUDENTS': [
      {
        name: 'Achieve Online',
        price: '₹ 5,999',
        features: [
          { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
          { name: '1 career counselling session', included: true },
          { name: 'Lifetime access to Knowledge Gateway', included: true },
          { name: 'Pre-recorded webinars by industry experts', included: true },
          { name: 'Customised reports after each session with education pathways', included: false },
          { name: 'Guidance on studying abroad', included: false },
          { name: 'CV reviews during internships/graduation', included: false },
        ]
      },
      {
        name: 'Achieve Plus+',
        price: '₹ 10,599',
        isPremium: true,
        features: [
          { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
          { name: '4 career counselling sessions', included: true },
          { name: 'Lifetime access to Knowledge Gateway', included: true },
          { name: 'Attend live webinars by industry experts', included: true },
          { name: 'Customised reports after each session with education pathways', included: true },
          { name: 'Guidance on studying abroad', included: true },
          { name: 'CV reviews during internships/graduation', included: true },
        ]
      }
    ],
    'COLLEGE GRADUATES': [
      {
        name: 'Ascend Online',
        price: '₹ 6,499',
        features: [
          { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
          { name: '1 career counselling session', included: true },
          { name: 'Lifetime access to Knowledge Gateway', included: true },
          { name: 'Pre-recorded webinars by industry experts', included: true },
          { name: 'Customised reports after each session with information on certificate/online courses', included: false },
          { name: 'Guidance on studying abroad', included: false },
          { name: 'CV reviews for job application', included: false },
        ]
      },
      {
        name: 'Ascend Plus+',
        price: '₹ 10,599',
        isPremium: true,
        features: [
          { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
          { name: '3 career counselling sessions', included: true },
          { name: 'Lifetime access to Knowledge Gateway', included: true },
          { name: 'Attend live webinars by industry experts', included: true },
          { name: 'Customised reports after each session with information on certificate/online courses', included: true },
          { name: 'Guidance on studying abroad', included: true },
          { name: 'CV reviews for job application', included: true },
        ]
      }
    ],
    'WORKING PROFESSIONALS': [
      {
        name: 'Ascend Online',
        price: '₹ 6,499',
        features: [
          { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
          { name: '1 career counselling session', included: true },
          { name: 'Lifetime access to Knowledge Gateway', included: true },
          { name: 'Pre-recorded webinars by industry experts', included: true },
          { name: 'Customised reports after each session with information on certificate/online courses', included: false },
          { name: 'Guidance on studying abroad', included: false },
          { name: 'CV reviews for job application', included: false },
        ]
      },
      {
        name: 'Ascend Plus+',
        price: '₹ 10,599',
        isPremium: true,
        features: [
          { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
          { name: '3 career counselling sessions', included: true },
          { name: 'Lifetime access to Knowledge Gateway', included: true },
          { name: 'Attend live webinars by industry experts', included: true },
          { name: 'Customised reports after each session with information on certificate/online courses', included: true },
          { name: 'Guidance on studying abroad', included: true },
          { name: 'CV reviews for job application', included: true },
        ]
      }
    ]
  }
}

export default function PackagesSection({ sanityPackages }: { sanityPackages: any[] }) {
  const [activeTab, setActiveTab] = useState('8-9 STUDENTS')

  // If Sanity has data, render Sanity data
  if (sanityPackages && sanityPackages.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sanityPackages.map((pkg: any) => (
          <div key={pkg._id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col">
            {pkg.image && <img src={urlFor(pkg.image).url()} alt={pkg.name} className="w-full h-auto object-cover" />}
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-2 text-blue-900">{pkg.name}</h3>
              <div className="text-3xl font-extrabold text-blue-600 mb-6">{pkg.price}</div>
              <ul className="mb-8 space-y-3 flex-1">
                {pkg.features?.map((f: string, i: number) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Fallback to beautiful hardcoded design
  const currentPlans = hardcodedPackages.plans[activeTab as keyof typeof hardcodedPackages.plans]

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {hardcodedPackages.tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full font-bold text-sm transition ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {currentPlans.map((plan: any, idx: number) => (
          <div key={idx} className={`w-full md:w-1/2 bg-white rounded-2xl overflow-hidden border ${plan.isPremium ? 'border-blue-500 shadow-2xl relative' : 'border-gray-200 shadow-xl'}`}>
            {plan.isPremium && (
              <div className="absolute top-0 right-0 bg-pink-600 text-white px-4 py-1 rounded-bl-lg font-bold text-sm">PREMIUM</div>
            )}
            {!plan.isPremium && (
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 px-4 py-1 rounded-bl-lg font-bold text-sm">STANDARD</div>
            )}
            <div className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-blue-600 text-center mb-2 mt-4">{plan.name}</h3>
              <div className="text-4xl font-extrabold text-blue-900 text-center mb-8">{plan.price}</div>
              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((f: any, i: number) => (
                  <li key={i} className={`flex items-start ${f.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                    {f.included ? (
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-300 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    )}
                    <span className="text-sm font-medium">{f.name}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold text-lg transition ${plan.isPremium ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}>
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
