import { initState } from "../initState";
import { ADD_ROOM } from "../type/type";

export const roomReducer = (state = initState, action)=>{

    const {type,payload} = action

    switch (type) {
        case ADD_ROOM:
           return payload
    
        default:
            return state;
    }
}
