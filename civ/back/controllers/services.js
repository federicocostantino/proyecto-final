import * as service from '../services/services.js'

const findAll = (req, res) => {
    service.findAll()
        .then(services => res.status(200).json(services))
        .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const findOne = (req, res) => {
    const { id } = req.params
    service.findOne(id)
        .then(service => res.status(200).json(service))
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
        .then(response => {
            if(response !== 0) {
                res.status(200).json(response)
            } else {
                res.status(200).json('0')
            }
        })
        .catch(error => res.status(404).json({ message: `Error: ${error}` }))
}

const edit = (req, res) => {
    const serviceReq = req.body
    const id = req.params
    service.edit(serviceReq, id)
        .then(modifiedService => {
            if(modifiedService && (modifiedService.matchedCount || modifiedService.modifiedCount)) {
                res.status(201).json(serviceReq)
            } else {
                res.status(404).json()
            }
        })
}

export {
    findAll,
    findOne,
    newService,
    edit,
    numberOfServices
}