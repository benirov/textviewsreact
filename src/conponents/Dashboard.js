import React from 'react';
import LibrosSolicitados from './LibrosSolicitados'
import AutoresFavoritos from './AutoresFavoritos'
const Dashboard = () => {

    const burgerMenu = () => {
        document.getElementById('sidebar').classList.toggle('active');
    }
    return ( 
        <div id="main">
            <header className="mb-3">
                <a href="#" className="burger-btn d-block d-xl-none" onClick = {() => burgerMenu()}>
                    <i className="bi bi-justify fs-3"></i>
                </a>
            </header>

            <div className="page-heading">
                <h3>Buenas Noches, Beniro</h3>
            </div>

            <div className="page-heading">
                <h4>Libros mas Solicitados</h4>
            </div>
            
            <div className="page-content">
                <section className="row">
                    <div className="col-12 col-lg-12">
                        <LibrosSolicitados />
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Autores Populares</h4>
                                    </div>
                                    <AutoresFavoritos />
                                </div>
                            </div>
                            <div className="col-12 col-xl-8 col-lg-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Agregados Recientemente</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-lg">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Comment</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="col-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar avatar-md">
                                                                    <img src="assets/images/faces/5.jpg" />
                                                                </div>
                                                                <p className="font-bold ms-3 mb-0">Si Cantik</p>
                                                            </div>
                                                        </td>
                                                        <td className="col-auto">
                                                            <p className=" mb-0">Congratulations on your graduation!</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar avatar-md">
                                                                    <img src="assets/images/faces/2.jpg" />
                                                                </div>
                                                                <p className="font-bold ms-3 mb-0">Si Ganteng</p>
                                                            </div>
                                                        </td>
                                                        <td className="col-auto">
                                                            <p className=" mb-0">Wow amazing design! Can you make another
                                                                tutorial for
                                                                this design?</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default Dashboard;