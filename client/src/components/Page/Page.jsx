

import Footer from '../Footer/Footer';
import MyNavbar from '../Navbar/Navbar';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Room from '../Room/Room';
import RoomList from '../RoomList/RoomList';
import style from './Page.module.css';
import drum from '../../img/music/drum.webp'
import dj from '../../img/music/dj.webp'
import plastinka from '../../img/music/plastinka.webp'
import synt from '../../img/music/synt.webp'
import Popular from '../Popular/Popular';
import { Car } from '../Corousel/Carousel';



function MainPage() {


const navigate = useNavigate()
const rooms = useSelector(state=> state.rooms)
const fiveRoom = rooms.slice(0,6)


// function singInHandler(){
// navigate('/signin')
// }


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
        {/* <RoomList/> */}
        <Car />
      </div>
      <div className={style.betaBlock}>
        <div >
          <div className={style.titleBox}>
             <span className={style.title}>Популярное</span> 
          </div>
            <div className={style.popBox}>
              {fiveRoom&&fiveRoom.map(el=> <Popular  key={el.id} title={el.title || el.name} id={el.id}/>)}
            </div>
        </div>

        <div>
          <div className={style.titleBox}>
            <span className={style.title}>Жанры</span> 
          </div>
            <div className={style.janrBox}>
              <img className={style.janr} src={drum} alt="" />
              <img className={style.janr} src={dj} alt="" />
              <img className={style.janr} src={plastinka} alt="" />
              <img className={style.janr} src={synt} alt="" />
            </div>
        </div>

      </div>




    
    <Footer />
    </div>
    </>
   );
}

export default MainPage;
