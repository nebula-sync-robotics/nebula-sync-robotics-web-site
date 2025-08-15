'use client'

export const Footer: React.FC = () => {
  return (
      <footer className="mt-12 border-t border-gray-800 pt-8">
      <div className="max-w-7xl mx-auto text-sm text-gray-400 flex justify-between">
        <div>© {new Date().getFullYear()} Nebula Sync Robotics</div>
        <div>Built with ❤️ for robots</div>
      </div>
    </footer>
  )
}