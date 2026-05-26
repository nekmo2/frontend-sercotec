import { useState } from 'react'

import faqData from '../data/faq'
import FAQItem from '../components/FAQItem'

function FAQ() {

  const [openId, setOpenId] =
    useState(null)

  const handleToggle = (id) => {

    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="py-24 bg-gray-100"
    >

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Preguntas Frecuentes
          </h2>

          <p className="text-lg text-gray-600">
            Resolvemos algunas de las dudas más comunes.
          </p>

        </div>

        <div className="space-y-4">

          {faqData.map((faq) => (

            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() =>
                handleToggle(faq.id)
              }
            />

          ))}

        </div>

      </div>

    </section>
  )
}

export default FAQ