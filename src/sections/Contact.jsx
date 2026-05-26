function Contact({
  selectedService,
}) {

  return (
    <section
      id="contacto"
      className="py-24 bg-white"
    >

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Contáctanos
          </h2>

          <p className="text-gray-600 text-lg">
            Completa el formulario y nuestro equipo te responderá.
          </p>

        </div>

        <form className="bg-gray-100 p-8 rounded-3xl shadow-md space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Nombre
            </label>

            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Servicio
            </label>

            <input
              type="text"
              value={selectedService}
              readOnly
              className="w-full p-4 rounded-xl border border-gray-300 bg-gray-200"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Mensaje
            </label>

            <textarea
              rows="5"
              placeholder="Escribe tu mensaje..."
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-4 rounded-xl hover:bg-blue-800 transition font-semibold"
          >
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact