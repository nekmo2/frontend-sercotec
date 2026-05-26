import {
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa'

import { FaXTwitter } from 'react-icons/fa6'

function Footer() {

  return (
    <footer className="bg-blue-950 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Información */}
        <div>

          <h2 className="text-3xl font-bold mb-4">
            SERCOTEC
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Centro de Desarrollo de Negocios Santiago,
            apoyando a emprendedores y pequeñas empresas
            mediante asesorías y acompañamiento estratégico.
          </p>

          {/* Redes sociales */}
          <div className="flex gap-4">

            {/* X */}
            <a
              href="https://x.com/Sercotec_Chile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 hover:bg-white hover:text-black transition w-12 h-12 rounded-full flex items-center justify-center text-xl"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Sercotec/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 hover:bg-white hover:text-blue-700 transition w-12 h-12 rounded-full flex items-center justify-center text-xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/user/CanalSERCOTEC"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 hover:bg-white hover:text-red-600 transition w-12 h-12 rounded-full flex items-center justify-center text-xl"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* Navegación */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Navegación
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>
              <a
                href="#nosotros"
                className="hover:text-white transition"
              >
                Nosotros
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                className="hover:text-white transition"
              >
                Servicios
              </a>
            </li>

            <li>
              <a
                href="#testimonios"
                className="hover:text-white transition"
              >
                Testimonios
              </a>
            </li>

            <li>
              <a
                href="#faq"
                className="hover:text-white transition"
              >
                Preguntas frecuentes
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                className="hover:text-white transition"
              >
                Contacto
              </a>
            </li>

          </ul>

        </div>

        {/* Contacto */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Contacto
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>
              centro.santiago@centrossercotec.cl
            </li>

            <li>
              Manuel Rodríguez Sur 749,
              Santiago
            </li>

            <li>
              Metro Toesca
            </li>

          </ul>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-400 px-6">

        © 2026 Centro de Desarrollo de Negocios Santiago - SERCOTEC

      </div>

    </footer>
  )
}

export default Footer