function ServiceCard({
  title,
  description,
  image,
  onContact,
}) {

  const handleContactClick = () => {

  onContact(title)

  const contactSection =
    document.getElementById('contacto')

  if (contactSection) {

    contactSection.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-blue-700 mb-4">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        <button
          onClick={handleContactClick}
          className="bg-blue-700 text-white px-5 py-3 rounded-xl hover:bg-blue-800 transition"
        >
          Contáctanos
        </button>

      </div>

    </div>
  )
}

export default ServiceCard