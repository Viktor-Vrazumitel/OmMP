import { initState } from "../initState";
import {
  ADD_FRIEND,
  DELETE_FRIEND_OUT,
  GET_FRIENDS_USER_BASE,
} from "../type/type";

export const friendReducer = (state = initState, action) => {
  const { type, payload } = action;
  console.log('friend',payload);

  switch (type) {
    case ADD_FRIEND:
      return [...state, payload];
    case GET_FRIENDS_USER_BASE:
      return payload;

    case DELETE_FRIEND_OUT:
      return state
    default:
      return state;
  }
};
