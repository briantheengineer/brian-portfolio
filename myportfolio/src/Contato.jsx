export default function Contato() {
  return (
    <section
      id="contato"
      className="min-h-screen max-w-6xl mx-auto px-6 py-32 flex flex-col justify-center items-center"
      style={{ backgroundColor: '#4B3B2B', color: '#F5F1EB' }}
    >
      <h2 className="text-4xl font-serif font-bold mb-8">Contato</h2>
      <form className="w-full max-w-md flex flex-col space-y-6">
        <input
          type="text"
          placeholder="Seu nome"
          className="p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#F5F1EB]"
          style={{ backgroundColor: '#6B5B4B', color: '#F5F1EB' }}
        />
        <input
          type="email"
          placeholder="Seu email"
          className="p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#F5F1EB]"
          style={{ backgroundColor: '#6B5B4B', color: '#F5F1EB' }}
        />
        <textarea
          placeholder="Sua mensagem"
          rows="5"
          className="p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#F5F1EB]"
          style={{ backgroundColor: '#6B5B4B', color: '#F5F1EB' }}
        />
        <button
          type="submit"
          className="py-3 rounded-md font-semibold text-lg transition-colors duration-300"
          style={{ backgroundColor: '#F5F1EB', color: '#4B3B2B' }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#E5DED3'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#F5F1EB'
          }}
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
