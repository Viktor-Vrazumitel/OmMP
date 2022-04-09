import { ADD_FRIEND, DELETE_FRIEND_OUT } from "../type/type";

export const friendReducer = (state = [], action) => {
    const { type, payload } = action;
   
    switch (type) {
      case ADD_FRIEND:
          
           if(state.find(el => el.id === payload.id)){
               return state
           }
           return [...state,payload]
  
           case DELETE_FRIEND_OUT:
           return null
      default:
        return state
    }
  };