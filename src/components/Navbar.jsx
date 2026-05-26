import { useState } from 'react'

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false)

  const links = [
    {
      name: 'Inicio',
      href: '#',
    },

    {
      name: 'Nosotros',
      href: '#nosotros',
    },

    {
      name: 'Servicios',
      href: '#servicios',
    },

    {
      name: 'Testimonios',
      href: '#testimonios',
    },

    {
      name: 'FAQ',
      href: '#faq',
    },

    {
      name: 'Contacto',
      href: '#contacto',
    },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">
          SERCOTEC
        </h1>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-700 transition font-medium"
            >
              {link.name}
            </a>

          ))}

        </nav>

        {/* Mobile button */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden text-3xl text-blue-700"
        >
          ☰
        </button>

      </div>

      {/* Mobile menu */}
      {menuOpen && (

        <nav className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-gray-700 hover:text-blue-700 transition font-medium"
            >
              {link.name}
            </a>

          ))}

        </nav>

      )}

    </header>
  )
}

export default Navbar