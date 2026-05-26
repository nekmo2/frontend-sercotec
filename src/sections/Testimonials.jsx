import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import testimonials from '../data/testimonials'

function Testimonials() {
  return (
    <section
      className="py-24 bg-white"
    >

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Testimonios
          </h2>

          <p className="text-lg text-gray-600">
            Historias de emprendedores que han fortalecido sus negocios.
          </p>

        </div>

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

              <div className="bg-gray-100 rounded-3xl p-8 h-full shadow-sm hover:shadow-md transition">

                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <h3 className="font-bold text-blue-700 text-lg">
                  {testimonial.name}
                </h3>

                <p className="text-gray-500">
                  {testimonial.business}
                </p>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  )
}

export default Testimonials