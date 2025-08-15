import Image from 'next/image'

export default function AboutPage(){
  return (
    <div className="max-w-4xl mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold">About Nebula Sync Robotics</h1>
          <p className="mt-4 text-gray-300">Nebula Sync Robotics designs and manufactures integrated robotics products — combining hardened hardware and advanced motion intelligence to enable real-world automation. We build proprietary robots and sell them to industrial and commercial customers; we do not provide services.</p>

          <h2 className="text-2xl font-bold mt-8">Our Mission</h2>
          <p className="text-gray-300 mt-2">To accelerate the adoption of humanoid and mobile robots by delivering reliable, end-to-end products that are ready for deployment.</p>

          <h2 className="text-2xl font-bold mt-6">Our Values</h2>
          <ul className="list-disc ml-6 text-gray-300 mt-2 space-y-1">
            <li>Safety-first engineering</li>
            <li>Hardware-software co-design</li>
            <li>Robustness in real-world conditions</li>
            <li>Clear, ethical automation</li>
          </ul>
        </div>

        <aside className="card p-6 rounded-xl">
          <div className="w-full h-48 relative">
            <Image src="nebula-sync-robotics-web-site/public/Nebula_Logo.png" alt="logo" fill style={{objectFit:'contain'}} />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-gray-400 text-sm mt-2">Have questions about our products? Reach out — we ship worldwide.</p>
            <div className="mt-4 text-sm text-gray-300">
              <div>Email: sales@nebulasync.ai</div>
              <div className="mt-1">Location: San Francisco, CA</div>
            </div>
          </div>
        </aside>
      </section>

      <section id="contact" className="mt-12">
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <p className="text-gray-400 mt-2">Fill out the contact form and our sales team will reach out with product details and pricing.</p>

        <div className="mt-6 card p-6 rounded-xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 rounded-md bg-transparent border border-gray-700" placeholder="Your name" />
            <input className="p-3 rounded-md bg-transparent border border-gray-700" placeholder="Company" />
            <input className="p-3 rounded-md bg-transparent border border-gray-700 md:col-span-2" placeholder="Email" />
            <textarea className="p-3 rounded-md bg-transparent border border-gray-700 md:col-span-2" placeholder="Message" rows={6}></textarea>
            <button className="md:col-span-2 px-6 py-3 bg-nebula-accent text-black rounded-md font-semibold">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}