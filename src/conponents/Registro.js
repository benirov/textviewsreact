import React, { useEffect } from 'react';
import {
    Link,
  } from 'react-router-dom';
import './registro.css';
import logo from '../assets/images/logo.jpg'
const Registros = () => {

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
                    <h1 className="auth-title">Registrate</h1>
                    <p className="auth-subtitle mb-5"> ¡Y comienza a viajar entre miles de titulos que tenemos para ti !</p>

                    <form action="index.html">
                        <div className="form-group position-relative has-icon-left mb-4">
                            <input type="text" className="form-control form-control-xl" placeholder="Tu Correo" />
                            <div className="form-control-icon">
                                <i className="bi bi-envelope"></i>
                            </div>
                        </div>
                        <div className="form-group position-relative has-icon-left mb-4">
                            <input type="text" className="form-control form-control-xl" placeholder="usuario" />
                            <div className="form-control-icon">
                                <i className="bi bi-person"></i>
                            </div>
                        </div>
                        <div className="form-group position-relative has-icon-left mb-4">
                            <input type="password" className="form-control form-control-xl" placeholder="Contraseña" />
                            <div className="form-control-icon">
                                <i className="bi bi-shield-lock"></i>
                            </div>
                        </div>
                        <div className="form-group position-relative has-icon-left mb-4">
                            <input type="password" className="form-control form-control-xl" placeholder="Confirma tu Contraseña" />
                            <div className="form-control-icon">
                                <i className="bi bi-shield-lock"></i>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">¡ Empecemos !</button>
                    </form>
                    <div className="text-center mt-5 text-lg fs-4">
                        <p className='text-gray-600'>¿ Ya tienes una cuenta ? <Link to="/login"
                                className="font-bold">Ingresa acá</Link>.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 d-none d-lg-block">
                <div id="auth-right">

                </div>
            </div>
        </div>

    </div>
     );
}
 
export default Registros;