import React from 'react'
import './login.css'

import bg from '../assets/bgLogInMob.png'

function login() {
    return (
        <div className='landingBg' style={{ backgroundImage: `url(${bg})` }}>
            <div className='logInContainer'>

                <div className='form-group'>
                    <h2 className='welcomeTitle'>Bienvenido!</h2>
                    <input className='form-control' type="email" placeholder='Email' />
                    {/*<input className='form-control' type="text" placeholder='Username' />*/}
                    {/*<input className='form-control' type="password" placeholder='Password' />*/}
                    <input className='form-control' type="password" placeholder='Password' />
                    <button className='logInbtn'>Iniciar Sesion</button>
                </div>
            </div>
        </div>

    )
}

export default login
