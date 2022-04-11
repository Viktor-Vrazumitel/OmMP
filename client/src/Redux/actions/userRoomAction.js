import { CREATE_ROOM, IN_USER_ROOM, OUT_USER_ROOM } from "../type/type";

export const createRoomAction = (room) => {
    return {
      type: CREATE_ROOM,
      payload: room,
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