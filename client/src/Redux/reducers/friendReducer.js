import { initState } from "../initState";
import {
  ADD_FRIEND,
  DELETE_FRIEND_OUT,
  DELET_FRIEND,
  GET_FRIENDS_USER_BASE,
} from "../type/type";

export const friendReducer = (state = initState, action) => {
  const { type, payload } = action;


  switch (type) {
    case ADD_FRIEND:
      return [...state, payload];
    case GET_FRIENDS_USER_BASE:
      return payload;

    case DELETE_FRIEND_OUT:
      return []
      case DELET_FRIEND:
        
      return state.filter(el => el.id !== +payload)
    default:
      return state;
  }
};
