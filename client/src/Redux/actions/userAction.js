import { ADD_FRIEND} from "../type/type"

export const addFriendAction = (user) =>{
    return{
        type: ADD_FRIEND,
        payload: user
    }
}

// export const findFriendAction = (user)=>{
//     return{
//         type: FIND_FRIEND,
//         payload: user
//     }
// }
