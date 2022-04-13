import { useNavigate } from 'react-router-dom';
import style from './Room.module.css'


function Room({title,id}) {

const navigate = useNavigate()
function inRoomHandler(id){
  navigate(`/room/${id}`)
}

const rnd = (style)=>{
  const rand = Math.floor(Math.random()*6 + 1)
  if(rand === 1)
  return style.card
  if(rand === 2)
  return style.card1
  if(rand === 3)
  return style.card2
  if(rand === 4)
  return style.card3
  if(rand === 5)
  return style.card4
  if(rand === 6)
  return style.card5

}
console.log(rnd(style));

  return ( 
    <>
    <div className={`card ${rnd(style)}`}>
      <div className="card-body">
        <h5 className="card-title" onClick={()=>inRoomHandler(id)}>{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted"></h6>
      </div>
    </div>
    </>
   );
}

export default Room;

