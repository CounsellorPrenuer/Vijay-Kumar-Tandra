'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/client'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export default function Home() {
  const [settings, setSettings] = useState<any>(null)
  const [founder, setFounder] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [settingsData, founderData] = await Promise.all([
          client.fetch(`*[_type == "siteSettings"][0]`),
          client.fetch(`*[_type == "founder"][0]`)
        ])
        setSettings(settingsData)
        setFounder(founderData)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div className="p-24 text-center">Loading live content...</div>

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold">{settings?.siteName || 'CareerCraft by VJ'}</h1>
      <p className="mt-4 text-xl">Expert Career Counselor</p>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">About Founder</h2>
        {founder && (
          <div className="mt-4">
            {founder.photo && (
              <img src={urlFor(founder.photo).width(200).url()} alt={founder.name} width={200} />
            )}
            <h3 className="text-xl mt-4">{founder.name}</h3>
            <p className="mt-2">{founder.biography}</p>
          </div>
        )}
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Mentoria Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
           {/* Static fallback since packages might not be created yet */}
           <div className="border p-4 rounded-lg">
             <img src="/Vijay-Kumar-Tandra/Mentoria1.png" alt="Package 1" className="w-full h-auto" />
             <h3 className="text-lg font-bold mt-2">Mentoria Starter</h3>
           </div>
           <div className="border p-4 rounded-lg">
             <img src="/Vijay-Kumar-Tandra/Mentoria2.png" alt="Package 2" className="w-full h-auto" />
           </div>
           <div className="border p-4 rounded-lg">
             <img src="/Vijay-Kumar-Tandra/Mentoria3.png" alt="Package 3" className="w-full h-auto" />
           </div>
        </div>
      </section>
    </main>
  )
}
