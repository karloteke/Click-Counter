import React from 'react';
import'../style-sheets/Counter.css'

function Counters({clickNumber}){

    return(
        <div className='counter'>
            {clickNumber}
        </div>
    );
}

export default Counters;