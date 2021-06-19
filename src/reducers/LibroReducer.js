//importamos los types que seran usados solo para las operaciones de libros

import {

    DESCARGAR_LIBROS,
    DESCARGAR_LIBROS_EXITO,
    DESCARGAR_LIBROS_ERROR,
    DESCARGAR_LIBROS_CATEGORIAS,
    DESCARGAR_LIBROS_CATEGORIAS_EXITO,
    DESCARGAR_LIBROS_CATEGORIAS_ERROR,
    DESCARGAR_LIBROS_AUTOR,
    DESCARGAR_LIBROS_AUTOR_EXITO,
    DESCARGAR_LIBROS_AUTOR_ERROR,
    OBTENER_DETALLE_LIBRO,
    OBTENER_DETALLE_LIBROAPI,
    OBTENER_DETALLE_LIBRO_ERROR,
    INCREMENTAR_PAGINA_ACTUAL,
    DECREMENTAR_PAGINA_ACTUAL,
    DESCARGAR_LIBROS_SOLICITADOS,
    DESCARGAR_LIBROS_SOLICITADOS_EXITO,
    DESCARGAR_LIBROS_SOLICITADOS_ERROR,
    GUARDAR_CATEGORIAS_SELECCIONADAS,
    GUARDAR_AUTORES_SELECCIONADOS,
    GUARDAR_BUSQUEDA_SELECCIONADA,
} from '../types';

//definimos el state de los libros

const initialState = {
    libros: [],
    error: false,
    cargandolibros: false,
    detallelibro: null,
    paginaactual: 1,
    totalpaginas: null,
    librossolicitados: [],
    filtrocategorias: [],
    filtroautores: [],
    filtrobusqueda: '',
    errorsolicitados: false,
    cargandolibrossolicitados: false,
}

export default function (state = initialState, action){
    switch(action.type){
        case DESCARGAR_LIBROS:
            return{
                ...state,
                cargandolibros: action.payload,
            }

        case DESCARGAR_LIBROS_EXITO:
            return{
                ...state,
                libros: state.libros.concat(action.payload.book),
                totalpaginas: action.payload.pages,
                cargandolibros: false,
                error: false,
        }

        case DESCARGAR_LIBROS_ERROR:
            return{
                ...state,
                libros: [],
                cargandolibros: false,
                error: true,
        }

        case DESCARGAR_LIBROS_CATEGORIAS:
        case DESCARGAR_LIBROS_AUTOR:
            return{
                ...state,
                libros: [],
                cargandolibros: action.payload,
        }

        case DESCARGAR_LIBROS_CATEGORIAS_EXITO:
        case DESCARGAR_LIBROS_AUTOR_EXITO:
            return{
                ...state,
                libros: action.payload,
                cargandolibros: false,
                error: false,
        }

        case DESCARGAR_LIBROS_CATEGORIAS_ERROR:
        case DESCARGAR_LIBROS_AUTOR_ERROR:
            return{
                ...state,
                libros: [],
                cargandolibros: false,
                error: action.payload,
        }

        case OBTENER_DETALLE_LIBRO:
            return{
                ...state,
                detallelibro : state.libros.filter(libro => libro._id === action.payload)[0]
                
        }

        case OBTENER_DETALLE_LIBROAPI:
            return{
                ...state,
                detallelibro : action.payload
                
        }

        case OBTENER_DETALLE_LIBRO_ERROR:
            return{
                ...state,
                detallelibro : null
                
        }

        case INCREMENTAR_PAGINA_ACTUAL:
            return{
                ...state,
                paginaactual : action.payload
        }

        case DECREMENTAR_PAGINA_ACTUAL:
            return{
                ...state,
                paginaactual : action.payload
        }

        case DESCARGAR_LIBROS_SOLICITADOS:
            return{
                ...state,
                cargandolibrossolicitados: action.payload,
            }

        case DESCARGAR_LIBROS_SOLICITADOS_EXITO:
            return{
                ...state,
                librossolicitados: state.libros.concat(action.payload.requested),
                // totalpaginas: action.payload.pages,
                cargandolibrossolicitados: false,
                errorsolicitados: false,
        }

        case DESCARGAR_LIBROS_SOLICITADOS_ERROR:
            return{
                ...state,
                librossolicitados: [],
                cargandolibrossolicitados: false,
                errorsolicitados: true,
        }

        case GUARDAR_CATEGORIAS_SELECCIONADAS:
            return{
                ...state,
                filtrocategorias: action.payload,
        }

        case GUARDAR_AUTORES_SELECCIONADOS:
            return{
                ...state,
                filtroautores: action.payload,
        }

        case GUARDAR_BUSQUEDA_SELECCIONADA:
            return{
                ...state,
                filtrobusqueda: action.payload,
        }

        default:
            return state;
    }
}