import axios from 'axios'
var infoAPI = {
    urlapi : 'https://apirestbooks.herokuapp.com/api/books/', //get books
    urlGetAllCategories : 'https://apirestbooks.herokuapp.com/api/category', // get all categories
    urlGetAllAuthors : 'https://apirestbooks.herokuapp.com/api/authors/', //get all authors
    urlGetBooksByAuthor : 'https://apirestbooks.herokuapp.com/api/book/author/', //get all books by authors
    urlGetBooksByCategorie : 'https://apirestbooks.herokuapp.com/api/book/bookscategories/', //get all books by categorie
    urlGetBooksByAuthorAndCategory : 'https://apirestbooks.herokuapp.com/api/book/findByAuthorAndCategort/', //get book by authors and categorie
    urlGetBooksByName : 'https://apirestbooks.herokuapp.com/api/book/booksByName/', //get book by authors or name
    
    
};

export async function getbooks(page) {

    //validamos que tipo de consulta se hara
    let ulrConsulta = infoAPI.urlapi+page;
    let consulta = await axios.get(ulrConsulta);
    return consulta.data;
}

//get all categories
export const getCategories = async () => {

    //validamos que tipo de consulta se hara
    let consulta = await axios.get(infoAPI.urlCategoryApi);
    return consulta;
}

//get all authors
export const getAuthors = async () => {

    //validamos que tipo de consulta se hara
    let consulta = await axios.get(infoAPI.urlGetAllAuthors);
    return consulta;
}