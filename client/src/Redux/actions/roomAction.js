import { ADD_ROOM } from "../type/type";

export const addRoom = (id) => {
  return {
    type: ADD_ROOM,
    payload: id,
  };
};


