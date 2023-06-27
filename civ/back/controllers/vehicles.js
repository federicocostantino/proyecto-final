import * as service from '../services/vehicles.js'

const findAll = (req, res) => {
  service.findAll()
      .then(vehiculos => res.status(200).json(vehiculos))
      .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const findOne = (req, res) => {
  const { domain } = req.params
  service.findOne(domain)
    .then(vehicle => vehicle ? res.status(200).json(vehicle) : res.status(204).json())
    .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const createOne = (req, res) => {
  const vehicle = req.body
  service.createOne(vehicle)
    .then(vehicle => vehicle ? res.status(201).json(vehicle) : res.status(204).json())
    .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const editOne = (req, res) => {
  const { domain } = req.params
  const vehicle = req.body
  service.editOne(domain, vehicle)
    .then(modifiedVehicle => {
      if (modifiedVehicle && (modifiedVehicle.matchedCount || modifiedVehicle.modifiedCount)) {
        res.status(201).json(vehicle)
      } else {
        res.status(404).json()
      }
    })
    .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const deleteOne = (req, res) => {
  const { domain } = req.params
  service.deleteOne(domain)
    .then(vehicle => vehicle.deletedCount !== 0 ? res.status(200).json(domain) : res.status(204).json())
    .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

export{
  findAll,
  findOne,
  createOne,
  editOne,
  deleteOne
}