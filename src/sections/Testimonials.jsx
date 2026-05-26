import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import testimonials from '../data/testimonials'

function Testimonials() {

  const [selectedVideo, setSelectedVideo] =
    useState(null)

  return (
    <section
  id="testimonios"
  className="py-24 bg-white"
> 

      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Historias de Emprendedores
          </h2>

          <p className="text-lg text-gray-600">
            Conoce experiencias reales de negocios apoyados
            por los Centros de Desarrollo de Negocios.
          </p>

        </div>

        {/* Carrusel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map((testimonial) => (

            <SwiperSlide key={testimonial.id}>

              <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

                {/* Thumbnail */}
                <div
                  className="relative cursor-pointer group"
                  onClick={() =>
                    setSelectedVideo(
                      testimonial.videoId
                    )
                  }
                >

                  <img
                    src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
                    alt={testimonial.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">

                    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">

                      <span className="text-3xl text-blue-700">
                        ▶
                      </span>

                    </div>

                  </div>

                </div>

                {/* Contenido */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {testimonial.title}
                  </h3>

                  <p className="text-gray-600">
                    {testimonial.business}
                  </p>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      {/* Modal Video */}
      {selectedVideo && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

          <div className="relative w-full max-w-4xl">

            {/* Botón cerrar */}
            <button
              onClick={() =>
                setSelectedVideo(null)
              }
              className="absolute -top-12 right-0 text-white text-4xl"
            >
              ×
            </button>

            {/* Video */}
            <div className="aspect-video">

              <iframe
                className="w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title="YouTube video player"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      )}

    </section>
  )
}

export default Testimonials