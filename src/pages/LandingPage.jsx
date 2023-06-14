import { Hero } from '../containers/landingpage/Hero'
import { Nosotros } from '../containers/landingpage/Nosotros'
import { Diciplinas } from '../containers/landingpage/Diciplinas'
import { Formulario } from '../containers/landingpage/Formulario'
import { Footer } from '../components/Footer'
import { Header } from '../containers/header/Header'


export const LandingPage = () => {
  return (
    <div className='bg-white font-NUNITO'>
       <Header />
        <Hero />
        <Nosotros />
        <Diciplinas />
        <br/>
        <Formulario />
        <Footer />
    </div>
  )
}
