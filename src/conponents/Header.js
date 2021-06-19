import React from 'react';
import './header.css'
const Header = () => {

    return ( 
        <header>
            <div className="header header-info-user">
                <div className="col s12 m12 center">
                    <img src="https://www.logoground.com/uploads6/dv6y2020501992020-01-273708711owl%20reading%20book%20logo.jpg" alt="" class="circle headerImagen" />
                </div>
                <div className="col s7 m7">
                        <h6>Buen dia, </h6>
                        <h5><strong>Beniro</strong></h5>
                </div>
                
            </div>
            
        </header>
        
     );
}
 
export default Header;