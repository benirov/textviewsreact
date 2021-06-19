//importamos los types de categorias

import {
    DESCARGAR_CATEGORIAS,
    DESCARGAR_CATEGORIAS_EXITO,
    DESCARGAR_CATEGORIAS_ERROR,
} from '../types';

//definimos el state de categorias

const initialState = {
    categorias : [],
    errorcategoria: false,
    cargandocategorias: false,
    categoriaseleccionada: null,
}

export default function(state = initialState, action){

    switch (action.type) {
        case DESCARGAR_CATEGORIAS:
            return{
                ...state,
                cargandocategorias: action.payload,
                categoriaseleccionada: false,
            }
        break;

        case DESCARGAR_CATEGORIAS_EXITO:
            return{
                ...state,
                categorias: action.payload,
                cargandocategorias: false,
                errorcategoria: false,
                categoriaseleccionada: false,
            }
        break;

        case DESCARGAR_CATEGORIAS_ERROR:
            return{
                ...state,
                categorias: [],
                cargandocategorias: false,
                errorcategoria: true,
                categoriaseleccionada: false,
            }
        break;
    
        default:
            return state
    }
}