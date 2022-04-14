import { CLEAR_SEARCH, FIND_ROOM } from "../type/type"
import { SEARCH_ROOM_S } from "../type/typeSaga"

export const searchAction = (room) =>{
    return {
        type: FIND_ROOM,
        payload: room
    }
}

export const searchAction_S = (value) =>{
    return {
        type: SEARCH_ROOM_S,
        payload: value
    }
}

export const clearSearchAction = () =>{
    return {
        type:CLEAR_SEARCH,
    }
}

