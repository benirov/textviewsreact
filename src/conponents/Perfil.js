import React from 'react';
import './Perfil.css'
const perfil = () => {
    return ( 
        <div className="">
            <div className="">
                <div className="col s12 m12">
                    <div className="contenedorPerfil center">
                        <img src="https://webstockreview.net/images/clipart-book-gif-animation-4.gif" alt="" class="circle" />
                        <p className="tituloUsuario">Hola, Beniro !</p>
                        <br/>
                        <label><i>Eres miembro desde el 28 de Diciembre de 2021 !</i></label>
                        <br/>
                        <br/>
                        <div class="row">
                            <div class="col s6 m6 x6">
                                <label>Libros Solicitados</label>
                                <h6><b>15</b></h6>
                            </div>
                            <div class="col s6 m6 x6">
                                <label>Libros Reportados</label>
                                <h6><b>15</b></h6>
                            </div>   
                        </div>
                    </div>
                    <div className="contenedorDatosPerfil center row">
                    <br/>
                        <div class="container">
                            <div class="col s12 m12 x12 cardInformacion">
                                
                                <div class="row">
                                    {/* <div class="col s12 m12 x12 cardInformacion">
                                        <div className="col s3 ">
                                            <span class="material-icons">
                                            settings_applications
                                            </span>
                                        </div>
                                    </div> */}
                                    <div class="input-group">
                                        <input  className="form-control" type="text" name="text-1542372332072" id="text-1542372332072" required="required" placeholder="Tu nombre" />
                                        <label for="text-1542372332072">Tu Nombre</label>
                                    </div>
                                    <div class="input-group">
                                        <input  className="form-control" type="email" name="text-1542372332072" id="text-1542372332072" required="required" placeholder="Tu nombre" />
                                        <label for="text-1542372332072">Tu Correo</label>
                                    </div>
                                    {/* <div class="col s12 m12 x12 cardInformacion">
                                        <div className="col s3 iconoSeccionPerfil">
                                            <span class="material-icons">
                                            settings_applications
                                            </span>
                                        </div>
                                        <div className="col s8 parrafoPerfil">
                                            <label>Tus Preferencias</label>
                                        </div>
                                        <div className="col s1 parrafoPerfil">
                                            <label>&#62;</label>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
     );
}
 
export default perfil;