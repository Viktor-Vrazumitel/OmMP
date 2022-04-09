import { combineReducers } from "redux";
import createUserReducer from "./createUserReducer";
import loaderReducer from "./loaderReducer";
import { roomReducer } from "./roomReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    rooms: roomReducer,
    friend: userReducer,
    user: createUserReducer,
    loader: loaderReducer,
})
