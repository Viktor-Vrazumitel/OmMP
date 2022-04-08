import Signin from '../Signin/Signin';
import style from './Page.module.css'



function MainPage() {
  return ( 
    <>
    <div className={style.back}>
    <Signin />
    </div>
    </>
   );
}

export default MainPage;
