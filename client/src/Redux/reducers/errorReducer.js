import { ERROR_INER } from "../type/type";

export const errorReducer = (state = '', action)=>{
    const {type,payload} = action
    switch (type) {
        case ERROR_INER:
            return payload
    
        default:
            return state
    }
}