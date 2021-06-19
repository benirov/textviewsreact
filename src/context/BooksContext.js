import React, {createContext, useState, useEffect} from 'react';
import { getbooks } from '../api'

export const BooksContext = createContext();

const BookProvider = (props) => {
    
    const [books, guardarBooks] = useState([]);

    const [paginaactual, guardarpaginaActual] = useState(1);
    const [totalpaginas, guardarTotalpaginas] = useState(1);
    

    // const [searhc, searchBook] = useState({
    //     author: '',
    //     category: ''
    // });

    // const {author, category} = busqueda;

    //buscamos los libros en la api con useEffect
    useEffect(() => {
        const obtenerRecetas = async () => {
            var resultados =  await getbooks(paginaactual);
            console.log('resultados', resultados);
            guardarBooks(resultados.book);
        }
        obtenerRecetas();

    }, []);

    return(
        <BooksContext.Provider
        value={{
            books,
            guardarpaginaActual
        }}>
            {props.children}
        </BooksContext.Provider>
    )
}
 
export default BookProvider;