import { initState } from "../initState";
import { CREATE_ROOM, IN_USER_ROOM, OUT_USER_ROOM } from "../type/type";

export const userRoomReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ROOM:
      return [payload]
    case OUT_USER_ROOM:
      return null
      case IN_USER_ROOM:
      return payload

    default:
      return state;
  }
};
