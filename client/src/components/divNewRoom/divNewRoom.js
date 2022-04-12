import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delRoomInAll } from "../../Redux/actions/roomAction";
import { deleteUserRoom } from "../../Redux/actions/userRoomAction";
import { deleteBaseRoomUser } from "../../Redux/thunk/userThunkServer";
import style from "./divNewRoom.module.css";

function DivNewRoom({ title, id }) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  function inHomeHandler() {
    navigate(`/room/${id}`);
  }

  function deletRoomHandler(id){
dispatch(deleteBaseRoomUser(id))
dispatch(delRoomInAll(id))
  }

  return (
    <>
      <div className={style.btnBox}>
        <button className={style.btn} onClick={()=>deletRoomHandler(id)}></button>
      </div>
      <div className={style.divRoom} onClick={inHomeHandler}>
        {title}
      </div>
    </>
  );

}

export default DivNewRoom;
