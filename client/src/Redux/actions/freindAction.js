import { ADD_FRIEND, DELETE_FRIEND_OUT, DELETE_USER, GET_FRIENDS_USER_BASE } from "../type/type"

export const addFriendAction = (user) =>{
    
    return{
        type: ADD_FRIEND,
        payload: user
    }
}

export const deleteUser = () => ({
    type: DELETE_USER,
  });

  export const getFriendsInUser = (users) =>{
      return{
          type: GET_FRIENDS_USER_BASE,
          payload: users
      }
  }

  export const outDeletFriend = () => {
      return{
          type: DELETE_FRIEND_OUT
      }
  }