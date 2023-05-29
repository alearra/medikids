import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Quienessomos } from '../containers/nosotros/Quienessomos'
import { Datos } from '../containers/nosotros/Datos'
import { Directorio } from '../containers/nosotros/Directorio'

export const Nosotros = () => {
  return (
    <div className='bg-white'>
        <Header />
        <Quienessomos />
        <Datos />
        <Directorio />
        <Footer />
    </div>
  )
}
