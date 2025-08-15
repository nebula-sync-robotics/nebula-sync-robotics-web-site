import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import './globals.css'

export const metadata = {
  title: 'Nebula Sync Robotics',
  description: 'Hardware and software products for humanoid and industrial robotics.'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white font-display">
        <div className="max-w-7xl mx-auto px-6">
          <Navbar />
        </div>

        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>

        <div className="max-w-7xl mx-auto px-6">
          <Footer />
        </div>
      </body>
    </html>
  )
}