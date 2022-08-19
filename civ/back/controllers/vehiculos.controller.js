import * as service from './../services/vehiculos.service.js'

const verVehiculos = (req, res) => {
  service.dameTodos()
      .then(vehiculos => res.status(200).json(vehiculos))
      .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const verVehiculo = (req, res) => {
  const { patente } = req.params
  service.dameVehiculo(patente)
    .then(vehiculo => vehiculo ? res.status(200).json(vehiculo) : res.status(204).json())
    .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const crearVehiculo = (req, res) => {
  const vehiculo = req.body
  service.grabarVehiculo(vehiculo)
    .then(vehiculo => vehiculo ? res.status(201).json(vehiculo) : res.status(204).json())
    .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const modificarUnVehiculo = (req, res) => {
  const { patente } = req.params
  const vehiculo = req.body
  service.modificarVehiculo(patente, vehiculo)
    .then(vehiculoModificado => {
      if (vehiculoModificado && (vehiculoModificado.matchedCount || vehiculoModificado.modifiedCount)) {
        res.status(201).json(vehiculo)
      } else {
        res.status(404).json()
      }
    })
    .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const eliminarVehiculo = (req, res) => {
  const { patente } = req.params
  service.borraVehiculo(patente)
    .then(vehiculo => vehiculo ? res.status(200).json(patente) : res.status(204).json())
    .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

export{
  verVehiculos,
  verVehiculo,
  crearVehiculo,
  eliminarVehiculo,
  modificarUnVehiculo,
}