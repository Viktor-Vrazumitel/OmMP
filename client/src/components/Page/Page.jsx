
import Room from '../Room/Room';
import style from './Page.module.css'



function MainPage() {
  return ( 
    <>
    <div className={style.back}>

      <div className={style.info}>
        INFO
      </div>


      <button type="button" className={`btn btn-lg btn-success ${style.btn}`}>Войти</button>


      <div className={style.rooms}>
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>


    </div>
    </>
   );
}

export default MainPage;
