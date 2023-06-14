import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WhatsAppButton from './components/WspButton'
import { LandingPage } from './pages/LandingPage'
import './styles/tailwindcss.css'
import { Nosotros } from './pages/Nosotros'
import { Especialidades } from './pages/Especialidades'
import { ContactPage } from './pages/ContactPage'



function App() {
  return (
    <div className='font-NUNITO'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/especialidades' element={<Especialidades />} />
      <Route path='/contacto' element={<ContactPage />} />
      </Routes>
      <WhatsAppButton />
      </BrowserRouter>
    </div>
  )
}

export default App
