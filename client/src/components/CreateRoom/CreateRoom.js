import React from "react";
import ModalTest from "../UI/ModalTest/ModalTest";
import style from "./CreateRoom.module.css";

function CreateRoom({ modal, createRoomHandler, userIn }) {
  return (
    <>
      <div>
        <span className={`material-icons ${style.fontRoomLogo}`}>
          add_circle_outline
        </span>
        <ModalTest funcHandler={createRoomHandler} userIn={userIn?.id} />
        <span
          className={`modal-trigger ${style.fontRoom}`}
          href="#modal2"
          onClick={() => modal("#modal2")}
        >
          Создать комнату
        </span>
      </div>
    </>
  );
}

export default CreateRoom;
