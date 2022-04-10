import { useState } from "react";
import style from "./Menu.module.css";
import M from "materialize-css";
import ModalTest from "../ModalTest/ModalTest";
import { useSelector } from "react-redux";





function Menu() {
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
     M.Modal.init(elems[0]);
    
  })
  M.AutoInit();
  



  const [stat, setStat] = useState(false);
  const userRoom = useSelector(state=>state.userRoom)


  



  return (
    <>
      <div className={style.menu}>
        {userRoom  ? <button >{userRoom.title}</button> : <button type='button' data-target="modal2" className="btn modal-trigger" >create room</button>}
       <ModalTest  setStat={setStat}/>
       
      </div>
    </>
  );
}

export default Menu;
