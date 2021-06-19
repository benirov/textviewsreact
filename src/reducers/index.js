//archivo para combinar todos los reducers
import { combineReducers } from 'redux';

import LibroReducer from './LibroReducer';
import CategoriaReducer from './CategoriaReducer';
import AutorReducers from './AutorReducers';

export default combineReducers({
    libros: LibroReducer,
    categorias: CategoriaReducer,
    autores: AutorReducers
})