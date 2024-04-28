import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

import img from '../assets/lift companion copia.png'
import bg from '../assets/gim.jpg'

function landing() {
    return (
        <div className='landingBg' style={{ backgroundImage: `url(${bg})` }}>
            
            <img src={img} alt="logo" />
            <br />
            <button>Iniciar Sesion</button>
            <p>No tienes una cuenta? Registrate</p>


        </div>
    )
}

export default landing
