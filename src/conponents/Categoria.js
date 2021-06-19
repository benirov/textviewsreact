import React, { useState } from 'react';
// import {cargarCategoriaActiva} from '../helpers'
//importamos redux
import {useDispatch, useSelector} from 'react-redux';

//importamos el actions de libros 
import {guardarCategoriasSeleccionadas } from '../actions/LibroActions'

const Categoria = ({categoria, categoriasseleccionada}) => {
    var categoriasSeleccionadas = categoriasseleccionada;
    const filtrocategorias = useSelector(state => state.libros.filtrocategorias);
    const { name, id } = categoria;
    const [checked, guardarCategoriaActiva] = useState(filtrocategorias.filter(categoria => categoria.id === id).length > 0 ? true: false);

    const distpach = useDispatch();


    // guardarCategoriaActiva(categoriasSeleccionadas.filter(categoria => categoria.id === id).length > 0 ? true: false);
    const categoriaLibros = ( name, id, e)  => {


        let checktrueorfalse = true;
        if(!e.target.checked){
            let removerCategorias = categoriasSeleccionadas.filter(categoria => categoria.id !== id);
            categoriasSeleccionadas = removerCategorias;
            checktrueorfalse = false;
        }else{
            categoriasSeleccionadas.push({name: name, id: id});
        }
        // console.log(categoriasSeleccionadas);
        distpach( guardarCategoriasSeleccionadas(categoriasSeleccionadas) )
        guardarCategoriaActiva(checktrueorfalse);
    }

    return ( 
        <div className="row">
            <div className="col s6 m6 x6">
                <p>
                    {name}
                </p>
            </div>
            <div className="col s6 m6 x6 right">
                <p>
                    <label>
                        <input type="checkbox" className="filled-in"  onClick={(e) => categoriaLibros( name, id, e)} checked={checked}/>
                        <span className="right"></span>
                    </label>
                </p>
            </div>
        </div>
     );
}
 
export default Categoria;