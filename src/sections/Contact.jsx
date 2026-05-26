import { useState } from 'react'

function Contact({
  selectedService,
}) {

  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      message: '',
    })

  const [errors, setErrors] =
    useState({})

  const [success, setSuccess] =
    useState(false)

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validateForm = () => {

    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name =
        'El nombre es obligatorio'
    }

    if (!formData.email.trim()) {
      newErrors.email =
        'El correo es obligatorio'
    } else if (
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      newErrors.email =
        'Correo inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message =
        'El mensaje es obligatorio'
    }

    return newErrors
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const validationErrors =
      validateForm()

    if (
      Object.keys(validationErrors).length > 0
    ) {

      setErrors(validationErrors)

      setSuccess(false)

      return
    }

    setErrors({})

    setSuccess(true)

    console.log({
      ...formData,
      service: selectedService,
    })

    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section
      id="contacto"
      className="py-24 bg-white"
    >

      <div className="max-w-4xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Contáctanos
          </h2>

          <p className="text-gray-600 text-lg">
            Completa el formulario y nuestro equipo te responderá.
          </p>

        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-8 rounded-3xl shadow-md space-y-6"
        >

          {/* Nombre */}
          <div>

            <label className="block mb-2 font-medium">
              Nombre
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.name && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.name}
              </p>
            )}

          </div>

          {/* Email */}
          <div>

            <label className="block mb-2 font-medium">
              Correo electrónico
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.email && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.email}
              </p>
            )}

          </div>

          {/* Servicio */}
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

          {/* Mensaje */}
          <div>

            <label className="block mb-2 font-medium">
              Mensaje
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje..."
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {errors.message && (
              <p className="text-red-500 mt-2 text-sm">
                {errors.message}
              </p>
            )}

          </div>

          {/* Botón */}
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-4 rounded-xl hover:bg-blue-800 transition font-semibold"
          >
            Enviar mensaje
          </button>

          {/* Mensaje éxito */}
          {success && (
            <p className="text-green-600 font-medium">
              Mensaje enviado correctamente.
            </p>
          )}

        </form>

      </div>

    </section>
  )
}

export default Contact