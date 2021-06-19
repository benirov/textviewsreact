//importamos los actions que usaremos para los autores

import {
    DESCARGAR_AUTORES,
    DESCARGAR_AUTORES_EXITO,
    DESCARGAR_AUTORES_ERROR,
} from '../types'

//definimos state de Autores

const initialState = {
    autores : [],
    errorautores : false,
    cargandoautores: false,
    autorseleccionado: null
}

export default function (state= initialState, action){

    switch (action.type) {
        
        case DESCARGAR_AUTORES:
            return{
                ...state,
                cargandoautores: action.payload,
            }


        case DESCARGAR_AUTORES_EXITO:
            return{
                ...state,
                errorautores: false,
                cargandoautores: false,
                autores: action.payload,
            }

        case DESCARGAR_AUTORES_ERROR:
            return{
                ...state,
                errorautores: action.payload,
                cargandoautores: false,
                autores: [],
            }
    
        default:
            return state;
    }


}