//importamos los types de categorias

import {
    DESCARGAR_CATEGORIAS,
    DESCARGAR_CATEGORIAS_EXITO,
    DESCARGAR_CATEGORIAS_ERROR,
} from '../types';

import clienteAxios from '../config/axios';

export function obtenerCategorias() {
    return async (dispatch) => {
        dispatch( obtenerCategoriasAction() );

        try {
            const categorias = await clienteAxios.get('/category');
            //ponemos las categoriasm en el state
            dispatch(obtenerCategoriasExito(categorias.data));
        } catch (error) {
            //informamos que hubo un error
            dispatch(obtenerCategoriasError())
        }
        
    }
}

const obtenerCategoriasAction = () => ({
    type: DESCARGAR_CATEGORIAS,
    payload: true
})

const obtenerCategoriasExito = categorias => ({
    type: DESCARGAR_CATEGORIAS_EXITO,
    payload: categorias
})

const obtenerCategoriasError = () => ({
    type: DESCARGAR_CATEGORIAS_ERROR,
    payload: true
})