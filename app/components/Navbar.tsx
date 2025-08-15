'use client'
import Link from "next/link"
import Image from 'next/image'

export const Navbar: React.FC = () => {
  return (
   <nav className="flex items-center justify-between py-6">
      <Link href="/" className="flex items-center gap-4">
        <div className="w-14 h-14 relative">
          <Image src="nebula-sync-robotics-web-site/public/Nebula_Logo.png" alt="Nebula Sync Robotics" fill style={{objectFit:'contain'}} />
        </div>
        <div>
          <div className="text-lg font-bold">Nebula Sync</div>
          <div className="text-xs text-nebula-slate">Robotics — Software & Hardware</div>
        </div>
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/projects" className="text-sm hover:text-nebula-accent">Products</Link>
        <Link href="/about" className="text-sm hover:text-nebula-accent">About</Link>
        <Link href="/about#contact" className="px-4 py-2 rounded-md bg-nebula-accent text-black text-sm font-semibold hover:opacity-90">Contact</Link>
      </div>
    </nav>
  )
}