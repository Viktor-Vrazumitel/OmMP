import MainPage from '../Page/Page';
import MyInput from '../UI/Input/Input';
import Menu from '../UI/Menu/Menu';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import style from './Layout.module.css'
import M from 'materialize-css';
import FriendList from '../FriendList/FriendList';
import { Route, Routes } from 'react-router-dom';
import Signin from '../Signin/Signin';
import { useDispatch } from 'react-redux';
import { findBaseUser } from '../../Redux/thunk/userThunkServer';
import MyRoom from '../MyRoom/MyRoom';
import SignIn from '../Forms/SignIn/SignIn';
import SignUp from '../Forms/SignUp/SignUp'
import SignOut from '../Forms/SignOut/SignOut';
import PrivateRoute from '../PrivateRouter/PrivateRouter';
function modal(){
  const elems = document.querySelectorAll('.modal');
  console.log(elems);
  const instances = M.Modal.init(elems);
}

function Layout() {
  M.AutoInit();
  const dispatch = useDispatch()


  function findUser(input) {
    dispatch(findBaseUser(input))
  }

  

  
  
   

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
        <button className={style.headset}><i className="material-icons left">headset</i></button>
          </div>
          <div>
          <button className={style.headset}><i className="material-icons left">volume_off</i></button>


          </div>
          <div>
          </div>
          <button className={style.headset}><i className="material-icons left">settings</i></button>

     </div>
   </div>
    

    <Routes>
       <Route path="/auth/signin" element={<SignIn />} />
       <Route path="/auth/signup" element={<SignUp />} />
       <Route path='/signin' element={<Signin />}/>
       <Route path='/' element={<MainPage />}/>
       <Route path='/room' element={<MyRoom />}/>
       <Route path="/auth/signout" element={<PrivateRoute><SignOut /></PrivateRoute>} />


     </Routes>

    <div className={style.right}>
      <FriendList/>
      {/* <Friend />
      <Friend />
      <Friend />
      <Friend /> */}
      
      <div className={style.btnAdd}>
      <a className="btn-floating btn-large waves-effect waves-light green modal-trigger" href='#modal1'  onClick={modal} ><i className="material-icons">add</i></a>
      
      <ModalWindow funcHandler={findUser}/>
      </div>
    </div>


    </div>

    
   );
}

export default Layout;
