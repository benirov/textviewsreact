import React,{ useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom'
import {URLHOSTING} from '../config.js'
import './LibrosSolicitados.css'
import Loader from './Loader'

//redux
import { useSelector, useDispatch} from 'react-redux';

//importamos las funciones del action
import {obtenerLibrosSolicitados, obtenerDetalleLibroAPI } from '../actions/LibroActions'

const LibrosSolicitados = () => {

    const dispatch = useDispatch();
    const history = useHistory(); //habilitar history para redirecicon

    useEffect(() => {

        //obtener los libros solicitados desde la API
        const obtenerlibrosSolicitadosAPI = () => dispatch(obtenerLibrosSolicitados(1));
        obtenerlibrosSolicitadosAPI();
    }, []);

    const BotonObtenerDetalleLibro = (id) => {

        //ponemos el libro en el state
        dispatch( obtenerDetalleLibroAPI(id));

        //cambiamos a la ruta del detalle
        history.push(`/libros/detalle/${id}`)
    }

    const { librossolicitados, cargandolibrossolicitados} = useSelector(state => state.libros);

    if(cargandolibrossolicitados) return <Loader />

    if(Object.keys(librossolicitados).length === 0) return null;

    return (
            <div className="row">
                {librossolicitados.map(librosolicitado  => (
                    (
                        <Fragment
                            key={librosolicitado._id}
                         >
                         
                            <div 
                                className="col-6 col-lg-3 col-md-6" 
                                onClick={() => BotonObtenerDetalleLibro(librosolicitado.idLibro)}
                            >
                                <div className="card">
                                    <div className="card-body px-3 py-4-5">
                                        <div className="row">
                                            <div className="col-md-4">
                                                
                                                    <img loading="lazy" src={ URLHOSTING+ librosolicitado.path + "/cover.jpg"} className="img-thumbnail rounded float-left"/>
                                                
                                            </div>
                                            <div className="col-md-8">
                                                <h6 className="text-muted font-semibold">{librosolicitado.nombreAuthor}</h6>
                                                <h6 className="font-extrabold mb-0">{librosolicitado.nombreLibro}</h6>
                                            </div>
                                            <footer>
                                                <div class="footer clearfix mb-0 text-muted">
                                                    <div class="float-end">
                                                        {librosolicitado.solicitudes}&nbsp;
                                                        <i class="text-danger iconly-boldHeart"></i>
                                                    </div>
                                                </div>
                                            </footer>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Fragment>
                    )
                                            
                ))}
            </div> 
     );
}
 
export default LibrosSolicitados;