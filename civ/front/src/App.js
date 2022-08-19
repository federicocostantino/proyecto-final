import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Login from "./components/login"
import Vehiculos from "./components/Vehiculos/vehiculos"
import Vehiculo from "./components/Vehiculos/vehiculo"
import FormNuevoVehiculo from "./components/Vehiculos/formNuevoVehiculo"
import FormModificarFicha from "./components/Vehiculos/FichaVehiculo/formModificarFicha"
import FormNuevoServicio from "./components/Vehiculos/ServiciosVehiculo/formNuevoServicio"
import FormModificarServicio from "./components/Vehiculos/ServiciosVehiculo/formModificarServicio"
import PageNotFound from './pages/pageNotFound'

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
    navigate('/vehiculos', {replace: true})
  }

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={onLogin}/>} />
      <Route path="/vehiculos" element={<Vehiculos/>} />
      <Route path="/vehiculos/:patente" element={<Vehiculo/>} />
      <Route path="/vehiculos/nuevo_vehiculo" element={<FormNuevoVehiculo/>} />
      <Route path="/vehiculos/:patente/modificar_ficha" element={<FormModificarFicha/>} />
      <Route path="/vehiculos/:patente/nuevo_servicio" element={<FormNuevoServicio/>} />
      <Route path="/vehiculos/:patente/modificar_servicio/:id" element={<FormModificarServicio/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;