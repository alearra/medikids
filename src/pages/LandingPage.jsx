import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../containers/landingpage/Hero'
import { Nosotros } from '../containers/landingpage/Nosotros'
import { Diciplinas } from '../containers/landingpage/Diciplinas'
import { Formulario } from '../containers/landingpage/Formulario'
import { Footer } from '../components/Footer'

export const LandingPage = () => {
  return (
    <div className='bg-white'>
        <Header />
        <Hero />
        <Nosotros />
        <Diciplinas />
        <Formulario />
        <Footer />
    </div>
  )
}
