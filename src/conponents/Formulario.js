import React, {useState} from 'react';
import Error from './Error'

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        category: '',
        author: ''
    });
    
    const [error, guardarError] = useState(false);
    
    const {category, author} = busqueda;
    
    const handleCategoryAuthor = e => {
    
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    
    };
    
    const findBook = e => {
    
        e.preventDefault();
        // console.log("casxc");
        //validamos si categoria o  autor existe
        if(category.trim() === '' || author.trim() === ''){
            console.log("casxc");
            guardarError(true);
            return;
        }
        guardarError(false);
        //se procede a buscar el libro
    
    
    };

    return ( 
            <form 
                onSubmit={findBook}
            >
                <div className="row">
                    
                </div>
                {error ? <Error messaje="Seleccione al menos una categoría o un autor" /> : null}
            </form>
     );
}
 
export default Formulario;