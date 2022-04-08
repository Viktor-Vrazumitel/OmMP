import { ADD_FRIEND, DELETE_USER, SET_USER} from "../type/type"

export const addFriendAction = (user) =>{
    return{
        type: ADD_FRIEND,
        payload: user
    }
}
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
export const deleteUser = () => ({
  type: DELETE_USER,
});
