import MainPage from '../Page/Page';
import Friend from '../UI/FriendIcon/FriendIcon';
import MyInput from '../UI/Input/Input';
import Input from '../UI/Input/Input';
import Menu from '../UI/Menu/Menu';
import style from './Layout.module.css'


function Layout() {
  return ( 
    <div className={style.bars}>
      
    <div className={style.left}>
     <div className={style.logo}>
       Logo
     </div>
    <div>
      <MyInput />
    </div>
    <div>
      <Menu />
    </div>
     <div className={style.btnBlock}>
        <div >
        <a className="waves-effect waves-light btn-large"><i className="material-icons left">headset</i></a>
          </div>
          <div>
        <a className="waves-effect waves-light btn-large"><i className="material-icons left">volume_off</i></a>

          </div>
          <div>
          </div>
        <a className="waves-effect waves-light btn-large"><i className="material-icons left">settings</i></a>
     </div>
   </div>
    
        <MainPage />

    <div className={style.right}>
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      
      <div className={style.btnAdd}>

      <a class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">add</i></a>
      </div>
    </div>


    </div>

    
   );
}

export default Layout;
