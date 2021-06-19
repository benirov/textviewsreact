import React from 'react';
import { useHistory } from 'react-router-dom'
import {URLHOSTING} from '../config.js'
import {obtenerVistaPreviaTexto} from '../helpers'

//redux
import { useDispatch } from 'react-redux';

import { obtenerDetalleLibro } from '../actions/LibroActions'

const Book = ({book}) => {

    const dispatch = useDispatch();
    const history = useHistory(); //habilitar history para redirecicon


    const BotonObtenerDetalleLibro = (id) => {

        //ponemos el libro en el state
        dispatch( obtenerDetalleLibro(id));

        //cambiamos a la ruta del detalle
        history.push(`/libros/detalle/${id}`)
    }
    return ( 
            <div className="col s12 m12" onClick={() => BotonObtenerDetalleLibro(book._id)}>
                
                    <div className="col s3 m3 imagenLibroDetalle">
                        <img loading="lazy" src={ URLHOSTING+ book.path + "/cover.jpg"} alt="" className="book-card-img" /> 
                    </div>
                    <div className="col s9 m9">
                        <p className="tituloLibro">{book.title}</p>
                        <label>{`${book.author_sort}`}</label><br/>
                        <label><i className="book-voters card-vote material-icons material-icons-color-red iconoFavorito">favorite</i>&nbsp;&nbsp;<strong>45</strong></label><br/>
                        <label>{obtenerVistaPreviaTexto(book.description)}</label><br/>
                    </div>
            </div>
     );
}
 
export default Book