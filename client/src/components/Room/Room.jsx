import style from './Room.module.css'


function Room({title,id}) {
  return ( 
    <>
    <div className={`card ${style.card}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{id}</h6>
      </div>
    </div>
    </>
   );
}

export default Room;

