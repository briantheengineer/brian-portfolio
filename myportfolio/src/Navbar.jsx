import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-[#4B3B2B]/30"
      style={{ color: '#4B3B2B' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif">Brian H. Castelhanho</h1>

        <div className="flex gap-4">
          {['home', 'sobre', 'projetos', 'contato'].map((sec) => (
            <Link
              key={sec}
              to={sec}
              smooth={true}
              duration={500}
              className="px-4 py-2 rounded-full hover:bg-[#4B3B2B] hover:text-white transition-colors cursor-pointer"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
