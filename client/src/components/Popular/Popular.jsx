import { useNavigate } from 'react-router-dom';
import style from './Popular.module.css'



function Popular({title,id}) {

const navigate = useNavigate()

function inRommHandler(id){
  navigate(`/room/${id}`)
}

  return ( 
    <div className={style.divPop} onClick={()=>inRommHandler(id)}>
 <span className={style.fontPop}>{title}</span>
    </div>
   );
}

export default Popular;
