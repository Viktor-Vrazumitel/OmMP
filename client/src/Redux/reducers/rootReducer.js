import { combineReducers } from "redux";
import { roomReducer } from "./roomReducer";
import { userReducer } from "./userReducer";
import loaderReducer from './loaderReducer';

export const rootReducer = combineReducers({
    rooms: roomReducer,
    friend: userReducer,
    user: userReducer,
    loader: loaderReducer,
})
