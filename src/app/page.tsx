'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import PackagesSection from './PackagesSection'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export default function Home() {
  const [sanityData, setSanityData] = useState<any>({
    settings: null,
    founder: null,
    packages: [],
    services: []
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const [settings, founder, packages, services] = await Promise.all([
          client.fetch(`*[_type == "siteSettings"][0]`),
          client.fetch(`*[_type == "founder"][0]`),
          client.fetch(`*[_type == "mentoriaPackage"] | order(_createdAt asc)`),
          client.fetch(`*[_type == "service"] | order(_createdAt asc)`)
        ])
        setSanityData({ settings, founder, packages, services })
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  const { settings, founder, packages, services } = sanityData

  // Fallback Data
  const siteName = settings?.siteName || 'CareerCraft by VJ'
  const founderName = founder?.name || 'Vijaykumar Tandra'
  const founderBio = founder?.biography || `With over 18 years of experience in education, I am currently the Full School Coordinator at a reputed international school... As a Career Counselor, I leverage my extensive educational experience to guide students in making informed decisions about their academic paths and future careers.`
  
  const packageImages = [
    '/Mentoria1.png', '/Mentoria2.png', '/Mentoria3.png', '/Mentoria4.png', '/Mentoria5.png', '/Mentoria6.png'
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.jpg" alt="Logo" className="h-12 w-auto object-contain rounded-md" />
              <span className="ml-3 font-bold text-2xl tracking-tight text-blue-900">{siteName}</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About Founder</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#packages" className="text-gray-700 hover:text-blue-600 font-medium">Mentoria Packages</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Craft Your Perfect Career</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">Empowering individuals to navigate their academic and career paths with confidence and clarity.</p>
          <a href="#packages" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">Explore Packages</a>
        </div>
      </section>

      {/* About Founder */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">About the Founder</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              {founder?.photo ? (
                <img src={urlFor(founder.photo).width(400).url()} alt={founderName} className="rounded-2xl shadow-xl w-64 h-64 object-cover" />
              ) : (
                <div className="w-64 h-64 bg-gray-200 rounded-2xl shadow-xl flex items-center justify-center text-gray-400">
                  <span>[Founder Photo]</span>
                </div>
              )}
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{founderName}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{founderBio}</p>
              <p className="text-lg text-gray-600 leading-relaxed">Passionate about career craft for all, I work with people at any stage of their journey—whether exploring options, transitioning to new fields, or advancing in their careers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">{i+1}</div>
                <h3 className="text-2xl font-bold mb-4">Career Counseling</h3>
                <p className="text-gray-600">Personalized guidance to help you identify strengths, explore paths, and achieve your professional goals effectively.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentoria Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Mentoria Packages</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            <p className="mt-4 text-xl text-gray-600">Choose the perfect tier for your career journey.</p>
          </div>
          
          <PackagesSection sanityPackages={packages} />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-blue-800 p-8 rounded-2xl text-left">
               <p className="text-lg italic mb-6">"Vijaykumar provided exceptional clarity for my career transition. Highly recommended!"</p>
               <div className="font-bold">- Professional Client</div>
             </div>
             <div className="bg-blue-800 p-8 rounded-2xl text-left">
               <p className="text-lg italic mb-6">"The academic insights and personalized approach helped my child find the perfect college path."</p>
               <div className="font-bold">- Parent of Student</div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.jpg" alt="Logo" className="h-16 bg-white p-2 rounded mb-4" />
            <p className="text-sm">Empowering individuals through expert career and academic guidance.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About Founder</a></li>
              <li><a href="#packages" className="hover:text-white">Mentoria Packages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Phone: +91 9322864869</li>
              <li>Email: vijaytandra227@gmail.com</li>
              <li>Location: India</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Social Links</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/vijaykumar-tandra-" className="hover:text-white" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          &copy; {new Date().getFullYear()} CareerCraft by VJ. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
