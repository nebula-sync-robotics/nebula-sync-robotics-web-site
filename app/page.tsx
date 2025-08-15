import Link from "next/link";
import Image from 'next/image'
import { ProductCard } from "./components/ProductCard";

export default function HomePage(){
  return (
      <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">Nebula Sync Robotics</h1>
          <p className="mt-4 text-gray-300 max-w-xl">We build high-performance hardware and software products for humanoid and industrial robotics — engineered for reliability, safety, and real-world deployment.</p>

          <div className="mt-8 flex gap-4">
            <Link href="/projects" className="px-6 py-3 rounded-md bg-nebula-accent text-black font-semibold hover:opacity-90">Explore Products</Link>
            <Link href="/about" className="px-6 py-3 rounded-md border border-gray-700 text-sm hover:bg-white/5">Contact Sales</Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="card p-4 rounded-md">
              <h3 className="text-lg font-semibold">End-to-end Systems</h3>
              <p className="text-gray-400 text-sm mt-2">Integrated hardware + software stacks for production robots.</p>
            </div>
            <div className="card p-4 rounded-md">
              <h3 className="text-lg font-semibold">Motion Intelligence</h3>
              <p className="text-gray-400 text-sm mt-2">Whole-body planning & safe trajectory generation.</p>
            </div>
            <div className="card p-4 rounded-md">
              <h3 className="text-lg font-semibold">Edge Autonomy</h3>
              <p className="text-gray-400 text-sm mt-2">Low-latency perception and control for on-device autonomy.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-[420px] h-[420px] hero-glow rounded-xl overflow-hidden card flex items-center justify-center">
            <Image src="nebula-sync-robotics-web-site/public/Nebula_Logo.png" alt="Nebula Logo" width={420} height={420} style={{objectFit:'contain'}} />
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard title="Atlas-X Chassis" subtitle="Humanoid mobility platform" desc="Robust bipedal base with mid-level controllers for dynamic locomotion." />
          <ProductCard title="SyncPlanner" subtitle="Whole-body motion planner" desc="Cloud-native planner optimized for real-world humanoids." />
          <ProductCard title="Nebula Eye" subtitle="Perception sensor suite" desc="Compact RGBD + IMU module for accurate localization and HRI." />
        </div>
      </section>
    </section>
  )
}