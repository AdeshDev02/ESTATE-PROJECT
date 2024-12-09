import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './SecondaryComponent/Header'
import Footer from './SecondaryComponent/Footer'
import Home from './HomeComponent/Home'
import About from './AboutComponent/About'
import Catalogue from './CatalogueComponent/Catalogue'
import Service from './ServiceComponent/Service'
import Contact from './ContactComponent/Contact'
import SingleProp from './CatalogueComponent/SingleProperty/SingleProp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/catalogue' element={<Catalogue/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/singleprop' element={<SingleProp/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
