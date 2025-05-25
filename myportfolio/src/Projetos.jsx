import useFadeInOnScroll from './hooks/useFadeInOnScroll'

const projetos = [
  {
    titulo: 'Projeto 1',
    descricao: 'Descrição breve do projeto 1, destacando os resultados e estratégias aplicadas.',
  },
  {
    titulo: 'Projeto 2',
    descricao: 'Resumo do projeto 2, mostrando o valor agregado para o cliente.',
  },
  {
    titulo: 'Projeto 3',
    descricao: 'Detalhes do projeto 3 e como ele ajudou na comunicação da marca.',
  },
]

export default function Projetos() {
  const [ref, isVisible] = useFadeInOnScroll()

  return (
    <section
      id="projetos"
      ref={ref}
      className={`min-h-screen max-w-6xl mx-auto px-6 py-24 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ color: '#4B3B2B' }}
    >
      <h2 className="text-4xl font-serif font-semibold mb-12 text-terra-dark">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {projetos.slice(0, 3).map(({ titulo, descricao }, i) => (
          <div
            key={i}
            className="border border-terra-medium rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer bg-terra-light"
          >
            <h3 className="text-2xl font-semibold mb-3">{titulo}</h3>
            <p className="text-terra-medium">{descricao}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
  href="/projetos-todos"
  className="text-terra-base hover:underline font-medium"
>
  Ver todos os projetos &rarr;
</a>

      </div>
    </section>
  )
}
