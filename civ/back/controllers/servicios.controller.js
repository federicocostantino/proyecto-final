import * as service from './../services/servicios.service.js'

const findAll = (req, res) => {
    service.findAll()
        .then(services => res.status(200).json(services))
        .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const newService = (req, res) => {
    const newService = req.body
    service.newService(newService)
        .then(service => res.status(201).json(service))
        .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const numberOfServices = (req, res) => {
    service.numberOfServices()
        .then(response => res.status(200).json(response))
        .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

// const verServiciosPorPatente = (req, res) => {
//     const { patente } = req.params
//     service.dameServiciosPorPatente(patente)
//         .then(servicios => res.status(200).json(servicios))
//         .catch(error => res.status(404).json({ message: `Error: ${error}` }))
// }

// const verServicioPorId = (req, res) => {
//     const { id } = req.params
//     service.dameServicioPorId(id)
//         .then(servicio => res.status(200).json(servicio))
//         .catch(error => res.status(404).json({ message: `Error: ${error}` }))
// }

// const nuevoServicio = (req, res) => {
//     const servicio = req.body
//     service.grabarServicio(servicio)
//         .then(servicio => servicio ? res.status(201).json(servicio) : res.status(204).json())
//         .catch(error => res.status(404).json({ message: `Error: ${error}` }))
// }

// const editarServicio = (req, res) => {
//     const servicio = req.body
//     service.editarServicio(servicio)
//         .then(servicioModificado => {
//             if(servicioModificado && (servicioModificado.matchedCount || servicioModificado.modifiedCount)) {
//                 res.status(201).json(servicio)
//             } else {
//                 res.status(404).json()
//             }
//         })
// }

// const eliminarServicio = (req, res) => {
//     const { patente } = req.params
//     service.borrarServicio(patente)
//         .then(servicio => {
//             servicio ? res.status(200).json(patente) : res.status(204).json()
//         })
//         .catch(error => res.status(404).json({ message: `Error: ${error}` }))
// }

// const endService = (req, res) => {
//     const id = req.body
//     service.endService(id)
//         // .then(servicio => {
//         //     console.log(servicio)
//         //     servicio ? res.status(200) : res.status(204).json()
//         // })
//         // .catch(error => res.status(404).json({ message: `Error: ${error}` }))
//         .then(servicioModificado => {
//             if(servicioModificado && (servicioModificado.matchedCount || servicioModificado.modifiedCount)) {
//                 res.status(201).json({id})
//             } else {
//                 res.status(404).json()
//             }
//         })
// }

export {
    findAll,
    newService,
    numberOfServices
    // verServiciosPorPatente,
    // verServicioPorId,
    // nuevoServicio,
    // editarServicio,
    // eliminarServicio,
    // endService
}