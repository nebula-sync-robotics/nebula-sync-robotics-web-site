import Link from "next/link"

const PRODUCTS = [
  {
    id: 'atlas-x',
    name: 'Atlas-X Chassis',
    desc: 'A versatile bipedal mobility platform with modular payload bays and real-time stabilizers.'
  },
  {
    id: 'syncplanner',
    name: 'SyncPlanner',
    desc: 'Whole-body motion planner delivered as an on-prem or cloud product for humanoid robots.'
  },
  {
    id: 'nebula-eye',
    name: 'Nebula Eye',
    desc: 'Compact perception module (RGBD + IMU) designed for low-latency onboard perception.'
  }
]

export default function ProjectsPage(){
  return (
     <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold">Products & Projects</h1>
      <p className="text-gray-400 mt-2">We design, manufacture, and ship robotics products. Below are our flagship platforms and software suites.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map(p => (
          <div key={p.id} className="card p-6 rounded-xl">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <div className="mt-4 flex gap-3">
              <Link href={`/projects#${p.id}`} className="px-4 py-2 border border-gray-700 rounded-md">Details</Link>
              <a className="px-4 py-2 rounded-md bg-nebula-accent text-black font-semibold">Preorder</a>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">R&D Projects</h2>
        <div className="mt-4 text-gray-300">We continuously prototype advanced mobility and perception systems. Contact us to learn more about OEM partnerships and volume orders.</div>
      </section>
    </div>
  )
}