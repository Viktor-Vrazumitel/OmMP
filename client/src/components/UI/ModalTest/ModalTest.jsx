import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBaseRoom } from "../../../Redux/thunk/userThunkServer";
import MyInput from "../Input/Input";
import style from "./ModalTest.module.css";

function ModalTest({ funcHandler, userIn }) {
  const [input, setInput] = useState("");
  return (
    <div id="modal2" className={`modal ${style.body}`}>
      <div className="modal-content">
        <h4>Добавить в друзья</h4>
        <MyInput input={input} setInput={setInput} />
      </div>
      <div className={`modal-footer ${style.modalFooter}`}>
        <button
          className={`modal-close ${style.btnAdd}`}
          onClick={() => funcHandler(input, userIn)}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}

export default ModalTest;
