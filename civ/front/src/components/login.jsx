import  React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import * as AuthService from './../Services/auth.services.js'
import $ from 'jquery'
import './../css/loginPage.css'
import { useEffect } from "react"

const Login = ({ onLogin }) => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    let navigate = useNavigate()

    useEffect(() => {
        const AUTH_TOKEN = localStorage.getItem('auth-token')
        if(AUTH_TOKEN) {
            navigate('/vehiculos', {replace: true})
        }
    }, [])

    const handleStep = () => {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    }

    const handleUsuario = (event) => setUsuario(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(usuario !== '' && password !== '') {
            AuthService.login(usuario, password)
                .then(({user, token}) => onLogin(user, token))
                .catch(error => setError(error.message))
        } else {
            setError('Debe completar todos los campos.')
        }
    }

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
        <div className="login-page">
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <div className="form">

                <form className="register-form" onSubmit={handleRegister}>
                    <input name="usuario" id="usuario" type="text" placeholder="Nombre de usuario" onChange={handleUsuario} value={usuario}/>
                    <input name="password" id="password" type="password" placeholder="Contraseña" onChange={handlePassword} value={password}/>
                    <button type="submit" className="mb-3">Crear</button>
                    <p className="mt-5 message">¿Ya estás registrado? <button className="mt-2" onClick={handleStep}>Ingresá</button></p>
                </form>

                <form className="login-form" onSubmit={handleSubmit}>
                    <input name="usuario" id="usuarioIngresar" type="text" placeholder="Nombre de usuario" onChange={handleUsuario} value={usuario}/>
                    <input name="password" id="passwordIngresar" type="password" placeholder="Contraseña" onChange={handlePassword} value={password}/>
                    <button type="submit" className="mb-3">Ingresar</button>
                    <p className="mt-5 message">¿No estás registrado? <button className="mt-2" onClick={handleStep}>Creá una cuenta</button></p>
                </form>

            </div>
        </div>
    )
}

export default Login