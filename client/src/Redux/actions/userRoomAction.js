import { CREATE_ROOM, DELETE_USER_ROOM, IN_USER_ROOM, OUT_USER_ROOM } from "../type/type";

export const createRoomAction = (room,id) => {
    return {
      type: CREATE_ROOM,
      payload: [room,id]
    };
  };
  
  export const outUserRoomAction = ()=>{
    return {
      type: OUT_USER_ROOM,
    }
  }
  
  export const inUserRoomAction = (room)=>{
    return{
      type: IN_USER_ROOM,
      payload: room
    }
  }

  export const deleteUserRoom = (id)=>{
    return {
      type: DELETE_USER_ROOM,
      payload: id
    }
  }