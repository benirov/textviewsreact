import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contenedor from './conponents/Contenedor';
import DetalleLibro from './conponents/DetalleLibro';
import NavBarMenu from './conponents/NavBarMenu'
import Favoritos from './conponents/Favoritos'
import BusquedaLibro from './conponents/BusquedaLibro';
import Perfil from './conponents/Perfil';
import Registro from './conponents/Registro';
import Login from './conponents/Login';
import store from './store'
//redux

import { Provider } from 'react-redux';

function App() {  
  return (
    <Router>
      <div id="app">
        <div className="">
          <Provider store={store}>
              <Switch>
                    <Route exact path="/" component={Contenedor} /> 
                    <Route exact path="/libros/detalle/:id" component={DetalleLibro} />
                    <Route exact path="/busqueda" component={BusquedaLibro} />
                    <Route exact path="/favoritos" component={Favoritos} />
                    <Route exact path="/perfil" component={Perfil} />
                </Switch>
                <NavBarMenu />
                <Route exact path="/registro" component={Registro} />
                <Route exact path="/login" component={Login} />
          </Provider>
          </div>
      </div>
    </Router>
  );
}

export default App;
