import ProjectCard from './ProjectCard'

const projetos = [
  {
    titulo: 'Landing Page para Marca X',
    descricao: 'Uma landing page focada em conversão, com layout estratégico e copy persuasiva.',
    link: '/projetos/landing-x.pdf'
  },
  {
    titulo: 'Sequência de E-mails para Lançamento',
    descricao: 'Série de e-mails para lançamento de produto digital, com foco em escassez e prova social.',
    link: 'https://docs.google.com/document/d/exemplo-email'
  },
  {
    titulo: 'Página de Vendas para Curso Y',
    descricao: 'Página de vendas desenvolvida com técnicas de copywriting direto e storytelling.',
    link: 'https://docs.google.com/document/d/exemplo-vendas'
  },
  // Você pode adicionar mais
]

export default function ProjetosTodos() {
  return (
    <section className="min-h-screen max-w-6xl mx-auto px-6 py-24 text-[#4B3B2B]">
      <h2 className="text-4xl font-serif font-semibold mb-12">Todos os Projetos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projetos.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}
