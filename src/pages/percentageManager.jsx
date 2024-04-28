

import './percentageManager.css'

function percentageManager() {
    return (
        <div>
            <div className='landingBg' >
                <br />
                <h2 className='percentageTitle'>Ejercicio</h2>
                <br />
                <div className='liftList'>
                    <div className='form'>
                        <input className='form-control percentage' type="number" placeholder='%' />
                    </div>
                    <button className='formBtn perc'>Agregar</button>
                    <div className='percentageContainer'>
                        <div className='percentageList'><p>80%</p><p>X</p></div>
                        <div className='percentageList'><p>85%</p><p>X</p></div>
                        <div className='percentageList'><p>90%</p><p>X</p></div>
                        <div className='percentageList'><p>95%</p><p>X</p></div>
                        <div className='percentageList'><p>100%</p><p>X</p></div>
                    </div>


                    {/* Falta la tabla */}
                </div>
                <br />
            </div>
        </div>
    )
}

export default percentageManager
