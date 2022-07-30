import React from 'react';
import '../css/contador.css';

function Contador({ numero }) {
    return(
        <div className='contador'>
            {numero}
        </div>
    );
}

export default Contador;