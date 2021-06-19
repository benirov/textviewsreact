//importamos los actions que usaremos para los autores

import {
    DESCARGAR_AUTORES,
    DESCARGAR_AUTORES_EXITO,
    DESCARGAR_AUTORES_ERROR,
} from '../types'

import clienteAxios from '../config/axios';

export function obtenerAutores(){
    return async (dispatch) => {
        dispatch(obtenerAutoresAction());

        try {
            const autores = await  clienteAxios.get('/authors');
            console.log("autores", autores);
            dispatch(obtenerAutoresExito(autores.data.authors));
        } catch (error) {
            dispatch(obtenerAutoresError());
        }
    }
}

const obtenerAutoresAction = () => ({
    type: DESCARGAR_AUTORES,
    payload: true,
})

const obtenerAutoresExito = autores => ({
    type: DESCARGAR_AUTORES_EXITO,
    payload: autores,
})

const obtenerAutoresError = () => ({
    type: DESCARGAR_AUTORES_ERROR,
    payload: true,
})

