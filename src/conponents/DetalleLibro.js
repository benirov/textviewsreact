import React from 'react';
import { useHistory } from "react-router-dom";
import './Books.css'
import {URLHOSTING} from '../config.js'
//redux
import { useSelector } from 'react-redux';

// import { obtenerDetalleLibro } from '../actions/LibroActions'

const DetalleLibro = () => {
    const history = useHistory();

    const detalleLibro = useSelector(state => state.libros.detallelibro);

    if(!detalleLibro) return null;
    console.log(detalleLibro);

    const { path, title, description, author_sort, pubdate } = detalleLibro;
    return ( 
            <div className="container">
                <div className="row">
                <br/>
                    <div className="col s12 m12">
                        <strong onClick={() => history.goBack()}>
                            <span className="material-icons">
                                arrow_back
                            </span>
                        </strong>
                    </div>
                    <div className="col s12 m12">
                        <div className="contenedorDetalleLibro center">
                            <img  src={ URLHOSTING+ path + "/cover.jpg"} alt={`${title}`} />
                            <p className="tituloDetalleLibro">{title}</p>
                            <p className="tituloAutor">{author_sort}</p>
                            <p className="descripcionLibro">{description}</p>
                        </div>
                    </div>
                </div>                
            </div>
        
     );
}
 
export default DetalleLibro;