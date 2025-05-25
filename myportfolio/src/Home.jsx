export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen max-w-6xl mx-auto px-6 py-32 text-center flex flex-col justify-center"
      style={{ color: '#4B3B2B' }}
    >
      <h1 className="text-6xl font-serif font-bold mb-6">Brian H. Castelhanho</h1>
      <p className="text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
        Copywriter profissional — Transformando palavras em resultados
      </p>
      <a
        href="#contato"
        className="mx-auto px-8 py-3 border-2 rounded-md font-semibold text-lg transition-colors duration-300"
        style={{
          color: '#4B3B2B',
          borderColor: '#4B3B2B',
          backgroundColor: 'transparent',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#4B3B2B'
          e.currentTarget.style.color = '#F5F1EB'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = '#4B3B2B'
        }}
      >
        Me contrate
      </a>
    </section>
  )
}
