import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WhatsAppButton from './components/WspButton'
import { LandingPage } from './pages/LandingPage'
import './styles/tailwindcss.css'
import { Nosotros } from './pages/Nosotros'


function App() {
  return (
    <div className=''>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/nosotros' element={<Nosotros />} />
      </Routes>
      <WhatsAppButton />
      </BrowserRouter>
    </div>
  )
}

export default App
