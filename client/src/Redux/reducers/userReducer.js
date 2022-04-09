import { initState } from "../initState";
import { ADD_FRIEND } from "../type/type";

export const userReducer = (state =initState, action) => {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case ADD_FRIEND:
      return [...state, payload];

    default:
      return state
  }
};
