import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearSearchAction, searchAction, searchAction_S } from "../../Redux/actions/searchAction";
import MyInput from "../UI/Input/Input";
import style from './Navbar.module.css'




function MyNavbar() {
const user = useSelector(state => state.user)
  const navigate = useNavigate()
const [input,setInput] = useState('')
const dispatch = useDispatch()

useEffect(()=>{
  if(input){
    dispatch(searchAction_S(input))
  }else {
    dispatch(clearSearchAction())
  }

},[input,dispatch])
  return ( 
    
    <div className={style.navLink}>
      <MyInput input={input} setInput={setInput} holder='Найти комнату'/>
      <div className={style.blockLink}>
        {user ? <span className={style.linkOut} onClick={()=>navigate('/auth/signout')}>Выход</span> : <><span className={style.link} onClick={()=>navigate('/auth/signUp')}>Регистрация</span>
        <span className={style.linkIn} onClick={()=>navigate('/auth/signin')}>Вход</span></> }
     </div>

    </div>

   );
}

export default MyNavbar;
