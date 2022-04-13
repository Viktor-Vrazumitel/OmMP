import Footer from '../Footer/Footer';
import MyNavbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import style from './Page.module.css';
import drum from '../../img/music/drum.webp'
import dj from '../../img/music/dj.webp'
import plastinka from '../../img/music/plastinka.webp'
import synt from '../../img/music/synt.webp'
import Popular from '../Popular/Popular';
import { Car } from '../Corousel/Carousel';



function MainPage() {



const rooms = useSelector(state=> state.rooms)
const fiveRoom = rooms.slice(-5).reverse()



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
