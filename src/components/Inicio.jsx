import React from 'react'
import xbox from '../img/xbox.png'
import '../styles/inicio.css'

const Inicio= ()=>{
    return(
        <div className='card mx-auto F-Card'>
            <div className='card-body'>
                <div className='row center'>
                    <div className='col-6'>
                        <img src={xbox} alt="" className='col-6'/>
                    </div>
                    <div className='col-6 F-Card-Info'>
                        <h1> Xbox Clásica</h1>
                        <p>Soporte: CD-ROM 700MB (en algunos como ...</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Inicio