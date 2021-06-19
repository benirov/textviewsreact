import React, {useEffect} from 'react';
import Book from './Book'
import './Books.css'
import Loader from './Loader'
//redux
import {useSelector, useDispatch } from 'react-redux';

//importamos la funcion del action que devuelve los libros

import {obtenerLibros } from '../actions/LibroActions'

const Libros = () => {

    const dispatch = useDispatch();

    //obtenemos la pagina actual que se consultara para pasarsela a la funcion que retorna los libros
    const paginaActual = useSelector(state => state.libros.paginaactual);

    useEffect(() => {

        //obtenemos los libros de la api
        const obtenerLibrosApi = () => dispatch( obtenerLibros(paginaActual));
        obtenerLibrosApi();
    },[paginaActual]);

    const libros =  useSelector(state => state.libros.libros);
    const cargandolibros =  useSelector(state => state.libros.cargandolibros);

    if(cargandolibros) return <Loader />
    


    if(Object.keys(libros).length === 0) return null;

    return ( 

        <div className="container contenedorLibro">
            {libros.map(libro  => (
                <Book 
                    book={libro}
                    key={libro._id}
                />
            ))}
        </div>
     );
}
 
export default Libros;