import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from './components/home'
import Blog from './components/blog'

import Login from './components/login'
import Register from './components/register'

import Vehicles from './components/Vehicles/Vehicles'
import EditVehicle from './components/Vehicles/editVehicle'
import NewVehicle from './components/Vehicles/newVehicle'

import Services from './components/Services/services'
import NewService from './components/Services/newService'
import EditService from './components/Services/editService'
// import FormModificarFicha from './components/Vehicles/formModificarFicha'
// import FormNuevoServicio from './components/Vehiculos/ServiciosVehiculo/formNuevoServicio'
// import FormModificarServicio from './components/Vehiculos/ServiciosVehiculo/formModificarServicio'
import PageNotFound from './pages/pageNotFound'

import Header from './pages/header'
import Footer from './pages/footer'

import './css/estilos.css'

const App = () => {
  let navigate = useNavigate()

  useEffect(() => {
    const AUTH_TOKEN = localStorage.getItem('auth-token')
    if(!AUTH_TOKEN) {
      navigate('/', {replace: true})
    }
  }, [])

  const onLogin = (user, token) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('auth-token', token)
    window.location.href = '/'
  }

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/login' element={<Login onLogin={onLogin}/>} />
          <Route path='/register' element={<Register onLogin={onLogin}/>} />
          <Route path="/vehicles" element={<Vehicles/>} />
          <Route path="/vehicles/new-vehicle" element={<NewVehicle/>} />
          <Route path="/vehicles/:domain/edit" element={<EditVehicle/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/services/new-service" element={<NewService/>} />
          <Route path="/services/:id/edit" element={<EditService/>} />
          {/* <Route path="/vehiculos/:patente/modificar_ficha" element={<FormModificarFicha/>} />
          <Route path="/vehiculos/:patente/nuevo_servicio" element={<FormNuevoServicio/>} />
          <Route path="/vehiculos/:patente/modificar_servicio/:id" element={<FormModificarServicio/>} /> */}
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;