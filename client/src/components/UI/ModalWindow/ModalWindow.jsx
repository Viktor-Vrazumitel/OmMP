import React, { useState } from "react";
import MyInput from "../Input/Input";



function ModalWindow({funcHandler}) {
  const [input, setInput] = useState('');
  

  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <MyInput input={input} setInput={setInput}/>
      </div>
      <div className="modal-footer">
        <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>funcHandler(input)}>
          Добавить
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
