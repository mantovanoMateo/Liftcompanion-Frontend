import './passwordChanger.css'
import bg from '../assets/bgAppMob.png'

function passwordChanger() {
    return (
        <div>
                <h2 className='settingsTitle'>Nombre</h2>
                <br />
                <div className='liftList'>
                    <br />
                    <h3>Cambio de Clave</h3>
                    <br />
                    <input className='form-control' type="email" placeholder='Nueva Clave' />
                    <input className='form-control' type="email" placeholder='Confirmar Clave' />
                    <br />
                    <button className='settingBtn'>Cambiar Clave</button>
                    <br />
                    <br />
                </div>
                <br />

        </div>
    )
}

export default passwordChanger
