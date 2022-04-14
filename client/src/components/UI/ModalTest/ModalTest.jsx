import React, { useState } from "react";
import MyInput from "../Input/Input";
import style from "./ModalTest.module.css";

function ModalTest({ funcHandler, userIn }) {
  const [input, setInput] = useState("");
  return (
    <div id="modal2" className={`modal ${style.body}`}>
      <div className="modal-content">
        <h4>Создать комнату</h4>
        <MyInput input={input} setInput={setInput} holder='Название комнаты'/>
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
