function Sobre() {
  return (
    <section
      id="sobre"
      className="min-h-screen bg-[#4B3B2B] flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Texto */}
        <div className="md:pl-6">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Sobre mim</h2>
          <p className="text-lg text-white leading-relaxed">
            Sou Brian H. Castelhanho, copywriter profissional apaixonado por transformar ideias em palavras que vendem. Tenho experiência com campanhas persuasivas, páginas de vendas e conteúdo estratégico que gera resultados reais. Se você quer conectar sua marca ao seu público com autenticidade e impacto, estou aqui pra isso.
          </p>
        </div>

        {/* Imagem */}
        <div className="flex justify-center md:justify-end pr-6">
          <img
            src="/sua-foto.jpg"
            alt="Brian H. Castelhanho"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
