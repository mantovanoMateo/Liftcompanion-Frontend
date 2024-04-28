import { useRef } from 'react'

import { FaBars, FaTimes, FaArrowLeft } from 'react-icons/fa';

import './navbar.css'

function navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <div className='header'>
            <button className='Fa nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
            <nav ref={navRef} className='navText'>
                    <button className='Fa nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes />
                    </button>
                    <p>Nombre</p>
                    <p>Ajustes</p>
                    <p>Cerrar Sesion</p>
     


            </nav>
            <button className='Fa nav-btn '>
                <FaArrowLeft />
            </button>


        </div>
    )
}

export default navbar
