import { initState } from "../initState";
import { ADD_ROOM, UPDATE_ROOM } from "../type/type";

export const roomReducer = (state = initState, action)=>{

    const {type,payload} = action

    switch (type) {
        case ADD_ROOM:
           return payload
           case UPDATE_ROOM:
           return [...state,payload]
    
        default:
            return state;
    }
}
