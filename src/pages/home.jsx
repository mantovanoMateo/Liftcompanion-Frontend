import React from 'react'
import bg from '../assets/bgAppMob.png'
import './home.css'

function home() {
    return (
        <div className='landingBg'>
            <button className='addLiftBtn'>Agregar</button>
            <div className='liftList'>
                <h2 className='listTitle'>Mi lista</h2>
                <br />
                <div className='lift'>Arranque</div>
                <div className='lift'>Envion</div>
                <div className='lift'>Sentadilla Atras</div>
                <div className='lift'>Sentadilla Adelante</div>
                <div className='lift'>Sentadilla Adelante</div>
                <div className='lift'>Sentadilla Adelante</div>
                <div className='lift'>Sentadilla Adelante</div>

                <p className='exMan'>excercise manager</p>
            </div>
            <br />
            <br />
        </div>
    )
}

export default home
