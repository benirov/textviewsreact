import React from 'react';
//redux
import {useSelector, useDispatch } from 'react-redux';

const Favoritos = () => {

    const paginaActual = useSelector(state => state.libros.paginaactual);
    return ( <h1>Favoritos</h1> );
}
 
export default Favoritos;