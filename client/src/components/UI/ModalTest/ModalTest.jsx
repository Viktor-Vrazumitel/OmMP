import React, { useState } from "react";
import MyInput from "../Input/Input";



function ModalTest({funcHandler}) {
  const [input, setInput] = useState('');
  

  return (
    <div id="modal2" className="modal" style={{position:'absolute',zIndex:'0'}}>
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

export default ModalTest;
