async function find(){
    return fetch(`http://localhost:1905/api/vehiculos`, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(response => response.json())
}

async function findOne(patente){
    return fetch(`http://localhost:1905/api/vehiculos/${patente}`, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(response => response.json())
}

async function findService(patente){
    return fetch(`http://localhost:1905/api/servicios/${patente}`, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(response => response.json())
}

async function nuevoVehiculo(vehiculo){
    return fetch(`http://localhost:1905/api/vehiculos`,{
        method:'post',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify(vehiculo)
    })
        .then(response => (response.status === 201) ? response.json() : null)
        .then(response => response ? window.location.href = '/vehiculos' : alert('Ya existe un vehículo cargado con esa patente.'))
}

async function nuevoServicio(servicio){
    return fetch(`http://localhost:1905/api/servicios`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify(servicio)
    })
    .then(response => response.json())
    .then(response => window.location.href = `/vehiculos/${servicio.patente}`)
}

async function findOneService(patente, id){
    return fetch(`http://localhost:1905/api/servicios/${patente}/${id}`, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(response => response.json())
        .catch(error => console.log(`Error: ${error}`))

}

async function deleteOne(patente){
    return fetch(`http://localhost:1905/api/vehiculos/${patente}`,{
        method:'DELETE',
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
    .then(response => window.location.href = `/vehiculos`)
}

async function deleteOneService(patente){
    return fetch(`http://localhost:1905/api/servicios/${patente}`,{
        method:'DELETE',
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
    .then(response => window.location.href = `/vehiculos/${patente}`)
}

async function editarVehiculo(patente, vehiculo){
    return fetch(`http://localhost:1905/api/vehiculos/${patente}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify(vehiculo)
    })
    .then(response => (response.status === 201) ? response.json() : null)
    .then(response => response ? window.location.href = `/vehiculos/${vehiculo.pat}` : alert('Ya existe un vehículo cargado con esa patente.'))
}

async function patchOneServicio(servicio){
    return fetch(`http://localhost:1905/api/servicios/${servicio.id}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify(servicio)
    })
    .then(response => response.json())
    .then(response => window.location.href = `/vehiculos/${servicio.patente}`)
}

export {
    find,
    findOne,
    findService,
    nuevoVehiculo,
    nuevoServicio,
    findOneService,
    deleteOne,
    deleteOneService,
    editarVehiculo,
    patchOneServicio,
}