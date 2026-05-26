import services from '../data/services'
import ServiceCard from '../components/ServiceCard'

function Services({
  onSelectService,
}) {
  return (
    <section
      id="servicios"
      className="py-24 bg-gray-100"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Nuestros Servicios
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Apoyamos a emprendedores y pequeñas empresas
            mediante asesorías, innovación y acompañamiento estratégico.
          </p>

        </div>

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

      </div>

    </section>
  )
}

export default Services