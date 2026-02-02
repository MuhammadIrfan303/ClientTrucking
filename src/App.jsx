import { Route, Routes } from "react-router-dom"
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Services from "./assets/pages/Services"
import Contact from "./assets/pages/Contact"
import Layout from "./assets/components/Layout"
import React from "react"
import CarrierSetup from "./assets/pages/CarrierSetup"
import Quote from "./assets/pages/Quote"
import Chatbot from "./assets/components/Chatbot"

function App() {
  return (
    <>
    <Chatbot/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="carrier" element={<CarrierSetup />} />

          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
