import { combineReducers } from "redux";
import { roomReducer } from "./roomReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    rooms: roomReducer,
    friend: userReducer
})