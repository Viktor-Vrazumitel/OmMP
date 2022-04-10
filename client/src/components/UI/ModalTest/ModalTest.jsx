import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBaseRoom } from "../../../Redux/thunk/userThunkServer";
import MyInput from "../Input/Input";



function ModalTest({funcHandler,setStat}) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch()
  
  const user = useSelector(state => state.user)
  
  function createRoomHandler(input) {
    dispatch(createBaseRoom(input,user.id))
    setStat(prev=> !prev)
  }
  

  return (
    <div id="modal2" className="modal" >
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
  );
}

export default ModalTest;
