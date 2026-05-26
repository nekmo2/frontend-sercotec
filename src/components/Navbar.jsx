function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">
          SERCOTEC
        </h1>

        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar