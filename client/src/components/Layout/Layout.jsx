import MainPage from '../Page/Page';
import Friend from '../UI/FriendIcon/FriendIcon';
import MyInput from '../UI/Input/Input';
import Input from '../UI/Input/Input';
import Menu from '../UI/Menu/Menu';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import style from './Layout.module.css'
import M from 'materialize-css';
import FriendList from '../FriendList/FriendList';
import { Route, Routes } from 'react-router-dom';
import Signin from '../Signin/Signin';
import MyRoom from '../MyRoom/MyRoom';


function modal(){
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems);
}

function Layout() {
  M.AutoInit();

  

  
  
   

  return ( 
    <div className={style.bars}>
      
    <div className={style.left}>
     <div className={style.logo}>
       Logo
     </div>
    <div>
      <MyInput />
    </div>
    <div className={style.menu}>
      <Menu />
    </div>
     <div className={style.btnBlock}>
        <div >
        <a className=" btn-large"><i className="material-icons left">headset</i></a>
          </div>
          <div>
        <a className=" btn-large"><i className="material-icons left">volume_off</i></a>

          </div>
          <div>
          </div>
        <a className=" btn-large"><i className="material-icons left">settings</i></a>
     </div>
   </div>
    

    <Routes>
       <Route path='/signin' element={<Signin />}/>
       <Route path='/' element={<MainPage />}/>
       <Route path='/room' element={<MyRoom />}/>


     </Routes>

    <div className={style.right}>
      <FriendList/>
      {/* <Friend />
      <Friend />
      <Friend />
      <Friend /> */}
      
      <div className={style.btnAdd}>
      <a className="btn-floating btn-large waves-effect waves-light green modal-trigger" href='#modal1'  onClick={modal} ><i className="material-icons">add</i></a>
      
      <ModalWindow/>
      </div>
    </div>


    </div>

    
   );
}

export default Layout;
