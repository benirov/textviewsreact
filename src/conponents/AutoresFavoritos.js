import React,{ useEffect } from 'react';
import './AutoresFavoritos.css'
const AutoresFavoritos = () => {

    return ( 

            <div className="card-content pb-4">
                <div className="recent-message d-flex px-4 py-3">
                    <div className="avatar avatar-lg">
                    <img src="https://d25nlln9isiu5y.cloudfront.net/wp-content/uploads/2020/02/12072921/Stephen-King.jpg"/>
                    </div>
                    <div className="name ms-4">
                        <h5 className="mb-1">Stephen King</h5>
                        <h6 className="text-muted mb-0">444 solicitudes</h6>
                    </div>
                </div>
                <div className="recent-message d-flex px-4 py-3">
                    <div className="avatar avatar-lg">
                        <img src="https://www.telam.com.ar/advf/imagenes/2020/06/5ef2843120fa2_1004x565.jpg"/>
                    </div>
                    <div className="name ms-4">
                        <h5 className="mb-1">Charles Dickens</h5>
                        <h6 className="text-muted mb-0">540 solicitudes</h6>
                    </div>
                </div>
                <div className="recent-message d-flex px-4 py-3">
                    <div className="avatar avatar-lg">
                        <img src="https://www.xlsemanal.com/wp-content/uploads/sites/3/2016/11/zafon-xlsemanal-entrevista.jpg"/>
                    </div>
                    <div className="name ms-4">
                        <h5 className="mb-1">Ruiz Zafón, Carlos</h5>
                        <h6 className="text-muted mb-0">125 solicitudes</h6>
                    </div>
                </div>
                <div className="px-4">
                    <button className='btn btn-block btn-xl btn-light-primary font-bold mt-3'>Listado de Autores</button>
                </div>
            </div>
     );
}
 
export default AutoresFavoritos;