import { useEffect, useState } from 'react'

import ServiceCard from '../components/ServiceCard'

function Services({
  onSelectService,
}) {

  const [services, setServices] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=3'
    )
      .then((response) => response.json())

      .then((data) => {

        const formattedServices =
          data.map((item, index) => ({
            id: item.id,

            title: [
              'Asesoría Empresarial',
              'Capacitación y Talleres',
              'Innovación y Digitalización',
            ][index],

            description: item.body,

            image: [
              'https://images.unsplash.com/photo-1552664730-d307ca884978',

              'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

              'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
            ][index],
          }))

        setServices(formattedServices)

        setLoading(false)
      })

      .catch((error) => {

        console.error(error)

        setLoading(false)
      })

  }, [])

  return (
    <section
      id="servicios"
      className="py-24 bg-gray-100"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Nuestros Servicios
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Apoyamos a emprendedores y pequeñas empresas
            mediante asesorías, innovación y acompañamiento estratégico.
          </p>

        </div>

        {/* Loading */}
        {loading ? (

          <p className="text-center text-gray-500">
            Cargando servicios...
          </p>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service) => (

              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                onContact={onSelectService}
              />

            ))}

          </div>

        )}

      </div>

    </section>
  )
}

export default Services