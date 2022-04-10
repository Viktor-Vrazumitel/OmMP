import { ADD_ROOM, CREATE_ROOM, IN_USER_ROOM, OUT_USER_ROOM } from "../type/type";

export const addRoom = (id) => {
  return {
    type: ADD_ROOM,
    payload: id,
  };
};



