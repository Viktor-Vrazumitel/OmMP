import React, { useState } from "react";
import MyInput from "../Input/Input";
import style from './ModalWindow.module.css'


function ModalWindow({funcHandler}) {
  const [input, setInput] = useState('');
  

  return (
    <div id="modal1" className={`modal ${style.body}`}>
      <div className="modal-content">
        <h4>Добавить в друзья</h4>
        <MyInput input={input} setInput={setInput} holder='Найти '/>
      </div>
      <div className={`modal-footer ${style.modalFooter}`}>
        <button className={`modal-close ${style.btnAdd}`} onClick={()=>funcHandler(input)}>
          Добавить
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
