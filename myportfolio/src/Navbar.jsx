import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-[#4B3B2B]/30"
      style={{ color: '#4B3B2B' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Nome que volta pro topo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold font-serif cursor-pointer"
        >
          Brian H. Castelhanho
        </Link>

        <div className="flex gap-4 items-center">
          {['home', 'sobre', 'projetos', 'contato'].map((sec) => (
            <Link
              key={sec}
              to={sec}
              smooth={true}
              duration={500}
              className="px-4 py-2 border-2 border-transparent rounded-none hover:border-[#4B3B2B] hover:bg-[#4B3B2B] hover:text-white transition-colors cursor-pointer"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          ))}

          {/* Botão Blog quadrado */}
          <RouterLink
            to="/blog"
            className="px-4 py-2 border-2 border-[#4B3B2B] bg-[#4B3B2B] text-white font-semibold cursor-pointer
              transition-colors duration-300
              hover:bg-white hover:text-[#4B3B2B] hover:border-[#4B3B2B]
              rounded-none"
          >
            Blog
          </RouterLink>
        </div>
      </div>
    </nav>
  )
}
