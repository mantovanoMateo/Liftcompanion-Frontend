
import bg from '../assets/bgAppMob.png'
import './excersiceView.css'

function excersiceView() {
    return (
        <div>
            <div className='landingBg'>
                <br />
                <h2 className='percentageTitle'>Ejercicio</h2>
                <br />
                <div className='liftList'>
                    <p className='actionable'>Editar</p>
                        <div className='percentageList'><p>80%</p><p>90 Kg</p></div>
                        <div className='percentageList'><p>85%</p><p>95 Kg</p></div>
                        <div className='percentageList'><p>90%</p><p>100 Kg</p></div>
                        <div className='percentageList'><p>95%</p><p>105 Kg</p></div>
                        <div className='percentageList'><p>100%</p><p>112 Kg</p></div>
                        
                    <p className='actionable'>Estadisticas</p>


                    {/* Falta la tabla */}
                </div>
                <br />
            </div>
        </div>
    )
}

export default excersiceView
