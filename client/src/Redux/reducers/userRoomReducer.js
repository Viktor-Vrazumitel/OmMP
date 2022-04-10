import { initState } from "../initState";
import { CREATE_ROOM } from "../type/type";

export const userRoomReducer = (state = initState, action)=>{

    const {type,payload} = action

    switch (type) {
        case CREATE_ROOM:
           return [payload]
    
        default:
            return state;
    }
}