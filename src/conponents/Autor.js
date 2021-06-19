import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

//importamos el actions de libros 
import { guardarAutoresSeleccionadas } from '../actions/LibroActions'

const Autor = ({autor, autoresseleccionada}) => {

    var AutoresSeleccionadas = autoresseleccionada;
    const filtroautores = useSelector(state => state.libros.filtroautores);
    const { name, id, sort } = autor;
    const [checked, guardarAutorActiva] = useState(filtroautores.filter(autor => autor.id === id).length > 0 ? true: false);

    const distpach = useDispatch();
    const autorLibros = (id,  name, e)  => {
        
        let checktrueorfalse = true;
        if(!e.target.checked){
            let removerAutores = AutoresSeleccionadas.filter(autor => autor.id !== id);
            AutoresSeleccionadas = removerAutores;
            checktrueorfalse = false;
        }else{
            AutoresSeleccionadas.push({name: name, id: id});
        }
        distpach( guardarAutoresSeleccionadas(AutoresSeleccionadas) );
        guardarAutorActiva(checktrueorfalse);
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
                        <input type="checkbox" className="filled-in" onClick={(e) => autorLibros(id, name, e)} checked={checked}/>
                        <span className="right"></span>
                    </label>
                </p>
            </div>
        </div>
     );
}
 
export default Autor;