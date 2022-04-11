import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyInput from "../UI/Input/Input";
import style from './Navbar.module.css'




function MyNavbar() {
const user = useSelector(state => state.user)
  const navigate = useNavigate()

  return ( 
    
    <div className={style.navLink}>
      <MyInput />
      <div className={style.blockLink}>
        {user ? <span className={style.linkOut} onClick={()=>navigate('/auth/signout')}>Выход</span> : <><span className={style.link} onClick={()=>navigate('/auth/signUp')}>Регистрация</span>
        <span className={style.linkIn} onClick={()=>navigate('/auth/signin')}>Вход</span></> }
     </div>

    </div>

   );
}

export default MyNavbar;
