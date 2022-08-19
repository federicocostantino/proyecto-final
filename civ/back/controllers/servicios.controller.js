import * as serviciosService from './../services/servicios.service.js'

const verServicios = (req, res) => {
    serviciosService.dameTodos()
        .then(servicios => res.status(200).json(servicios))
        .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const verServiciosPorPatente = (req, res) => {
    const { patente } = req.params
    serviciosService.dameServiciosPorPatente(patente)
        .then(servicios => res.status(200).json(servicios))
        .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const verServicioPorId = (req, res) => {
    const { id } = req.params
    serviciosService.dameServicioPorId(id)
        .then(servicio => res.status(200).json(servicio))
        .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const nuevoServicio = (req, res) => {
    const servicio = req.body
    serviciosService.grabarServicio(servicio)
        .then(servicio => servicio ? res.status(201).json(servicio) : res.status(204).json())
        .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const editarServicio = (req, res) => {
    const servicio = req.body
    serviciosService.editarServicio(servicio)
        .then(servicioModificado => {
            if(servicioModificado && (servicioModificado.matchedCount || servicioModificado.modifiedCount)) {
                res.status(201).json(servicio)
            } else {
                res.status(404).json()
            }
        })
}

const eliminarServicio = (req, res) => {
    const { patente } = req.params
    serviciosService.borrarServicio(patente)
        .then(servicio => {
            servicio ? res.status(200).json(patente) : res.status(204).json()
        })
        .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

export {
    verServicios,
    verServiciosPorPatente,
    verServicioPorId,
    nuevoServicio,
    editarServicio,
    eliminarServicio,
}