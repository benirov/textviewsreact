import React from 'react';

const Error = ({messaje}) => (
    <div className="materialert warning">
		    <div className="material-icons">info_outline</div>&nbsp;
		    {messaje}
    </div>
);
 
export default Error;