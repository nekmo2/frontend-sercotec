function Hero() {
  return (
    <section className="min-h-screen bg-blue-700 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Impulsamos el crecimiento de tu negocio
        </h1>

        <p className="text-xl max-w-2xl mb-8">
          Centro de Negocios SERCOTEC Santiago:
          asesoría, innovación y apoyo para pequeñas empresas.
        </p>

        <a
          href="#contacto"
          className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Contáctanos
        </a>
      </div>
    </section>
  )
}

export default Hero