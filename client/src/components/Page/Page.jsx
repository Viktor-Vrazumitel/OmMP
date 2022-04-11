
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Room from '../Room/Room';
import RoomList from '../RoomList/RoomList';
import style from './Page.module.css'



function MainPage() {

const navigate = useNavigate()
const user = useSelector(state=> state.user)
function singInHandler(){
navigate('/signin')
}

  return ( 
    <>
    <div className={style.back}>

      <div className={style.info}>
        INFO
      </div>

{user ? <></> : <button type="button" className={`btn btn-lg btn-success ${style.btn}`} onClick={singInHandler}>Войти</button> }
      


      <div className={style.rooms}>
        <RoomList/>
        
      </div>


    </div>
    </>
   );
}

export default MainPage;
