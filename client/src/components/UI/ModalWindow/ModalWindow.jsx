import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { findBaseUser } from "../../../Redux/thunk/userThunkServer";
import MyInput from "../Input/Input";

function ModalWindow() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  function findUser(input) {
    dispatch(findBaseUser(input))
  }
console.log(input);
  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <MyInput input={input} setInput={setInput}/>
      </div>
      <div className="modal-footer">
        <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>findUser(input)}>
          Agree
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
