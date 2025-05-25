export default function ProjectCard({ titulo, descricao, link }) {
  return (
    <div className="border border-[#4B3B2B] rounded-lg p-6 hover:shadow-lg transition-shadow bg-[#F5F3F0]">
      <h3 className="text-2xl font-semibold mb-3">{titulo}</h3>
      <p className="mb-4">{descricao}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-[#4B3B2B] border border-[#4B3B2B] rounded-full px-4 py-2 hover:bg-[#4B3B2B] hover:text-white transition-colors"
      >
        Ver projeto
      </a>
    </div>
  )
}
