import teamImage from '../assets/images/team.jpg'

function About() {
  return (
    <section
      id="nosotros"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Impulsamos el crecimiento de las pymes
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Los Centros de Desarrollo de Negocios de SERCOTEC
            entregan asesoría gratuita, acompañamiento estratégico
            y apoyo especializado para fortalecer emprendimientos,
            pequeñas empresas y cooperativas en todo Chile.
          </p>

        </div>

        {/* Estadísticas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">

            <h3 className="text-5xl font-bold text-blue-700 mb-3">
              62
            </h3>

            <p className="text-gray-700 font-medium">
              Centros a nivel nacional
            </p>

          </div>

          <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">

            <h3 className="text-5xl font-bold text-blue-700 mb-3">
              200+
            </h3>

            <p className="text-gray-700 font-medium">
              Puntos de atención
            </p>

          </div>

          <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">

            <h3 className="text-5xl font-bold text-blue-700 mb-3">
              100%
            </h3>

            <p className="text-gray-700 font-medium">
              Asesoría gratuita
            </p>

          </div>

        </div>

        {/* Imagen institucional */}
        <div className="overflow-hidden rounded-3xl shadow-xl">

          <img
            src={teamImage}
            alt="Equipo SERCOTEC"
            className="w-full h-[500px] object-cover"
          />

        </div>

      </div>
    </section>
  )
}

export default About