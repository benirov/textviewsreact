import React,{ useEffect, useState } from 'react';
import Sheet from 'react-modal-sheet';
import Categoria from './Categoria';

//redux
import {useSelector, useDispatch} from 'react-redux';

//importamos el action de categorias que usaremos

import { obtenerCategorias } from '../actions/CategoriaAction'



const ListadoCategorias = () => {

    const [isOpen, setOpen] = useState(false);

    const [busqueda, guardaBusqueda] = useState('');

    const [categoriasseleccionada, guardaCategoriasSelecionada] = useState([]);

    const distpach = useDispatch();
    const categoriasAction = useSelector(state => state.categorias.categorias);

    useEffect(() => {

        if(categoriasAction.length > 0) return;

        const obtenerCategoriasApi = () => distpach( obtenerCategorias() )
        obtenerCategoriasApi();
    }, []);


    const filtrocategorias = useSelector(state => state.libros.filtrocategorias);

    if(busqueda === ''){
        var categorias = categoriasAction;
    }else{
        var categorias = categoriasAction.filter(categorias => {
            return categorias.name.toLowerCase().includes(busqueda.busqueda.toLowerCase());
        })
    }

    const guardarStateCategorias = (categoria) => {
        console.log(categoria);
        guardaCategoriasSelecionada(categoria)
    }
    

    if(!categorias) return null;
    const buscarCategoria = e => {
        guardaBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // console.log("categoriasseleccionada", categoriasseleccionada);
    

    return ( 
        <div>
            <div className="col s12">
                <div className="row filtroCard">
                    <div className="col s12 m12 x12 contenedorCard">
                        <div className="col s6 m6 x6">
                            <p><strong>Generos</strong></p>
                        </div>
                        <div className="col s6 m6 x6" onClick={() => setOpen(true)}>
                            <p className="right  btn" >+</p>
                        </div>
                    </div>
                    <div className="col s12 m12 x12 ">
                       {filtrocategorias ? (
                        filtrocategorias.map(categoria => (
                            
                                <span 
                                    class="badgep badgep-primary badgep-closable"
                                    key={categoria.id}
                                >
                                    {categoria.name}
                                    <span className="material-icons close">
                                        close
                                    </span>
                                </span>
                            ))
                       ) : null }
                    </div>
                </div>
            </div>
            <br/>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>{
                        
                        <div className="container">
                
                            <input 
                                type="text"
                                name="busqueda"
                                placeholder="Filtrar generos"
                                onChange={buscarCategoria}
                            />
                            <ul className="col s12 m12 x12">
                                    {categorias.map(categoria => (
                                        <Categoria 
                                            key={categoria.id}
                                            categoria={categoria}
                                            guardarStateCategorias={guardarStateCategorias}
                                            categoriasseleccionada={categoriasseleccionada}
                                        />
                                    ))}
                            </ul>

                        </div>
                    }</Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </div>
     );
}
 
export default ListadoCategorias;