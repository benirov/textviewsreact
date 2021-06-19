import React, { useEffect } from 'react';
import {
    Link,
  } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'
import './registro.css';
const Login = () => {

    useEffect(() => {
        document.getElementById('sidebar').classList.add('d-none');
    }, [])
    return ( 
        <div id="auth">

        <div className="row h-100">
            <div className="col-lg-5 col-12">
                <div id="auth-left">
                    <div className="auth-logo">
                        <a href="index.html"><img src={logo} alt="Logo" /></a>
                    </div>
                    <h1 className="auth-title">Inicia Sesión</h1>

                    <form>
                        <div className="form-group position-relative has-icon-left mb-4">
                            <input type="text" className="form-control form-control-xl" placeholder="Tu Correo" />
                            <div className="form-control-icon">
                                <i className="bi bi-person"></i>
                            </div>
                        </div>
                        <div className="form-group position-relative has-icon-left mb-4">
                            <input type="password" className="form-control form-control-xl" placeholder="Tu Contraseña" />
                            <div className="form-control-icon">
                                <i className="bi bi-shield-lock"></i>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">Iniciar</button>
                    </form>
                    <div className="text-center mt-5 text-lg fs-4">
                        <p className="text-gray-600">¿ Aún no tienes una cuenta 🤔? <Link to="/registro"
                                className="font-bold">¡ Da Click Acá y Registrate !</Link>😉.</p>
                        <p><a className="font-bold" href="auth-forgot-password.html">¿ Olvidaste tu Contraseña?</a>.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 d-none d-lg-block">
                <div id="auth-right-login">

                </div>
            </div>
        </div>

    </div>
     );
}
 
export default Login;