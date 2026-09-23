import { client } from '@/sanity/client'

export default async function Home() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`)
  const founder = await client.fetch(`*[_type == "founder"][0]`)

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold">{settings?.siteName || 'CareerCraft by VJ'}</h1>
      <p className="mt-4 text-xl">Expert Career Counselor</p>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">About Founder</h2>
        {founder && (
          <div className="mt-4">
            <h3 className="text-xl">{founder.name}</h3>
            <p>{founder.biography}</p>
          </div>
        )}
      </section>
    </main>
  )
}
