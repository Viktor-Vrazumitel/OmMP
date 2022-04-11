import { combineReducers } from "redux";
import createUserReducer from "./createUserReducer";
import { friendReducer } from "./friendReducer";
import loaderReducer from "./loaderReducer";
import { roomReducer } from "./roomReducer";
import { userRoomReducer } from "./userRoomReducer";


export const rootReducer = combineReducers({
    rooms: roomReducer,
    myFriend: friendReducer,
    userRoom: userRoomReducer,
    user: createUserReducer,
    loader: loaderReducer,
})
