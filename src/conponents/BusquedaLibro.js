import React, {Fragment, useState} from 'react';
import Libros from './Libros';
import ListadoCategorias from './ListadoCategorias';
import ListadoAutores from './ListadoAutores'
import Sheet from 'react-modal-sheet';
import './BusquedaLibro.css'
//redux
import {useSelector, useDispatch } from 'react-redux';

//importamos la funcion del action que devuelve los libros

import { incrementarPaginaActual } from '../actions/LibroActions'


//importamos la funcion del action que dev
const BusquedaLibro = () => {

    const dispatch = useDispatch();

    const paginaActual = useSelector(state => state.libros.paginaactual);

    const [isOpen, setOpen] = useState(false);

    const cargarMasLibros = () => {
        //agregamos el nuevo valor de pagina actual al state
        const value = paginaActual+1;
        dispatch( incrementarPaginaActual(value));
    } 
    return ( 
        <Fragment>
            <div className="contenedorBusqueda">
                <div className="col s10 m10 position-right">
                    <div className="search-bar">
                            <input  type="text" placeholder="Nombre o autor del libro" />
                    </div>
                </div>
                <div className="col s2 m2 center search-bar divbotonbusqueda" onClick={() => setOpen(true)}>
                    <span className="material-icons">
                        filter_list
                    </span>
                </div>
            </div>
            <Libros />
            <div className="center">
                <a className="btn-floating btn-large waves-effect waves-light btn-small" title="Cargar mas" onClick={() => {cargarMasLibros()}}><i className="material-icons">add</i></a>
            </div>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>{
                        <div className="container">
                            <h6 className="center">Filtros</h6>
                            <br/>
                            <ListadoCategorias />
                            <ListadoAutores />
                            <div class="row">
                                <div className="col s6 m6 x6 center">
                                    <a class="waves-effect waves-light btn btn-large">Aplicar</a>
                                </div>
                                <div className="col s6 m6 x6 center">
                                    <a class="waves-effect  btn btn-large">Borrar</a>
                                </div>
                            </div>
                        </div>
                    }</Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
            <br/>
            <br/>
            <br/>
            <br/>
        </Fragment>
     );
}
 
export default BusquedaLibro;