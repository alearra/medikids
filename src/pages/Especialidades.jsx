import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Directorio } from '../containers/nosotros/Directorio'
import { DatosEspecialidades } from '../containers/especialidades/Datos'
import { WelcomeEspecialidades } from '../containers/especialidades/Welcomeespecialidades'
import { TabEsp } from '../containers/especialidades/TabEsp'

export const Especialidades = () => {
  return (
    <div className='grid auto-rows-auto'>
        <Header />
        <WelcomeEspecialidades />
        <TabEsp/>
        <Footer />
    </div>
  )
}