import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import FAQ from './sections/FAQ'

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

      <FAQ />

      <Contact
        selectedService={selectedService}
      />
    </>
  )
}

export default App