import { useState } from "react";
import style from "./Menu.module.css";
import M from "materialize-css";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useDispatch } from "react-redux";
import { createBaseRoom } from "../../../Redux/thunk/userThunkServer";
import MyInput from "../Input/Input";

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems,{dismissible:false});
})


function Menu() {
  M.AutoInit();
  
  const [input, setInput] = useState('');
  const [stat, setStat] = useState(false);
  const dispatch = useDispatch()

  function createRoomHandler(input) {
    dispatch(createBaseRoom(input))
    setStat(prev=> !prev)
  }



  return (
    <>
      <div className={style.menu}>
        {stat ? <button>my room</button> : <button data-target="modal2" className="btn modal-trigger" >create room</button>}
        <div id="modal2" className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <MyInput input={input} setInput={setInput}/>
      </div>
      <div className="modal-footer">
        <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>createRoomHandler(input)}>
          Добавить
        </button>
      </div>
    </div>
      </div>
    </>
  );
}

export default Menu;
