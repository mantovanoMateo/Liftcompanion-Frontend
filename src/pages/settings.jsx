import bg from '../assets/bgAppMob.png'
import './settings.css'

function settings() {
    return (
        <div>
            <div className='landingBg'>
                <br />
                <h2 className='percentageTitle'>Nombre</h2>
                <br />
                <div className='liftList'>
                    <br />

                    <h3>Nombre</h3>
                    <h3>Apellido</h3>
                    <h3>Email</h3>
                    <br />
                    <button className='settingBtn'>Cambiar Clave</button>
                    <button className='settingBtn'>Eliminar Cuenta</button>
                    <br />
                    <br />
                </div>
                <br />
            </div>
        </div>
    )
}

export default settings
