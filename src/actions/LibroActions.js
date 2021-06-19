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

import clienteAxios from '../config/axios';

export function obtenerLibros(paginaactual){
    return async (dispatch) => {
        dispatch(descargarProductos());

        try {
            const libros = await clienteAxios.get(`/books/${paginaactual}`);
            //disparamos el action que llena el state de productos
            dispatch(descargarProductosExito(libros.data));

        } catch (error) {
            dispatch(descargarProductosError());
        }
    }
}

export function obtenerLibrosPorCategoria(idCategorias){
            return async (dispatch) => {
                dispatch(descargarLibrosPorCategoria());

                try {
                    const librosCategorias = await clienteAxios.get(`/book/category/${[1,2,3]}`,{
                    });   
                    
                    dispatch(descargarLibrosPorCategoriaExito(librosCategorias.data.book));
                } catch (error) {
                    dispatch(descargarLibrosPorCategoriaError());
                }
                
            }
}

export function obtenerLibrosPorAutor(idAutor){
    return async (dispatch) => {
        dispatch(descargarLibrosPorAutor());

        try {
            const librosAutor = await clienteAxios.get(`/book/author/${idAutor}`);   
            
            dispatch(descargarLibrosPorAutorExito(librosAutor.data.book));
        } catch (error) {
            dispatch(descargarLibrosPorAutorError());
        }
        
    }
}

export function obtenerLibrosSolicitados(paginaactual){
    return async (dispatch) => {
        dispatch(descargarLibrosSolicitados());

        try {
            const libros = await clienteAxios.get(`/books/booksrequested/${paginaactual}`);
            //disparamos el action que llena el state de productos
            dispatch(descargarLibrosSolicitadosExito(libros.data));

        } catch (error) {
            dispatch(descargarLibrosSolicitadosError());
        }
    }
}

export function obtenerDetalleLibro(idLibro){
    return async (dispatch) => {
        dispatch(obtenerDetalleLibroAction(idLibro));
        
    }
}

export function obtenerDetalleLibroAPI(idLibro){
    return async (dispatch) => {
        
        try {
            const libros = await clienteAxios.get(`/book/detail/${idLibro}`);   
            
            dispatch(obtenerDetalleLibroActionExito(libros.data.book));
        } catch (error) {
            dispatch(obtenerDetalleLibroActionError());
        }
        
    }
}

//agregar al state de libros las categorias seleccionadas para filtrar
export function guardarCategoriasSeleccionadas(categorias){
    return (dispatch) => {
        dispatch(guardarStateCategoriasSeleccionadas(categorias));
    }
}

//agregar al state de libros las autores seleccionadas para filtrar
export function guardarAutoresSeleccionadas(autores){
    return (dispatch) => {
        dispatch(guardarStateAutoresSeleccionados(autores));
    }
}

//agregar al state de libros las autores seleccionadas para filtrar
export function guardarBusquedaSeleccionadas(busqueda){
    return (dispatch) => {
        dispatch(guardarStateBusqueda(busqueda));
    }
}

export function incrementarPaginaActual(valor){
    return  (dispatch) => {
        dispatch(incrementarValorPaginaActual(valor));
        
    }
}

export function decrementarPaginaActual(valor){
    return  (dispatch) => {
        dispatch(decrementarValorPaginaActual(valor));
        
    }
}

const descargarProductos = () => ({
        type: DESCARGAR_LIBROS,
        payload: true
});

const descargarProductosExito = libros => ({
    type: DESCARGAR_LIBROS_EXITO,
    payload: libros
});

const descargarProductosError = libros => ({
    type: DESCARGAR_LIBROS_ERROR,
    payload: true
});

//descargar libros por categorias
const descargarLibrosPorCategoria = () => ({
    type: DESCARGAR_LIBROS_CATEGORIAS,
    payload: true
})

//descargar libros por categorias exito
const descargarLibrosPorCategoriaExito = libros => ({
    type: DESCARGAR_LIBROS_CATEGORIAS_EXITO,
    payload: libros
})

//descargar libros por categorias error
const descargarLibrosPorCategoriaError = () => ({
    type: DESCARGAR_LIBROS_CATEGORIAS_ERROR,
    payload: true
})

//descargar libros por autor
const descargarLibrosPorAutor = () => ({
    type: DESCARGAR_LIBROS_AUTOR,
    payload: true
})

//descargar libros por autor exito
const descargarLibrosPorAutorExito = libros => ({
    type: DESCARGAR_LIBROS_AUTOR_EXITO,
    payload: libros
})

//descargar libros por autor error
const descargarLibrosPorAutorError = () => ({
    type: DESCARGAR_LIBROS_AUTOR_ERROR,
    payload: true
})

//obtener detalle de un libro
const obtenerDetalleLibroAction = idLibro => ({
    type: OBTENER_DETALLE_LIBRO,
    payload: idLibro
})

//obtener detalle de un libro desde API
const obtenerDetalleLibroActionExito = libro => ({
    type: OBTENER_DETALLE_LIBROAPI,
    payload: libro
})

//obtener detalle de un libro desde API Error
const obtenerDetalleLibroActionError = () => ({
    type: OBTENER_DETALLE_LIBRO_ERROR,
    payload: true
})


//incrementar el valor de la pagina actual
const incrementarValorPaginaActual = (valor) => ({
    type: INCREMENTAR_PAGINA_ACTUAL,
    payload: valor
});

//decrementar el valor de la pagina actual
const decrementarValorPaginaActual = (valor) => ({
    type: DECREMENTAR_PAGINA_ACTUAL,
    payload: valor
});

//descargar libros solictados
const descargarLibrosSolicitados = () => ({
    type: DESCARGAR_LIBROS_SOLICITADOS,
    payload: true
})

//descargar libros solictados exito
const descargarLibrosSolicitadosExito = libros => ({
    type: DESCARGAR_LIBROS_SOLICITADOS_EXITO,
    payload: libros
})

//descargar libros solictados error
const descargarLibrosSolicitadosError = () => ({
    type: DESCARGAR_LIBROS_SOLICITADOS_ERROR,
    payload: true
});

//poner en el state las categorias seleccionadas
const guardarStateCategoriasSeleccionadas = (categorias) => ({
    type: GUARDAR_CATEGORIAS_SELECCIONADAS,
    payload: categorias
});

//poner en el state los autores seleccionados
const guardarStateAutoresSeleccionados = (autores) => ({
    type: GUARDAR_AUTORES_SELECCIONADOS,
    payload: autores
});

//poner en el state el string de busqueda 
const guardarStateBusqueda = (busqueda) => ({
    type: GUARDAR_BUSQUEDA_SELECCIONADA,
    payload: busqueda
});