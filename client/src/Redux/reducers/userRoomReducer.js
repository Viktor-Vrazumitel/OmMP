import { initState } from "../initState";
import { CREATE_ROOM, IN_USER_ROOM, OUT_USER_ROOM } from "../type/type";

export const userRoomReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ROOM:
      const [room, user] = payload;
      console.log(room);
      return room.filter((el) => el.user_id === user.id);
    case OUT_USER_ROOM:
      return [];
    case IN_USER_ROOM:
      if (payload === null) {
        return [];
      }
      return [payload]

    default:
      return state;
  }
};
