const login = async (usuario, password) => {
    return fetch('http://localhost:1905/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({usuario, password})
    })
        .then(async response => {
            if(response.status === 200) {
                return response.json()
            }
            throw new Error('El usuario y/o password no coinciden con nuestros registros. Vuelva a intentarlo.')
        })
}

const register = async (usuario, password) => {
    return fetch('http://localhost:1905/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({usuario, password})
    })
        .then(async response => {
            console.log(response.status);
            if(response.status === 201) {
                return response.json()
            }
            throw new Error('El usuario ingresado ya existe. Por favor, elija otro nombre de usuario y vuelva a intentarlo.')
        })
}

export {
    login,
    register
}