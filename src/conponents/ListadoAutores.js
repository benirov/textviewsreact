import React, { useEffect, useState} from 'react';
import Sheet from 'react-modal-sheet';
import Autor from './Autor'

//redux
import { useSelector, useDispatch } from 'react-redux';

import { obtenerAutores } from '../actions/AutorActions'

const ListadoAutores = () => {

    const [isOpen, setOpen] = useState(false);

    const [busqueda, guardaBusqueda] = useState('');

    const [autoresseleccionada, guardaAutoresSelecionados] = useState([]);

    const dispatch = useDispatch();

    const autoresAction = useSelector(state => state.autores.autores);

    //obtenemos los autores
    useEffect(() => {

        if(autoresAction.length > 0) return;
        const obtenerAutoresListado = () => dispatch( obtenerAutores() );
        obtenerAutoresListado();

    },[]);
    
    
    //obtenemos del state lo que necesitamos

    const filtroautores = useSelector(state => state.libros.filtroautores);
    

    if(busqueda === ''){
        var autores = autoresAction;
    }else{
        var autores = autoresAction.filter(categorias => {
            return categorias.name.toLowerCase().includes(busqueda.busqueda.toLowerCase());
        })
    }

    const guardarStateAutores = (autores) => {
        guardaAutoresSelecionados(autores)
    }

    if(!autores) return null;
    const buscarAutor = e => {
        guardaBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <div>
            <div className="col s12">
                <div className="row filtroCard">
                    <div className="col s12 m12 x12 contenedorCard">
                        <div className="col s6 m6 x6">
                            <p><strong>Autores</strong></p>
                        </div>
                        <div className="col s6 m6 x6" onClick={() => setOpen(true)}>
                            <p className="right  btn" >+</p>
                        </div>
                    </div>
                    <div className="col s12 m12 x12 ">
                    {filtroautores ? (
                        filtroautores.map(autor => (
                            
                                <span 
                                    class="badgep badgep-primary badgep-closable"
                                    key={autor.id}
                                >
                                    {autor.name}
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
            <br/>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>{
                        
                        <div className="container">
                            <input 
                                type="text"
                                name="busqueda"
                                placeholder="Filtrar Autor"
                                onChange={buscarAutor}
                            />
                            <ul className="col s10">
                                    {autores.map(autor => (
                                        <Autor 
                                            key={autor.id}
                                            autor={autor}
                                            autoresseleccionada={autoresseleccionada}
                                            guardarStateAutores={guardarStateAutores}
                                            guardaAutoresSelecionados={guardaAutoresSelecionados}
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
 
export default ListadoAutores;