
import './excersiceManager.css'

function excersiceManger() {
  return (
    <div>
      <div className='landingBg'>
        <br />
        <h2 className='managerTitle'>Administrador</h2>
        <br />
        <div className='liftList'>
          <h2 className='listTitle'>Mi lista</h2>
          <div className='lift liftEdit'><div>Arranque</div><div>X</div></div>
          <div className='lift liftEdit'><div>Envion</div><div>X</div></div>
          <div className='lift liftEdit'><div>Sentadilla adelante</div><div>X</div></div>
          <div className='lift liftEdit'><div>Sentadilla atras</div><div>X</div></div>
          <div className='lift liftEdit'><div>Press</div><div>X</div></div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default excersiceManger
