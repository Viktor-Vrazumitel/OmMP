import { ADD_FRIEND, DELETE_FRIEND_OUT, DELETE_USER, SET_USER} from "../type/type"
import * as endPoints from '../../routConfig/endPoints';
import { disableLoader, enableLoader } from './loaderAction';
import { addRoom, outUserRoomAction } from "./userRoomAction";
import { inUserBaseRoom } from "../thunk/userThunkServer";


export const addFriendAction = (user) =>{
    
    return{
        type: ADD_FRIEND,
        payload: user
    }
}

export const deleteListFriendSingout =()=>{
  return{
    type: DELETE_FRIEND_OUT
  }
}
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const getUserFromServer = (id) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.getUser(id), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const currentUser = await response.json();
    dispatch(setUser(currentUser));
    // dispatch(addRoom)
  }
  dispatch(disableLoader());
};

export const signUp = (payload, navigate) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.signUp(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    
    navigate('/');
  } else {
    navigate('/signup');
  }
  dispatch(disableLoader());
};

export const signIn = (payload, navigate, from) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    dispatch(inUserBaseRoom(user))
    navigate(from);
  } else {
    navigate('/auth/signin');
  }
  dispatch(disableLoader());
};

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(deleteUser());
    dispatch(deleteListFriendSingout())
    dispatch(outUserRoomAction())
  }
};

export const checkAuth = () => async (dispatch) => {
  const response = await fetch(endPoints.checkAuth(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
  }
};

// export const editUser = (user, navigate) => async (dispatch, getState) => {
//   const {
//     user: { id: userId },
//   } = getState();
//   dispatch(enableLoader());
//   const response = await fetch(endPoints.editUser(userId), {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//     body: JSON.stringify(user),
//   });
//   if (response.status === 200) {
//     const userData = await response.json();
//     dispatch(setUser(userData));
//     navigate(`/users/${userData.id}`);
//   } else {
//     navigate.replace('/');
//   }
//   dispatch(disableLoader());
// };
// export const findFriendAction = (user)=>{
//     return{
//         type: FIND_FRIEND,
//         payload: user
//     }
// }
