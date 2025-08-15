import Link from "next/link";

export function ProductCard({title, subtitle, desc}:{title:string, subtitle:string, desc:string}){
  return (
      <div className="card p-6 rounded-xl">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="text-sm text-nebula-slate mt-1">{subtitle}</div>
      <p className="text-gray-400 mt-3">{desc}</p>
      <div className="mt-4 flex gap-3">
        <Link href="/projects" className="text-sm px-4 py-2 border border-gray-700 rounded-md">Learn More</Link>
        <a className="text-sm px-4 py-2 rounded-md bg-nebula-accent text-black font-semibold">Buy</a>
      </div>
    </div>
  )
}