import { ADD_ROOM, CREATE_ROOM } from "../type/type";

export const addRoom = (id) => {
  return {
    type: ADD_ROOM,
    payload: id,
  };
};

export const createRoomAction = (room) => {
  return {
    type: CREATE_ROOM,
    payload: room,
  };
};


