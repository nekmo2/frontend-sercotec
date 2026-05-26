import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import FAQ from './sections/FAQ'
import Testimonials from './sections/Testimonials'

function App() {

  const [selectedService, setSelectedService] =
    useState('')

  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services
        onSelectService={setSelectedService}
      />

      <Testimonials />

      <FAQ />

      <Contact
        selectedService={selectedService}
      />
    </>
  )
}

export default App