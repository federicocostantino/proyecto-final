async function findAll(){
    return fetch(`http://localhost:1905/api/services`, {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
        .then(response => response.json())
}

export {
    findAll
}