import React from 'react';


const _404 = ({history}) => {
    
   

    return (
        <div className="_404">
            <h2 className='_404__title'>Aradığın sayfaya ulaşamadık :(</h2>
            <img src="https://www.pngarts.com/files/1/Baby-Crying-Transparent-Images.png" alt="" />

            <button  className='btn' onClick={() =>  history.push('/')}>Anasayfa</button>
        </div>
    )
}

export default _404;