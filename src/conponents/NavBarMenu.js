import React, {useState} from 'react';
import {  useHistory   } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'
const NavBarMenu = () => {

    const sidebarClick = () => {
        document.getElementById('sidebar').classList.toggle('active');
    }
    let history = useHistory();
    const [active, setActive] = useState(1);
    return ( 
        <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <a href="index.html"><img src={logo} alt="Logo" srcSet="" /></a>
                        </div>
                        <div className="toggler">
                            <a href="#" className="sidebar-hide d-xl-none d-block" onClick= {() => sidebarClick()}><i className="bi bi-x bi-middle"></i></a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">Menu</li>

                        <li className={`sidebar-item ${active === 1 ? 'active': ''}`} onClick = {() => setActive(1)}>
                            <a href="#" className='sidebar-link'>
                                <i className="bi bi-grid-fill"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className={`sidebar-item ${active === 2 ? 'active': ''}`} onClick = {() => setActive(2)}>
                            <a href="#" className='sidebar-link'>
                                <i className="bi bi-search"></i>
                                <span>Busqueda</span>
                            </a>
                        </li>
                        <li className={`sidebar-item ${active === 3 ? 'active': ''}`} onClick = {() => setActive(3)}>
                            <a href="#" className='sidebar-link'>
                                <i className="bi bi-person-badge"></i>
                                <span>Autores</span>
                            </a>
                        </li>
                        <li className={`sidebar-item ${active === 4 ? 'active': ''}`} onClick = {() => setActive(4)}>
                            <a href="#" className='sidebar-link'>
                                <i className="bi bi-list"></i>
                                <span>Categorias</span>
                            </a>
                        </li>
                        <li className={`sidebar-item ${active === 5 ? 'active': ''}`} onClick = {() => setActive(5)}>
                            <a href="#" className='sidebar-link'>
                                <i className="bi bi-bookmark-heart-fill"></i>
                                <span>Tus Favoritos</span>
                            </a>
                        </li>
                        
                        <li className={`sidebar-item ${active === 6 ? 'active': ''}`} onClick = {() => setActive(6)}>
                            <a href="#" className='sidebar-link'>
                                <i className="bi bi-gear"></i>
                                <span>Tu Perfil</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
            </div>
        </div>
     );
}
 
export default NavBarMenu;