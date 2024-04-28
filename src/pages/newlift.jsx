import './newlift.css'

function newlift() {
    return (
        <div>
            <div className='landingBg'>
                <br />
                <h2 className='managerTitle'>Nuevo Ejercicio</h2>
                <br />
                <div className='liftList'>
                    <div className='form'>
                        <input className='form-control' type="text" placeholder='Nombre' />
                        <input className='form-control' type="text" placeholder='Tipo' />
                        <input className='form-control' type="number" placeholder='PR' />
                    </div>
                    <button className='formBtn'>Agregar</button>
                </div>
                <br />
            </div>
        </div>
    )
}

export default newlift
