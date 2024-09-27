import React from 'react';
import '../style-sheets/Boton.css'

function Boton({texto, isClickButton, clickManagement}) {
  return(
    <button
      className={isClickButton ? 'click-button' : 'reset-button'}
      onClick={clickManagement}>
      {texto}
    </button>
  );
}

export default Boton;