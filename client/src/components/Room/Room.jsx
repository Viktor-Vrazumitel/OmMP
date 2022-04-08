import style from './Room.module.css'


function Room() {
  return ( 
    <>
    <div className={`card ${style.card}`}>
      <div className="card-body">
        <h5 className="card-title">Название комнаты</h5>
        <h6 className="card-subtitle mb-2 text-muted">Теги</h6>
      </div>
    </div>
    </>
   );
}

export default Room;

