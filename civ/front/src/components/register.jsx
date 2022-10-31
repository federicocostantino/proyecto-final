import  React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as AuthService from './../Services/auth.services.js'
import './../css/loginPage.css'
import { useEffect } from 'react'

const Register = ({ onLogin }) => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    let navigate = useNavigate()

    useEffect(() => {
        const AUTH_TOKEN = localStorage.getItem('auth-token')
        if(AUTH_TOKEN) {
            navigate('/vehicles', {replace: true})
        }
    }, [])

    const handleUsuario = (event) => setUsuario(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)

    const handleRegister = (e) => {
        e.preventDefault()
        if(usuario !==  '' && password !== '') {
            AuthService.register(usuario, password)
                .then(({user, token}) => onLogin(user, token))
                .catch(error => setError(error.message))
        } else {
            setError('Debe completar todos los campos.')
        }
    }
    
    return(
        <div className="register-page">
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <div>
                <form className="register-form" onSubmit={handleRegister}>
                    <input name="usuario" id="usuario" type="text" placeholder="Nombre de usuario" onChange={handleUsuario} value={usuario}/>
                    <input name="password" id="password" type="password" placeholder="Contraseña" onChange={handlePassword} value={password}/>
                    <button type="submit" className="mb-3">Crear</button>
                </form>
            </div>
        </div>
    )
}

export default Register