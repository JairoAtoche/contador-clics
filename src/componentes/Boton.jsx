import React from 'react';
import  '../css/boton.css';

function boton({ nombre, estadoClick }) {
  return(
      <button className={`boton boton--${nombre}`} onClick={estadoClick} >
          {nombre}
      </button>
  );
}

export default boton;