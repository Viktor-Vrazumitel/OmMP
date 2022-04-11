

import Footer from '../Footer/Footer';
import MyNavbar from '../Navbar/Navbar';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Room from '../Room/Room';
import RoomList from '../RoomList/RoomList';
import style from './Page.module.css';




function MainPage() {


const navigate = useNavigate()
const user = useSelector(state=> state.user)
function singInHandler(){
navigate('/signin')
}


  return ( 
    <>
    <div className={style.back}>
      <div >
        <MyNavbar />
      </div>
      <div className={style.titleBoxRooms}>
        <span className={style.title}>Комнаты</span> 
      </div>
      <div className={style.rooms}>
        <RoomList/>
      </div>
      <div className={style.betaBlock}>
        <div >
          <div className={style.titleBox}>
             <span className={style.title}>Популярное</span> 
          </div>
            <div className={style.popBox}>
              <div className={style.pop}>1</div>
              <div className={style.pop}>2</div>
              <div className={style.pop}>3</div>
              <div className={style.pop}>4</div>
              <div className={style.pop}>5</div>
            </div>
        </div>

        <div>
          <div className={style.titleBox}>
            <span className={style.title}>Жанры</span> 
          </div>
            <div className={style.janrBox}>
              <div className={style.janr}>1</div>
              <div className={style.janr}>2</div>
              <div className={style.janr}>3</div>
              <div className={style.janr}>4</div>
            </div>
        </div>

      </div>




    
    <Footer />
    </div>
    </>
   );
}

export default MainPage;
