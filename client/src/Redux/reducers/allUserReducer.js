import { SET_ALL_USER } from "../type/userTypes";

export const allUserReducer = (state =[], action)=>{
const {type, payload} = action
switch (type) {
    case SET_ALL_USER:
        return payload

    default:
        return state
} 
}
