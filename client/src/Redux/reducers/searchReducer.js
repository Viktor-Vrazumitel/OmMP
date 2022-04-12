import { initState } from "../initState";
import { CLEAR_SEARCH, FIND_ROOM } from "../type/type";

const searchReducer = (state = [], action)=>{
    const {type, payload} = action

    switch (type) {
        case FIND_ROOM:
            return payload
            case CLEAR_SEARCH:
            return []
    
        default:
           return state
    }
}

export default searchReducer