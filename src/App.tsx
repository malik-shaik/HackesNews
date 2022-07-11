import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'styles/_main.scss'
import { Navbar } from 'components/navbar'
import { LandingPage } from 'components/landing-page'
import { ContactPage } from 'components/contact-page'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
