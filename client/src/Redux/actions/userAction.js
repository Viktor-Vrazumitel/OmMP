import { SET_USER} from "../type/type"
import * as endPoints from '../../routConfig/endPoints';
import { disableLoader, enableLoader } from './loaderAction';
import {  outUserRoomAction } from "./userRoomAction";
import {  inUserBaseRoom } from "../thunk/userThunkServer";
import { deleteUser, outDeletFriend } from "./freindAction";
import { findBaseFriendUser } from "../thunk/friendThunk";
import { SET_ALL_USER } from "../type/userTypes";





export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setAllUserBase = (users) => {
  return {
    type: SET_ALL_USER,
    payload: users
  }
}






export const getUserFromServer = (id) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.getUser(id), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const currentUser = await response.json();
    dispatch(setUser(currentUser));
   
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
    navigate('/auth/signup');
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
    dispatch(findBaseFriendUser(user))
    navigate(from);
  } else {
    navigate('/auth/signin');
  }
  dispatch(disableLoader());
};



export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(deleteUser());
    dispatch(outDeletFriend())
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


